export const applicationDetailsRes = {
	attributes: {
		'5cf4b5b6fc92bd26dec72f44': {
			description: 'Your phone number (including country code)',
			isAdditional: false,
			label: 'Phone Number',
			optional: false,
			schema: 'http://platform.selfkey.org/schema/attribute/phone-number.json',
			valid: true,
			value: '+380000312312'
		},
		'5cffb7ed691344744cbb021d': {
			description:
				'Your Address: Enter the information as it appears on your government-issued document (street address, city, postal code).',
			isAdditional: false,
			label: 'Your Address',
			optional: false,
			schema: 'http://platform.selfkey.org/schema/attribute/physical-address.json',
			valid: true,
			value: { address_line_1: 'test1', address_line_2: null, address_line_3: null }
		},
		'5d076f0a315423134405cbc4': {
			description: 'FIrst name',
			isAdditional: false,
			label: 'First Name',
			optional: false,
			schema: 'http://platform.selfkey.org/schema/attribute/first-name.json',
			valid: true,
			value: 'test'
		},
		'5d076f20315423f5db05cbc6': {
			description: 'Last name',
			isAdditional: false,
			label: 'Last Name',
			optional: false,
			schema: 'http://platform.selfkey.org/schema/attribute/last-name.json',
			valid: true,
			value: 'test'
		},
		'5d13577f72089544cb86cda7': {
			description: 'Your email address',
			isAdditional: false,
			label: 'Email Address',
			optional: false,
			schema: 'http://platform.selfkey.org/schema/attribute/email.json',
			valid: true,
			value: 'test-4952@test.com'
		},
		'5d14a3b4a67fc45f980e51fd': {
			description: 'Birthdate',
			isAdditional: false,
			label: 'Birthdate',
			optional: false,
			schema: 'http://platform.selfkey.org/schema/attribute/date-of-birth.json',
			valid: true,
			value: '2019-11-01'
		},
		'5cf4b5b6fc92bda18bc72f46': {
			description:
				'Please submit a clear and legible copy of the front page of your Passport.',
			isAdditional: false,
			label: 'Your Passport',
			optional: false,
			schema: 'http://platform.selfkey.org/schema/attribute/passport.json',
			valid: true,
			value: {
				extra: [],
				image: {
					content: '5ddd5b1356fbce0f66389635',
					mimeType: 'application/pdf',
					size: 123735
				},
				selfie: {
					image: {
						content: '5ddd5b1656fbce5ae3389636',
						mimeType: 'application/pdf',
						size: 5569313
					}
				}
			}
		},
		'5cffb6326913442272bb01a6': {
			description:
				'Please submit a clear and legible copy of your Bank Statement, Utility Bill, or any other government-issued document showing your full name and residential address.',
			isAdditional: false,
			label: 'Proof of Address',
			optional: false,
			schema: 'http://platform.selfkey.org/schema/attribute/bank-statement.json',
			valid: true,
			value: {
				images: [
					{
						content: '5ddd5b1356fbce9b85389634',
						mimeType: 'application/pdf',
						size: 123735
					}
				]
			}
		}
	},
	notes: [],
	owners: [{ _id: '5ddd5b1656fbcef0dd389637', email: 'test-4952@test.com' }],
	payments: [],
	questions: {},
	requirementsLog: {},
	type: 'individual',
	memberTemplates: [],
	template: {
		_id: '5cf4b5b6fc92bd6e67c72f41',
		documentVerification: { externalCheck: false, localCheck: false },
		requirements: {
			questions: [
				{
					tokenSale: { btcAddress: null, ethAddress: null, type: null },
					datepicker: false,
					isTokenSaleQuestion: false,
					multiple: false,
					optional: false,
					type: 'kyc',
					weight: 0,
					_id: '5cf4b5b6fc92bd26dec72f44',
					options: [],
					title: 'Phone Number',
					description: 'Your phone number (including country code)',
					question: 'Your phone number (including country code)',
					attributeType: 'http://platform.selfkey.org/schema/attribute/phone-number.json'
				},
				{
					tokenSale: { btcAddress: null, ethAddress: null, type: null },
					datepicker: false,
					isTokenSaleQuestion: false,
					multiple: false,
					optional: false,
					type: 'kyc',
					weight: 0,
					options: [],
					_id: '5cffb7ed691344744cbb021d',
					title: 'Your Address',
					description:
						'Your Address: Enter the information as it appears on your government-issued document (street address, city, postal code).',
					question:
						'Your Address: Enter the information as it appears on your government-issued document (street address, city, postal code).',
					attributeType:
						'http://platform.selfkey.org/schema/attribute/physical-address.json'
				},
				{
					tokenSale: { btcAddress: null, ethAddress: null, type: null },
					datepicker: false,
					isTokenSaleQuestion: false,
					multiple: false,
					optional: false,
					type: 'kyc',
					weight: 0,
					options: [],
					_id: '5d076f0a315423134405cbc4',
					attributeType: 'http://platform.selfkey.org/schema/attribute/first-name.json',
					title: 'First Name',
					description: 'FIrst name',
					question: 'FIrst Name'
				},
				{
					tokenSale: { btcAddress: null, ethAddress: null, type: null },
					datepicker: false,
					isTokenSaleQuestion: false,
					multiple: false,
					optional: false,
					type: 'kyc',
					weight: 0,
					options: [],
					_id: '5d076f20315423f5db05cbc6',
					attributeType: 'http://platform.selfkey.org/schema/attribute/last-name.json',
					title: 'Last Name',
					description: 'Last name',
					question: 'Last Name'
				},
				{
					tokenSale: { btcAddress: null, ethAddress: null, type: null },
					datepicker: false,
					isTokenSaleQuestion: false,
					multiple: false,
					optional: false,
					type: 'kyc',
					weight: 0,
					options: [],
					_id: '5d13577f72089544cb86cda7',
					title: 'Email Address',
					description: 'Your email address',
					question: 'Email',
					attributeType: 'http://platform.selfkey.org/schema/attribute/email.json'
				},
				{
					tokenSale: { btcAddress: null, ethAddress: null, type: null },
					datepicker: false,
					isTokenSaleQuestion: false,
					multiple: false,
					optional: false,
					type: 'kyc',
					weight: 0,
					options: [
						{ _id: '5d14a3b4a67fc43f6f0e51ff', key: '1561633709078', value: 'A' },
						{ _id: '5d14a3b4a67fc4fba40e51fe', key: '1561633711275', value: 'B' }
					],
					_id: '5d14a3b4a67fc45f980e51fd',
					title: 'Birthdate',
					description: 'Birthdate',
					question: 'Your Brthday',
					attributeType: 'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
				}
			],
			uploads: [
				{
					certifiedTrueCopy: { offSystem: false, onSystem: false },
					notary: { offSystem: false, onSystem: false },
					idScan: true,
					optional: false,
					selfie: false,
					signature: false,
					weight: 0,
					_id: '5cf4b5b6fc92bda18bc72f46',
					title: 'Your Passport',
					attributeType: 'http://platform.selfkey.org/schema/attribute/passport.json',
					description:
						'Please submit a clear and legible copy of the front page of your Passport.'
				},
				{
					certifiedTrueCopy: { offSystem: false, onSystem: false },
					notary: { offSystem: false, onSystem: false },
					idScan: false,
					optional: false,
					selfie: false,
					signature: false,
					weight: 0,
					_id: '5cffb6326913442272bb01a6',
					title: 'Proof of Address',
					description:
						'Please submit a clear and legible copy of your Bank Statement, Utility Bill, or any other government-issued document showing your full name and residential address.',
					attributeType:
						'http://platform.selfkey.org/schema/attribute/bank-statement.json'
				}
			],
			options: {
				checkerRequired: false,
				dynamicForms: [],
				dynamicUpload: [],
				membersEnabled: false
			}
		},
		welcomeScreen: {
			disclaimerText:
				'<h1>WELCOME</h1>\n\nPlease read the following which provides a detailed summary of <i>what documents are required and in what format</i>.\n\n<b>Certified Documents</b>\n\n1. Certified Bank Statements of the past 3 months \n2. Certified Passport \n3. Certified Proof of Address\n\n<hr />\n\n<b>Translation of Documents in a Foreign Language</b>\n\nAll documents that are not submitted in English must be translated into English by a professional translator.\n\n<u>PLEASE NOTE: AN APPLICATION CANNOT BE SUBMITTED UNTIL COMPLETED IN FULL.</u>',
			enabled: true,
			requirements: true
		},
		active: true,
		blockchainAddressExport: false,
		removed: false,
		smsVerification: false,
		type: 'individual',
		created: '2019-06-03T05:52:54.587Z',
		history: [
			{
				_id: '5cf4b5b6fc92bdb47fc72f42',
				event: 'create',
				user: '5cf4b5b6fc92bd4567c72f40',
				timestamp: '2019-06-03T05:52:54.591Z'
			},
			{
				_id: '5cf4b5b6fc92bd3e38c72f43',
				event: 'add_requirement',
				user: '5cf4b5b6fc92bd4567c72f40',
				timestamp: '2019-06-03T05:52:54.638Z'
			},
			{
				_id: '5cf4b5b6fc92bd0d21c72f45',
				event: 'add_requirement',
				user: '5cf4b5b6fc92bd4567c72f40',
				timestamp: '2019-06-03T05:52:54.647Z'
			},
			{
				_id: '5cfe32494eb58df72cce0037',
				event: 'add_requirement',
				user: '5cf4b5b6fc92bd4567c72f40',
				timestamp: '2019-06-10T10:34:49.938Z'
			},
			{
				_id: '5cfe32534eb58df5e4ce003c',
				event: 'update_requirement',
				user: '5cf4b5b6fc92bd4567c72f40',
				timestamp: '2019-06-10T10:34:59.135Z'
			},
			{
				_id: '5cfe32984eb58dcf96ce0055',
				event: 'remove_requirement',
				user: '5cf4b5b6fc92bd4567c72f40',
				timestamp: '2019-06-10T10:36:08.035Z'
			},
			{
				_id: '5cffb5706913441fbdbb01a3',
				event: 'update_requirement',
				user: '5cf4b5b6fc92bd4567c72f40',
				timestamp: '2019-06-11T14:06:40.078Z'
			},
			{
				_id: '5cffb632691344236ebb01a5',
				event: 'add_requirement',
				user: '5cf4b5b6fc92bd4567c72f40',
				timestamp: '2019-06-11T14:09:54.064Z'
			},
			{
				_id: '5cffb7ed691344fecabb021c',
				event: 'add_requirement',
				user: '5cf4b5b6fc92bd4567c72f40',
				timestamp: '2019-06-11T14:17:17.767Z'
			},
			{
				_id: '5d00d94fa8cc5158ddafb58a',
				event: 'edit',
				user: '5cf4b5b6fc92bd4567c72f40',
				timestamp: '2019-06-12T10:51:59.252Z'
			},
			{
				_id: '5d00d980a8cc511c77afb58d',
				event: 'edit',
				user: '5cf4b5b6fc92bd4567c72f40',
				timestamp: '2019-06-12T10:52:48.144Z'
			},
			{
				_id: '5d00da0da8cc514350afb58e',
				event: 'edit',
				user: '5cf4b5b6fc92bd4567c72f40',
				timestamp: '2019-06-12T10:55:09.751Z'
			},
			{
				_id: '5d00da15a8cc512efaafb58f',
				event: 'edit',
				user: '5cf4b5b6fc92bd4567c72f40',
				timestamp: '2019-06-12T10:55:17.948Z'
			},
			{
				_id: '5d076f0a31542368c205cbc3',
				event: 'add_requirement',
				user: '5cf4b5b6fc92bd4567c72f40',
				timestamp: '2019-06-17T10:44:26.940Z'
			},
			{
				_id: '5d076f20315423caec05cbc5',
				event: 'add_requirement',
				user: '5cf4b5b6fc92bd4567c72f40',
				timestamp: '2019-06-17T10:44:48.394Z'
			},
			{
				_id: '5d08db5e715ee986d65991d2',
				event: 'edit',
				user: '5cf4b5b6fc92bd4567c72f40',
				timestamp: '2019-06-18T12:38:54.684Z'
			},
			{
				_id: '5d09f19d26f7be25c47e0663',
				event: 'edit',
				user: '5cf4b5b6fc92bd4567c72f40',
				timestamp: '2019-06-19T08:26:05.627Z'
			},
			{
				_id: '5d13577f720895198f86cda6',
				event: 'add_requirement',
				user: '5cf4b5b6fc92bd4567c72f40',
				timestamp: '2019-06-26T11:31:11.665Z'
			},
			{
				_id: '5d14a3b4a67fc458f50e51fc',
				event: 'add_requirement',
				user: '5cf4b5b6fc92bd4567c72f40',
				timestamp: '2019-06-27T11:08:36.100Z'
			},
			{
				_id: '5d24b8a078d030674e638a4a',
				event: 'edit',
				user: '5cf4b5b6fc92bd4567c72f40',
				timestamp: '2019-07-09T15:54:08.958Z'
			},
			{
				_id: '5d40380cdba36c7ccf5e1310',
				event: 'edit',
				user: '5cf4b5b6fc92bd4567c72f40',
				timestamp: '2019-07-30T12:29:00.588Z'
			},
			{
				_id: '5d403906dba36cb2cb5e1329',
				event: 'edit',
				user: '5cf4b5b6fc92bd4567c72f40',
				timestamp: '2019-07-30T12:33:10.092Z'
			},
			{
				_id: '5d4039a1dba36cf7da5e132a',
				event: 'edit',
				user: '5cf4b5b6fc92bd4567c72f40',
				timestamp: '2019-07-30T12:35:45.311Z'
			},
			{
				_id: '5d403a42dba36c40025e132b',
				event: 'edit',
				user: '5cf4b5b6fc92bd4567c72f40',
				timestamp: '2019-07-30T12:38:26.191Z'
			},
			{
				_id: '5da8ac42e0314e70b2ba3aa7',
				event: 'update_requirement',
				user: '5cf4b5b6fc92bd4567c72f40',
				timestamp: '2019-10-17T18:00:34.549Z'
			},
			{
				_id: '5da8ac75e0314e4d38ba3aa9',
				event: 'update_requirement',
				user: '5cf4b5b6fc92bd4567c72f40',
				timestamp: '2019-10-17T18:01:25.255Z'
			},
			{
				_id: '5db0002ba20f8063a6fad62f',
				event: 'add_requirement',
				user: '5cf4b5b6fc92bd4567c72f40',
				timestamp: '2019-10-23T07:24:27.493Z'
			},
			{
				_id: '5db00034a20f80bf05fad631',
				event: 'edit',
				user: '5cf4b5b6fc92bd4567c72f40',
				timestamp: '2019-10-23T07:24:36.131Z'
			},
			{
				_id: '5db00067a20f8050ddfad635',
				event: 'remove_requirement',
				user: '5cf4b5b6fc92bd4567c72f40',
				timestamp: '2019-10-23T07:25:27.904Z'
			},
			{
				_id: '5db0006aa20f805cbafad636',
				event: 'edit',
				user: '5cf4b5b6fc92bd4567c72f40',
				timestamp: '2019-10-23T07:25:30.307Z'
			}
		],
		legalLinks: [],
		name: 'Individual Sign up template',
		description: 'Sample template for individual KYC',
		scope: '5cf4b5b6fc92bd376cc72f3f',
		submission: { documentTemplate: '5d249dd378d030e5e6638a43', signatureEnabled: false },
		memberTemplates: []
	},
	managers: [],
	members: [],
	statusLog: [
		{
			_id: '5ddd5b7856fbcea15e389655',
			timestamp: '2019-11-26T17:06:00.253Z',
			code: 15,
			note: null,
			user: null
		},
		{ _id: '5ddd5b1656fbce861a389639', timestamp: '2019-11-26T17:04:22.652Z', code: 4 }
	],
	createdAt: '2019-11-26T17:04:22.655Z',
	updatedAt: '2019-11-26T17:04:22.655Z',
	currentStatus: 15,
	id: '5ddd5b1656fbce7b59389638',
	statusName: 'In Progress'
};

export default applicationDetailsRes;
