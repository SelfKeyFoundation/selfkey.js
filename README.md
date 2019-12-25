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
* [`identityAttributes`](#identityAttributes) : <code>object</code>
* [`jwt`](#jwt) : <code>object</code>
    * [`.issueJWT(subject, requestedAlgorithm, secret, [expiresIn], additionalClaims)`](#jwt.issueJWT) ⇒ <code>string</code>
    * [`.parseJWT(token)`](#jwt.parseJWT) ⇒ <code>object</code>
    * [`.validateJWT(token, requestedAlgorithm, key)`](#jwt.validateJWT) ⇒ <code>object</code> \| <code>null</code>
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

<a name="identityAttributes"></a>

### `identityAttributes` : <code>object</code>
Identity Attributes Namespace

**Kind**: global namespace  

* * *

<a name="jwt"></a>

### `jwt` : <code>object</code>
JWT Namespace

**Kind**: global namespace  

* [`jwt`](#jwt) : <code>object</code>
    * [`.issueJWT(subject, requestedAlgorithm, secret, [expiresIn], additionalClaims)`](#jwt.issueJWT) ⇒ <code>string</code>
    * [`.parseJWT(token)`](#jwt.parseJWT) ⇒ <code>object</code>
    * [`.validateJWT(token, requestedAlgorithm, key)`](#jwt.validateJWT) ⇒ <code>object</code> \| <code>null</code>


* * *

<a name="jwt.issueJWT"></a>

#### `jwt.issueJWT(subject, requestedAlgorithm, secret, [expiresIn], additionalClaims)` ⇒ <code>string</code>
Issue a new JWT token

**Kind**: static method of [<code>jwt</code>](#jwt)  
**Returns**: <code>string</code> - jwt  
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

#### `jwt.validateJWT(token, requestedAlgorithm, key)` ⇒ <code>object</code> \| <code>null</code>
Validate a JWT token

**Kind**: static method of [<code>jwt</code>](#jwt)  
**Returns**: <code>object</code> \| <code>null</code> - decodedJwt  
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

