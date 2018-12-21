# selfkey-lib

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
```

#### SelfKey Marketplace

The SelfKey Marketplace integration requires the signature verification function to prove ownership of an ethereum address.

#### Login with SelfKey

The Login with SelfKey strategy authenticates users using a nonce, signature and public key.

For more detailed usage for Login with SelfKey integration with PassportJS authentication please refer to the [passport-selfkey](https://github.com/SelfKeyFoundation/passport-selfkey) library

## License

[The GPL-3.0 License](http://opensource.org/licenses/GPL-3.0)

Copyright (c) 2018 SelfKey Foundation [https://selfkey.org/](https://selfkey.org/)
