const express = require('express');
const Users = require('./users');
const Documents = require('./documents');
const Templates = require('./templates');
const Applications = require('./applications');
const router = express.Router();
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const ethUtil = require('ethereumjs-util');
const multer = require('multer');
const upload = multer();

const PORT = process.env.PORT || 3331;
const HOST = `http://localhost:${PORT}`;
const cors = require('cors');

const JWT_SECRET = 'SUPER LONG JWT SECRET';

const { denormalizeDocumentsSchema } = require('./util');

const CHALLENGE_TOKEN_TYPE = 'IDW_CHALLANGE';

const ACCESS_TOKEN_TYPE = 'IDW_ACCESS';

// JWT parsing middlware, will parse and validate the token for a request
const jwtAuthMiddleware = tokenType => (req, res, next) => {
	// Fetch authorization header
	const auth = req.headers.authorization;

	// Checkout it actually exists, fail the request otherwise
	if (!auth) {
		return res
			.status(400)
			.json({ code: 'token_missing', message: 'Missing authorization header' });
	}

	// verify that the authorization header is a Bearer token, fail otherwise
	if (!auth.startsWith('Bearer ')) {
		return res.status(400).json({
			code: 'token_invalid',
			message: 'Malformed authorization header'
		});
	}
	// parse the authorization header and fetch the actual jwt token string
	const tokenString = auth.replace(/^Bearer /, '');
	try {
		// verify and parse the token into a js object
		let decoded = jwt.verify(tokenString, JWT_SECRET, { json: true });
		// Add parsed token to the request context.
		req.decodedAuth = decoded;

		// verify that the token subject is a valid etherium public key
		if (!ethUtil.isValidPublic(Buffer.from(req.decodedAuth.sub, 'hex'))) {
			return res.status(400).json({
				code: 'token_invalid',
				message: 'Subject should contain a valid public key'
			});
		}
		if (req.decodedAuth.typ !== tokenType) {
			return res.status(403).json({
				code: 'token_invalid',
				message: 'Invalid token type'
			});
		}
		// continue the request to other handlers
		next();
	} catch (error) {
		// fail with 401, token was invalid or expired or forged.
		return res
			.status(401)
			.json({ code: 'token_invalid', message: 'Invalid authentication token' });
	}
};

const generateChallenge = (req, res) => {
	// Get public key from url params
	const publicKey = req.params.publicKey;

	// Validate the public key
	if (!publicKey || !ethUtil.isValidPublic(Buffer.from(publicKey, 'hex'))) {
		return res.status(422).json({ code: 'invalid_key', message: 'Invalid public key' });
	}
	// generate a 48 bytes long hex string for nonce
	const nonce = crypto.randomBytes(48).toString('hex');

	// Generate challange JWT token
	const jwtToken = jwt.sign({ nonce, typ: CHALLENGE_TOKEN_TYPE }, JWT_SECRET, {
		expiresIn: '30m',
		subject: publicKey,
		algorithm: 'HS256'
	});

	return res.json({ jwt: jwtToken });
};

const handleChallengeResponse = (req, res) => {
	// fetch nonce and public key from token
	const nonce = req.decodedAuth.nonce;
	const publicKey = req.decodedAuth.sub;

	// calculate ethereum address from public key
	const ethAddress = ethUtil.bufferToHex(ethUtil.pubToAddress(ethUtil.toBuffer(publicKey), true));

	if (!nonce) {
		return res
			.status(401)
			.json({ code: 'invalid_auth_token', message: 'Invalid autentication token' });
	}

	// fetch signature from body
	const { signature } = req.body || {};

	if (!signature) {
		return res.status(400).json({ code: 'no_signature', message: 'No signature provided' });
	}

	// calculate address from provided signature and nonce
	let recoveredAddress;
	try {
		// hash message
		const msgHash = ethUtil.hashPersonalMessage(ethUtil.toBuffer(nonce));
		// parse hex rpc message to object containing dc signature
		const sig = ethUtil.fromRpcSig(signature);
		// recover address
		recoveredAddress = ethUtik.bufferToHex(ethUtil.pubToAddress(ethUtil.ecrecover(msgHash, sig.v, sig.r, sig.s)));
	} catch (err) {
		return res
			.status(401)
			.json({ code: 'invalid_signature', message: 'Invalid signature provided' });
	}

	// verify that the recovered address matches the one from challenge token
	if (recoveredAddress !== ethAddress) {
		return res
			.status(401)
			.json({ code: 'invalid_signature', message: 'Invalid signature provided' });
	}

	// generate access token
	let token = jwt.sign(
		{
			typ: ACCESS_TOKEN_TYPE
		},
		JWT_SECRET,
		{
			expiresIn: '1h',
			subject: publicKey
		}
	);

	return res.json({ jwt: token });
};

const createUser = (req, res) => {
	// fetch attributes from body
	const attributes = req.body;

	if (!attributes || !attributes.length) {
		return res.status(400).json({ code: 'no_attributes', message: 'No attributes provided' });
	}

	//  VALIDATE ATTRIBUTES HERE

	// fetch public key from token
	const publicKey = req.decodedAuth.sub;

	// update or create user by public key
	let user = Users.findByPublicKey(publicKey);

	if (user) {
		console.log('updating user');
		user = Users.update(user.id, { attributes });
	} else {
		user = Users.create({ attributes }, publicKey);
	}

	if (!user) {
		return res.status(400).json({
			code: 'could_not_create',
			message: 'Could not create user'
		});
	}

	// send success empty respone
	return res.status(201).send();
}



// const createUser = (req, res) => {
// 	let attributes = req.body.attributes;

// 	try {
// 		attributes = JSON.parse(attributes);
// 	} catch (error) {
// 		return res.status(400).json({
// 			code: 'invalid_attributes',
// 			message: 'Attributes field must be a json string'
// 		});
// 	}

// 	if (!attributes || !attributes.length) {
// 		return res.status(400).json({ code: 'no_attributes', message: 'No attributes provided' });
// 	}

// 	let documents = req.files.map(f => {
// 		let doc = {
// 			mimeType: f.mimetype,
// 			size: f.size,
// 			content: f.buffer
// 		};
// 		let id = f.fieldname.match(/^\$document-([0-9]*)$/);
// 		if (id) doc.id = +id[1];
// 		return doc;
// 	});

// 	documents = documents.map(doc => {
// 		let newDoc = Documents.create(doc);
// 		let link = `${HOST}/documents/${newDoc.id}`;
// 		doc.localId = newDoc.id;
// 		doc.content = link;
// 		return doc;
// 	});

// 	attributes = attributes.map(attr => {
// 		let attrDocs = attr.documents
// 			.map(id => {
// 				let found = documents.filter(doc => doc.id === id);
// 				return found.length ? found[0] : null;
// 			})
// 			.filter(doc => !!doc);
// 		attr = { ...attr, documents: attrDocs };
// 		let { value } = denormalizeDocumentsSchema(attr.schema, attr.data, attrDocs);
// 		return { id: attr.id, value };
// 	});

// 	let publicKey = req.decodedAuth.sub;

// 	let user = Users.findByPublicKey(publicKey);

// 	if (user) {
// 		console.log('updating user');
// 		user = Users.update(user.id, { attributes });
// 	} else {
// 		user = Users.create({ attributes }, publicKey);
// 	}

// 	if (!user) {
// 		return res.status(400).json({
// 			code: 'could_not_create',
// 			message: 'Could not create user'
// 		});
// 	}

// 	return res.status(201).send();
// };


const login = (req, res) => {
	const { body } = req;
	if (!body.token) {
		return res.status(400).json({ redirectTo: '/failure.html?error=No+Token' });
	}
	try {
		let decoded = jwt.verify(body.token, JWT_SECRET);
		let user = Users.findById(+decoded.sub);
		if (!user) {
			return res.status(404).json({ redirectTo: '/failure.html?error=No+User' });
		}
		return res.json({ redirectTo: '/success.html' });
	} catch (error) {
		return res.satus(401).json({ redirectTo: `/failure.html?error=Invalid+Token` });
	}
};

const getUserPayload = (req, res) => {
	let publicKey = req.decodedAuth.sub;
	let user = Users.findByPublicKey(publicKey);

	if (!user) {
		return res.status(404).json({
			code: 'user_does_not_exist',
			message: 'User with provided public key does not exist'
		});
	}

	let userToken = jwt.sign({}, JWT_SECRET, { subject: '' + user.id });

	return res.send({ token: userToken });
};

const uploadFile = (req, res) => {
	// fetch file from request
	const f = req.file;

	if (!f) return res.status(400).json({ code: 'no_file', message: 'no file uploaded' });

	// parse file info
	let doc = {
		mimeType: f.mimetype,
		size: f.size,
		content: f.buffer
	};

	// save the document to storage
	doc = Documents.create(doc);

	// respond with document id
	return res.json({ id: doc.id });
};

const getTemplates = (req, res) => {
	res.json(
		Templates.findAll().map(t => {
			let tpl = { ...t };
			delete tpl.identity_atrributes;
			return tpl;
		})
	);
};
const getTemplateDetails = (req, res) => {
	res.json(Templates.findById(req.params.id));
};

const getApplications = (req, res) => {
	let publicKey = req.decodedAuth.sub;
	return res.json(
		Applications.findAll()
			.filter(appl => appl.publicKey === publicKey)
			.map(appl => {
				let newAppl = {};
				newAppl.id = appl.id;
				newAppl.templateId = appl.templateId;
				newAppl.status = appl.status;
				return newAppl;
			})
	);
};
const getApplicationDetais = (req, res) => {
	let appl = Applications.findById(req.params.id);
	if (!appl) return res.status(404).json({ code: 'not_found', message: 'Application not found' });
	let publicKey = req.decodedAuth.sub;
	if (appl.publicKey !== publicKey) {
		return res.status(401).json({
			code: 'forbidden',
			message: "You don't have permissions to view this application"
		});
	}
	return res.json(appl);
};
const createApplication = (req, res) => {
	let appl = req.body;
	if (!appl.templateId || !Templates.findById(appl.templateId)) {
		return res
			.status(404)
			.json({ code: 'template_not_exists', message: 'Requested template does not exists' });
	}
	appl.publicKey = req.decodedAuth.sub;
	appl.status = { id: 'pending', name: 'Pending' };
	return res.json(Applications.create(appl));
};

const updateApplication = (req, res) => {
	let newAppl = req.body;
	let appl = Applications.findById(req.params.id);
	if (appl.publicKey !== req.decodedAuth.sub || appl.publicKey !== newAppl.publicKey) {
		return res.status(401).json({
			code: 'access_denied',
			message: 'You are not allowed to modify this application'
		});
	}
	if (newAppl.id !== appl.id) {
		return res
			.status(400)
			.json({ code: 'bad_request', message: 'Cannot modify application id' });
	}
	if (newAppl.templateId !== appl.templateId) {
		return res.status(400).json({ code: 'bad_request', message: 'Cannot modify template id' });
	}

	return res.json(Applications.update(appl));
};

const updateApplicationPayment = (req, res) => {
	let tx = req.body;
	let appl = Applications.findById(req.params.id);
	if (appl.publicKey !== req.decodedAuth.sub) {
		return res.status(401).json({
			code: 'access_denied',
			message: 'You are not allowed to modify this application'
		});
	}
	if (!tx.transactionHash) {
		return res.status(400).json({
			code: 'no_payment_details',
			message: 'You should provide transaction hash'
		});
	}

	appl.transactionHash = tx.transactionHash;

	return res.json(Applications.update(appl));
};

router.get('/auth/challenge/:publicKey', generateChallenge);
router.post('/auth/challenge', jwtAuthMiddleware(CHALLENGE_TOKEN_TYPE), handleChallengeResponse);
router.get('/auth/token', jwtAuthMiddleware(ACCESS_TOKEN_TYPE), getUserPayload);

// router.post('/users', jwtAuthMiddleware(ACCESS_TOKEN_TYPE), upload.any(), createUser);
router.post('/users', jwtAuthMiddleware(ACCESS_TOKEN_TYPE), createUser);

router.options('/login', cors());
router.post('/login', cors(), login);

router.post('/users/files', jwtAuthMiddleware(ACCESS_TOKEN_TYPE), upload.single('document'), uploadFile);
router.post('/files', jwtAuthMiddleware(ACCESS_TOKEN_TYPE), upload.single('document'), uploadFile);

router.get('/templates', jwtAuthMiddleware(ACCESS_TOKEN_TYPE), getTemplates);
router.get('/templates/:id', jwtAuthMiddleware(ACCESS_TOKEN_TYPE), getTemplateDetails);

router.get('/applications', jwtAuthMiddleware(ACCESS_TOKEN_TYPE), getApplications);
router.get(
	'/applications/:id',
	jwtAuthMiddleware(ACCESS_TOKEN_TYPE),

	getApplicationDetais
);
router.post('/applications', jwtAuthMiddleware(ACCESS_TOKEN_TYPE), createApplication);
router.put('/applications/:id', jwtAuthMiddleware(ACCESS_TOKEN_TYPE), updateApplication);
router.put(
	'/applications/:id/payment',
	jwtAuthMiddleware(ACCESS_TOKEN_TYPE),
	updateApplicationPayment
);

router.use((error, req, res, next) => {
	console.error(error);
	return res.status(500).json({
		code: 'unhandled_error',
		message: error.message
	});
});

module.exports = router;
