# @selfkey/node-lib

> Selfkey sdk for third party integrations written in Node.js

[![NPM][npm-icon]][npm-url]
[![CircleCI](https://circleci.com/gh/SelfKeyFoundation/selfkey-lib/tree/master.svg?style=svg)](https://circleci.com/gh/SelfKeyFoundation/selfkey-lib/tree/master)

[npm-icon]: https://img.shields.io/npm/v/@selfkey/node-lib
[npm-url]: https://npmjs.org/package/@selfkey/node-lib


## Contents

- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [Examples](#examples)
- [License](#license)

## Install

Requires [Node](https://nodejs.org/en/) version 10 or above

```sh
npm install --save @selfkey/node-lib
```

<a name="usage"></a>

## Usage

```js
const sk = require('@selfkey/node-lib');
```

or ES6 syntax

```js
import sk from '@selfkey/node-lib';
```

<a name="api"></a>
## API
### Modules

<dl>
<dt><a href="#module_auth/generate-access-token">auth/generate-access-token</a></dt>
<dd></dd>
<dt><a href="#module_auth/generate-challenge-token">auth/generate-challenge-token</a></dt>
<dd></dd>
<dt><a href="#module_auth/generate-nonce">auth/generate-nonce</a></dt>
<dd></dd>
<dt><a href="#module_auth/validate-access-token">auth/validate-access-token</a></dt>
<dd></dd>
<dt><a href="#module_auth/validate-challenge-token">auth/validate-challenge-token</a></dt>
<dd></dd>
<dt><a href="#module_auth/verify-challenge-signature">auth/verify-challenge-signature</a></dt>
<dd></dd>
<dt><a href="#module_did/parse">did/parse</a></dt>
<dd></dd>
<dt><a href="#module_did/resolver">did/resolver</a></dt>
<dd></dd>
<dt><a href="#module_identity/attribute-manager">identity/attribute-manager</a></dt>
<dd></dd>
<dt><a href="#module_identity/repository">identity/repository</a></dt>
<dd></dd>
<dt><a href="#module_identity/utils">identity/utils</a></dt>
<dd></dd>
<dt><a href="#module_jwt/constants">jwt/constants</a></dt>
<dd></dd>
<dt><a href="#module_jwt/issue">jwt/issue</a></dt>
<dd></dd>
<dt><a href="#module_jwt/parse">jwt/parse</a></dt>
<dd></dd>
<dt><a href="#module_jwt/validate">jwt/validate</a></dt>
<dd></dd>
<dt><a href="#module_key/hmac">key/hmac</a></dt>
<dd></dd>
<dt><a href="#module_key/rsa">key/rsa</a></dt>
<dd></dd>
<dt><a href="#module_key/validate-private-key">key/validate-private-key</a></dt>
<dd></dd>
<dt><a href="#module_kycc/get-user-data-for-token">kycc/get-user-data-for-token</a></dt>
<dd></dd>
<dt><a href="#module_kycc/kycc-integrations-client">kycc/kycc-integrations-client</a></dt>
<dd></dd>
</dl>

<a name="module_auth/generate-access-token"></a>

### auth/generate-access-token

* * *

<a name="module_auth/generate-access-token..generateAccessToken"></a>

#### `auth/generate-access-token~generateAccessToken(did, algorithm, secret, [expiresIn])` ⇒ <code>Promise.&lt;string&gt;</code>
Generate access token

**Kind**: inner method of [<code>auth/generate-access-token</code>](#module_auth/generate-access-token)  
**Returns**: <code>Promise.&lt;string&gt;</code> - jwtToken  

| Param | Type | Default |
| --- | --- | --- |
| did | <code>string</code> |  | 
| algorithm | <code>string</code> |  | 
| secret | <code>string</code> |  | 
| [expiresIn] | <code>string</code> | <code>&quot;&#x27;1h&#x27;&quot;</code> | 

**Example**  
```js
await sk.auth.generateAccessToken(did, 'rsa', 'secret')
```

* * *

<a name="module_auth/generate-challenge-token"></a>

### auth/generate-challenge-token

* * *

<a name="module_auth/generate-challenge-token..generateChallengeToken"></a>

#### `auth/generate-challenge-token~generateChallengeToken(did, algorithm, secret, [expiresIn])` ⇒ <code>Promise.&lt;string&gt;</code>
Generate challenge token

**Kind**: inner method of [<code>auth/generate-challenge-token</code>](#module_auth/generate-challenge-token)  
**Returns**: <code>Promise.&lt;string&gt;</code> - jwtToken  

| Param | Type | Default |
| --- | --- | --- |
| did | <code>string</code> |  | 
| algorithm | <code>string</code> |  | 
| secret | <code>string</code> |  | 
| [expiresIn] | <code>string</code> | <code>&quot;&#x27;30m&#x27;&quot;</code> | 

**Example**  
```js
await sk.auth.generateChallengeToken(did, 'rsa', 'secret')
```

* * *

<a name="module_auth/generate-nonce"></a>

### auth/generate-nonce

* * *

<a name="module_auth/generate-nonce..generateNonce"></a>

#### `auth/generate-nonce~generateNonce([length])` ⇒ <code>Promise.&lt;string&gt;</code>
Generates base64 encoded random string

**Kind**: inner method of [<code>auth/generate-nonce</code>](#module_auth/generate-nonce)  
**Returns**: <code>Promise.&lt;string&gt;</code> - nonce  

| Param | Type | Default |
| --- | --- | --- |
| [length] | <code>number</code> | <code>64</code> | 

**Example**  
```js
await sk.auth.generateNonce();
```

* * *

<a name="module_auth/validate-access-token"></a>

### auth/validate-access-token

* * *

<a name="module_auth/validate-access-token..validateAccessToken"></a>

#### `auth/validate-access-token~validateAccessToken(token, algorithm, key)` ⇒ <code>Promise.&lt;object&gt;</code>
Validates access token

**Kind**: inner method of [<code>auth/validate-access-token</code>](#module_auth/validate-access-token)  
**Returns**: <code>Promise.&lt;object&gt;</code> - decodedToken  
**Throws**:

- If token is invalid
- if subject is not did
- if token type is not access


| Param | Type |
| --- | --- |
| token | <code>string</code> | 
| algorithm | <code>string</code> | 
| key | <code>string</code> \| <code>Buffer</code> | 

**Example**  
```js
await sk.auth.validateAccessToken(token, 'hmac', 'secret');
```

* * *

<a name="module_auth/validate-challenge-token"></a>

### auth/validate-challenge-token

* * *

<a name="module_auth/validate-challenge-token..validateChallengeToken"></a>

#### `auth/validate-challenge-token~validateChallengeToken(token, algorithm, key)` ⇒ <code>Promise.&lt;object&gt;</code>
Validates challenge token

**Kind**: inner method of [<code>auth/validate-challenge-token</code>](#module_auth/validate-challenge-token)  
**Returns**: <code>Promise.&lt;object&gt;</code> - decodedToken  
**Throws**:

- If token is invalid
- if subject is not did
- if token type is not challenge


| Param | Type |
| --- | --- |
| token | <code>string</code> | 
| algorithm | <code>string</code> | 
| key | <code>string</code> \| <code>Buffer</code> | 

**Example**  
```js
await sk.auth.validateChallengeToken(token, 'hmac', 'secret');
```

* * *

<a name="module_auth/verify-challenge-signature"></a>

### auth/verify-challenge-signature

* * *

<a name="module_auth/verify-challenge-signature..verifyChallengeSignature"></a>

#### `auth/verify-challenge-signature~verifyChallengeSignature(nonce, signature, did)` ⇒ <code>Promise.&lt;boolean&gt;</code>
Validates challenge Signature

**Kind**: inner method of [<code>auth/verify-challenge-signature</code>](#module_auth/verify-challenge-signature)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - is valid signature  
**Throws**:

- key not found in resolved did document
- if no registered verifier for that key type


| Param | Type |
| --- | --- |
| nonce | <code>string</code> | 
| signature | <code>object</code> | 
| did | <code>string</code> | 

**Example**  
```js
await sk.auth.verifyChallengeSignature(nonce, signature, did);
```

* * *

<a name="module_did/parse"></a>

### did/parse

* * *

<a name="module_did/parse..parse"></a>

#### `did/parse~parse(did)` ⇒ <code>object</code>
Parses did string to components

**Kind**: inner method of [<code>did/parse</code>](#module_did/parse)  
**Returns**: <code>object</code> - parsedDid  
**Throws**:

- if invalid did is provided


| Param | Type |
| --- | --- |
| did | <code>string</code> | 

**Example**  
```js
sk.did.parse('did:selfkey:0xdsdasddasdsa...');
```

* * *

<a name="module_did/resolver"></a>

### did/resolver

* [did/resolver](#module_did/resolver)
    * [`~resolvers`](#module_did/resolver..resolvers) : <code>object</code>
    * [`~isSupported(did)`](#module_did/resolver..isSupported) ⇒ <code>boolean</code>
    * [`~resolve(did)`](#module_did/resolver..resolve) ⇒ <code>object</code>
    * [`~registerMethodResolver(method, resolver)`](#module_did/resolver..registerMethodResolver)


* * *

<a name="module_did/resolver..resolvers"></a>

#### `did/resolver~resolvers` : <code>object</code>
**Kind**: inner constant of [<code>did/resolver</code>](#module_did/resolver)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| eth | <code>object</code> | eth did resolver |
| sekfkey | <code>object</code> | selfkey did resolver |


* * *

<a name="module_did/resolver..isSupported"></a>

#### `did/resolver~isSupported(did)` ⇒ <code>boolean</code>
Checks if a resolver exists for that particular did

**Kind**: inner method of [<code>did/resolver</code>](#module_did/resolver)  
**Returns**: <code>boolean</code> - isSuppored  

| Param | Type |
| --- | --- |
| did | <code>string</code> | 

**Example**  
```js
sk.did.isSupported('did:selfkey:0xdsdasddasdsa...'); // true
sk.did.isSupported('did:eth:0xdsdasddasdsa...'); // true
sk.did.isSupported('did:unknown:0xdsdasddasdsa...'); // false
```

* * *

<a name="module_did/resolver..resolve"></a>

#### `did/resolver~resolve(did)` ⇒ <code>object</code>
Resolves did document

**Kind**: inner method of [<code>did/resolver</code>](#module_did/resolver)  
**Returns**: <code>object</code> - didDocument  

| Param | Type |
| --- | --- |
| did | <code>string</code> | 

**Example**  
```js
await sk.did.resolve('did:selfkey:0xdsdasddasdsa...');
```

* * *

<a name="module_did/resolver..registerMethodResolver"></a>

#### `did/resolver~registerMethodResolver(method, resolver)`
Register custom resolver for a did method

**Kind**: inner method of [<code>did/resolver</code>](#module_did/resolver)  

| Param | Type |
| --- | --- |
| method | <code>string</code> | 
| resolver | <code>object</code> | 

**Example**  
```js
sk.did.register('new-method', resolver);
```

* * *

<a name="module_identity/attribute-manager"></a>

### identity/attribute-manager

* [identity/attribute-manager](#module_identity/attribute-manager)
    * _static_
        * [.AttributeManager](#module_identity/attribute-manager.AttributeManager)
            * [`new exports.AttributeManager()`](#new_module_identity/attribute-manager.AttributeManager_new)
            * _instance_
                * [`.addRepository(repository)`](#module_identity/attribute-manager.AttributeManager+addRepository)
                * [`.removeRepository(repository)`](#module_identity/attribute-manager.AttributeManager+removeRepository)
                * [`.findRepositoryForAttribute(attr)`](#module_identity/attribute-manager.AttributeManager+findRepositoryForAttribute) ⇒ <code>identity.Repository</code> \| <code>null</code>
                * [`.zipAttributesWithRequirements(attributes, [requirements])`](#module_identity/attribute-manager.AttributeManager+zipAttributesWithRequirements) ⇒ <code>Array</code>
                * [`.validateOneAttribute(attr, requirement)`](#module_identity/attribute-manager.AttributeManager+validateOneAttribute) ⇒ <code>object</code>
                * [`.validateAttributes(attributes, requirements)`](#module_identity/attribute-manager.AttributeManager+validateAttributes) ⇒ <code>object</code>
            * _static_
                * [`.createWithSelfkeyRepository(options)`](#module_identity/attribute-manager.AttributeManager.createWithSelfkeyRepository) ⇒ <code>AttributeManager</code>
    * _inner_
        * [~AttributeManager](#module_identity/attribute-manager..AttributeManager)


* * *

<a name="module_identity/attribute-manager.AttributeManager"></a>

#### identity/attribute-manager.AttributeManager
**Kind**: static class of [<code>identity/attribute-manager</code>](#module_identity/attribute-manager)  

* [.AttributeManager](#module_identity/attribute-manager.AttributeManager)
    * [`new exports.AttributeManager()`](#new_module_identity/attribute-manager.AttributeManager_new)
    * _instance_
        * [`.addRepository(repository)`](#module_identity/attribute-manager.AttributeManager+addRepository)
        * [`.removeRepository(repository)`](#module_identity/attribute-manager.AttributeManager+removeRepository)
        * [`.findRepositoryForAttribute(attr)`](#module_identity/attribute-manager.AttributeManager+findRepositoryForAttribute) ⇒ <code>identity.Repository</code> \| <code>null</code>
        * [`.zipAttributesWithRequirements(attributes, [requirements])`](#module_identity/attribute-manager.AttributeManager+zipAttributesWithRequirements) ⇒ <code>Array</code>
        * [`.validateOneAttribute(attr, requirement)`](#module_identity/attribute-manager.AttributeManager+validateOneAttribute) ⇒ <code>object</code>
        * [`.validateAttributes(attributes, requirements)`](#module_identity/attribute-manager.AttributeManager+validateAttributes) ⇒ <code>object</code>
    * _static_
        * [`.createWithSelfkeyRepository(options)`](#module_identity/attribute-manager.AttributeManager.createWithSelfkeyRepository) ⇒ <code>AttributeManager</code>


* * *

<a name="new_module_identity/attribute-manager.AttributeManager_new"></a>

##### `new exports.AttributeManager()`
Creates an instance of AttributeManager.


* * *

<a name="module_identity/attribute-manager.AttributeManager+addRepository"></a>

##### `attributeManager.addRepository(repository)`
Adds a new repository

**Kind**: instance method of [<code>AttributeManager</code>](#module_identity/attribute-manager.AttributeManager)  

| Param | Type |
| --- | --- |
| repository | <code>identity.Repository</code> | 


* * *

<a name="module_identity/attribute-manager.AttributeManager+removeRepository"></a>

##### `attributeManager.removeRepository(repository)`
Remove a repository

**Kind**: instance method of [<code>AttributeManager</code>](#module_identity/attribute-manager.AttributeManager)  

| Param | Type |
| --- | --- |
| repository | <code>identity.Repository</code> | 


* * *

<a name="module_identity/attribute-manager.AttributeManager+findRepositoryForAttribute"></a>

##### `attributeManager.findRepositoryForAttribute(attr)` ⇒ <code>identity.Repository</code> \| <code>null</code>
Finds a repository for a given attribute

**Kind**: instance method of [<code>AttributeManager</code>](#module_identity/attribute-manager.AttributeManager)  

| Param | Type |
| --- | --- |
| attr | <code>object</code> \| <code>string</code> | 


* * *

<a name="module_identity/attribute-manager.AttributeManager+zipAttributesWithRequirements"></a>

##### `attributeManager.zipAttributesWithRequirements(attributes, [requirements])` ⇒ <code>Array</code>
Given an array of attributes and requirements, tries to much between them

**Kind**: instance method of [<code>AttributeManager</code>](#module_identity/attribute-manager.AttributeManager)  

| Param | Type | Default |
| --- | --- | --- |
| attributes | <code>Array</code> |  | 
| [requirements] | <code>Array</code> | <code>[]</code> | 


* * *

<a name="module_identity/attribute-manager.AttributeManager+validateOneAttribute"></a>

##### `attributeManager.validateOneAttribute(attr, requirement)` ⇒ <code>object</code>
Given an attribute and requirement validates the attribute

**Kind**: instance method of [<code>AttributeManager</code>](#module_identity/attribute-manager.AttributeManager)  

| Param | Type |
| --- | --- |
| attr | <code>object</code> | 
| requirement | <code>object</code> | 


* * *

<a name="module_identity/attribute-manager.AttributeManager+validateAttributes"></a>

##### `attributeManager.validateAttributes(attributes, requirements)` ⇒ <code>object</code>
Given a list of attribute and requirements, validates all attributes

**Kind**: instance method of [<code>AttributeManager</code>](#module_identity/attribute-manager.AttributeManager)  

| Param | Type |
| --- | --- |
| attributes | <code>Array</code> | 
| requirements | <code>Array</code> | 


* * *

<a name="module_identity/attribute-manager.AttributeManager.createWithSelfkeyRepository"></a>

##### `AttributeManager.createWithSelfkeyRepository(options)` ⇒ <code>AttributeManager</code>
Creates an AttributeManager and initializes it with selfkey repository

**Kind**: static method of [<code>AttributeManager</code>](#module_identity/attribute-manager.AttributeManager)  

| Param | Type |
| --- | --- |
| options | <code>object</code> | 


* * *

<a name="module_identity/attribute-manager..AttributeManager"></a>

#### identity/attribute-manager~AttributeManager
Attribute Manager, manages multiple repositories of attributes

**Kind**: inner class of [<code>identity/attribute-manager</code>](#module_identity/attribute-manager)  

* * *

<a name="module_identity/repository"></a>

### identity/repository

* [identity/repository](#module_identity/repository)
    * _static_
        * [.Repository](#module_identity/repository.Repository)
            * [`new exports.Repository([config])`](#new_module_identity/repository.Repository_new)
            * _instance_
                * [`.resolveAll()`](#module_identity/repository.Repository+resolveAll)
                * [`.resolveJsonSchema(schema, [config])`](#module_identity/repository.Repository+resolveJsonSchema) ⇒ <code>object</code>
                * [`.resolveUiSchema(schema, [config])`](#module_identity/repository.Repository+resolveUiSchema) ⇒ <code>object</code>
                * [`.getValidator()`](#module_identity/repository.Repository+getValidator) ⇒
                * [`.validateData(schemaId, data)`](#module_identity/repository.Repository+validateData) ⇒ <code>object</code>
            * _static_
                * [`.createSelfkeyRepo([options])`](#module_identity/repository.Repository.createSelfkeyRepo) ⇒ <code>Repository</code>
                * [`.fromConfig(config, [ui])`](#module_identity/repository.Repository.fromConfig) ⇒ <code>Repository</code>
                * [`.fromSchemaId(schemaId, [ui])`](#module_identity/repository.Repository.fromSchemaId) ⇒ <code>Repository</code>
    * _inner_
        * [~Repository](#module_identity/repository..Repository)


* * *

<a name="module_identity/repository.Repository"></a>

#### identity/repository.Repository
**Kind**: static class of [<code>identity/repository</code>](#module_identity/repository)  

* [.Repository](#module_identity/repository.Repository)
    * [`new exports.Repository([config])`](#new_module_identity/repository.Repository_new)
    * _instance_
        * [`.resolveAll()`](#module_identity/repository.Repository+resolveAll)
        * [`.resolveJsonSchema(schema, [config])`](#module_identity/repository.Repository+resolveJsonSchema) ⇒ <code>object</code>
        * [`.resolveUiSchema(schema, [config])`](#module_identity/repository.Repository+resolveUiSchema) ⇒ <code>object</code>
        * [`.getValidator()`](#module_identity/repository.Repository+getValidator) ⇒
        * [`.validateData(schemaId, data)`](#module_identity/repository.Repository+validateData) ⇒ <code>object</code>
    * _static_
        * [`.createSelfkeyRepo([options])`](#module_identity/repository.Repository.createSelfkeyRepo) ⇒ <code>Repository</code>
        * [`.fromConfig(config, [ui])`](#module_identity/repository.Repository.fromConfig) ⇒ <code>Repository</code>
        * [`.fromSchemaId(schemaId, [ui])`](#module_identity/repository.Repository.fromSchemaId) ⇒ <code>Repository</code>


* * *

<a name="new_module_identity/repository.Repository_new"></a>

##### `new exports.Repository([config])`
Creates an instance of Repository.


| Param | Type | Default |
| --- | --- | --- |
| [config] | <code>object</code> | <code>{}</code> | 


* * *

<a name="module_identity/repository.Repository+resolveAll"></a>

##### `repository.resolveAll()`
Resolve all repository data

**Kind**: instance method of [<code>Repository</code>](#module_identity/repository.Repository)  

* * *

<a name="module_identity/repository.Repository+resolveJsonSchema"></a>

##### `repository.resolveJsonSchema(schema, [config])` ⇒ <code>object</code>
Resolve one JSON schema

**Kind**: instance method of [<code>Repository</code>](#module_identity/repository.Repository)  

| Param | Type | Default |
| --- | --- | --- |
| schema | <code>object</code> \| <code>string</code> |  | 
| [config] | <code>object</code> | <code>{}</code> | 


* * *

<a name="module_identity/repository.Repository+resolveUiSchema"></a>

##### `repository.resolveUiSchema(schema, [config])` ⇒ <code>object</code>
Resolve one ui schema

**Kind**: instance method of [<code>Repository</code>](#module_identity/repository.Repository)  

| Param | Type | Default |
| --- | --- | --- |
| schema | <code>object</code> \| <code>string</code> |  | 
| [config] | <code>object</code> | <code>{}</code> | 


* * *

<a name="module_identity/repository.Repository+getValidator"></a>

##### `repository.getValidator()` ⇒
Creates an Ajv validator for the repository data

**Kind**: instance method of [<code>Repository</code>](#module_identity/repository.Repository)  
**Returns**: Ajv instance  

* * *

<a name="module_identity/repository.Repository+validateData"></a>

##### `repository.validateData(schemaId, data)` ⇒ <code>object</code>
Given schemaId and data, validates the data based on relevant schema

**Kind**: instance method of [<code>Repository</code>](#module_identity/repository.Repository)  
**Returns**: <code>object</code> - {valid:boolean, errors: array}  

| Param | Type |
| --- | --- |
| schemaId | <code>string</code> | 
| data | <code>object</code> | 


* * *

<a name="module_identity/repository.Repository.createSelfkeyRepo"></a>

##### `Repository.createSelfkeyRepo([options])` ⇒ <code>Repository</code>
Creates a repository initialized with selfkey data

**Kind**: static method of [<code>Repository</code>](#module_identity/repository.Repository)  

| Param | Type | Default |
| --- | --- | --- |
| [options] | <code>object</code> | <code>{}</code> | 


* * *

<a name="module_identity/repository.Repository.fromConfig"></a>

##### `Repository.fromConfig(config, [ui])` ⇒ <code>Repository</code>
Creates and preloads a Repository from a config object

**Kind**: static method of [<code>Repository</code>](#module_identity/repository.Repository)  

| Param | Type | Default |
| --- | --- | --- |
| config | <code>object</code> |  | 
| [ui] | <code>boolean</code> | <code>false</code> | 


* * *

<a name="module_identity/repository.Repository.fromSchemaId"></a>

##### `Repository.fromSchemaId(schemaId, [ui])` ⇒ <code>Repository</code>
Creates and preloads a Repository based on attribute schema id

**Kind**: static method of [<code>Repository</code>](#module_identity/repository.Repository)  

| Param | Type | Default |
| --- | --- | --- |
| schemaId | <code>string</code> |  | 
| [ui] | <code>boolean</code> | <code>false</code> | 


* * *

<a name="module_identity/repository..Repository"></a>

#### identity/repository~Repository
Repository Class allows to load identity attribute repository and validate schemas

Part of `identity` namespace

**Kind**: inner class of [<code>identity/repository</code>](#module_identity/repository)  

* * *

<a name="module_identity/utils"></a>

### identity/utils

* [identity/utils](#module_identity/utils)
    * [`~attributeMapBySchema(attributes)`](#module_identity/utils..attributeMapBySchema) ⇒ <code>object</code>
    * [`~resolveAttributeFiles(all, fileProcessor)`](#module_identity/utils..resolveAttributeFiles) ⇒ <code>object</code>
    * [`~denormalizeDocumentsSchema(typeSchema, value, documents, maxDepth)`](#module_identity/utils..denormalizeDocumentsSchema) ⇒ <code>object</code>
    * [`~normalizeDocumentsSchema(typeSchema, value, documents, maxDepth)`](#module_identity/utils..normalizeDocumentsSchema) ⇒ <code>object</code>
    * [`~schemaContainsFile(schema, maxDepth)`](#module_identity/utils..schemaContainsFile) ⇒ <code>boolean</code>
    * [`~fetchJson(url, options)`](#module_identity/utils..fetchJson) ⇒ <code>Promise.&lt;object&gt;</code>
    * [`~dereferenceSchema(schema, options)`](#module_identity/utils..dereferenceSchema) ⇒ <code>Promise.&lt;object&gt;</code>


* * *

<a name="module_identity/utils..attributeMapBySchema"></a>

#### `identity/utils~attributeMapBySchema(attributes)` ⇒ <code>object</code>
Map list of attributes to schema name

**Kind**: inner method of [<code>identity/utils</code>](#module_identity/utils)  
**Returns**: <code>object</code> - an object with attribute name as keys  

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>Array</code> | array of identity attributes |


* * *

<a name="module_identity/utils..resolveAttributeFiles"></a>

#### `identity/utils~resolveAttributeFiles(all, fileProcessor)` ⇒ <code>object</code>
Given a attribute data object and a file processor, process all files in the data object

**Kind**: inner method of [<code>identity/utils</code>](#module_identity/utils)  
**Returns**: <code>object</code> - a new attribute data object with processed files  

| Param | Type | Description |
| --- | --- | --- |
| all | <code>data</code> | or part of the attribute data object |
| fileProcessor | <code>function</code> |  |


* * *

<a name="module_identity/utils..denormalizeDocumentsSchema"></a>

#### `identity/utils~denormalizeDocumentsSchema(typeSchema, value, documents, maxDepth)` ⇒ <code>object</code>
Given a attribute data object and an array of documents, insert the documents
into the data object where they are referenced from

**Kind**: inner method of [<code>identity/utils</code>](#module_identity/utils)  

| Param | Type | Description |
| --- | --- | --- |
| typeSchema | <code>object</code> | a json schema object |
| value | <code>object</code> | an attribute data object |
| documents | <code>array</code> | an array of documents |
| maxDepth | <code>integer</code> | max search depth in attribute data object |


* * *

<a name="module_identity/utils..normalizeDocumentsSchema"></a>

#### `identity/utils~normalizeDocumentsSchema(typeSchema, value, documents, maxDepth)` ⇒ <code>object</code>
Given a attribute data object
export all documents from the object to a separate array, leaving documnent
references behind

**Kind**: inner method of [<code>identity/utils</code>](#module_identity/utils)  

| Param | Type | Description |
| --- | --- | --- |
| typeSchema | <code>object</code> | a json schema object |
| value | <code>object</code> | an attribute data object |
| documents | <code>array</code> | an array of documents |
| maxDepth | <code>integer</code> | max search depth in attribute data object |


* * *

<a name="module_identity/utils..schemaContainsFile"></a>

#### `identity/utils~schemaContainsFile(schema, maxDepth)` ⇒ <code>boolean</code>
Check if schema contains a file

**Kind**: inner method of [<code>identity/utils</code>](#module_identity/utils)  

| Param | Type | Description |
| --- | --- | --- |
| schema | <code>object</code> | json schema object |
| maxDepth | <code>integer</code> | maximum depth to search for in the object tree |


* * *

<a name="module_identity/utils..fetchJson"></a>

#### `identity/utils~fetchJson(url, options)` ⇒ <code>Promise.&lt;object&gt;</code>
Fetch json from remote server.
Optionally specify max number of attempts to do on failure (3 by default)

**Kind**: inner method of [<code>identity/utils</code>](#module_identity/utils)  
**Returns**: <code>Promise.&lt;object&gt;</code> - json loaded from server  

| Param | Type |
| --- | --- |
| url | <code>string</code> | 
| options | <code>object</code> | 

**Example**  
```js
async sk.identity.utils.fetchJson('http://platform.selfkey.org/schema/attribute/first-name.json', {maxAttempts: 10});
```

* * *

<a name="module_identity/utils..dereferenceSchema"></a>

#### `identity/utils~dereferenceSchema(schema, options)` ⇒ <code>Promise.&lt;object&gt;</code>
Given a scheme object, load all references from the schema
And combine into one json schema object

**Kind**: inner method of [<code>identity/utils</code>](#module_identity/utils)  
**Returns**: <code>Promise.&lt;object&gt;</code> - dereferences json schema object  

| Param | Type |
| --- | --- |
| schema | <code>object</code> | 
| options | <code>object</code> | 


* * *

<a name="module_jwt/constants"></a>

### jwt/constants

* * *

<a name="module_jwt/issue"></a>

### jwt/issue

* * *

<a name="module_jwt/issue..issueJWT"></a>

#### `jwt/issue~issueJWT(subject, requestedAlgorithm, secret, [expiresIn], additionalClaims)` ⇒ <code>Promise.&lt;string&gt;</code>
Issue a new JWT token

**Kind**: inner method of [<code>jwt/issue</code>](#module_jwt/issue)  
**Returns**: <code>Promise.&lt;string&gt;</code> - jwt  
**Throws**:

- if unknown algorithm provided
- if secret deemed as not secure enough


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| subject | <code>string</code> |  | sub claim |
| requestedAlgorithm | <code>string</code> |  | signature algorithm |
| secret | <code>string</code> \| <code>Buffer</code> |  | secret key for signature |
| [expiresIn] | <code>string</code> | <code>&quot;1h&quot;</code> | longevity of the token |
| additionalClaims | <code>object</code> |  | claims to include in the token |

**Example**  
```js
sk.jwt.issueJWT('simple-session', 'hmac', 'test');
```

* * *

<a name="module_jwt/parse"></a>

### jwt/parse

* * *

<a name="module_jwt/parse..parseJWT"></a>

#### `jwt/parse~parseJWT(token)` ⇒ <code>object</code>
Parse a JWT token

**Kind**: inner method of [<code>jwt/parse</code>](#module_jwt/parse)  
**Returns**: <code>object</code> - decodedJwt  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | jwt token |

**Example**  
```js
sk.jwt.parseJWT(token);
```

* * *

<a name="module_jwt/validate"></a>

### jwt/validate

* * *

<a name="module_jwt/validate..validateJWT"></a>

#### `jwt/validate~validateJWT(token, requestedAlgorithm, key)` ⇒ <code>Promise.&lt;(object\|null)&gt;</code>
Validate a JWT token

**Kind**: inner method of [<code>jwt/validate</code>](#module_jwt/validate)  
**Returns**: <code>Promise.&lt;(object\|null)&gt;</code> - decodedJwt  
**Throws**:

- if unknown algorithm provided


| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | jwt token |
| requestedAlgorithm | <code>string</code> | algorithm name |
| key | <code>string</code> | the key to validate the token against |

**Example**  
```js
sk.jwt.validateJWT(token, 'hmac', key);
```

* * *

<a name="module_key/hmac"></a>

### key/hmac

* [key/hmac](#module_key/hmac)
    * [`~generateHMACKey([length], [encoding])`](#module_key/hmac..generateHMACKey) ⇒ <code>Promise.&lt;(string\|Buffer)&gt;</code>
    * [`~generateHMACKey(secret, [encoding])`](#module_key/hmac..generateHMACKey) ⇒


* * *

<a name="module_key/hmac..generateHMACKey"></a>

#### `key/hmac~generateHMACKey([length], [encoding])` ⇒ <code>Promise.&lt;(string\|Buffer)&gt;</code>
Generate a HMAC Key

**Kind**: inner method of [<code>key/hmac</code>](#module_key/hmac)  
**Returns**: <code>Promise.&lt;(string\|Buffer)&gt;</code> - key  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [length] | <code>number</code> | <code>64</code> | key length in bytes |
| [encoding] | <code>string</code> | <code>&quot;base64&quot;</code> | the output encoding of the key |

**Example**  
```js
sk.key.generateHMACKey();
```

* * *

<a name="module_key/hmac..generateHMACKey"></a>

#### `key/hmac~generateHMACKey(secret, [encoding])` ⇒
Calculate the bytes length of secret key

**Kind**: inner method of [<code>key/hmac</code>](#module_key/hmac)  
**Returns**: number  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| secret | <code>string</code> |  |  |
| [encoding] | <code>string</code> | <code>&quot;base64&quot;</code> | the input encoding of the secret |

**Example**  
```js
sk.key.getSecretLength(secret);
```

* * *

<a name="module_key/rsa"></a>

### key/rsa

* * *

<a name="module_key/rsa..generateRSAKeyPair"></a>

#### `key/rsa~generateRSAKeyPair([length])` ⇒ <code>Promise.&lt;object&gt;</code>
Generate a RSA Key Pair

**Kind**: inner method of [<code>key/rsa</code>](#module_key/rsa)  
**Returns**: <code>Promise.&lt;object&gt;</code> - keypair - contains publicKey adn privateKey  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [length] | <code>number</code> | <code>4096</code> | key length in bytes |

**Example**  
```js
sk.key.generateRSAKeyPair();
```

* * *

<a name="module_key/validate-private-key"></a>

### key/validate-private-key

* * *

<a name="module_key/validate-private-key..checkSecretLength"></a>

#### `key/validate-private-key~checkSecretLength(key, algorithm)` ⇒ <code>boolean</code>
Checks if secret length is good enough

**Kind**: inner method of [<code>key/validate-private-key</code>](#module_key/validate-private-key)  
**Returns**: <code>boolean</code> - - isKeyLongEnough  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 
| algorithm | <code>string</code> | 

**Example**  
```js
sk.key.checkSecretLength();
```

* * *

<a name="module_kycc/get-user-data-for-token"></a>

### kycc/get-user-data-for-token

* [kycc/get-user-data-for-token](#module_kycc/get-user-data-for-token)
    * [`~getUserDataForToken(token, options)`](#module_kycc/get-user-data-for-token..getUserDataForToken) ⇒ <code>Promise.&lt;KYCCUserObject&gt;</code>
    * [`~FileProcessor`](#module_kycc/get-user-data-for-token..FileProcessor)
    * [`~GetUserDataForTokenOptions`](#module_kycc/get-user-data-for-token..GetUserDataForTokenOptions)
    * [`~KYCCUserObject`](#module_kycc/get-user-data-for-token..KYCCUserObject)


* * *

<a name="module_kycc/get-user-data-for-token..getUserDataForToken"></a>

#### `kycc/get-user-data-for-token~getUserDataForToken(token, options)` ⇒ <code>Promise.&lt;KYCCUserObject&gt;</code>
Fetch user data via token

**Kind**: inner method of [<code>kycc/get-user-data-for-token</code>](#module_kycc/get-user-data-for-token)  
**Returns**: <code>Promise.&lt;KYCCUserObject&gt;</code> - user object  
**Throws**:

- if no instanceUrl in options
- if no templateId in options
- if invalid token
- if invalid user for token


| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | jwt token |
| options | <code>GetUserDataForTokenOptions</code> |  |

**Example**  
```js
async sk.kycc.getUserDataForToken(token, options);
```

* * *

<a name="module_kycc/get-user-data-for-token..FileProcessor"></a>

#### `kycc/get-user-data-for-token~FileProcessor`
File Processor

**Kind**: inner typedef of [<code>kycc/get-user-data-for-token</code>](#module_kycc/get-user-data-for-token)  
**Properties**

| Name | Type |
| --- | --- |
| stream | <code>boolean</code> | 
| process | <code>function</code> | 

**Example**  
```js
{ stream: false, process: (file, id) => file }
```

* * *

<a name="module_kycc/get-user-data-for-token..GetUserDataForTokenOptions"></a>

#### `kycc/get-user-data-for-token~GetUserDataForTokenOptions`
Options used in getUserDataForToken function

**Kind**: inner typedef of [<code>kycc/get-user-data-for-token</code>](#module_kycc/get-user-data-for-token)  
**Properties**

| Name | Type |
| --- | --- |
| instanceUrl | <code>string</code> | 
| templateId | <code>string</code> | 
| fileProcessor | <code>FileProcessor</code> | 


* * *

<a name="module_kycc/get-user-data-for-token..KYCCUserObject"></a>

#### `kycc/get-user-data-for-token~KYCCUserObject`
User Object

**Kind**: inner typedef of [<code>kycc/get-user-data-for-token</code>](#module_kycc/get-user-data-for-token)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id of user in KYCC |
| attributes | <code>object</code> | map from attribute id to attribute value |

**Example**  
```js
{
	id: '5ddd5b1656fbcef0dd389637',
	attributes: {
		firstName: {
			id: '5d076f0a315423134405cbc4',
			label: 'First Name',
			required: true,
			schema: 'http://platform.selfkey.org/schema/attribute/first-name.json',
			valid: true,
			value: 'first-name'
		},
		lastName: {
			label: 'Last Name',
			id: '5d076f20315423f5db05cbc6',
			required: true,
			schema: 'http://platform.selfkey.org/schema/attribute/last-name.json',
			valid: true,
			value: 'last-name'
		},
		email: {
			id: '5d13577f72089544cb86cda7',
			label: 'Email Address',
			required: true,
			schema: 'http://platform.selfkey.org/schema/attribute/email.json',
			valid: true,
			value: 'test-4952@test.com'
		},
	}
```

* * *

<a name="module_kycc/kycc-integrations-client"></a>

### kycc/kycc-integrations-client

* [kycc/kycc-integrations-client](#module_kycc/kycc-integrations-client)
    * [`~listUsersFn(filters, fields)`](#module_kycc/kycc-integrations-client..listUsersFn) ⇒ <code>Promise.&lt;Array.&lt;KYCCUser&gt;&gt;</code>
    * [`~getUserFn(userId, fields)`](#module_kycc/kycc-integrations-client..getUserFn) ⇒ <code>Promise.&lt;KYCCUser&gt;</code>
    * [`~listApplicationsFn(filters, fields)`](#module_kycc/kycc-integrations-client..listApplicationsFn) ⇒ <code>Promise.&lt;Array.&lt;KYCCApplication&gt;&gt;</code>
    * [`~getApplicationFn(applicationID, fields)`](#module_kycc/kycc-integrations-client..getApplicationFn) ⇒ <code>Promise.&lt;KYCCApplication&gt;</code>
    * [`~changeApplicationStatusFn(applicationID, statusCode, note)`](#module_kycc/kycc-integrations-client..changeApplicationStatusFn) ⇒ <code>Promise.&lt;KYCCApplication&gt;</code>
    * [`~invalidateApplicationAttributesFn(applicationID, attributes)`](#module_kycc/kycc-integrations-client..invalidateApplicationAttributesFn) ⇒ <code>Promise.&lt;string&gt;</code>
    * [`~invalidateApplicationQuestionsFn(applicationID, questions)`](#module_kycc/kycc-integrations-client..invalidateApplicationQuestionsFn) ⇒ <code>Promise.&lt;string&gt;</code>
    * [`~addApplicationQuestionFn(applicationID, question)`](#module_kycc/kycc-integrations-client..addApplicationQuestionFn) ⇒ <code>Promise.&lt;string&gt;</code>
    * [`~addApplicationAttributeFn(applicationID, attribute)`](#module_kycc/kycc-integrations-client..addApplicationAttributeFn) ⇒ <code>Promise.&lt;string&gt;</code>
    * [`~applicationAddAttachment(applicationId, attachmentType, attachment)`](#module_kycc/kycc-integrations-client..applicationAddAttachment) ⇒ <code>Promise.&lt;string&gt;</code>
    * [`~updateApplicationFn(applicationID, update)`](#module_kycc/kycc-integrations-client..updateApplicationFn) ⇒ <code>Promise.&lt;KYCCApplication&gt;</code>
    * [`~getFileFn(fileId, options)`](#module_kycc/kycc-integrations-client..getFileFn) ⇒ <code>Promise.&lt;KYCCApplicationFile&gt;</code>
    * [`~createClient(options)`](#module_kycc/kycc-integrations-client..createClient) ⇒ <code>KYCCIntegrationsApiClient</code>
    * [`~KYCCQuestion`](#module_kycc/kycc-integrations-client..KYCCQuestion)
    * [`~KYCCAttribute`](#module_kycc/kycc-integrations-client..KYCCAttribute)
    * [`~Document`](#module_kycc/kycc-integrations-client..Document)
    * [`~KYCCApplication`](#module_kycc/kycc-integrations-client..KYCCApplication)
    * [`~KYCCIntegrationsApiClient`](#module_kycc/kycc-integrations-client..KYCCIntegrationsApiClient) ⇒ <code>Array.&lt;KYCCApplication&gt;</code>
    * [`~KYCCIntegrationsApiOptions`](#module_kycc/kycc-integrations-client..KYCCIntegrationsApiOptions) : <code>Object</code>


* * *

<a name="module_kycc/kycc-integrations-client..listUsersFn"></a>

#### `kycc/kycc-integrations-client~listUsersFn(filters, fields)` ⇒ <code>Promise.&lt;Array.&lt;KYCCUser&gt;&gt;</code>
**Kind**: inner method of [<code>kycc/kycc-integrations-client</code>](#module_kycc/kycc-integrations-client)  
**Returns**: <code>Promise.&lt;Array.&lt;KYCCUser&gt;&gt;</code> - users  

| Param | Type |
| --- | --- |
| filters | <code>object</code> | 
| fields | <code>Array.&lt;string&gt;</code> | 

**Example**  
```js
const users = await kyccClient.users.list();
```

* * *

<a name="module_kycc/kycc-integrations-client..getUserFn"></a>

#### `kycc/kycc-integrations-client~getUserFn(userId, fields)` ⇒ <code>Promise.&lt;KYCCUser&gt;</code>
**Kind**: inner method of [<code>kycc/kycc-integrations-client</code>](#module_kycc/kycc-integrations-client)  
**Returns**: <code>Promise.&lt;KYCCUser&gt;</code> - user  

| Param | Type |
| --- | --- |
| userId | <code>string</code> | 
| fields | <code>Array.&lt;string&gt;</code> | 

**Example**  
```js
const user = await kyccClient.users.get("asdasdasdas");
```

* * *

<a name="module_kycc/kycc-integrations-client..listApplicationsFn"></a>

#### `kycc/kycc-integrations-client~listApplicationsFn(filters, fields)` ⇒ <code>Promise.&lt;Array.&lt;KYCCApplication&gt;&gt;</code>
**Kind**: inner method of [<code>kycc/kycc-integrations-client</code>](#module_kycc/kycc-integrations-client)  
**Returns**: <code>Promise.&lt;Array.&lt;KYCCApplication&gt;&gt;</code> - applications  

| Param | Type |
| --- | --- |
| filters | <code>object</code> | 
| fields | <code>Array.&lt;string&gt;</code> | 

**Example**  
```js
const applications = await kyccClient.applications.list({templateId: 'sdasdasdsaa'}, ['managers', 'currentStatus']);
```

* * *

<a name="module_kycc/kycc-integrations-client..getApplicationFn"></a>

#### `kycc/kycc-integrations-client~getApplicationFn(applicationID, fields)` ⇒ <code>Promise.&lt;KYCCApplication&gt;</code>
**Kind**: inner method of [<code>kycc/kycc-integrations-client</code>](#module_kycc/kycc-integrations-client)  
**Returns**: <code>Promise.&lt;KYCCApplication&gt;</code> - application  

| Param | Type |
| --- | --- |
| applicationID | <code>string</code> | 
| fields | <code>Array.&lt;string&gt;</code> | 

**Example**  
```js
const application = await kyccClient.applications.get("asdasdasdas");
```

* * *

<a name="module_kycc/kycc-integrations-client..changeApplicationStatusFn"></a>

#### `kycc/kycc-integrations-client~changeApplicationStatusFn(applicationID, statusCode, note)` ⇒ <code>Promise.&lt;KYCCApplication&gt;</code>
**Kind**: inner method of [<code>kycc/kycc-integrations-client</code>](#module_kycc/kycc-integrations-client)  
**Returns**: <code>Promise.&lt;KYCCApplication&gt;</code> - updated application  

| Param | Type | Description |
| --- | --- | --- |
| applicationID | <code>string</code> |  |
| statusCode | <code>integer</code> |  |
| note | <code>string</code> | (optional) |

**Example**  
```js
const application = await kyccClient.applications.changeStatus("asdasdasdas", 8, 'testing status change');
```

* * *

<a name="module_kycc/kycc-integrations-client..invalidateApplicationAttributesFn"></a>

#### `kycc/kycc-integrations-client~invalidateApplicationAttributesFn(applicationID, attributes)` ⇒ <code>Promise.&lt;string&gt;</code>
**Kind**: inner method of [<code>kycc/kycc-integrations-client</code>](#module_kycc/kycc-integrations-client)  
**Returns**: <code>Promise.&lt;string&gt;</code> - OK/Error  

| Param | Type | Description |
| --- | --- | --- |
| applicationID | <code>string</code> |  |
| attributes | <code>Array.&lt;string&gt;</code> | a list of attribute ids |

**Example**  
```js
await kyccClient.applications.attributes.invalidate("asdasdasdas", ["sdasdasdsa", "dsadasdasdasd"]);
```

* * *

<a name="module_kycc/kycc-integrations-client..invalidateApplicationQuestionsFn"></a>

#### `kycc/kycc-integrations-client~invalidateApplicationQuestionsFn(applicationID, questions)` ⇒ <code>Promise.&lt;string&gt;</code>
**Kind**: inner method of [<code>kycc/kycc-integrations-client</code>](#module_kycc/kycc-integrations-client)  
**Returns**: <code>Promise.&lt;string&gt;</code> - OK/Error  

| Param | Type | Description |
| --- | --- | --- |
| applicationID | <code>string</code> |  |
| questions | <code>Array.&lt;string&gt;</code> | a list of question ids |

**Example**  
```js
await kyccClient.applications.questions.invalidate("asdasdasdas", ["sdasdasdsa", "dsadasdasdasd"]);
```

* * *

<a name="module_kycc/kycc-integrations-client..addApplicationQuestionFn"></a>

#### `kycc/kycc-integrations-client~addApplicationQuestionFn(applicationID, question)` ⇒ <code>Promise.&lt;string&gt;</code>
**Kind**: inner method of [<code>kycc/kycc-integrations-client</code>](#module_kycc/kycc-integrations-client)  
**Returns**: <code>Promise.&lt;string&gt;</code> - Created/Error  

| Param | Type |
| --- | --- |
| applicationID | <code>string</code> | 
| question | <code>KYCCQuestion</code> | 

**Example**  
```js
await kyccClient.applications.questions.add("asdasdasdas", {
 description: "test question",
 label: 'test',
 question: 'what would you say about test?'
 optional: false
});
```

* * *

<a name="module_kycc/kycc-integrations-client..addApplicationAttributeFn"></a>

#### `kycc/kycc-integrations-client~addApplicationAttributeFn(applicationID, attribute)` ⇒ <code>Promise.&lt;string&gt;</code>
**Kind**: inner method of [<code>kycc/kycc-integrations-client</code>](#module_kycc/kycc-integrations-client)  
**Returns**: <code>Promise.&lt;string&gt;</code> - Created/Error  

| Param | Type |
| --- | --- |
| applicationID | <code>string</code> | 
| attribute | <code>KYCCAttribute</code> | 

**Example**  
```js
await kyccClient.applications.attributes.add("asdasdasdas", {
 description: "test attribute",
 label: 'test',
 schema: 'http://platform.selfkey.org/schema/attribute/fingerprint.json'
 optional: false
});
```

* * *

<a name="module_kycc/kycc-integrations-client..applicationAddAttachment"></a>

#### `kycc/kycc-integrations-client~applicationAddAttachment(applicationId, attachmentType, attachment)` ⇒ <code>Promise.&lt;string&gt;</code>
**Kind**: inner method of [<code>kycc/kycc-integrations-client</code>](#module_kycc/kycc-integrations-client)  
**Returns**: <code>Promise.&lt;string&gt;</code> - Created/Error  

| Param | Type |
| --- | --- |
| applicationId | <code>string</code> | 
| attachmentType | <code>string</code> | 
| attachment | <code>Document</code> | 

**Example**  
```js
await kyccClient.applications.attachments.add("sdasdasda", "credential", {
  buffer: Buffer.from('text file value', 'utf8'),
  mimeType: 'text/plain',
  filename: 'credential.txt'
});
```

* * *

<a name="module_kycc/kycc-integrations-client..updateApplicationFn"></a>

#### `kycc/kycc-integrations-client~updateApplicationFn(applicationID, update)` ⇒ <code>Promise.&lt;KYCCApplication&gt;</code>
**Kind**: inner method of [<code>kycc/kycc-integrations-client</code>](#module_kycc/kycc-integrations-client)  
**Returns**: <code>Promise.&lt;KYCCApplication&gt;</code> - updated application  

| Param | Type | Description |
| --- | --- | --- |
| applicationID | <code>string</code> |  |
| update | <code>object</code> | application update object |

**Example**  
```js
await kyccClient.applications.update("asdasdasdas", {
 attributes: {
		"sdasdasdsa": { value: 'updated value' }
	}
});
```

* * *

<a name="module_kycc/kycc-integrations-client..getFileFn"></a>

#### `kycc/kycc-integrations-client~getFileFn(fileId, options)` ⇒ <code>Promise.&lt;KYCCApplicationFile&gt;</code>
**Kind**: inner method of [<code>kycc/kycc-integrations-client</code>](#module_kycc/kycc-integrations-client)  
**Returns**: <code>Promise.&lt;KYCCApplicationFile&gt;</code> - file contents  

| Param | Type |
| --- | --- |
| fileId | <code>string</code> | 
| options | <code>object</code> | 

**Example**  
```js
await kyccClient.files.get("asdasdasdas");
```

* * *

<a name="module_kycc/kycc-integrations-client..createClient"></a>

#### `kycc/kycc-integrations-client~createClient(options)` ⇒ <code>KYCCIntegrationsApiClient</code>
Create KYC-Chain integrations api client

**Kind**: inner method of [<code>kycc/kycc-integrations-client</code>](#module_kycc/kycc-integrations-client)  

| Param | Type |
| --- | --- |
| options | <code>KYCCIntegrationsApiOptions</code> | 

**Example**  
```js
const kyccClient = async sk.kycc.createKYCCIntegrationsClient(options);
```

* * *

<a name="module_kycc/kycc-integrations-client..KYCCQuestion"></a>

#### `kycc/kycc-integrations-client~KYCCQuestion`
**Kind**: inner typedef of [<code>kycc/kycc-integrations-client</code>](#module_kycc/kycc-integrations-client)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| description | <code>string</code> |  |
| label | <code>string</code> |  |
| question | <code>string</code> |  |
| optional | <code>boolean</code> |  |
| options | <code>Array.&lt;string&gt;</code> | for select |
| type | <code>string</code> | one of: input, checkbox, select, date |


* * *

<a name="module_kycc/kycc-integrations-client..KYCCAttribute"></a>

#### `kycc/kycc-integrations-client~KYCCAttribute`
**Kind**: inner typedef of [<code>kycc/kycc-integrations-client</code>](#module_kycc/kycc-integrations-client)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| description | <code>string</code> |  |
| label | <code>string</code> |  |
| optional | <code>boolean</code> |  |
| schema | <code>string</code> | json schema id, one of https://platform.selfkey.org/repository.json |


* * *

<a name="module_kycc/kycc-integrations-client..Document"></a>

#### `kycc/kycc-integrations-client~Document`
**Kind**: inner typedef of [<code>kycc/kycc-integrations-client</code>](#module_kycc/kycc-integrations-client)  
**Properties**

| Name | Type |
| --- | --- |
| buffer | <code>binary</code> | 
| mimeType | <code>string</code> | 
| filename | <code>string</code> | 


* * *

<a name="module_kycc/kycc-integrations-client..KYCCApplication"></a>

#### `kycc/kycc-integrations-client~KYCCApplication`
KYC-Chain application object

**Kind**: inner typedef of [<code>kycc/kycc-integrations-client</code>](#module_kycc/kycc-integrations-client)  

* * *

<a name="module_kycc/kycc-integrations-client..KYCCIntegrationsApiClient"></a>

#### `kycc/kycc-integrations-client~KYCCIntegrationsApiClient` ⇒ <code>Array.&lt;KYCCApplication&gt;</code>
KYC-Chain integrations api client

**Kind**: inner typedef of [<code>kycc/kycc-integrations-client</code>](#module_kycc/kycc-integrations-client)  
**Properties**

| Name | Type |
| --- | --- |
| applications.list | <code>listApplicationsFn</code> | 
| applications.get | <code>getApplicationFn</code> | 
| applications.update | <code>updateApplicationFn</code> | 
| applications.changeStatus | <code>changeApplicationStatusFn</code> | 
| applications.attributes.add | <code>addApplicationAttributeFn</code> | 
| applications.attributes.invalidate | <code>invalidateApplicationAttributesFn</code> | 
| applications.questions.add | <code>addApplicationQuestionFn</code> | 
| applications.questions.invalidate | <code>invalidateApplicationQuestionsFn</code> | 
| files.get | <code>getFileFn</code> | 

**Example**  
```js
const applicationId = "some application id";
const application = await kyccClient.applications.get(applicationId);
await kyccClient.applications.changeStatus(applicationId, kyccClient.statuses.APPROVED);
```

* * *

<a name="module_kycc/kycc-integrations-client..KYCCIntegrationsApiOptions"></a>

#### `kycc/kycc-integrations-client~KYCCIntegrationsApiOptions` : <code>Object</code>
Options used in createKYCCIntegrationsClient function

**Kind**: inner typedef of [<code>kycc/kycc-integrations-client</code>](#module_kycc/kycc-integrations-client)  
**Properties**

| Name | Type |
| --- | --- |
| instanceUrl | <code>string</code> | 
| apiKey | <code>string</code> | 


* * *


<a name="examples"></a>

## Examples

- Login with Selfkey for kycc user https://github.com/SelfKeyFoundation/relying-party-kycc-demo
- Login with Selfkey for direct integrations https://github.com/SelfKeyFoundation/relying-party-direct-demo
- Marketplace integrations with kycc as middleware https://github.com/SelfKeyFoundation/relying-party-mp-kycc-demo

<a name="license"></a>
## License

[The GPL-3.0 License](http://opensource.org/licenses/GPL-3.0)

Copyright (c) 2018 SelfKey Foundation <https://selfkey.org/>

