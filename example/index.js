const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const api = require('./api');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3331;

app.use(session({secret: "super secret session key"}));
app.use(bodyParser.json({ limit: '300mb' }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/v1/', api);
app.listen(PORT, () => console.log(`dev server is listening on ${PORT}`));

//init templates

const Templates = require('./templates');

Templates.create({
	name: 'Example Template 1',
	description: 'This template 1 is an example template with identity attributes',
	identity_attributes: [
		{
			id: '5c4e6edda58d2900401ba61b',
			required: true,
			schemaId: 'http://platform.selfkey.org/schema/attribute/bank-statement.json'
		},
		'http://platform.selfkey.org/schema/attribute/date-of-birth.json',
		'http://platform.selfkey.org/schema/attribute/country-of-residency.json',
		'http://platform.selfkey.org/schema/attribute/drivers-license.json',
		'http://platform.selfkey.org/schema/attribute/email.json',
		'http://platform.selfkey.org/schema/attribute/fingerprint.json',
		'http://platform.selfkey.org/schema/attribute/first-name.json',
		'http://platform.selfkey.org/schema/attribute/id-selfie.json',
		'http://platform.selfkey.org/schema/attribute/last-name.json',
		'http://platform.selfkey.org/schema/attribute/middle-name.json',
		'http://platform.selfkey.org/schema/attribute/national-id.json',
		'http://platform.selfkey.org/schema/attribute/nationality.json',
		'http://platform.selfkey.org/schema/attribute/passport.json',
		'http://platform.selfkey.org/schema/attribute/phone-number.json',
		'http://platform.selfkey.org/schema/attribute/physical-address.json',
		'http://platform.selfkey.org/schema/attribute/tax-certificate.json',
		'http://platform.selfkey.org/schema/attribute/tax-id-number.json',
		'http://platform.selfkey.org/schema/attribute/utility-bill.json',
		'http://platform.selfkey.org/schema/attribute/voice-id.json'
	]
});

Templates.create({
	name: 'Example Template 2',
	description: 'This template 2 is an example template with identity attributes',
	identity_attributes: [
		{
			id: '5c511c64c7315f003ecfe2dc',
			required: true,
			schemaId: 'http://platform.selfkey.org/schema/attribute/bank-statement.json'
		},
		'http://platform.selfkey.org/schema/attribute/date-of-birth.json',
		'http://platform.selfkey.org/schema/attribute/country-of-residency.json',
		'http://platform.selfkey.org/schema/attribute/drivers-license.json',
		'http://platform.selfkey.org/schema/attribute/email.json',
		'http://platform.selfkey.org/schema/attribute/fingerprint.json',
		'http://platform.selfkey.org/schema/attribute/first-name.json',
		'http://platform.selfkey.org/schema/attribute/id-selfie.json',
		'http://platform.selfkey.org/schema/attribute/last-name.json',
		'http://platform.selfkey.org/schema/attribute/middle-name.json',
		'http://platform.selfkey.org/schema/attribute/national-id.json'
	]
});

Templates.create({
	name: 'Example Template 3',
	description: 'This template 3 is an example template with identity attributes',
	identity_attributes: [
		'http://platform.selfkey.org/schema/attribute/national-id.json',
		'http://platform.selfkey.org/schema/attribute/nationality.json',
		'http://platform.selfkey.org/schema/attribute/passport.json',
		'http://platform.selfkey.org/schema/attribute/phone-number.json',
		'http://platform.selfkey.org/schema/attribute/physical-address.json',
		'http://platform.selfkey.org/schema/attribute/tax-certificate.json',
		'http://platform.selfkey.org/schema/attribute/tax-id-number.json',
		'http://platform.selfkey.org/schema/attribute/utility-bill.json',
		'http://platform.selfkey.org/schema/attribute/voice-id.json'
	]
});
