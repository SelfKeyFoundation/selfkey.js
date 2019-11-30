import _ from 'lodash';
import { createClient } from './kycc-internal-client';

export const getUserDataForToken = async (token, options = {}) => {
	const { instanceUrl, templateId } = options;

	if (!instanceUrl) {
		throw new Error('no_instance');
	}
	if (!token) {
		throw new Error('no_token');
	}
	if (!templateId) {
		throw new Error('no_template_id');
	}
	const fileProcessor = options.fileProcessor || { stream: false, process: (file, id) => file };

	const client = createClient({
		instanceUrl
	});

	let kyccUser = null;

	try {
		kyccUser = await client.auth.login(token);
	} catch (error) {
		throw new Error('invalid_token');
	}

	if (!kyccUser || !client.auth.validateUserToken(token, kyccUser)) {
		throw new Error('invlid_token');
	}

	const applications = await client.applications.list({ template_id: templateId }, [
		'id',
		'currentStatus'
	]);

	// TODO: filter inapropriate statuses

	if (!applications || !applications.length) {
		throw new Error('invalid_user');
	}

	const application = await client.applications.get(applications[0].id, [
		'id',
		'attributes',
		'currentStatus'
	]);

	const user = {
		id: kyccUser._id
	};

	const attributes = Object.keys(application.attributes).map(id => {
		const { label, optional, schema, valid, value } = application.attributes[id];
		return { id, label, required: !optional, schema, valid, value };
	});

	// TODO: better file resolution using the actual schema
	const resolveFiles = async value => {
		if (!value) {
			return value;
		}
		if (Array.isArray(value)) {
			return Promise.all(value.map(resolveFiles));
		}
		if (typeof value === 'object') {
			if (
				value.hasOwnProperty('mimeType') &&
				value.hasOwnProperty('size') &&
				value.hasOwnProperty('content')
			) {
				const file = client.files.get(value.content, { stream: !!fileProcessor.stream });
				value.content = await fileProcessor.process(file, value.content);
				return value;
			}
			await Promise.all(
				Object.keys(value).map(async k => {
					const newV = await resolveFiles(value[k]);
					value[k] = newV;
					return newV;
				})
			);
			return value;
		}
		return value;
	};

	const resolvedAttributes = await Promise.all(
		attributes.map(async attr => {
			const resolvedValue = await resolveFiles(attr.value);
			return { ...attr, value: resolvedValue };
		})
	);

	user.attributes = resolvedAttributes.reduce((acc, curr) => {
		let attrName = curr.schema;
		if (curr.schema.includes('platform.selfkey.org')) {
			attrName = _.camelCase(curr.schema.match(/\/([a-z-]+).json$/)[1]);
		}
		if (acc[attrName]) {
			if (!Array.isArray(acc[attrName])) {
				acc[attrName] = [acc[attrName]];
			}
			acc[attrName].push(curr);
			return acc;
		}
		acc[attrName] = curr;
		return acc;
	}, {});

	return user;
};
