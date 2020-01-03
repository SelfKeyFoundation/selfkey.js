import _ from 'lodash';
import rp from 'request-promise-native';
import RefParser from 'json-schema-ref-parser';

export const attributeMapBySchema = (attributes = []) =>
	attributes.reduce((acc, curr) => {
		const { schemaId } = curr;
		const name = _.camelCase(schemaId.match(/\/([a-z-]+).json$/)[1]);
		if (!acc[name]) {
			acc[name] = curr;
			return acc;
		}
		if (!Array.isArray(acc[name])) {
			acc[name] = [acc[name]];
		}
		acc[name].push(curr);
		return acc;
	}, {});

export const resolveAttributeFiles = async (data, fileProcessor) => {
	if (!data) {
		return data;
	}

	if (Array.isArray(data)) {
		return Promise.all(data.map(d => resolveAttributeFiles(d, fileProcessor)));
	}

	if (typeof data !== 'object') {
		return data;
	}

	if (
		{}.hasOwnProperty.call(data, 'mimeType') &&
		{}.hasOwnProperty.call(data, 'size') &&
		{}.hasOwnProperty.call(data, 'content')
	) {
		const file = await fileProcessor(data);
		return file;
	}

	const resolved = await Promise.all(
		Object.keys(data).map(async k => {
			const value = await resolveAttributeFiles(data[k], fileProcessor);
			return { k, value };
		})
	);

	return resolved.reduce((acc, curr) => {
		acc[curr.k] = curr.value;
		return acc;
	}, {});
};

export const denormalizeDocumentsSchema = (typeSchema, value, documents = [], maxDepth = 10) => {
	if (maxDepth < 0) {
		return { value, documents };
	}

	documents = [...documents];
	if (typeSchema.format === 'file') {
		if (!value || typeof value !== 'string') return { value, documents };
		const refIdRegexp = /#ref{(document[0-9]+).id}$/;
		const idRegexp = /\$document-([0-9]+)$/;

		let id = value.match(refIdRegexp);
		if (!id) id = value.match(idRegexp);
		if (id && id.length) {
			id = id[1];
		}
		if (!id) return { value: null, documents };
		const found = documents.filter(doc => doc.id === +id || doc['#id'] === id);
		const filtered = documents.filter(doc => doc.id !== +id && doc['#id'] !== id);

		value = null;

		if (found.length) {
			value = found[0];
			delete value['#id'];
		}

		return { value, documents: filtered };
	}

	if (typeSchema.type === 'object' && typeof value === 'object') {
		if (!typeSchema.properties) return { value, documents };
		return Object.keys(typeSchema.properties).reduce(
			(acc, key) => {
				if (!{}.hasOwnProperty.call(value, key)) {
					return acc;
				}
				const denormalized = denormalizeDocumentsSchema(
					typeSchema.properties[key],
					value[key],
					acc.documents,
					maxDepth - 1
				);
				acc.value[key] = denormalized.value;
				acc.documents = denormalized.documents;
				return acc;
			},
			{ value: {}, documents }
		);
	}

	if (typeSchema.type === 'array' && Array.isArray(value)) {
		return value.reduce(
			(acc, itm) => {
				const normalized = denormalizeDocumentsSchema(
					typeSchema.items,
					itm,
					acc.documents,
					maxDepth - 1
				);
				acc.value.push(normalized.value);
				acc.documents = normalized.documents;
				return acc;
			},
			{ value: [], documents }
		);
	}
	return { value, documents };
};

export const normalizeDocumentsSchema = (typeSchema, value, documents = [], maxDepth = 10) => {
	if (maxDepth < 0) {
		return { value, documents };
	}
	documents = [...documents];
	if (typeSchema.format === 'file') {
		if (!value || typeof value !== 'object' || Object.keys(value).length === 0)
			return { value, documents };
		let id = value.id;

		if (id) {
			documents = documents.filter(doc => doc.id !== id);
			documents.push(value);
			value = `$document-${id}`;
		} else {
			id = documents.length;
			documents.push({ ...value, '#id': `document${id}` });
			value = `$document-#ref{document${id}.id}`;
		}

		return { value, documents };
	}

	if (typeSchema.type === 'object' && typeof value === 'object') {
		if (!typeSchema.properties) return { value, documents };
		return Object.keys(typeSchema.properties).reduce(
			(acc, key) => {
				if (!{}.hasOwnProperty.call(value, key)) {
					return acc;
				}
				const normalized = normalizeDocumentsSchema(
					typeSchema.properties[key],
					value[key],
					acc.documents,
					maxDepth - 1
				);
				acc.value[key] = normalized.value;
				acc.documents = normalized.documents;
				return acc;
			},
			{ value: {}, documents }
		);
	}

	if (typeSchema.type === 'array' && Array.isArray(value)) {
		return value.reduce(
			(acc, itm) => {
				const normalized = normalizeDocumentsSchema(
					typeSchema.items,
					itm,
					acc.documents,
					maxDepth - 1
				);
				acc.value.push(normalized.value);
				acc.documents = normalized.documents;
				return acc;
			},
			{ value: [], documents }
		);
	}

	return { value, documents };
};

export const schemaContainsFile = (schema, maxDepth = 10) => {
	if (maxDepth < 0) {
		return false;
	}
	if (schema.format === 'file') return true;

	if (schema.type === 'object') {
		if (!schema.properties) return false;
		for (const key in schema.properties) {
			if (!{}.hasOwnProperty.call(schema.properties, key)) continue;
			if (schemaContainsFile(schema.properties[key], maxDepth - 1)) return true;
		}
		return false;
	}
	if (schema.type === 'array') {
		return schemaContainsFile(schema.items, maxDepth - 1);
	}
	return false;
};

export const fetchJson = async (url, options = {}) => {
	options = { maxAttempts: 3, attempt: 1, ...options };
	try {
		const resp = await rp.get({
			url,
			json: true
		});
		return resp;
	} catch (error) {
		if (options.maxAttempts && options.attempt <= options.maxAttempts) {
			const resp = await fetchJson(url, { ...options, attempt: options.attempt + 1 });
			return resp;
		}
		throw new Error(`could not fetch json from ${url}`);
	}
};

export const dereferenceSchema = (schema, options) => {
	const resolver = {
		order: 1,
		canRead: /^http/i,
		async read(file) {
			let url = file.url;
			if (options.transformSchemaUrl) {
				url = options.transformSchemaUrl(url);
			}
			return fetchJson(url);
		}
	};
	return RefParser.dereference(schema, { resolve: { remote: resolver } });
};
