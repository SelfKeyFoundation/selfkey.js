export const applicationsRes = {
	items: [
		{
			owners: [{ _id: '5ddd5b1656fbcef0dd389637', email: 'test-4952@test.com' }],
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			id: '5ddd5b1656fbce7b59389638'
		},
		{
			owners: [{ _id: '5dd04e56b293c664332d439e', email: 'anne@gmail.com' }],
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			id: '5dd04e56b293c65df12d43ad'
		},
		{
			owners: [
				{
					_id: '5db000e2a20f801bfcfad639',
					email: 'sady@mail.com',
					firstName: 'Saddam',
					lastName: 'Husein'
				}
			],
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			id: '5db000e3a20f80175efad649'
		},
		{
			owners: [
				{
					_id: '5dad938e20455c874836742c',
					email: 'mimi@mail.com',
					firstName: 'Mimi',
					lastName: 'simi'
				}
			],
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			id: '5dad938e20455c118636743c'
		},
		{
			owners: [
				{
					_id: '5da8ac94e0314e338fba3aab',
					email: 'mustermann@email.test',
					firstName: 'Erika',
					lastName: 'Mustermann'
				}
			],
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			id: '5da8ac9ae0314e3000ba3aaf'
		},
		{
			owners: [
				{
					_id: '5d9463aafef5832e88c8f3a9',
					email: 'test@answer.com',
					firstName: 'test',
					lastName: 'answer'
				}
			],
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			id: '5d9463aafef5837630c8f3b8'
		},
		{
			owners: [
				{
					_id: '5d945faefef583651bc8f34b',
					email: 'somethinglike@that.com',
					firstName: 'arturas',
					lastName: 'bembidas'
				}
			],
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			id: '5d945faefef5833770c8f35a'
		},
		{
			owners: [
				{
					_id: '5d934d13fef583d027c8ee1e',
					email: 'abobinas@gmail.com',
					firstName: 'arturas',
					lastName: 'bobinas'
				}
			],
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			id: '5d934e45fef583fd34c8ee23'
		},
		{
			owners: [
				{
					_id: '5d92be7ed1a23e3f5e0341f9',
					email: 'joonas+supertest@example.com',
					firstName: 'Joonas',
					lastName: 'Test',
					middleName: ''
				}
			],
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			id: '5d92be7ed1a23e0d3a034208'
		},
		{
			owners: [
				{
					_id: '5d8b5e9a7a6a921df96e4184',
					email: 'don.felipe@gmail.com',
					firstName: 'Don',
					lastName: 'Felipe'
				}
			],
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			id: '5d8b5e9a7a6a921ede6e4193'
		},
		{
			owners: [
				{
					_id: '5d83770f833c9a5a180fff5c',
					email: 'junior.doe@domain.com',
					firstName: ' ',
					lastName: ' '
				}
			],
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			id: '5d837742833c9a32ce0fff5d'
		},
		{
			owners: [
				{
					_id: '5d836a962eb29f5de1174586',
					email: 'jose.rizal@gmail.com',
					firstName: 'Jose',
					lastName: 'Rizal'
				}
			],
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			id: '5d836a962eb29f2460174596'
		},
		{
			owners: [
				{
					_id: '5d7b8d4e4cacf501e7f8a42f',
					email: 'oana@mail.com',
					firstName: 'Oana',
					lastName: 'test'
				}
			],
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			id: '5d7b8d4e4cacf52d13f8a43f'
		},
		{
			owners: [
				{
					_id: '5d764659508e32366a04cca4',
					email: 'test4@test.com',
					firstName: 'test2',
					lastName: 'test3'
				}
			],
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			id: '5d7646cb508e324bd404cca8'
		},
		{
			owners: [
				{
					_id: '5d6ce92eb619d5ec505ca28d',
					email: 'new-cluster-test@example.com',
					firstName: 'Joonas',
					lastName: 'Ruotsalainen',
					middleName: ''
				}
			],
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			id: '5d6ce92eb619d5dbe75ca29c'
		},
		{
			owners: [{ _id: '5d5f8a229eae27820070c06b', email: 'existing@example.com' }],
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			id: '5d5f8a229eae27c36a70c07a'
		},
		{
			owners: [
				{
					_id: '5d404820dba36ca0115e132c',
					email: 'kimlitest@test.com',
					firstName: 'Kim',
					lastName: 'Li'
				}
			],
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			id: '5d41a220eaa39d50a6a9a1ee'
		},
		{
			owners: [
				{
					_id: '5d4188172a7ab98e2466a231',
					email: 'test1@test1Test1.com',
					firstName: 'test1',
					lastName: 'test1'
				}
			],
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			id: '5d4188182a7ab92dbe66a235'
		},
		{
			owners: [
				{
					_id: '5d4180a12a7ab9377a66a21a',
					email: 'uw@domain.com',
					firstName: 'Uber',
					lastName: 'Worker'
				}
			],
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			id: '5d4180a22a7ab922ff66a21b'
		},
		{
			owners: [{ _id: '5d4038a2dba36cf4785e1313', email: 'vitaly@3.test' }],
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			id: '5d4038a2dba36ce7455e1322'
		},
		{
			owners: [{ _id: '5d24b8f278d0306964638a4d', email: 'vitaly@doc0.test' }],
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			id: '5d24b8f278d0306679638a5c'
		},
		{
			owners: [{ _id: '5d2321d6cdf61848711f7adb', email: 'haviland.c@husky.neu.edu' }],
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			id: '5d2321d6cdf61855381f7aea'
		},
		{
			owners: [
				{
					_id: '5d22eebecdf618caa61f7a91',
					email: 'dob@mail.com',
					firstName: 'dob',
					lastName: 'birtdh'
				}
			],
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			id: '5d22eebecdf6182f071f7aa1'
		},
		{
			owners: [
				{
					_id: '5d1da53ab4e9cd3c8278d66d',
					email: 'datey@mail.com',
					firstName: 'datey',
					lastName: 'datey'
				}
			],
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			id: '5d1da53ab4e9cd84fa78d67d'
		},
		{
			owners: [{ _id: '5d1c8f428987e6f26257d43e', email: 'abc@d.com' }],
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			id: '5d1c8f428987e6b21657d44d'
		},
		{
			owners: [{ _id: '5d1c8e168987e6011657d40f', email: 'testing@email.th' }],
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			id: '5d1c8e168987e6447857d41e'
		},
		{
			owners: [{ _id: '5d1c8c728987e66eeb57d3fb', email: 'tqt@t.com' }],
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			id: '5d1c8c728987e676fb57d40a'
		},
		{
			owners: [
				{
					_id: '5d1c88d58987e6c30e57d3df',
					email: 'uppercase@email.com',
					firstName: 'uppercase',
					lastName: 'email'
				}
			],
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			id: '5d1c88d58987e6cdce57d3ef'
		},
		{
			owners: [{ _id: '5d1c874af40208efb27fc231', email: 'charlie@email.com' }],
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			id: '5d1c874af40208a0ad7fc240'
		},
		{
			owners: [{ _id: '5d1c8312f40208ee397fc19e', email: 'tester@test.com' }],
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			id: '5d1c8312f4020858617fc1ad'
		},
		{
			owners: [{ _id: '5d1c82d6f402087fb77fc18a', email: 'teste@test.com' }],
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			id: '5d1c82d6f4020819217fc199'
		},
		{
			owners: [
				{
					_id: '5d1c6f26f40208739f7fc0a7',
					email: 'doe@mail.com',
					firstName: 'Johanniosins',
					lastName: 'Doe'
				}
			],
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			id: '5d1c6f26f4020853ae7fc0b7'
		},
		{
			owners: [
				{
					_id: '5d14c5d1a67fc42b350e5233',
					email: 'kimlitest@gmail.com',
					firstName: 'Kim',
					lastName: 'Li'
				}
			],
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			id: '5d14c5d2a67fc47afb0e5234'
		},
		{
			owners: [
				{
					_id: '5d14c547a67fc4f7fa0e521d',
					email: 'wonton@hotmail.com',
					firstName: 'wonton',
					lastName: 'cat'
				}
			],
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			id: '5d14c549a67fc423e10e521e'
		},
		{
			owners: [
				{
					_id: '5d14a3eaa67fc459100e5202',
					email: 'test@bday.com',
					firstName: 'Test',
					lastName: 'Birthday'
				}
			],
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			id: '5d14a3eaa67fc4347b0e5212'
		},
		{
			owners: [
				{
					_id: '5d147d7aa67fc4f3190e51e2',
					email: 'test-kim_MAX@ygahoo.com',
					firstName: 'test2',
					lastName: 'test3'
				}
			],
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			id: '5d147e11a67fc4a2220e51e3'
		},
		{
			owners: [
				{
					_id: '5d141c1a7208954ac586ce6c',
					email: 'Donald.duck@hotmail.com',
					firstName: 'Donald',
					lastName: 'Duck'
				}
			],
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			id: '5d14758ba67fc41db10e51d1'
		},
		{
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			owners: [
				{
					_id: '5d10e3cd73ea7a61d3ed6317',
					email: 'test1-max@test.com',
					firstName: 'test1',
					lastName: 'test1'
				}
			],
			id: '5d1372707208954bb986ce3d'
		},
		{
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			owners: [
				{
					_id: '5d1361cd7208957d2486ce18',
					email: 'fiona.chen@yahoo.com',
					firstName: 'Fiona',
					lastName: 'Chen'
				}
			],
			id: '5d1361cf720895148b86ce19'
		},
		{
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			owners: [
				{
					_id: '5d1360c07208955a2886ce06',
					email: 'jack.doe@domain.comn',
					firstName: 'Jack',
					lastName: 'Doe'
				}
			],
			id: '5d1360c1720895e69986ce07'
		},
		{
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			owners: [
				{
					_id: '5d109bc373ea7a45abed62a0',
					email: 'andre.c.goncalves@gmail.com',
					firstName: 'Andre',
					lastName: 'Goncalves'
				}
			],
			id: '5d135c62720895808b86cde2'
		},
		{
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			owners: [
				{
					_id: '5d134ae3720895d1ea86cd9b',
					email: 'kim2li@hotmail.com',
					firstName: 'Kim',
					lastName: 'Li'
				}
			],
			id: '5d135b11720895d68186cdbf'
		},
		{
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			owners: [
				{
					_id: '5d1354d9720895083a86cda5',
					email: 'felipewer@gmail.com',
					firstName: 'Felipe',
					lastName: 'Werlang'
				}
			],
			id: '5d1357a372089522a186cda8'
		},
		{
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			owners: [
				{
					_id: '5d123312720895f0b186cd7f',
					email: 'charlie@haviland.com',
					firstName: 'Charles',
					lastName: 'Haviland'
				}
			],
			id: '5d123312720895db7986cd8b'
		},
		{
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			owners: [{ _id: '5d11f316720895860086cca2', email: 'vitaly@accept0.test' }],
			id: '5d11f3167208952ddd86ccad'
		},
		{
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			owners: [
				{
					_id: '5d11f082720895915486cc8f',
					email: 'joonas@example.com',
					firstName: 'joonas',
					lastName: 'ruotsalainen',
					middleName: 'olavi'
				}
			],
			id: '5d11f0827208950cfe86cc9b'
		},
		{
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			owners: [{ _id: '5d0c92d673ea7a9027ed6246', email: 'v@1.test' }],
			id: '5d0c92d673ea7a72aced6251'
		},
		{
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			owners: [
				{
					_id: '5d09f1b626f7be472b7e0666',
					email: 'welcome@screen.com',
					firstName: 'Welcome',
					lastName: 'Screen'
				}
			],
			id: '5d09f1b626f7be0acf7e0672'
		},
		{
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			owners: [
				{
					_id: '5d076c9f315423b17e05cbc2',
					email: 'pete.doe@domain.com',
					firstName: 'Pete',
					lastName: 'Doe'
				}
			],
			id: '5d07708e31542380a005cbc7'
		},
		{
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/phone-number.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/first-name.json',
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/last-name.json',
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
								{
									_id: '5d14a3b4a67fc43f6f0e51ff',
									key: '1561633709078',
									value: 'A'
								},
								{
									_id: '5d14a3b4a67fc4fba40e51fe',
									key: '1561633711275',
									value: 'B'
								}
							],
							_id: '5d14a3b4a67fc45f980e51fd',
							title: 'Birthdate',
							description: 'Birthdate',
							question: 'Your Brthday',
							attributeType:
								'http://platform.selfkey.org/schema/attribute/date-of-birth.json'
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
							attributeType:
								'http://platform.selfkey.org/schema/attribute/passport.json',
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
				submission: {
					documentTemplate: '5d249dd378d030e5e6638a43',
					signatureEnabled: false
				},
				memberTemplates: []
			},
			owners: [{ _id: '5d0349562ae3218b6e4d9aed', email: 'hello2@example.com' }],
			id: '5d0349562ae321a2194d9af6'
		}
	],
	total: 55
};

export default applicationsRes;
