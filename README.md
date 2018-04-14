# selfkey.js

SelfKey Javascript Library

## Install

```bash
$ npm install selfkey.js
```

## Usage

```	
newChallenge(length)
signChallenge(challenge, privKey)
signChallengePromise(challenge, privKey)
verifySignature(challenge, signature, pubKey)
verifySignaturePromise(challenge, signature, pubKey)
```

#### Login with SelfKey

The Login with SelfKey strategy authenticates users using a challenge, signature and public key. Signature verification function is provided by selfkey.js

```js
const selfkey = require('selfkey.js')
const SelfKeyStrategy = require('passport-selfkey').Strategy

/**
 * Login with SelfKey Passport Config
 */
passport.use(new SelfKeyStrategy((challenge, signature, pubKey, done) => {
    var match = selfkey.verifySignature(challenge, signature, pubKey)
    if (match) return done(null, user)
    return done(null, false, {msg: 'Invalid Credentials'})
  })
}))
```

For more detailed usage examples please refer to the [passport-selfkey library](https://github.com/altninja/passport-selfkey)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2018 SelfKey Foundation [https://selfkey.org/](https://selfkey.org/)
