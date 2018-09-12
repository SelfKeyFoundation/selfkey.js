# selfkey.js

SelfKey Javascript Library

## Install

```bash
$ npm install selfkey.js
```

## Usage

```	
createNonce(length)
createSignature(nonce, privateKey)
verifySignature(nonce, signature, publicKey)
didResolver(did)
```

#### SelfKey Marketplace

The SelfKey Marketplace integration requires the signature verification function to prove ownership of an ethereum address.

#### Login with SelfKey

The Login with SelfKey strategy authenticates users using a nonce, signature and public key. Signature verification function is provided by selfkey.js

```js
const selfkey = require('selfkey.js')
const SelfKeyStrategy = require('passport-selfkey').Strategy

/**
 * Login with SelfKey Passport Config
 */
passport.use(new SelfKeyStrategy((req, nonce, signature, pubKey, done) => {
	// if the signature verification succeeds
	if (selfkey.verifySignature(nonce, signature, pubKey)) {
		// find user with existing wallet
		User.findOne({wallet: pubKey}, (err, existingUser) => {
			if (err) return done(err) 
			// if a wallet is found then add token to user object
			if (existingUser) {
				const token = generateToken()
				User.update({wallet: pubKey}, {token: token}, (err, user) => {
					if (err) return done(err)
					return done(null, user)
				})
			} else {
				// no user with this address
				return done(null, false)
			}
		})
	} else {
		// verification fails
		return done(null, false)
	}
}))
```

For more detailed usage example for Login with SelfKey please refer to the [passport-selfkey library](https://github.com/altninja/passport-selfkey)

## License

[The GPL-3.0 License](http://opensource.org/licenses/GPL-3.0)

Copyright (c) 2018 SelfKey Foundation [https://selfkey.org/](https://selfkey.org/)
