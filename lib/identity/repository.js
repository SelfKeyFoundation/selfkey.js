"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Repository = exports.SELFKEY_REPOSITORY_DEV = exports.SELFKEY_REPOSITORY = void 0;

var utils = _interopRequireWildcard(require("./utils"));

var _ajv = _interopRequireDefault(require("ajv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const SELFKEY_REPOSITORY = {
  repository: 'http://platform.selfkey.org/repository.json',
  resolved: 'http://platform.selfkey.org/resolved-repository.json',
  ui: true
};
exports.SELFKEY_REPOSITORY = SELFKEY_REPOSITORY;
const SELFKEY_REPOSITORY_DEV = {
  repository: 'http://platform.selfkey.org/dev-repository.json',
  resolved: 'http://platform.selfkey.org/resolved-dev-repository.json',
  ui: true,
  transformSchemaUrl: url => url.replace('/schema/', '/dev-schema/')
};
exports.SELFKEY_REPOSITORY_DEV = SELFKEY_REPOSITORY_DEV;

class Repository {
  constructor(config = {}) {
    this.config = config;
    this.identityAttributeSchemaId = null;
    this.identityAttributeSchema = null;
    this.jsonSchemas = {};
    this.uiSchemas = {};
  }

  static async createSelfkeyRepo(options = {}) {
    let selfkeyRepo = SELFKEY_REPOSITORY;

    if (options.env === 'development') {
      selfkeyRepo = SELFKEY_REPOSITORY_DEV;
    }

    const repo = await this.fromConfig(selfkeyRepo);
    return repo;
  }

  static async fromConfig(config, ui = false) {
    if (typeof config === 'string') {
      config = {
        repository: config
      };
    }

    const repo = new Repository(config);
    await repo.resolveAll();
    return repo;
  }

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

  async resolveAll() {
    let resolvedRepository;

    if (this.config.resolved) {
      resolvedRepository = await utils.fetchJson(this.config.resolved);
    } else {
      resolvedRepository = await utils.fetchJson(this.config.repository);
      resolvedRepository.identityAttributeSchema = await this.resolveJsonSchema(resolvedRepository.identityAttributeSchemaId, this.config);
      const jsonSchemas = await Promise.all(resolvedRepository.identityAttributes.map(attr => this.resolveJsonSchema(attr, this.config)));
      resolvedRepository.jsonSchemas = jsonSchemas.reduce((acc, curr) => {
        if (!curr) {
          return acc;
        }

        acc[curr.url] = curr;
        return acc;
      }, {});

      if (this.config.ui) {
        const uiSchema = await Promise.all(resolvedRepository.identityAttributes.map(attr => this.resolveUiSchema(attr, this.config)));
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

  async resolveJsonSchema(schema, config = {}) {
    config = { ...this.config,
      ...config
    };

    if (typeof schema === 'string') {
      schema = {
        json: schema
      };
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
    const resolved = {
      url: schema.json,
      schema: fetched,
      dereferenced
    };
    this.jsonSchemas[schema.json] = resolved;
    return resolved;
  }

  async resolveUiSchema(schema, config = {}) {
    config = { ...this.config,
      ...config
    };

    if (typeof schema === 'string') {
      schema = {
        ui: schema
      };
    }

    let url = schema.ui;

    if (!url) {
      return null;
    }

    if (config.transformSchemaUrl) {
      url = config.transformSchemaUrl(url);
    }

    const fetched = await utils.fetchJson(url);
    const resolved = {
      url: schema.ui,
      schema: fetched
    };
    this.uiSchemas[schema.ui] = resolved;
    return resolved;
  }

  getValidator() {
    const ajv = new _ajv.default({
      validateSchema: false,
      loadSchema: utils.fetchJson
    });
    ajv.addFormat('file', () => {});

    if (this.identityAttributeSchema) {
      ajv.addMetaSchema(this.identityAttributeSchema);
    }

    Object.keys(this.jsonSchemas).forEach(url => ajv.addSchema(this.jsonSchemas[url].dereferenced));
    return ajv;
  }

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
    return {
      valid,
      errors
    };
  }

}

exports.Repository = Repository;
var _default = Repository;
exports.default = _default;