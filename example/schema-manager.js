const request = require('request-promise-native');
const Ajv = require('ajv');

const SCHEMA_CACHE_TTL = 1 * 60 * 60 * 1000; // 1 hour

class SchemaManager {
	constructor() {
		// loaded schemas cache
		this.schemas = {};
		this.validator = this.initializeValidator();
	}

	initializeValidator() {
		const validator = new Ajv({ loadSchema: this.loadRemoteSchema, allErrors: true });
		// custom file format should be supported
		validator.addFormat('file', () => {});
		return validator;
	}

	validateAttributes(attributes) {
		return attributes.reduce((errors, attribute) => {
			// if attribute has no requirement, it was not requested for validation
			if (!attribute.requirement) {
				errors.push({
					attribute,
					code: 'attribute_not_requested',
					message: 'This attribute was not requested'
				});
				return errors;
			}

			let attributeId = attribute.requirement.id || attribute.requirement.schemaId;

			// if attribute is required but no data provided, it should be rejected
			if (!attribute.data && attribute.requirement.required) {
				errors.push({
					attribute,
					code: 'attribute_required',
					message: `Attribute ${attributeId} is required`
				});
				return errors;
			}

			const schema = this.schemas[attribute.requirement.schemaId];

			// if schema was not added or could not be added with addSchemas
			if (!schema) {
				errors.push({
					attribute,
					code: 'no_schema',
					message: `Attribute ${attributeId} cannot be validated, no schema`
				});
				return errors;
			}

			const { validate } = schema;
			// validate the provided attribute data against the schema
			if (!validate(attribute.data)) {
				errors.push({
					attribute,
					code: 'validation_failed',
					message: `Data for attribute ${attributeId} is invalid`,
					validationErrors: validate.errors
				});
				return errors;
			}

			return errors;
		}, []);
	}

	async addSchemas(schemaIds) {
		let schemas = await Promise.all(
			schemaIds.map(async schemaId => {
				let schema = null;
				try {
					schema = this.resolveSchema(schemaId);
				} catch (error) {
					console.warn('Error resolving schema', error);
				}

				return schema;
			})
		);

		// filter out schemas that were not resolved (null)
		schemas = schemas.filter(schema => !!schema);

		schemas.forEach(schema => {
			this.schemas[schema.id] = schema;
		});
		return schemas;
	}

	// return cached schema or load from remote and add to cache
	async resolveSchema(schemaId) {
		let schema = this.schemas[schemaId];

		if (schema && !this.hasSchemaExpired(schema)) {
			return schema;
		}

		schema = await this.fetchSchema(schemaId);
		this.schemas[schemaId] = schema;

		return schema;
	}

	hasSchemaExpired(schema) {
		return schema.fetchedAt + SCHEMA_CACHE_TTL < Date.now();
	}

	// fetches remote schema from uri
	static async loadRemoteSchema(uri) {
		let res = null;
		try {
			res = await request.json(uri);
		} catch (error) {
			console.error('Network error in schema resolution', error);
		}
		if (!res || res.statusCode >= 400) {
			throw new Error(`Could not load schema for ${uri}`);
		}
		return res.body;
	}

	async fetchSchema(schemaId) {
		const schema = await this.loadRemoteSchema(schemaId);
		// Compile the schema to a validate function. Will fetch sub-schemas asynchronously
		const validate = await this.validator.compileAsync(schema);
		return {
			id: schemaId,
			fetchedAt: Date.now(),
			data: schema,
			validate
		};
	}
}

module.exports = SchemaManager;
