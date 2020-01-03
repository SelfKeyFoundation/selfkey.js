"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AttributeManager = void 0;

var _repository = require("./repository");

/**
 * @module identity/attribute-manager
 */

/**
 * @classdesc Attribute Manager, manages multiple repositories of attributes
 *
 *
 * @class AttributeManager
 */
class AttributeManager {
  /**
   * Creates an AttributeManager and initializes it with selfkey repository
   *
   * @static
   * @param {object} options
   * @returns {AttributeManager}
   */
  static async createWithSelfkeyRepository(options) {
    const manager = new AttributeManager();
    const skRepo = await _repository.Repository.createSelfkeyRepo(options);
    manager.addRepository(skRepo);
    return manager;
  }
  /**
   * Creates an instance of AttributeManager.
   */


  constructor() {
    this.repositories = [];
  }
  /**
   * Adds a new repository
   * @param {identity.Repository} repository
   */


  addRepository(repository) {
    this.repositories.push(repository);
  }
  /**
   * Remove a repository
   *
   * @param {identity.Repository} repository
   */


  removeRepository(repository) {
    this.repositories.filter(repo => repository !== repo);
  }
  /**
   * Finds a repository for a given attribute
   *
   * @param {object|string} attr
   * @returns {identity.Repository|null}
   */


  findRepositoryForAttribute(attr) {
    if (typeof attr === 'string') {
      attr = {
        schemaId: attr
      };
    }

    return this.repositories.find(repo => !!repo.jsonSchemas[attr.schemaId]) || null;
  }
  /**
   * Given an array of attributes and requirements, tries to much between them
   *
   * @param {Array} attributes
   * @param {Array} [requirements=[]]
   * @returns {Array}
   */


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
  /**
   * Given an attribute and requirement validates the attribute
   *
   * @param {object} attr
   * @param {object} requirement
   * @returns {object}
   */


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
  /**
   * Given a list of attribute and requirements, validates all attributes
   *
   * @param {Array} attributes
   * @param {Array} requirements
   * @returns {object}
   */


  validateAttributes(attributes, requirements) {
    const zip = this.zipAttributesWithRequirements(attributes, requirements);
    return zip.map(curr => {
      const {
        attr,
        requirement
      } = curr;
      const {
        valid,
        errors,
        required
      } = this.validateOneAttribute(attr, requirement);
      return {
        attr,
        requirement,
        valid,
        errors,
        required
      };
    }).reduce((acc, curr) => {
      const {
        attr,
        requirement,
        valid,
        errors,
        required
      } = curr;
      acc.attributes.push({ ...attr,
        valid,
        errors,
        requirement
      });

      if (errors) {
        acc.errors = acc.errors.concat(errors);
      }

      if (!valid && required) {
        acc.valid = false;
      }

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