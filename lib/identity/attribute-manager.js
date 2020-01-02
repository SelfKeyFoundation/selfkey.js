"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AttributeManager = void 0;

var _repository = require("./repository");

class AttributeManager {
  static async createWithSelfkeyRepository(options) {
    const manager = new AttributeManager();
    const skRepo = await _repository.Repository.createSelfkeyRepo(options);
    manager.addRepository(skRepo);
    return manager;
  }

  constructor() {
    this.repositories = [];
  }

  addRepository(repository) {
    this.repositories.push(repository);
  }

  removeRepository(repository) {
    this.repositories.filter(repo => repository !== repo);
  }

  findRepositoryForAttribute(attr) {
    if (typeof attr === 'string') {
      attr = {
        schemaId: attr
      };
    }

    return this.repositories.find(repo => !!repo.jsonSchemas[attr.schemaId]) || null;
  }

  zipAttributesWithRequirements(attributes, requirements = []) {
    let {
      matchedAttributes,
      matchedRequirements
    } = requirements.reduce((acc, curr) => {
      let attr = null;

      if (typeof curr === 'string') {
        curr = {
          schemaId: curr,
          required: true
        };
      } // much requirements with id to attributes with id


      if (curr.id) {
        attr = attributes.find(attr => attr.id === curr.id) || null;

        if (attr && acc.matchedAttributes.has(attr)) {
          attr = null;
        }

        acc.matchedRequirements.push({
          attr,
          requirement: curr
        });

        if (attr) {
          acc.matchedAttributes.add(attr);
        }

        return acc;
      } // much unmatched attributes without id to requirement without id by schemaId


      attr = attributes.find(attr => attr.schemaId === curr.schemaId && !attr.id && !acc.matchedAttributes.has(attr)) || null;
      acc.matchedRequirements.push({
        attr,
        requirement: curr
      });

      if (attr) {
        acc.matchedAttributes.add(attr);
      }

      return acc;
    }, {
      matchedRequirements: [],
      matchedAttributes: new Set()
    }); // handle attributes without matching requirement

    if (matchedAttributes.size < attributes.length) {
      const withoutRequirements = attributes.filter(attr => !matchedAttributes.has(attr)).map(attr => ({
        attr,
        requirement: null
      }));
      matchedRequirements = matchedRequirements.concat(withoutRequirements);
    }

    return matchedRequirements;
  }

  validateOneAttribute(attr, requirement) {
    const {
      required = true
    } = requirement || {
      required: false
    };

    if (!attr && requirement) {
      return {
        valid: false,
        errors: ['no attribute for requirement'],
        required
      };
    }

    const {
      schemaId,
      data
    } = attr;
    const repository = this.findRepositoryForAttribute(attr);

    if (!repository) {
      return {
        valid: false,
        errors: ['no repository for attribute schema'],
        required
      };
    }

    const {
      valid,
      errors
    } = repository.validateData(schemaId, data);
    return {
      valid,
      errors,
      required
    };
  }

  validateAttributes(attributes, requirements) {
    const zip = this.zipAttributesWithRequirements(attributes, requirements);
    return zip.reduce((acc, curr) => {
      const {
        attr,
        requirement
      } = curr;
      const {
        valid,
        errors,
        required
      } = this.validateOneAttribute(attr, requirement);
      acc.attributes.push({
        attribute: attr,
        valid,
        errors,
        requirement
      });
      acc.errors = acc.errors.concat(errors);
      acc.valid = !acc.valid ? acc.valid : !valid && required;
      return acc;
    }, {
      attributes: [],
      errors: [],
      valid: true
    });
  }

}

exports.AttributeManager = AttributeManager;
var _default = AttributeManager;
exports.default = _default;