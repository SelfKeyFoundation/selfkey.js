export default {
	id: '5ddd5b1656fbcef0dd389637',
	attributes: {
		phoneNumber: [
			{
				schema: 'http://platform.selfkey.org/schema/attribute/phone-number.json',
				id: '5cf4b5b6fc92bd26dec72f44',
				label: 'Phone Number',
				value: '+380000312312',
				valid: true,
				required: true
			},
			{
				schema: 'http://platform.selfkey.org/schema/attribute/phone-number.json',
				id: '5cf4b5b6fc92bd26dec82f44',
				label: 'Phone Number',
				value: '+380000312315',
				valid: true,
				required: true
			}
		],
		physicalAddress: {
			id: '5cffb7ed691344744cbb021d',
			label: 'Your Address',
			required: true,
			schema: 'http://platform.selfkey.org/schema/attribute/physical-address.json',
			valid: true,
			value: { address_line_1: 'test1', address_line_2: null, address_line_3: null }
		},
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
		dateOfBirth: {
			id: '5d14a3b4a67fc45f980e51fd',
			label: 'Birthdate',
			required: true,
			schema: 'http://platform.selfkey.org/schema/attribute/date-of-birth.json',
			valid: true,
			value: '2019-11-01'
		},
		passport: {
			id: '5cf4b5b6fc92bda18bc72f46',
			label: 'Your Passport',
			required: true,
			schema: 'http://platform.selfkey.org/schema/attribute/passport.json',
			valid: true,
			value: {
				extra: [],
				image: {
					content: 'resolved-file-5ddd5b1356fbce0f66389635',
					mimeType: 'application/pdf',
					size: 123735
				},
				selfie: {
					image: {
						content: 'resolved-file-5ddd5b1656fbce5ae3389636',
						mimeType: 'application/pdf',
						size: 5569313
					}
				}
			}
		},
		bankStatement: {
			id: '5cffb6326913442272bb01a6',
			label: 'Proof of Address',
			required: true,
			schema: 'http://platform.selfkey.org/schema/attribute/bank-statement.json',
			valid: true,
			value: {
				images: [
					{
						content: 'resolved-file-5ddd5b1356fbce9b85389634',
						mimeType: 'application/pdf',
						size: 123735
					}
				]
			}
		}
	}
};
