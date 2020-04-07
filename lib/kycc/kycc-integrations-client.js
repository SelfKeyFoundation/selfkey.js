"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.createClient = exports.fileGet = exports.updateApplication = exports.applicationCreateAttribute = exports.applicationCreateQuestion = exports.applicationInvalidateQuestions = exports.applicationInvalidateAttributes = exports.applicationChangeStatus = exports.applicationGet = exports.applicationsList = void 0;

var _requestPromiseNative = _interopRequireDefault(require("request-promise-native"));

var _request = _interopRequireDefault(require("request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const applicationsList = client => async (filters = {}, fields = null) => {
  const qs = { ...filters
  };

  if (Array.isArray(fields) && fields.length) {
    fields = fields.join(',');
    qs.fields = fields;
  }

  const res = await _requestPromiseNative.default.get({
    url: `${client.options.endpoint}/applications`,
    headers: {
      apiKey: client.options.apiKey
    },
    qs,
    json: true
  });
  return res.items;
};

exports.applicationsList = applicationsList;

const applicationGet = client => async (applicationId, fields = null) => {
  const qs = {};

  if (Array.isArray(fields) && fields.length) {
    fields = fields.join(',');
    qs.fields = fields;
  }

  const res = await _requestPromiseNative.default.get({
    url: `${client.options.endpoint}/applications/${applicationId}`,
    headers: {
      apiKey: client.options.apiKey
    },
    qs,
    json: true
  });
  return res;
};

exports.applicationGet = applicationGet;

const applicationChangeStatus = client => async (applicationId, code, note = null) => {
  const body = {
    code
  };

  if (note) {
    body.note = note;
  }

  const res = await _requestPromiseNative.default.post({
    url: `${client.options.endpoint}/applications/${applicationId}/change_status`,
    headers: {
      apiKey: client.options.apiKey
    },
    body,
    json: true
  });
  return res;
};

exports.applicationChangeStatus = applicationChangeStatus;

const applicationInvalidateAttributes = client => async (applicationId, attributes = []) => {
  const qs = {
    attributes
  };
  const res = await _requestPromiseNative.default.post({
    url: `${client.options.endpoint}/applications/${applicationId}/attributes/invalidate`,
    headers: {
      apiKey: client.options.apiKey
    },
    qs,
    json: true
  });
  return res;
};

exports.applicationInvalidateAttributes = applicationInvalidateAttributes;

const applicationInvalidateQuestions = client => async (applicationId, questions = []) => {
  const qs = {
    questions
  };
  const res = await _requestPromiseNative.default.post({
    url: `${client.options.endpoint}/applications/${applicationId}/attributes/invalidate`,
    headers: {
      apiKey: client.options.apiKey
    },
    qs,
    json: true
  });
  return res;
}; // Question fields:
// - description (str)
// - label (str)
// - question (str)
// - optional (boolean)
// - options (array of strings for select options)
// - type: one of: input, checkbox, select, date


exports.applicationInvalidateQuestions = applicationInvalidateQuestions;

const applicationCreateQuestion = client => async (applicationId, question) => {
  const res = await _requestPromiseNative.default.post({
    url: `${client.options.endpoint}/applications/${applicationId}/question`,
    headers: {
      apiKey: client.options.apiKey
    },
    body: question,
    json: true
  });
  return res;
}; // Attribute fields:
// - description
// - label
// - optional
// - scheme (json schema id, one of https://platform.selfkey.org/repository.json)


exports.applicationCreateQuestion = applicationCreateQuestion;

const applicationCreateAttribute = client => async (applicationId, attribute) => {
  const res = await _requestPromiseNative.default.post({
    url: `${client.options.endpoint}/applications/${applicationId}/attributes`,
    headers: {
      apiKey: client.options.apiKey
    },
    body: attribute,
    json: true
  });
  return res;
};

exports.applicationCreateAttribute = applicationCreateAttribute;

const updateApplication = client => async (applicationId, update) => {
  const res = await _requestPromiseNative.default.patch({
    url: `${client.options.endpoint}/applications/${applicationId}`,
    headers: {
      apiKey: client.options.apiKey
    },
    body: update,
    json: true
  });
  return res;
};

exports.updateApplication = updateApplication;

const fileGet = client => (fileId, options = {}) => {
  const r = client.options.streamFile || options.stream ? _request.default : _requestPromiseNative.default;
  return r.get({
    url: `${client.options.endpoint}/files/${fileId}`,
    headers: {
      apiKey: client.options.apiKey
    },
    encoding: null
  });
};

exports.fileGet = fileGet;

const createClient = (options = {}) => {
  const {
    instanceUrl,
    apiKey
  } = options;
  const clientOpts = {
    endpoint: `${instanceUrl}/integrations/v2`,
    apiKey
  };
  const client = {
    options: clientOpts
  };
  client.applications = {
    list: applicationsList(client),
    get: applicationGet(client),
    changeStatus: applicationChangeStatus(client),
    attributes: {
      add: applicationCreateAttribute(client),
      invalidate: applicationInvalidateAttributes(client)
    },
    questions: {
      add: applicationCreateQuestion(client),
      invalidate: applicationInvalidateQuestions(client)
    }
  };
  client.files = {
    get: fileGet(client)
  };
  return client;
};

exports.createClient = createClient;
var _default = createClient;
exports.default = _default;