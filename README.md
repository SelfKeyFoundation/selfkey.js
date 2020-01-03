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
- [License](#license)

## Install

Requires [Node](https://nodejs.org/en/) version 10 or abow

```sh
npm install --save @selfkey/node-lib
```

## Contents

- [Usage](#usage)
- [API](#api)
- [License](#license)

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
### 

* [`auth`](#auth) : <code>object</code>
    * [`.generateAccessToken(did, algorithm, secret, [expiresIn])`](#auth.generateAccessToken) ⇒ <code>Promise.&lt;string&gt;</code>
    * [`.generateChallengeToken(did, algorithm, secret, [expiresIn])`](#auth.generateChallengeToken) ⇒ <code>Promise.&lt;string&gt;</code>
    * [`.generateNonce([length])`](#auth.generateNonce) ⇒ <code>Promise.&lt;string&gt;</code>
    * [`.validateAccessToken(token, algorithm, key)`](#auth.validateAccessToken) ⇒ <code>Promise.&lt;object&gt;</code>
    * [`.validateChallengeToken(token, algorithm, key)`](#auth.validateChallengeToken) ⇒ <code>Promise.&lt;object&gt;</code>
    * [`.verifyChallengeSignature(nonce, signature, did)`](#auth.verifyChallengeSignature) ⇒ <code>Promise.&lt;boolean&gt;</code>
* [`did`](#did) : <code>object</code>
    * [`.resolvers`](#did.resolvers) : <code>object</code>
    * [`.parse(did)`](#did.parse) ⇒ <code>object</code>
    * [`.isSupported(did)`](#did.isSupported) ⇒ <code>boolean</code>
    * [`.resolve(did)`](#did.resolve) ⇒ <code>object</code>
    * [`.registerMethodResolver(method, resolver)`](#did.registerMethodResolver)
* [`identity`](#identity) : <code>object</code>
    * [.AttributeManager](#identity.AttributeManager)
        * [`new AttributeManager()`](#new_identity.AttributeManager_new)
        * [.exports.AttributeManager](#identity.AttributeManager.exports.AttributeManager)
            * [`new exports.AttributeManager()`](#new_identity.AttributeManager.exports.AttributeManager_new)
        * [`.AttributeManager#addRepository(repository)`](#identity.AttributeManager.AttributeManager+addRepository)
        * [`.AttributeManager#removeRepository(repository)`](#identity.AttributeManager.AttributeManager+removeRepository)
        * [`.AttributeManager#findRepositoryForAttribute(attr)`](#identity.AttributeManager.AttributeManager+findRepositoryForAttribute) ⇒ [<code>Repository</code>](#identity.Repository) \| <code>null</code>
        * [`.AttributeManager#zipAttributesWithRequirements(attributes, [requirements])`](#identity.AttributeManager.AttributeManager+zipAttributesWithRequirements) ⇒ <code>Array</code>
        * [`.AttributeManager#validateOneAttribute(attr, requirement)`](#identity.AttributeManager.AttributeManager+validateOneAttribute) ⇒ <code>object</code>
        * [`.AttributeManager#validateAttributes(attributes, requirements)`](#identity.AttributeManager.AttributeManager+validateAttributes) ⇒ <code>object</code>
    * [.Repository](#identity.Repository)
        * [`new Repository()`](#new_identity.Repository_new)
        * [.exports.Repository](#identity.Repository.exports.Repository)
            * [`new exports.Repository([config])`](#new_identity.Repository.exports.Repository_new)
        * [`.Repository#resolveAll()`](#identity.Repository.Repository+resolveAll)
        * [`.Repository#resolveJsonSchema(schema, [config])`](#identity.Repository.Repository+resolveJsonSchema) ⇒ <code>object</code>
        * [`.Repository#resolveUiSchema(schema, [config])`](#identity.Repository.Repository+resolveUiSchema) ⇒ <code>object</code>
        * [`.Repository#getValidator()`](#identity.Repository.Repository+getValidator) ⇒
        * [`.Repository#validateData(schemaId, data)`](#identity.Repository.Repository+validateData) ⇒ <code>object</code>
    * [`.utils`](#identity.utils) : <code>object</code>
        * [`.attributeMapBySchema(attributes)`](#identity.utils.attributeMapBySchema) ⇒ <code>object</code>
        * [`.resolveAttributeFiles(all, fileProcessor)`](#identity.utils.resolveAttributeFiles) ⇒ <code>object</code>
        * [`.denormalizeDocumentsSchema(typeSchema, value, documents, maxDepth)`](#identity.utils.denormalizeDocumentsSchema) ⇒ <code>object</code>
        * [`.normalizeDocumentsSchema(typeSchema, value, documents, maxDepth)`](#identity.utils.normalizeDocumentsSchema) ⇒ <code>object</code>
        * [`.schemaContainsFile(schema, maxDepth)`](#identity.utils.schemaContainsFile) ⇒ <code>boolean</code>
        * [`.fetchJson(url, options)`](#identity.utils.fetchJson) ⇒ <code>Promise.&lt;object&gt;</code>
        * [`.dereferenceSchema(schema, options)`](#identity.utils.dereferenceSchema) ⇒ <code>Promise.&lt;object&gt;</code>
* [`jwt`](#jwt) : <code>object</code>
    * [`.issueJWT(subject, requestedAlgorithm, secret, [expiresIn], additionalClaims)`](#jwt.issueJWT) ⇒ <code>Promise.&lt;string&gt;</code>
    * [`.parseJWT(token)`](#jwt.parseJWT) ⇒ <code>object</code>
    * [`.validateJWT(token, requestedAlgorithm, key)`](#jwt.validateJWT) ⇒ <code>Promise.&lt;(object\|null)&gt;</code>
* [`key`](#key) : <code>object</code>
    * [`.generateHMACKey([length], [encoding])`](#key.generateHMACKey) ⇒ <code>Promise.&lt;(string\|Buffer)&gt;</code>
    * [`.generateHMACKey(secret, [encoding])`](#key.generateHMACKey) ⇒
    * [`.generateRSAKeyPair([length])`](#key.generateRSAKeyPair) ⇒ <code>Promise.&lt;object&gt;</code>
    * [`.checkSecretLength(key, algorithm)`](#key.checkSecretLength) ⇒ <code>boolean</code>
* [`kycc`](#kycc) : <code>object</code>
    * [`.getUserDataForToken(token, options)`](#kycc.getUserDataForToken) ⇒ [<code>Promise.&lt;KYCCUserObject&gt;</code>](#KYCCUserObject)

### 

* [`FileProcessor`](#FileProcessor)
* [`GetUserDataForTokenOptions`](#GetUserDataForTokenOptions)
* [`KYCCUserObject`](#KYCCUserObject)

<a name="auth"></a>

### `auth` : <code>object</code>
Authentication Namespace

**Kind**: global namespace  

* [`auth`](#auth) : <code>object</code>
    * [`.generateAccessToken(did, algorithm, secret, [expiresIn])`](#auth.generateAccessToken) ⇒ <code>Promise.&lt;string&gt;</code>
    * [`.generateChallengeToken(did, algorithm, secret, [expiresIn])`](#auth.generateChallengeToken) ⇒ <code>Promise.&lt;string&gt;</code>
    * [`.generateNonce([length])`](#auth.generateNonce) ⇒ <code>Promise.&lt;string&gt;</code>
    * [`.validateAccessToken(token, algorithm, key)`](#auth.validateAccessToken) ⇒ <code>Promise.&lt;object&gt;</code>
    * [`.validateChallengeToken(token, algorithm, key)`](#auth.validateChallengeToken) ⇒ <code>Promise.&lt;object&gt;</code>
    * [`.verifyChallengeSignature(nonce, signature, did)`](#auth.verifyChallengeSignature) ⇒ <code>Promise.&lt;boolean&gt;</code>


* * *

<a name="auth.generateAccessToken"></a>

#### `auth.generateAccessToken(did, algorithm, secret, [expiresIn])` ⇒ <code>Promise.&lt;string&gt;</code>
Generate access token

**Kind**: static method of [<code>auth</code>](#auth)  
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

<a name="auth.generateChallengeToken"></a>

#### `auth.generateChallengeToken(did, algorithm, secret, [expiresIn])` ⇒ <code>Promise.&lt;string&gt;</code>
Generate challenge token

**Kind**: static method of [<code>auth</code>](#auth)  
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

<a name="auth.generateNonce"></a>

#### `auth.generateNonce([length])` ⇒ <code>Promise.&lt;string&gt;</code>
Generates base64 encoded random string

**Kind**: static method of [<code>auth</code>](#auth)  
**Returns**: <code>Promise.&lt;string&gt;</code> - nonce  

| Param | Type | Default |
| --- | --- | --- |
| [length] | <code>number</code> | <code>64</code> | 

**Example**  
```js
await sk.auth.generateNonce();
```

* * *

<a name="auth.validateAccessToken"></a>

#### `auth.validateAccessToken(token, algorithm, key)` ⇒ <code>Promise.&lt;object&gt;</code>
Validates access token

**Kind**: static method of [<code>auth</code>](#auth)  
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

<a name="auth.validateChallengeToken"></a>

#### `auth.validateChallengeToken(token, algorithm, key)` ⇒ <code>Promise.&lt;object&gt;</code>
Validates challenge token

**Kind**: static method of [<code>auth</code>](#auth)  
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

<a name="auth.verifyChallengeSignature"></a>

#### `auth.verifyChallengeSignature(nonce, signature, did)` ⇒ <code>Promise.&lt;boolean&gt;</code>
Validates challenge Signature

**Kind**: static method of [<code>auth</code>](#auth)  
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

<a name="did"></a>

### `did` : <code>object</code>
DID Namespace

**Kind**: global namespace  

* [`did`](#did) : <code>object</code>
    * [`.resolvers`](#did.resolvers) : <code>object</code>
    * [`.parse(did)`](#did.parse) ⇒ <code>object</code>
    * [`.isSupported(did)`](#did.isSupported) ⇒ <code>boolean</code>
    * [`.resolve(did)`](#did.resolve) ⇒ <code>object</code>
    * [`.registerMethodResolver(method, resolver)`](#did.registerMethodResolver)


* * *

<a name="did.resolvers"></a>

#### `did.resolvers` : <code>object</code>
**Kind**: static constant of [<code>did</code>](#did)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| eth | <code>object</code> | eth did resolver |
| sekfkey | <code>object</code> | selfkey did resolver |


* * *

<a name="did.parse"></a>

#### `did.parse(did)` ⇒ <code>object</code>
Parses did string to components

**Kind**: static method of [<code>did</code>](#did)  
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

<a name="did.isSupported"></a>

#### `did.isSupported(did)` ⇒ <code>boolean</code>
Checks if a resolver exists for that particular did

**Kind**: static method of [<code>did</code>](#did)  
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

<a name="did.resolve"></a>

#### `did.resolve(did)` ⇒ <code>object</code>
Resolves did document

**Kind**: static method of [<code>did</code>](#did)  
**Returns**: <code>object</code> - didDocument  

| Param | Type |
| --- | --- |
| did | <code>string</code> | 

**Example**  
```js
await sk.did.resolve('did:selfkey:0xdsdasddasdsa...');
```

* * *

<a name="did.registerMethodResolver"></a>

#### `did.registerMethodResolver(method, resolver)`
Register custom resolver for a did method

**Kind**: static method of [<code>did</code>](#did)  

| Param | Type |
| --- | --- |
| method | <code>string</code> | 
| resolver | <code>object</code> | 

**Example**  
```js
sk.did.register('new-method', resolver);
```

* * *

<a name="identity"></a>

### `identity` : <code>object</code>
Identity Namespace

**Kind**: global namespace  

* [`identity`](#identity) : <code>object</code>
    * [.AttributeManager](#identity.AttributeManager)
        * [`new AttributeManager()`](#new_identity.AttributeManager_new)
        * [.exports.AttributeManager](#identity.AttributeManager.exports.AttributeManager)
            * [`new exports.AttributeManager()`](#new_identity.AttributeManager.exports.AttributeManager_new)
        * [`.AttributeManager#addRepository(repository)`](#identity.AttributeManager.AttributeManager+addRepository)
        * [`.AttributeManager#removeRepository(repository)`](#identity.AttributeManager.AttributeManager+removeRepository)
        * [`.AttributeManager#findRepositoryForAttribute(attr)`](#identity.AttributeManager.AttributeManager+findRepositoryForAttribute) ⇒ [<code>Repository</code>](#identity.Repository) \| <code>null</code>
        * [`.AttributeManager#zipAttributesWithRequirements(attributes, [requirements])`](#identity.AttributeManager.AttributeManager+zipAttributesWithRequirements) ⇒ <code>Array</code>
        * [`.AttributeManager#validateOneAttribute(attr, requirement)`](#identity.AttributeManager.AttributeManager+validateOneAttribute) ⇒ <code>object</code>
        * [`.AttributeManager#validateAttributes(attributes, requirements)`](#identity.AttributeManager.AttributeManager+validateAttributes) ⇒ <code>object</code>
    * [.Repository](#identity.Repository)
        * [`new Repository()`](#new_identity.Repository_new)
        * [.exports.Repository](#identity.Repository.exports.Repository)
            * [`new exports.Repository([config])`](#new_identity.Repository.exports.Repository_new)
        * [`.Repository#resolveAll()`](#identity.Repository.Repository+resolveAll)
        * [`.Repository#resolveJsonSchema(schema, [config])`](#identity.Repository.Repository+resolveJsonSchema) ⇒ <code>object</code>
        * [`.Repository#resolveUiSchema(schema, [config])`](#identity.Repository.Repository+resolveUiSchema) ⇒ <code>object</code>
        * [`.Repository#getValidator()`](#identity.Repository.Repository+getValidator) ⇒
        * [`.Repository#validateData(schemaId, data)`](#identity.Repository.Repository+validateData) ⇒ <code>object</code>
    * [`.utils`](#identity.utils) : <code>object</code>
        * [`.attributeMapBySchema(attributes)`](#identity.utils.attributeMapBySchema) ⇒ <code>object</code>
        * [`.resolveAttributeFiles(all, fileProcessor)`](#identity.utils.resolveAttributeFiles) ⇒ <code>object</code>
        * [`.denormalizeDocumentsSchema(typeSchema, value, documents, maxDepth)`](#identity.utils.denormalizeDocumentsSchema) ⇒ <code>object</code>
        * [`.normalizeDocumentsSchema(typeSchema, value, documents, maxDepth)`](#identity.utils.normalizeDocumentsSchema) ⇒ <code>object</code>
        * [`.schemaContainsFile(schema, maxDepth)`](#identity.utils.schemaContainsFile) ⇒ <code>boolean</code>
        * [`.fetchJson(url, options)`](#identity.utils.fetchJson) ⇒ <code>Promise.&lt;object&gt;</code>
        * [`.dereferenceSchema(schema, options)`](#identity.utils.dereferenceSchema) ⇒ <code>Promise.&lt;object&gt;</code>


* * *

<a name="identity.AttributeManager"></a>

#### identity.AttributeManager
**Kind**: static class of [<code>identity</code>](#identity)  

* [.AttributeManager](#identity.AttributeManager)
    * [`new AttributeManager()`](#new_identity.AttributeManager_new)
    * [.exports.AttributeManager](#identity.AttributeManager.exports.AttributeManager)
        * [`new exports.AttributeManager()`](#new_identity.AttributeManager.exports.AttributeManager_new)
    * [`.AttributeManager#addRepository(repository)`](#identity.AttributeManager.AttributeManager+addRepository)
    * [`.AttributeManager#removeRepository(repository)`](#identity.AttributeManager.AttributeManager+removeRepository)
    * [`.AttributeManager#findRepositoryForAttribute(attr)`](#identity.AttributeManager.AttributeManager+findRepositoryForAttribute) ⇒ [<code>Repository</code>](#identity.Repository) \| <code>null</code>
    * [`.AttributeManager#zipAttributesWithRequirements(attributes, [requirements])`](#identity.AttributeManager.AttributeManager+zipAttributesWithRequirements) ⇒ <code>Array</code>
    * [`.AttributeManager#validateOneAttribute(attr, requirement)`](#identity.AttributeManager.AttributeManager+validateOneAttribute) ⇒ <code>object</code>
    * [`.AttributeManager#validateAttributes(attributes, requirements)`](#identity.AttributeManager.AttributeManager+validateAttributes) ⇒ <code>object</code>


* * *

<a name="new_identity.AttributeManager_new"></a>

##### `new AttributeManager()`
Attribute Manager, manages multiple repositories of attributes


* * *

<a name="identity.AttributeManager.exports.AttributeManager"></a>

##### AttributeManager.exports.AttributeManager
**Kind**: static class of [<code>AttributeManager</code>](#identity.AttributeManager)  

* * *

<a name="new_identity.AttributeManager.exports.AttributeManager_new"></a>

###### `new exports.AttributeManager()`
Creates an instance of AttributeManager.


* * *

<a name="identity.AttributeManager.AttributeManager+addRepository"></a>

##### `AttributeManager.AttributeManager#addRepository(repository)`
Adds a new repository

**Kind**: static method of [<code>AttributeManager</code>](#identity.AttributeManager)  

| Param | Type |
| --- | --- |
| repository | [<code>Repository</code>](#identity.Repository) | 


* * *

<a name="identity.AttributeManager.AttributeManager+removeRepository"></a>

##### `AttributeManager.AttributeManager#removeRepository(repository)`
Remove a repository

**Kind**: static method of [<code>AttributeManager</code>](#identity.AttributeManager)  

| Param | Type |
| --- | --- |
| repository | [<code>Repository</code>](#identity.Repository) | 


* * *

<a name="identity.AttributeManager.AttributeManager+findRepositoryForAttribute"></a>

##### `AttributeManager.AttributeManager#findRepositoryForAttribute(attr)` ⇒ [<code>Repository</code>](#identity.Repository) \| <code>null</code>
Finds a repository for a given attribute

**Kind**: static method of [<code>AttributeManager</code>](#identity.AttributeManager)  

| Param | Type |
| --- | --- |
| attr | <code>object</code> \| <code>string</code> | 


* * *

<a name="identity.AttributeManager.AttributeManager+zipAttributesWithRequirements"></a>

##### `AttributeManager.AttributeManager#zipAttributesWithRequirements(attributes, [requirements])` ⇒ <code>Array</code>
Given an array of attributes and requirements, tries to much between them

**Kind**: static method of [<code>AttributeManager</code>](#identity.AttributeManager)  

| Param | Type | Default |
| --- | --- | --- |
| attributes | <code>Array</code> |  | 
| [requirements] | <code>Array</code> | <code>[]</code> | 


* * *

<a name="identity.AttributeManager.AttributeManager+validateOneAttribute"></a>

##### `AttributeManager.AttributeManager#validateOneAttribute(attr, requirement)` ⇒ <code>object</code>
Given an attribute and requirement validates the attribute

**Kind**: static method of [<code>AttributeManager</code>](#identity.AttributeManager)  

| Param | Type |
| --- | --- |
| attr | <code>object</code> | 
| requirement | <code>object</code> | 


* * *

<a name="identity.AttributeManager.AttributeManager+validateAttributes"></a>

##### `AttributeManager.AttributeManager#validateAttributes(attributes, requirements)` ⇒ <code>object</code>
Given a list of attribute and requirements, validates all attributes

**Kind**: static method of [<code>AttributeManager</code>](#identity.AttributeManager)  

| Param | Type |
| --- | --- |
| attributes | <code>Array</code> | 
| requirements | <code>Array</code> | 


* * *

<a name="identity.Repository"></a>

#### identity.Repository
**Kind**: static class of [<code>identity</code>](#identity)  

* [.Repository](#identity.Repository)
    * [`new Repository()`](#new_identity.Repository_new)
    * [.exports.Repository](#identity.Repository.exports.Repository)
        * [`new exports.Repository([config])`](#new_identity.Repository.exports.Repository_new)
    * [`.Repository#resolveAll()`](#identity.Repository.Repository+resolveAll)
    * [`.Repository#resolveJsonSchema(schema, [config])`](#identity.Repository.Repository+resolveJsonSchema) ⇒ <code>object</code>
    * [`.Repository#resolveUiSchema(schema, [config])`](#identity.Repository.Repository+resolveUiSchema) ⇒ <code>object</code>
    * [`.Repository#getValidator()`](#identity.Repository.Repository+getValidator) ⇒
    * [`.Repository#validateData(schemaId, data)`](#identity.Repository.Repository+validateData) ⇒ <code>object</code>


* * *

<a name="new_identity.Repository_new"></a>

##### `new Repository()`
Repository Class allows to load identity attribute repository and validate schemas


* * *

<a name="identity.Repository.exports.Repository"></a>

##### Repository.exports.Repository
**Kind**: static class of [<code>Repository</code>](#identity.Repository)  

* * *

<a name="new_identity.Repository.exports.Repository_new"></a>

###### `new exports.Repository([config])`
Creates an instance of Repository.


| Param | Type | Default |
| --- | --- | --- |
| [config] | <code>object</code> | <code>{}</code> | 


* * *

<a name="identity.Repository.Repository+resolveAll"></a>

##### `Repository.Repository#resolveAll()`
Resolve all repository data

**Kind**: static method of [<code>Repository</code>](#identity.Repository)  

* * *

<a name="identity.Repository.Repository+resolveJsonSchema"></a>

##### `Repository.Repository#resolveJsonSchema(schema, [config])` ⇒ <code>object</code>
Resolve one JSON schema

**Kind**: static method of [<code>Repository</code>](#identity.Repository)  

| Param | Type | Default |
| --- | --- | --- |
| schema | <code>object</code> \| <code>string</code> |  | 
| [config] | <code>object</code> | <code>{}</code> | 


* * *

<a name="identity.Repository.Repository+resolveUiSchema"></a>

##### `Repository.Repository#resolveUiSchema(schema, [config])` ⇒ <code>object</code>
Resolve one ui schema

**Kind**: static method of [<code>Repository</code>](#identity.Repository)  

| Param | Type | Default |
| --- | --- | --- |
| schema | <code>object</code> \| <code>string</code> |  | 
| [config] | <code>object</code> | <code>{}</code> | 


* * *

<a name="identity.Repository.Repository+getValidator"></a>

##### `Repository.Repository#getValidator()` ⇒
Creates an Ajv validator for the repository data

**Kind**: static method of [<code>Repository</code>](#identity.Repository)  
**Returns**: Ajv instance  

* * *

<a name="identity.Repository.Repository+validateData"></a>

##### `Repository.Repository#validateData(schemaId, data)` ⇒ <code>object</code>
Given schemaId and data, validates the data based on relevant schema

**Kind**: static method of [<code>Repository</code>](#identity.Repository)  
**Returns**: <code>object</code> - {valid:boolean, errors: array}  

| Param | Type |
| --- | --- |
| schemaId | <code>string</code> | 
| data | <code>object</code> | 


* * *

<a name="identity.utils"></a>

#### `identity.utils` : <code>object</code>
Identity utils

**Kind**: static namespace of [<code>identity</code>](#identity)  

* [`.utils`](#identity.utils) : <code>object</code>
    * [`.attributeMapBySchema(attributes)`](#identity.utils.attributeMapBySchema) ⇒ <code>object</code>
    * [`.resolveAttributeFiles(all, fileProcessor)`](#identity.utils.resolveAttributeFiles) ⇒ <code>object</code>
    * [`.denormalizeDocumentsSchema(typeSchema, value, documents, maxDepth)`](#identity.utils.denormalizeDocumentsSchema) ⇒ <code>object</code>
    * [`.normalizeDocumentsSchema(typeSchema, value, documents, maxDepth)`](#identity.utils.normalizeDocumentsSchema) ⇒ <code>object</code>
    * [`.schemaContainsFile(schema, maxDepth)`](#identity.utils.schemaContainsFile) ⇒ <code>boolean</code>
    * [`.fetchJson(url, options)`](#identity.utils.fetchJson) ⇒ <code>Promise.&lt;object&gt;</code>
    * [`.dereferenceSchema(schema, options)`](#identity.utils.dereferenceSchema) ⇒ <code>Promise.&lt;object&gt;</code>


* * *

<a name="identity.utils.attributeMapBySchema"></a>

##### `utils.attributeMapBySchema(attributes)` ⇒ <code>object</code>
Map list of attributes to schema name

**Kind**: static method of [<code>utils</code>](#identity.utils)  
**Returns**: <code>object</code> - an object with attribute name as keys  

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>Array</code> | array of identity attributes |


* * *

<a name="identity.utils.resolveAttributeFiles"></a>

##### `utils.resolveAttributeFiles(all, fileProcessor)` ⇒ <code>object</code>
Given a attribute data object and a file processor, process all files in the data object

**Kind**: static method of [<code>utils</code>](#identity.utils)  
**Returns**: <code>object</code> - a new attribute data object with processed files  

| Param | Type | Description |
| --- | --- | --- |
| all | <code>data</code> | or part of the attribute data object |
| fileProcessor | <code>function</code> |  |


* * *

<a name="identity.utils.denormalizeDocumentsSchema"></a>

##### `utils.denormalizeDocumentsSchema(typeSchema, value, documents, maxDepth)` ⇒ <code>object</code>
Given a attribute data object and an array of documents, insert the documents
into the data object where they are referenced from

**Kind**: static method of [<code>utils</code>](#identity.utils)  

| Param | Type | Description |
| --- | --- | --- |
| typeSchema | <code>object</code> | a json schema object |
| value | <code>object</code> | an attribute data object |
| documents | <code>array</code> | an array of documents |
| maxDepth | <code>integer</code> | max search depth in attribute data object |


* * *

<a name="identity.utils.normalizeDocumentsSchema"></a>

##### `utils.normalizeDocumentsSchema(typeSchema, value, documents, maxDepth)` ⇒ <code>object</code>
Given a attribute data object
export all documents from the object to a separate array, leaving documnent
references behind

**Kind**: static method of [<code>utils</code>](#identity.utils)  

| Param | Type | Description |
| --- | --- | --- |
| typeSchema | <code>object</code> | a json schema object |
| value | <code>object</code> | an attribute data object |
| documents | <code>array</code> | an array of documents |
| maxDepth | <code>integer</code> | max search depth in attribute data object |


* * *

<a name="identity.utils.schemaContainsFile"></a>

##### `utils.schemaContainsFile(schema, maxDepth)` ⇒ <code>boolean</code>
Check if schema contains a file

**Kind**: static method of [<code>utils</code>](#identity.utils)  

| Param | Type | Description |
| --- | --- | --- |
| schema | <code>object</code> | json schema object |
| maxDepth | <code>integer</code> | maximum depth to search for in the object tree |


* * *

<a name="identity.utils.fetchJson"></a>

##### `utils.fetchJson(url, options)` ⇒ <code>Promise.&lt;object&gt;</code>
Fetch json from remote server.
Optionally specify max number of attempts to do on failure (3 by default)

**Kind**: static method of [<code>utils</code>](#identity.utils)  
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

<a name="identity.utils.dereferenceSchema"></a>

##### `utils.dereferenceSchema(schema, options)` ⇒ <code>Promise.&lt;object&gt;</code>
Given a scheme object, load all references from the schema
And combine into one json schema object

**Kind**: static method of [<code>utils</code>](#identity.utils)  
**Returns**: <code>Promise.&lt;object&gt;</code> - dereferences json schema object  

| Param | Type |
| --- | --- |
| schema | <code>object</code> | 
| options | <code>object</code> | 


* * *

<a name="jwt"></a>

### `jwt` : <code>object</code>
JWT Namespace

**Kind**: global namespace  

* [`jwt`](#jwt) : <code>object</code>
    * [`.issueJWT(subject, requestedAlgorithm, secret, [expiresIn], additionalClaims)`](#jwt.issueJWT) ⇒ <code>Promise.&lt;string&gt;</code>
    * [`.parseJWT(token)`](#jwt.parseJWT) ⇒ <code>object</code>
    * [`.validateJWT(token, requestedAlgorithm, key)`](#jwt.validateJWT) ⇒ <code>Promise.&lt;(object\|null)&gt;</code>


* * *

<a name="jwt.issueJWT"></a>

#### `jwt.issueJWT(subject, requestedAlgorithm, secret, [expiresIn], additionalClaims)` ⇒ <code>Promise.&lt;string&gt;</code>
Issue a new JWT token

**Kind**: static method of [<code>jwt</code>](#jwt)  
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

<a name="jwt.parseJWT"></a>

#### `jwt.parseJWT(token)` ⇒ <code>object</code>
Parse a JWT token

**Kind**: static method of [<code>jwt</code>](#jwt)  
**Returns**: <code>object</code> - decodedJwt  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | jwt token |

**Example**  
```js
sk.jwt.parseJWT(token);
```

* * *

<a name="jwt.validateJWT"></a>

#### `jwt.validateJWT(token, requestedAlgorithm, key)` ⇒ <code>Promise.&lt;(object\|null)&gt;</code>
Validate a JWT token

**Kind**: static method of [<code>jwt</code>](#jwt)  
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

<a name="key"></a>

### `key` : <code>object</code>
Key Namespace

**Kind**: global namespace  

* [`key`](#key) : <code>object</code>
    * [`.generateHMACKey([length], [encoding])`](#key.generateHMACKey) ⇒ <code>Promise.&lt;(string\|Buffer)&gt;</code>
    * [`.generateHMACKey(secret, [encoding])`](#key.generateHMACKey) ⇒
    * [`.generateRSAKeyPair([length])`](#key.generateRSAKeyPair) ⇒ <code>Promise.&lt;object&gt;</code>
    * [`.checkSecretLength(key, algorithm)`](#key.checkSecretLength) ⇒ <code>boolean</code>


* * *

<a name="key.generateHMACKey"></a>

#### `key.generateHMACKey([length], [encoding])` ⇒ <code>Promise.&lt;(string\|Buffer)&gt;</code>
Generate a HMAC Key

**Kind**: static method of [<code>key</code>](#key)  
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

<a name="key.generateHMACKey"></a>

#### `key.generateHMACKey(secret, [encoding])` ⇒
Calculate the bytes length of secret key

**Kind**: static method of [<code>key</code>](#key)  
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

<a name="key.generateRSAKeyPair"></a>

#### `key.generateRSAKeyPair([length])` ⇒ <code>Promise.&lt;object&gt;</code>
Generate a RSA Key Pair

**Kind**: static method of [<code>key</code>](#key)  
**Returns**: <code>Promise.&lt;object&gt;</code> - keypair - contains publicKey adn privateKey  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [length] | <code>number</code> | <code>4096</code> | key length in bytes |

**Example**  
```js
sk.key.generateRSAKeyPair();
```

* * *

<a name="key.checkSecretLength"></a>

#### `key.checkSecretLength(key, algorithm)` ⇒ <code>boolean</code>
Checks if secret length is good enough

**Kind**: static method of [<code>key</code>](#key)  
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

<a name="kycc"></a>

### `kycc` : <code>object</code>
KYCC Namespace

**Kind**: global namespace  

* * *

<a name="kycc.getUserDataForToken"></a>

#### `kycc.getUserDataForToken(token, options)` ⇒ [<code>Promise.&lt;KYCCUserObject&gt;</code>](#KYCCUserObject)
Fetch user data via token

**Kind**: static method of [<code>kycc</code>](#kycc)  
**Returns**: [<code>Promise.&lt;KYCCUserObject&gt;</code>](#KYCCUserObject) - user object  
**Throws**:

- if no instanceUrl in options
- if no templateId in options
- if invalid token
- if invalid user for token


| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | jwt token |
| options | [<code>GetUserDataForTokenOptions</code>](#GetUserDataForTokenOptions) |  |

**Example**  
```js
async sk.kycc.getUserDataForToken(token, options);
```

* * *

<a name="FileProcessor"></a>

### `FileProcessor`
File Processor

**Kind**: global typedef  
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

<a name="GetUserDataForTokenOptions"></a>

### `GetUserDataForTokenOptions`
Options used in getUserDataForToken function

**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| instanceUrl | <code>string</code> | 
| templateId | <code>string</code> | 
| fileProcessor | [<code>FileProcessor</code>](#FileProcessor) | 


* * *

<a name="KYCCUserObject"></a>

### `KYCCUserObject`
User Object

**Kind**: global typedef  
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


# License

[The GPL-3.0 License](http://opensource.org/licenses/GPL-3.0)

Copyright (c) 2018 SelfKey Foundation <https://selfkey.org/>

