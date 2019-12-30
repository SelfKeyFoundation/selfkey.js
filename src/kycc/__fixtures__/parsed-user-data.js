export default {
	id: '5ddd5b1656fbcef0dd389637',
	attributes: {
		phoneNumber: [
			{
				schemaId: 'http://platform.selfkey.org/schema/attribute/phone-number.json',
				id: '5cf4b5b6fc92bd26dec72f44',
				description: 'Your phone number (including country code)',
				title: 'Phone Number',
				data: '+380000312312',
				valid: true,
				required: true
			},
			{
				schemaId: 'http://platform.selfkey.org/schema/attribute/phone-number.json',
				id: '5cf4b5b6fc92bd26dec82f44',
				description: 'Your phone number (including country code)',
				title: 'Phone Number',
				data: '+380000312315',
				valid: true,
				required: true
			}
		],
		physicalAddress: {
			id: '5cffb7ed691344744cbb021d',
			title: 'Your Address',
			description:
				'Your Address: Enter the information as it appears on your government-issued document (street address, city, postal code).',
			required: true,
			schemaId: 'http://platform.selfkey.org/schema/attribute/physical-address.json',
			valid: true,
			data: { address_line_1: 'test1', address_line_2: null, address_line_3: null }
		},
		firstName: {
			id: '5d076f0a315423134405cbc4',
			title: 'First Name',
			description: 'FIrst name',
			required: true,
			schemaId: 'http://platform.selfkey.org/schema/attribute/first-name.json',
			valid: true,
			data: 'first-name'
		},
		lastName: {
			title: 'Last Name',
			description: 'Last name',
			id: '5d076f20315423f5db05cbc6',
			required: true,
			schemaId: 'http://platform.selfkey.org/schema/attribute/last-name.json',
			valid: true,
			data: 'last-name'
		},
		email: {
			id: '5d13577f72089544cb86cda7',
			title: 'Email Address',
			description: 'Your email address',
			required: true,
			schemaId: 'http://platform.selfkey.org/schema/attribute/email.json',
			valid: true,
			data: 'test-4952@test.com'
		},
		dateOfBirth: {
			id: '5d14a3b4a67fc45f980e51fd',
			title: 'Birthdate',
			description: 'Birthdate',
			required: true,
			schemaId: 'http://platform.selfkey.org/schema/attribute/date-of-birth.json',
			valid: true,
			data: '2019-11-01'
		},
		passport: {
			id: '5cf4b5b6fc92bda18bc72f46',
			title: 'Your Passport',
			description:
				'Please submit a clear and legible copy of the front page of your Passport.',
			required: true,
			schemaId: 'http://platform.selfkey.org/schema/attribute/passport.json',
			valid: true,
			data: {
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
		bankStatement: {
			id: '5cffb6326913442272bb01a6',
			title: 'Proof of Address',
			description:
				'Please submit a clear and legible copy of your Bank Statement, Utility Bill, or any other government-issued document showing your full name and residential address.',
			required: true,
			schemaId: 'http://platform.selfkey.org/schema/attribute/bank-statement.json',
			valid: true,
			data: {
				images: [
					{
						content: '5ddd5b1356fbce9b85389634',
						mimeType: 'application/pdf',
						size: 123735
					}
				]
			}
		}
	}
};
