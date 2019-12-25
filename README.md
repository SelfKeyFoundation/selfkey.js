# @selfkey/node-lib

> Selfkey sdk for third party integrations written in Node.js

[![NPM][npm-icon]][npm-url]
[![CircleCI](https://circleci.com/gh/SelfKeyFoundation/selfkey-lib/tree/master.svg?style=svg)](https://circleci.com/gh/SelfKeyFoundation/selfkey-lib/tree/master)

[npm-icon]: https://img.shields.io/npm/v/@selfkey/node-lib
[npm-url]: https://npmjs.org/package/@selfkey/node-lib


# Contents

- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [License](#license)

# Install

Requires [Node](https://nodejs.org/en/) version 10 or abow

```sh
npm install --save @selfkey/node-lib
```

# Contents

- [Usage](#usage)
- [API](#api)
- [License](#license)

<a name="usage"></a>

# Usage

```js
const sk = require('@selfkey/node-lib');
```

or ES6 syntax

```js
import sk from '@selfkey/node-lib';
```

<a name="api"></a>
# API
## Objects

<dl>
<dt><a href="#auth">auth</a> : <code>object</code></dt>
<dd><p>Authentication Namespace</p>
</dd>
<dt><a href="#did">did</a> : <code>object</code></dt>
<dd><p>DID Namespace</p>
</dd>
<dt><a href="#identityAttributes">identityAttributes</a> : <code>object</code></dt>
<dd><p>Identity Attributes Namespace</p>
</dd>
<dt><a href="#jwt">jwt</a> : <code>object</code></dt>
<dd><p>JWT Namespace</p>
</dd>
<dt><a href="#key">key</a> : <code>object</code></dt>
<dd><p>Key Namespace</p>
</dd>
<dt><a href="#kycc">kycc</a> : <code>object</code></dt>
<dd><p>KYCC Namespace</p>
</dd>
</dl>

<a name="auth"></a>

## auth : <code>object</code>
Authentication Namespace

**Kind**: global namespace  

* [auth](#auth) : <code>object</code>
    * [.generateAccessToken(did, algorithm, secret, [expiresIn])](#auth.generateAccessToken) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.generateChallengeToken(did, algorithm, secret, [expiresIn])](#auth.generateChallengeToken) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.generateNonce([length])](#auth.generateNonce) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.validateAccessToken(token, algorithm, key)](#auth.validateAccessToken) ⇒ <code>Promise.&lt;object&gt;</code>
    * [.validateChallengeToken(token, algorithm, key)](#auth.validateChallengeToken) ⇒ <code>Promise.&lt;object&gt;</code>
    * [.verifyChallengeSignature(nonce, signature, did)](#auth.verifyChallengeSignature) ⇒ <code>Promise.&lt;boolean&gt;</code>

<a name="auth.generateAccessToken"></a>

### auth.generateAccessToken(did, algorithm, secret, [expiresIn]) ⇒ <code>Promise.&lt;string&gt;</code>
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
<a name="auth.generateChallengeToken"></a>

### auth.generateChallengeToken(did, algorithm, secret, [expiresIn]) ⇒ <code>Promise.&lt;string&gt;</code>
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
<a name="auth.generateNonce"></a>

### auth.generateNonce([length]) ⇒ <code>Promise.&lt;string&gt;</code>
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
<a name="auth.validateAccessToken"></a>

### auth.validateAccessToken(token, algorithm, key) ⇒ <code>Promise.&lt;object&gt;</code>
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
<a name="auth.validateChallengeToken"></a>

### auth.validateChallengeToken(token, algorithm, key) ⇒ <code>Promise.&lt;object&gt;</code>
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
<a name="auth.verifyChallengeSignature"></a>

### auth.verifyChallengeSignature(nonce, signature, did) ⇒ <code>Promise.&lt;boolean&gt;</code>
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
<a name="did"></a>

## did : <code>object</code>
DID Namespace

**Kind**: global namespace  
<a name="identityAttributes"></a>

## identityAttributes : <code>object</code>
Identity Attributes Namespace

**Kind**: global namespace  
<a name="jwt"></a>

## jwt : <code>object</code>
JWT Namespace

**Kind**: global namespace  
<a name="key"></a>

## key : <code>object</code>
Key Namespace

**Kind**: global namespace  
<a name="kycc"></a>

## kycc : <code>object</code>
KYCC Namespace

**Kind**: global namespace  

# License

[The GPL-3.0 License](http://opensource.org/licenses/GPL-3.0)

Copyright (c) 2018 SelfKey Foundation <https://selfkey.org/>

