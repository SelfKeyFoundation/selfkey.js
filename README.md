# selfkey.js

SelfKey Javascript Library.

## Install

```bash
$ npm install selfkeyjs
```

## Usage

#### Login with SelfKey

The Login with SelfKey strategy authenticates users using a nonce, signature and
public key. Signature verification function is provided by selfkey.js

```js
const selfkey = require('selfkeyjs')
const SelfKeyStrategy = require('passport-selfkey').Strategy

passport.use(new SelfKeyStrategy((nonce, signature, pubKey, done) => {
  User.findOne({nonce: nonce}, (err, user) => {
    if (err) { return done(err) }
    if (!user) {
      return done(null, false, { msg: `Nonce ${nonce} not found.` })
    }
    var match = selfkey.verifySignature(nonce, signature, pubKey)
    if (match) return done(null, user)
    return done(null, false, { msg: 'Invalid credentials.' })
  })
}))
```

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2018 SelfKey Foundation [https://selfkey.org/](https://selfkey.org/)
