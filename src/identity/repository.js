import * as utils from './utils';
import Ajv from 'ajv';

export const SELFKEY_REPOSITORY = {
	repository: 'http://platform.selfkey.org/repository.json',
	resolved: 'http://platform.selfkey.org/resolved-repository.json',
	ui: true
};

export const SELFKEY_REPOSITORY_DEV = {
	repository: 'http://platform.selfkey.org/dev-repository.json',
	resolved: 'http://platform.selfkey.org/resolved-dev-repository.json',
	ui: true,
	transformSchemaUrl: url => url.replace('/schema/', '/dev-schema/')
};
/**
 * @classdesc Repository Class allows to load identity attribute repository and validate schemas
 *
 * Part of `identity` namespace
 *
 * @class Repository
 */
export class Repository {
	/**
	 * Creates an instance of Repository.
	 * @param {object} [config={}]
	 */
	constructor(config = {}) {
		this.config = config;
		this.identityAttributeSchemaId = null;
		this.identityAttributeSchema = null;
		this.jsonSchemas = {};
		this.uiSchemas = {};
	}

	/**
	 * Creates a repository initialized with selfkey data
	 *
	 * @static
	 * @param {object} [options={}]
	 * @returns {Repository}
	 */
	static async createSelfkeyRepo(options = {}) {
		let selfkeyRepo = SELFKEY_REPOSITORY;
		if (options.env === 'development') {
			selfkeyRepo = SELFKEY_REPOSITORY_DEV;
		}
		const repo = await this.fromConfig(selfkeyRepo);
		return repo;
	}

	/**
	 * Creates and preloads a Repository from a config object
	 *
	 * @static
	 * @param {object} config
	 * @param {boolean} [ui=false]
	 * @returns {Repository}
	 */
	static async fromConfig(config, ui = false) {
		if (typeof config === 'string') {
			config = { repository: config };
		}
		const repo = new Repository(config);
		await repo.resolveAll();
		return repo;
	}

	/**
	 * Creates and preloads a Repository based on attribute schema id
	 *
	 * @static
	 * @param {string} schemaId
	 * @param {boolean} [ui=false]
	 * @returns {Repository}
	 */
	static async fromSchemaId(schemaId, ui = false) {
		let schema;
		try {
			schema = await utils.fetchJson(schemaId);
		} catch (error) {
			throw new Error(`could not resolve schema ${schemaId}`);
		}
		if (!schema || !schema.identityAttributeRepository) {
			throw new Error('cannot derive repository from schema');
		}
		return this.fromConfig(schema.identityAttributeRepository, ui);
	}

	/**
	 * Resolve all repository data
	 *
	 */
	async resolveAll() {
		let resolvedRepository;
		if (this.config.resolved) {
			resolvedRepository = await utils.fetchJson(this.config.resolved);
		} else {
			resolvedRepository = await utils.fetchJson(this.config.repository);
			resolvedRepository.identityAttributeSchema = await this.resolveJsonSchema(
				resolvedRepository.identityAttributeSchemaId,
				this.config
			);

			const jsonSchemas = await Promise.all(
				resolvedRepository.identityAttributes.map(attr =>
					this.resolveJsonSchema(attr, this.config)
				)
			);
			resolvedRepository.jsonSchemas = jsonSchemas.reduce((acc, curr) => {
				if (!curr) {
					return acc;
				}
				acc[curr.url] = curr;
				return acc;
			}, {});
			if (this.config.ui) {
				const uiSchema = await Promise.all(
					resolvedRepository.identityAttributes.map(attr =>
						this.resolveUiSchema(attr, this.config)
					)
				);
				resolvedRepository.uiSchemas = uiSchema.reduce((acc, curr) => {
					if (!curr) {
						return acc;
					}
					acc[curr.url] = curr;
					return acc;
				}, {});
			}
		}
		this.identityAttributeSchemaId = resolvedRepository.identityAttributeSchemaId;
		this.identityAttributeSchema = resolvedRepository.identityAttributeSchema;
		this.identityAttributes = resolvedRepository.identityAttributes;
		this.jsonSchemas = resolvedRepository.jsonSchemas;
		this.uiSchemas = resolvedRepository.uiSchemas || {};
	}

	/**
	 * Resolve one JSON schema
	 *
	 * @param {object|string} schema
	 * @param {object} [config={}]
	 * @returns {object}
	 */
	async resolveJsonSchema(schema, config = {}) {
		config = { ...this.config, ...config };
		if (typeof schema === 'string') {
			schema = { json: schema };
		}
		let url = schema.json;
		if (!url) {
			return null;
		}
		if (config.transformSchemaUrl) {
			url = config.transformSchemaUrl(url);
		}
		const fetched = await utils.fetchJson(url);
		const dereferenced = await utils.dereferenceSchema(fetched, this.config);
		const resolved = { url: schema.json, schema: fetched, dereferenced };
		this.jsonSchemas[schema.json] = resolved;
		return resolved;
	}

	/**
	 * Resolve one ui schema
	 *
	 * @param {object|string} schema
	 * @param {object} [config={}]
	 * @returns {object}
	 */
	async resolveUiSchema(schema, config = {}) {
		config = { ...this.config, ...config };
		if (typeof schema === 'string') {
			schema = { ui: schema };
		}
		let url = schema.ui;
		if (!url) {
			return null;
		}
		if (config.transformSchemaUrl) {
			url = config.transformSchemaUrl(url);
		}
		const fetched = await utils.fetchJson(url);

		const resolved = { url: schema.ui, schema: fetched };
		this.uiSchemas[schema.ui] = resolved;
		return resolved;
	}

	/**
	 * Creates an Ajv validator for the repository data
	 *
	 * @returns Ajv instance
	 */
	getValidator() {
		const ajv = new Ajv({ validateSchema: false, loadSchema: utils.fetchJson });
		ajv.addFormat('file', () => {});
		if (this.identityAttributeSchema) {
			ajv.addMetaSchema(this.identityAttributeSchema);
		}
		Object.keys(this.jsonSchemas).forEach(url =>
			ajv.addSchema(this.jsonSchemas[url].dereferenced)
		);
		return ajv;
	}

	/**
	 * Given schemaId and data, validates the data based on relevant schema
	 *
	 * @param {string} schemaId
	 * @param {object} data
	 * @returns {object} {valid:boolean, errors: array}
	 */
	validateData(schemaId, data) {
		if (!this.jsonSchemas[schemaId]) {
			return {
				valid: false,
				errors: ['No schema found for ' + schemaId]
			};
		}
		const validator = this.getValidator();
		const valid = validator.validate(schemaId, data);
		const errors = validator.errors;
		return { valid, errors };
	}
}

export default Repository;
