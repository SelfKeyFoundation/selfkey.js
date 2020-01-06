"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dereferenceSchema = exports.fetchJson = exports.schemaContainsFile = exports.normalizeDocumentsSchema = exports.denormalizeDocumentsSchema = exports.resolveAttributeFiles = exports.attributeMapBySchema = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _requestPromiseNative = _interopRequireDefault(require("request-promise-native"));

var _jsonSchemaRefParser = _interopRequireDefault(require("json-schema-ref-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module identity/utils
 */

/**
 * Map list of attributes to schema name
 * @async
 * @function attributeMapBySchema
 * @param {Array} attributes - array of identity attributes
 * @returns {object} an object with attribute name as keys
 */
const attributeMapBySchema = (attributes = []) => attributes.reduce((acc, curr) => {
  const {
    schemaId
  } = curr;

  const name = _lodash.default.camelCase(schemaId.match(/\/([a-z-]+).json$/)[1]);

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
/**
 * Given a attribute data object and a file processor, process all files in the data object
 * @async
 * @function resolveAttributeFiles
 * @param {data} all or part of the attribute data object
 * @param {function} fileProcessor
 * @returns {object} a new attribute data object with processed files
 */


exports.attributeMapBySchema = attributeMapBySchema;

const resolveAttributeFiles = async (data, fileProcessor) => {
  if (!data) {
    return data;
  }

  if (Array.isArray(data)) {
    return Promise.all(data.map(d => resolveAttributeFiles(d, fileProcessor)));
  }

  if (typeof data !== 'object') {
    return data;
  }

  if ({}.hasOwnProperty.call(data, 'mimeType') && {}.hasOwnProperty.call(data, 'size') && {}.hasOwnProperty.call(data, 'content')) {
    const file = await fileProcessor(data);
    return file;
  }

  const resolved = await Promise.all(Object.keys(data).map(async k => {
    const value = await resolveAttributeFiles(data[k], fileProcessor);
    return {
      k,
      value
    };
  }));
  return resolved.reduce((acc, curr) => {
    acc[curr.k] = curr.value;
    return acc;
  }, {});
};
/**
 * Given a attribute data object and an array of documents, insert the documents
 * into the data object where they are referenced from
 *
 * @function denormalizeDocumentsSchema
 * @param {object} typeSchema a json schema object
 * @param {object} value an attribute data object
 * @param {array} documents an array of documents
 * @param {integer} maxDepth max search depth in attribute data object
 * @returns {object}
 */


exports.resolveAttributeFiles = resolveAttributeFiles;

const denormalizeDocumentsSchema = (typeSchema, value, documents = [], maxDepth = 10) => {
  if (maxDepth < 0) {
    return {
      value,
      documents
    };
  }

  documents = [...documents];

  if (typeSchema.format === 'file') {
    if (!value || typeof value !== 'string') return {
      value,
      documents
    };
    const refIdRegexp = /#ref{(document[0-9]+).id}$/;
    const idRegexp = /\$document-([0-9]+)$/;
    let id = value.match(refIdRegexp);
    if (!id) id = value.match(idRegexp);

    if (id && id.length) {
      id = id[1];
    }

    if (!id) return {
      value: null,
      documents
    };
    const found = documents.filter(doc => doc.id === +id || doc['#id'] === id);
    const filtered = documents.filter(doc => doc.id !== +id && doc['#id'] !== id);
    value = null;

    if (found.length) {
      value = found[0];
      delete value['#id'];
    }

    return {
      value,
      documents: filtered
    };
  }

  if (typeSchema.type === 'object' && typeof value === 'object') {
    if (!typeSchema.properties) return {
      value,
      documents
    };
    return Object.keys(typeSchema.properties).reduce((acc, key) => {
      if (!{}.hasOwnProperty.call(value, key)) {
        return acc;
      }

      const denormalized = denormalizeDocumentsSchema(typeSchema.properties[key], value[key], acc.documents, maxDepth - 1);
      acc.value[key] = denormalized.value;
      acc.documents = denormalized.documents;
      return acc;
    }, {
      value: {},
      documents
    });
  }

  if (typeSchema.type === 'array' && Array.isArray(value)) {
    return value.reduce((acc, itm) => {
      const normalized = denormalizeDocumentsSchema(typeSchema.items, itm, acc.documents, maxDepth - 1);
      acc.value.push(normalized.value);
      acc.documents = normalized.documents;
      return acc;
    }, {
      value: [],
      documents
    });
  }

  return {
    value,
    documents
  };
};
/**
 * Given a attribute data object
 * export all documents from the object to a separate array, leaving documnent
 * references behind
 *
 * @function normalizeDocumentsSchema
 * @param {object} typeSchema a json schema object
 * @param {object} value an attribute data object
 * @param {array} documents an array of documents
 * @param {integer} maxDepth max search depth in attribute data object
 * @returns {object}
 */


exports.denormalizeDocumentsSchema = denormalizeDocumentsSchema;

const normalizeDocumentsSchema = (typeSchema, value, documents = [], maxDepth = 10) => {
  if (maxDepth < 0) {
    return {
      value,
      documents
    };
  }

  documents = [...documents];

  if (typeSchema.format === 'file') {
    if (!value || typeof value !== 'object' || Object.keys(value).length === 0) return {
      value,
      documents
    };
    let id = value.id;

    if (id) {
      documents = documents.filter(doc => doc.id !== id);
      documents.push(value);
      value = `$document-${id}`;
    } else {
      id = documents.length;
      documents.push({ ...value,
        '#id': `document${id}`
      });
      value = `$document-#ref{document${id}.id}`;
    }

    return {
      value,
      documents
    };
  }

  if (typeSchema.type === 'object' && typeof value === 'object') {
    if (!typeSchema.properties) return {
      value,
      documents
    };
    return Object.keys(typeSchema.properties).reduce((acc, key) => {
      if (!{}.hasOwnProperty.call(value, key)) {
        return acc;
      }

      const normalized = normalizeDocumentsSchema(typeSchema.properties[key], value[key], acc.documents, maxDepth - 1);
      acc.value[key] = normalized.value;
      acc.documents = normalized.documents;
      return acc;
    }, {
      value: {},
      documents
    });
  }

  if (typeSchema.type === 'array' && Array.isArray(value)) {
    return value.reduce((acc, itm) => {
      const normalized = normalizeDocumentsSchema(typeSchema.items, itm, acc.documents, maxDepth - 1);
      acc.value.push(normalized.value);
      acc.documents = normalized.documents;
      return acc;
    }, {
      value: [],
      documents
    });
  }

  return {
    value,
    documents
  };
};
/**
 * Check if schema contains a file
 *
 * @function schemaContainsFile
 * @param {object} schema json schema object
 * @param {integer} maxDepth maximum depth to search for in the object tree
 * @returns {boolean}
 */


exports.normalizeDocumentsSchema = normalizeDocumentsSchema;

const schemaContainsFile = (schema, maxDepth = 10) => {
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
/**
 * Fetch json from remote server.
 * Optionally specify max number of attempts to do on failure (3 by default)
 *
 * @async
 * @function fetchJson
 * @param {string} url
 * @param {object} options
 * @returns {Promise<object>} json loaded from server
 * @example
 *
 * ```js
 * async sk.identity.utils.fetchJson('http://platform.selfkey.org/schema/attribute/first-name.json', {maxAttempts: 10});
 * ```
 */


exports.schemaContainsFile = schemaContainsFile;

const fetchJson = async (url, options = {}) => {
  options = {
    maxAttempts: 3,
    attempt: 1,
    ...options
  };

  try {
    const resp = await _requestPromiseNative.default.get({
      url,
      json: true
    });
    return resp;
  } catch (error) {
    if (options.maxAttempts && options.attempt <= options.maxAttempts) {
      const resp = await fetchJson(url, { ...options,
        attempt: options.attempt + 1
      });
      return resp;
    }

    throw new Error(`could not fetch json from ${url}`);
  }
};
/**
 * Given a scheme object, load all references from the schema
 * And combine into one json schema object
 *
 * @async
 * @function dereferenceSchema
 * @param {object} schema
 * @param {object} options
 * @returns {Promise<object>} dereferences json schema object
 */


exports.fetchJson = fetchJson;

const dereferenceSchema = (schema, options) => {
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
  return _jsonSchemaRefParser.default.dereference(schema, {
    resolve: {
      remote: resolver
    }
  });
};

exports.dereferenceSchema = dereferenceSchema;