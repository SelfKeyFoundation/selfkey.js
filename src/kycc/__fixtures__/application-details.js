export default {
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
		'5cf4b5b6fc92bd26dec82f44': {
			description: 'Your phone number (including country code)',
			isAdditional: false,
			label: 'Phone Number',
			optional: false,
			schema: 'http://platform.selfkey.org/schema/attribute/phone-number.json',
			valid: true,
			value: '+380000312315'
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
			value: 'first-name'
		},
		'5d076f20315423f5db05cbc6': {
			description: 'Last name',
			isAdditional: false,
			label: 'Last Name',
			optional: false,
			schema: 'http://platform.selfkey.org/schema/attribute/last-name.json',
			valid: true,
			value: 'last-name'
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
	owners: ['5ddd5b1656fbcef0dd389637'],
	payments: [],
	questions: {},
	requirementsLog: {},
	type: 'individual',
	memberTemplates: [],
	template: '5cf4b5b6fc92bd6e67c72f41',
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
