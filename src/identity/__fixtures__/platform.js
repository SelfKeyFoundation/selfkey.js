export default {
	name: 'Selfkey.org',
	identityAttributeSchemaId: 'http://platform.selfkey.org/schema/identity-attribute.json',
	identityAttributes: [
		{
			json: 'http://platform.selfkey.org/schema/attribute/bank-statement.json',
			ui: 'http://platform.selfkey.org/schema/ui/bank-statement.json',
			entityType: ['individual']
		},
		{
			json: 'http://platform.selfkey.org/schema/attribute/date-of-birth.json',
			ui: 'http://platform.selfkey.org/schema/ui/date-of-birth.json',
			entityType: ['individual']
		},
		{
			json: 'http://platform.selfkey.org/schema/attribute/incorporation-date.json',
			ui: 'http://platform.selfkey.org/schema/ui/incorporation-date.json',
			entityType: ['corporate']
		},
		{
			json: 'http://platform.selfkey.org/schema/attribute/country-of-residency.json',
			ui: 'http://platform.selfkey.org/schema/ui/country-of-residency.json',
			entityType: ['individual']
		},
		{
			json: 'http://platform.selfkey.org/schema/attribute/drivers-license.json',
			ui: 'http://platform.selfkey.org/schema/ui/drivers-license.json',
			entityType: ['individual']
		},
		{
			json: 'http://platform.selfkey.org/schema/attribute/email.json',
			ui: 'http://platform.selfkey.org/schema/ui/email.json',
			entityType: ['corporate', 'individual']
		},
		{
			json: 'http://platform.selfkey.org/schema/attribute/fingerprint.json',
			ui: 'http://platform.selfkey.org/schema/ui/fingerprint.json',
			entityType: ['individual']
		},
		{
			json: 'http://platform.selfkey.org/schema/attribute/first-name.json',
			ui: 'http://platform.selfkey.org/schema/ui/first-name.json',
			entityType: ['individual']
		},
		{
			json: 'http://platform.selfkey.org/schema/attribute/last-name.json',
			ui: 'http://platform.selfkey.org/schema/ui/last-name.json',
			entityType: ['individual']
		},
		{
			json: 'http://platform.selfkey.org/schema/attribute/legal-entity-type.json',
			ui: 'http://platform.selfkey.org/schema/ui/legal-entity-type.json',
			entityType: ['corporate']
		},
		{
			json: 'http://platform.selfkey.org/schema/attribute/legal-jurisdiction.json',
			ui: 'http://platform.selfkey.org/schema/ui/legal-jurisdiction.json',
			entityType: ['corporate']
		},
		{
			json: 'http://platform.selfkey.org/schema/attribute/middle-name.json',
			ui: 'http://platform.selfkey.org/schema/ui/middle-name.json',
			entityType: ['individual']
		},
		{
			json: 'http://platform.selfkey.org/schema/attribute/national-id.json',
			ui: 'http://platform.selfkey.org/schema/ui/national-id.json',
			entityType: ['individual']
		},
		{
			json: 'http://platform.selfkey.org/schema/attribute/nationality.json',
			ui: 'http://platform.selfkey.org/schema/ui/nationality.json',
			entityType: ['individual']
		},
		{
			json: 'http://platform.selfkey.org/schema/attribute/passport.json',
			ui: 'http://platform.selfkey.org/schema/ui/passport.json',
			entityType: ['individual']
		},
		{
			json: 'http://platform.selfkey.org/schema/attribute/phone-number.json',
			ui: 'http://platform.selfkey.org/schema/ui/phone-number.json',
			entityType: ['corporate', 'individual']
		},
		{
			json: 'http://platform.selfkey.org/schema/attribute/physical-address.json',
			ui: 'http://platform.selfkey.org/schema/ui/physical-address.json',
			entityType: ['corporate', 'individual']
		},
		{
			json: 'http://platform.selfkey.org/schema/attribute/tax-certificate.json',
			ui: 'http://platform.selfkey.org/schema/ui/tax-certificate.json',
			entityType: ['corporate', 'individual']
		},
		{
			json: 'http://platform.selfkey.org/schema/attribute/tax-id-number.json',
			ui: 'http://platform.selfkey.org/schema/ui/tax-id-number.json',
			entityType: ['corporate', 'individual']
		},
		{
			json: 'http://platform.selfkey.org/schema/attribute/utility-bill.json',
			ui: 'http://platform.selfkey.org/schema/ui/utility-bill.json',
			entityType: ['individual']
		},
		{
			json: 'http://platform.selfkey.org/schema/attribute/voice-id.json',
			ui: 'http://platform.selfkey.org/schema/ui/voice-id.json'
		},
		{
			json: 'http://platform.selfkey.org/schema/attribute/work-place.json',
			ui: 'http://platform.selfkey.org/schema/ui/work-place.json',
			entityType: ['individual']
		},
		{
			json: 'http://platform.selfkey.org/schema/attribute/btc-address.json',
			ui: 'http://platform.selfkey.org/schema/ui/btc-address.json',
			entityType: ['corporate', 'individual']
		},
		{
			json: 'http://platform.selfkey.org/schema/attribute/eth-address.json',
			ui: 'http://platform.selfkey.org/schema/ui/eth-address.json',
			entityType: ['corporate', 'individual']
		},
		{
			json: 'http://platform.selfkey.org/schema/attribute/dash-address.json',
			ui: 'http://platform.selfkey.org/schema/ui/dash-address.json',
			entityType: ['corporate', 'individual']
		},
		{
			json: 'http://platform.selfkey.org/schema/attribute/certificate-of-incorporation.json',
			ui: 'http://platform.selfkey.org/schema/ui/certificate-of-incorporation.json',
			entityType: ['corporate']
		},
		{
			json: 'http://platform.selfkey.org/schema/attribute/registration-certificate.json',
			ui: 'http://platform.selfkey.org/schema/ui/registration-certificate.json',
			entityType: ['corporate']
		},
		{
			json: 'http://platform.selfkey.org/schema/attribute/external-document.json',
			ui: 'http://platform.selfkey.org/schema/ui/external-document.json',
			entityType: ['individual', 'corporate']
		},
		{
			json: 'http://platform.selfkey.org/schema/attribute/company-name.json',
			ui: 'http://platform.selfkey.org/schema/ui/company-name.json',
			entityType: ['corporate']
		},
		{
			json: 'http://platform.selfkey.org/schema/attribute/birth-certificate.json',
			ui: 'http://platform.selfkey.org/schema/ui/birth-certificate.json'
		},
		{
			json: 'http://platform.selfkey.org/schema/attribute/member-register.json',
			ui: 'http://platform.selfkey.org/schema/ui/member-register.json',
			entityType: ['corporate']
		},
		{
			json: 'http://platform.selfkey.org/schema/attribute/cv.json',
			ui: 'http://platform.selfkey.org/schema/ui/cv.json',
			entityType: ['individual']
		},
		{
			json: 'http://platform.selfkey.org/schema/attribute/professional-reference-letter.json',
			ui: 'http://platform.selfkey.org/schema/ui/professional-reference-letter.json',
			entityType: ['corporate', 'individual']
		}
	],
	jsonSchemas: {
		'http://platform.selfkey.org/schema/attribute/bank-statement.json': {
			url: 'http://platform.selfkey.org/schema/attribute/bank-statement.json',
			schema: {
				$id: 'http://platform.selfkey.org/schema/attribute/bank-statement.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				entityType: ['individual'],
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				title: 'Bank Statement',
				description:
					'Please provide a copy of a recent bank statement. No older than 6 months.',
				type: 'object',
				properties: {
					images: {
						$ref: 'http://platform.selfkey.org/schema/file/multi-image.json'
					},
					issued: {
						$ref: 'http://platform.selfkey.org/schema/misc/issue-date.json'
					},
					extra: {
						$ref: 'http://platform.selfkey.org/schema/misc/extra-images.json'
					}
				},
				required: ['images', 'issued']
			},
			dereferenced: {
				$id: 'http://platform.selfkey.org/schema/attribute/bank-statement.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				entityType: ['individual'],
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				title: 'Bank Statement',
				description:
					'Please provide a copy of a recent bank statement. No older than 6 months.',
				type: 'object',
				properties: {
					images: {
						$schema: 'http://json-schema.org/draft-07/schema',
						$id: 'http://platform.selfkey.org/schema/file/multi-image.json',
						title: 'Multiple Images',
						type: 'array',
						items: {
							$schema: 'http://json-schema.org/draft-07/schema',
							$id: 'http://platform.selfkey.org/schema/file/image.json',
							type: 'object',
							title: 'Image',
							format: 'file',
							properties: {
								mimeType: {
									type: 'string',
									enum: ['image/jpeg', 'image/png', 'application/pdf']
								},
								size: {
									type: 'integer',
									maximum: 50000000
								},
								content: {
									type: 'string'
								}
							},
							required: ['mimeType', 'size', 'content']
						}
					},
					issued: {
						$id: 'http://platform.selfkey.org/schema/misc/issue-date.json',
						$schema: 'http://json-schema.org/draft-07/schema',
						title: 'Issue Date',
						type: 'string',
						format: 'date'
					},
					extra: {
						$id: 'http://platform.selfkey.org/schema/misc/extra-images.json',
						$schema: 'http://json-schema.org/draft-07/schema',
						title: 'Extra Images',
						description: 'Please add any extra images that are relevant',
						type: 'array',
						items: {
							$schema: 'http://json-schema.org/draft-07/schema',
							$id: 'http://platform.selfkey.org/schema/file/image.json',
							type: 'object',
							title: 'Image',
							format: 'file',
							properties: {
								mimeType: {
									type: 'string',
									enum: ['image/jpeg', 'image/png', 'application/pdf']
								},
								size: {
									type: 'integer',
									maximum: 50000000
								},
								content: {
									type: 'string'
								}
							},
							required: ['mimeType', 'size', 'content']
						}
					}
				},
				required: ['images', 'issued']
			}
		},
		'http://platform.selfkey.org/schema/attribute/date-of-birth.json': {
			url: 'http://platform.selfkey.org/schema/attribute/date-of-birth.json',
			schema: {
				$id: 'http://platform.selfkey.org/schema/attribute/date-of-birth.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['individual'],
				title: 'Date of Birth',
				description: 'Please enter your full date of birth.',
				type: 'string',
				format: 'date'
			},
			dereferenced: {
				$id: 'http://platform.selfkey.org/schema/attribute/date-of-birth.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['individual'],
				title: 'Date of Birth',
				description: 'Please enter your full date of birth.',
				type: 'string',
				format: 'date'
			}
		},
		'http://platform.selfkey.org/schema/attribute/incorporation-date.json': {
			url: 'http://platform.selfkey.org/schema/attribute/incorporation-date.json',
			schema: {
				$id: 'http://platform.selfkey.org/schema/attribute/incorporation-date.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['corporate'],
				title: 'Date of Incorporation',
				description: 'Please company incorporation date',
				type: 'string',
				format: 'date'
			},
			dereferenced: {
				$id: 'http://platform.selfkey.org/schema/attribute/incorporation-date.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['corporate'],
				title: 'Date of Incorporation',
				description: 'Please company incorporation date',
				type: 'string',
				format: 'date'
			}
		},
		'http://platform.selfkey.org/schema/attribute/country-of-residency.json': {
			url: 'http://platform.selfkey.org/schema/attribute/country-of-residency.json',
			schema: {
				$id: 'http://platform.selfkey.org/schema/attribute/country-of-residency.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['individual'],
				title: 'Country of Residency',
				description: 'Please specify the country you are currently living in.',
				type: 'object',
				properties: {
					country: {
						$ref: 'http://platform.selfkey.org/schema/misc/country.json'
					}
				},
				required: ['country']
			},
			dereferenced: {
				$id: 'http://platform.selfkey.org/schema/attribute/country-of-residency.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['individual'],
				title: 'Country of Residency',
				description: 'Please specify the country you are currently living in.',
				type: 'object',
				properties: {
					country: {
						$id: 'http://platform.selfkey.org/schema/misc/country.json',
						$schema: 'http://json-schema.org/draft-07/schema',
						title: 'Country',
						type: 'string',
						enum: [
							'AF',
							'AX',
							'AL',
							'DZ',
							'AS',
							'AD',
							'AO',
							'AI',
							'AQ',
							'AG',
							'AR',
							'AM',
							'AW',
							'AU',
							'AT',
							'AZ',
							'BS',
							'BH',
							'BD',
							'BB',
							'BY',
							'BE',
							'BZ',
							'BJ',
							'BM',
							'BT',
							'BO',
							'BQ',
							'BA',
							'BW',
							'BV',
							'BR',
							'IO',
							'BN',
							'BG',
							'BF',
							'BI',
							'KH',
							'CM',
							'CA',
							'CV',
							'KY',
							'CF',
							'TD',
							'CL',
							'CN',
							'CX',
							'CC',
							'CO',
							'KM',
							'CG',
							'CD',
							'CK',
							'CR',
							'CI',
							'HR',
							'CU',
							'CW',
							'CY',
							'CZ',
							'DK',
							'DJ',
							'DM',
							'DO',
							'EC',
							'EG',
							'SV',
							'GQ',
							'ER',
							'EE',
							'ET',
							'FK',
							'FO',
							'FJ',
							'FI',
							'FR',
							'GF',
							'PF',
							'TF',
							'GA',
							'GM',
							'GE',
							'DE',
							'GH',
							'GI',
							'GR',
							'GL',
							'GD',
							'GP',
							'GU',
							'GT',
							'GG',
							'GN',
							'GW',
							'GY',
							'HT',
							'HM',
							'VA',
							'HN',
							'HK',
							'HU',
							'IS',
							'IN',
							'ID',
							'IR',
							'IQ',
							'IE',
							'IM',
							'IL',
							'IT',
							'JM',
							'JP',
							'JE',
							'JO',
							'KZ',
							'KE',
							'KI',
							'KP',
							'KR',
							'KW',
							'KG',
							'LA',
							'LV',
							'LB',
							'LS',
							'LR',
							'LY',
							'LI',
							'LT',
							'LU',
							'MO',
							'MK',
							'MG',
							'MW',
							'MY',
							'MV',
							'ML',
							'MT',
							'MH',
							'MQ',
							'MR',
							'MU',
							'YT',
							'MX',
							'FM',
							'MD',
							'MC',
							'MN',
							'ME',
							'MS',
							'MA',
							'MZ',
							'MM',
							'NA',
							'NR',
							'NP',
							'NL',
							'NC',
							'NZ',
							'NI',
							'NE',
							'NG',
							'NU',
							'NF',
							'MP',
							'NO',
							'OM',
							'PK',
							'PW',
							'PS',
							'PA',
							'PG',
							'PY',
							'PE',
							'PH',
							'PN',
							'PL',
							'PT',
							'PR',
							'QA',
							'RE',
							'RO',
							'RU',
							'RW',
							'BL',
							'SH',
							'KN',
							'LC',
							'MF',
							'PM',
							'VC',
							'WS',
							'SM',
							'ST',
							'SA',
							'SN',
							'RS',
							'SC',
							'SL',
							'SG',
							'SX',
							'SK',
							'SI',
							'SB',
							'SO',
							'ZA',
							'GS',
							'SS',
							'ES',
							'LK',
							'SD',
							'SR',
							'SJ',
							'SZ',
							'SE',
							'CH',
							'SY',
							'TW',
							'TJ',
							'TZ',
							'TH',
							'TL',
							'TG',
							'TK',
							'TO',
							'TT',
							'TN',
							'TR',
							'TM',
							'TC',
							'TV',
							'UG',
							'UA',
							'AE',
							'GB',
							'US',
							'UM',
							'UY',
							'UZ',
							'VU',
							'VE',
							'VN',
							'VG',
							'VI',
							'WF',
							'EH',
							'YE',
							'ZM',
							'ZW'
						],
						enumNames: [
							'Afghanistan',
							'Åland Islands',
							'Albania',
							'Algeria',
							'American Samoa',
							'Andorra',
							'Angola',
							'Anguilla',
							'Antarctica',
							'Antigua and Barbuda',
							'Argentina',
							'Armenia',
							'Aruba',
							'Australia',
							'Austria',
							'Azerbaijan',
							'Bahamas',
							'Bahrain',
							'Bangladesh',
							'Barbados',
							'Belarus',
							'Belgium',
							'Belize',
							'Benin',
							'Bermuda',
							'Bhutan',
							'Bolivia, Plurinational State of',
							'Bonaire, Sint Eustatius and Saba',
							'Bosnia and Herzegovina',
							'Botswana',
							'Bouvet Island',
							'Brazil',
							'British Indian Ocean Territory',
							'Brunei Darussalam',
							'Bulgaria',
							'Burkina Faso',
							'Burundi',
							'Cambodia',
							'Cameroon',
							'Canada',
							'Cape Verde',
							'Cayman Islands',
							'Central African Republic',
							'Chad',
							'Chile',
							'China',
							'Christmas Island',
							'Cocos (Keeling) Islands',
							'Colombia',
							'Comoros',
							'Congo',
							'Congo, the Democratic Republic of the',
							'Cook Islands',
							'Costa Rica',
							"Côte d'Ivoire",
							'Croatia',
							'Cuba',
							'Curaçao',
							'Cyprus',
							'Czech Republic',
							'Denmark',
							'Djibouti',
							'Dominica',
							'Dominican Republic',
							'Ecuador',
							'Egypt',
							'El Salvador',
							'Equatorial Guinea',
							'Eritrea',
							'Estonia',
							'Ethiopia',
							'Falkland Islands (Malvinas)',
							'Faroe Islands',
							'Fiji',
							'Finland',
							'France',
							'French Guiana',
							'French Polynesia',
							'French Southern Territories',
							'Gabon',
							'Gambia',
							'Georgia',
							'Germany',
							'Ghana',
							'Gibraltar',
							'Greece',
							'Greenland',
							'Grenada',
							'Guadeloupe',
							'Guam',
							'Guatemala',
							'Guernsey',
							'Guinea',
							'Guinea-Bissau',
							'Guyana',
							'Haiti',
							'Heard Island and McDonald Islands',
							'Holy See (Vatican City State)',
							'Honduras',
							'Hong Kong',
							'Hungary',
							'Iceland',
							'India',
							'Indonesia',
							'Iran, Islamic Republic of',
							'Iraq',
							'Ireland',
							'Isle of Man',
							'Israel',
							'Italy',
							'Jamaica',
							'Japan',
							'Jersey',
							'Jordan',
							'Kazakhstan',
							'Kenya',
							'Kiribati',
							"Korea, Democratic People's Republic of",
							'Korea, Republic of',
							'Kuwait',
							'Kyrgyzstan',
							"Lao People's Democratic Republic",
							'Latvia',
							'Lebanon',
							'Lesotho',
							'Liberia',
							'Libya',
							'Liechtenstein',
							'Lithuania',
							'Luxembourg',
							'Macao',
							'Macedonia, the Former Yugoslav Republic of',
							'Madagascar',
							'Malawi',
							'Malaysia',
							'Maldives',
							'Mali',
							'Malta',
							'Marshall Islands',
							'Martinique',
							'Mauritania',
							'Mauritius',
							'Mayotte',
							'Mexico',
							'Micronesia, Federated States of',
							'Moldova, Republic of',
							'Monaco',
							'Mongolia',
							'Montenegro',
							'Montserrat',
							'Morocco',
							'Mozambique',
							'Myanmar',
							'Namibia',
							'Nauru',
							'Nepal',
							'Netherlands',
							'New Caledonia',
							'New Zealand',
							'Nicaragua',
							'Niger',
							'Nigeria',
							'Niue',
							'Norfolk Island',
							'Northern Mariana Islands',
							'Norway',
							'Oman',
							'Pakistan',
							'Palau',
							'Palestine, State of',
							'Panama',
							'Papua New Guinea',
							'Paraguay',
							'Peru',
							'Philippines',
							'Pitcairn',
							'Poland',
							'Portugal',
							'Puerto Rico',
							'Qatar',
							'Réunion',
							'Romania',
							'Russian Federation',
							'Rwanda',
							'Saint Barthélemy',
							'Saint Helena, Ascension and Tristan da Cunha',
							'Saint Kitts and Nevis',
							'Saint Lucia',
							'Saint Martin (French part)',
							'Saint Pierre and Miquelon',
							'Saint Vincent and the Grenadines',
							'Samoa',
							'San Marino',
							'Sao Tome and Principe',
							'Saudi Arabia',
							'Senegal',
							'Serbia',
							'Seychelles',
							'Sierra Leone',
							'Singapore',
							'Sint Maarten (Dutch part)',
							'Slovakia',
							'Slovenia',
							'Solomon Islands',
							'Somalia',
							'South Africa',
							'South Georgia and the South Sandwich Islands',
							'South Sudan',
							'Spain',
							'Sri Lanka',
							'Sudan',
							'Suriname',
							'Svalbard and Jan Mayen',
							'Swaziland',
							'Sweden',
							'Switzerland',
							'Syrian Arab Republic',
							'Taiwan, Province of China',
							'Tajikistan',
							'Tanzania, United Republic of',
							'Thailand',
							'Timor-Leste',
							'Togo',
							'Tokelau',
							'Tonga',
							'Trinidad and Tobago',
							'Tunisia',
							'Turkey',
							'Turkmenistan',
							'Turks and Caicos Islands',
							'Tuvalu',
							'Uganda',
							'Ukraine',
							'United Arab Emirates',
							'United Kingdom',
							'United States',
							'United States Minor Outlying Islands',
							'Uruguay',
							'Uzbekistan',
							'Vanuatu',
							'Venezuela, Bolivarian Republic of',
							'Viet Nam',
							'Virgin Islands, British',
							'Virgin Islands, U.S.',
							'Wallis and Futuna',
							'Western Sahara',
							'Yemen',
							'Zambia',
							'Zimbabwe'
						]
					}
				},
				required: ['country']
			}
		},
		'http://platform.selfkey.org/schema/attribute/drivers-license.json': {
			url: 'http://platform.selfkey.org/schema/attribute/drivers-license.json',
			schema: {
				$id: 'http://platform.selfkey.org/schema/attribute/drivers-license.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['individual'],
				title: "Driver's License",
				description:
					"Please provide images of the front and back sides of your driver's license.",
				type: 'object',
				properties: {
					front: {
						title: 'Front image',
						$ref: 'http://platform.selfkey.org/schema/file/image.json'
					},
					back: {
						title: 'Back image',
						$ref: 'http://platform.selfkey.org/schema/file/image.json'
					},
					expires: {
						$ref: 'http://platform.selfkey.org/schema/misc/expiry-date.json'
					},
					selfie: {
						$ref: 'http://platform.selfkey.org/schema/misc/selfie.json'
					},
					extra: {
						$ref: 'http://platform.selfkey.org/schema/misc/extra-images.json'
					}
				},
				required: ['front', 'back', 'expires']
			},
			dereferenced: {
				$id: 'http://platform.selfkey.org/schema/attribute/drivers-license.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['individual'],
				title: "Driver's License",
				description:
					"Please provide images of the front and back sides of your driver's license.",
				type: 'object',
				properties: {
					front: {
						title: 'Front image',
						$schema: 'http://json-schema.org/draft-07/schema',
						$id: 'http://platform.selfkey.org/schema/file/image.json',
						type: 'object',
						format: 'file',
						properties: {
							mimeType: {
								type: 'string',
								enum: ['image/jpeg', 'image/png', 'application/pdf']
							},
							size: {
								type: 'integer',
								maximum: 50000000
							},
							content: {
								type: 'string'
							}
						},
						required: ['mimeType', 'size', 'content']
					},
					back: {
						title: 'Back image',
						$schema: 'http://json-schema.org/draft-07/schema',
						$id: 'http://platform.selfkey.org/schema/file/image.json',
						type: 'object',
						format: 'file',
						properties: {
							mimeType: {
								type: 'string',
								enum: ['image/jpeg', 'image/png', 'application/pdf']
							},
							size: {
								type: 'integer',
								maximum: 50000000
							},
							content: {
								type: 'string'
							}
						},
						required: ['mimeType', 'size', 'content']
					},
					expires: {
						$id: 'http://platform.selfkey.org/schema/misc/expiry-date.json',
						$schema: 'http://json-schema.org/draft-07/schema',
						title: 'Expiry Date',
						type: 'string',
						format: 'date'
					},
					selfie: {
						$id: 'http://platform.selfkey.org/schema/misc/selfie.json',
						$schema: 'http://json-schema.org/draft-07/schema',
						title: 'Selfie',
						description:
							"Take a selfie, making sure the image is clear, and your face isn't covered by any items, such as glasses.",
						type: 'object',
						properties: {
							image: {
								$schema: 'http://json-schema.org/draft-07/schema',
								$id: 'http://platform.selfkey.org/schema/file/image.json',
								type: 'object',
								title: 'Image',
								format: 'file',
								properties: {
									mimeType: {
										type: 'string',
										enum: ['image/jpeg', 'image/png', 'application/pdf']
									},
									size: {
										type: 'integer',
										maximum: 50000000
									},
									content: {
										type: 'string'
									}
								},
								required: ['mimeType', 'size', 'content']
							}
						},
						required: ['image']
					},
					extra: {
						$id: 'http://platform.selfkey.org/schema/misc/extra-images.json',
						$schema: 'http://json-schema.org/draft-07/schema',
						title: 'Extra Images',
						description: 'Please add any extra images that are relevant',
						type: 'array',
						items: {
							$schema: 'http://json-schema.org/draft-07/schema',
							$id: 'http://platform.selfkey.org/schema/file/image.json',
							type: 'object',
							title: 'Image',
							format: 'file',
							properties: {
								mimeType: {
									type: 'string',
									enum: ['image/jpeg', 'image/png', 'application/pdf']
								},
								size: {
									type: 'integer',
									maximum: 50000000
								},
								content: {
									type: 'string'
								}
							},
							required: ['mimeType', 'size', 'content']
						}
					}
				},
				required: ['front', 'back', 'expires']
			}
		},
		'http://platform.selfkey.org/schema/attribute/email.json': {
			url: 'http://platform.selfkey.org/schema/attribute/email.json',
			schema: {
				$id: 'http://platform.selfkey.org/schema/attribute/email.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['corporate', 'individual'],
				title: 'Email',
				description: 'Please enter your e-mail address.',
				type: 'string',
				format: 'email'
			},
			dereferenced: {
				$id: 'http://platform.selfkey.org/schema/attribute/email.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['corporate', 'individual'],
				title: 'Email',
				description: 'Please enter your e-mail address.',
				type: 'string',
				format: 'email'
			}
		},
		'http://platform.selfkey.org/schema/attribute/fingerprint.json': {
			url: 'http://platform.selfkey.org/schema/attribute/fingerprint.json',
			schema: {
				$id: 'http://platform.selfkey.org/schema/attribute/fingerprint.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['individual'],
				title: 'Fingerprint',
				description:
					'Please provide an image with your fingerprint. It can be either your thumb or index finger.',
				type: 'object',
				properties: {
					images: {
						$ref: 'http://platform.selfkey.org/schema/file/multi-image.json'
					},
					extra: {
						$ref: 'http://platform.selfkey.org/schema/misc/extra-images.json'
					}
				},
				required: ['images']
			},
			dereferenced: {
				$id: 'http://platform.selfkey.org/schema/attribute/fingerprint.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['individual'],
				title: 'Fingerprint',
				description:
					'Please provide an image with your fingerprint. It can be either your thumb or index finger.',
				type: 'object',
				properties: {
					images: {
						$schema: 'http://json-schema.org/draft-07/schema',
						$id: 'http://platform.selfkey.org/schema/file/multi-image.json',
						title: 'Multiple Images',
						type: 'array',
						items: {
							$schema: 'http://json-schema.org/draft-07/schema',
							$id: 'http://platform.selfkey.org/schema/file/image.json',
							type: 'object',
							title: 'Image',
							format: 'file',
							properties: {
								mimeType: {
									type: 'string',
									enum: ['image/jpeg', 'image/png', 'application/pdf']
								},
								size: {
									type: 'integer',
									maximum: 50000000
								},
								content: {
									type: 'string'
								}
							},
							required: ['mimeType', 'size', 'content']
						}
					},
					extra: {
						$id: 'http://platform.selfkey.org/schema/misc/extra-images.json',
						$schema: 'http://json-schema.org/draft-07/schema',
						title: 'Extra Images',
						description: 'Please add any extra images that are relevant',
						type: 'array',
						items: {
							$schema: 'http://json-schema.org/draft-07/schema',
							$id: 'http://platform.selfkey.org/schema/file/image.json',
							type: 'object',
							title: 'Image',
							format: 'file',
							properties: {
								mimeType: {
									type: 'string',
									enum: ['image/jpeg', 'image/png', 'application/pdf']
								},
								size: {
									type: 'integer',
									maximum: 50000000
								},
								content: {
									type: 'string'
								}
							},
							required: ['mimeType', 'size', 'content']
						}
					}
				},
				required: ['images']
			}
		},
		'http://platform.selfkey.org/schema/attribute/first-name.json': {
			url: 'http://platform.selfkey.org/schema/attribute/first-name.json',
			schema: {
				$id: 'http://platform.selfkey.org/schema/attribute/first-name.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['individual'],
				title: 'First Name',
				description: 'Given Name.',
				type: 'string'
			},
			dereferenced: {
				$id: 'http://platform.selfkey.org/schema/attribute/first-name.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['individual'],
				title: 'First Name',
				description: 'Given Name.',
				type: 'string'
			}
		},
		'http://platform.selfkey.org/schema/attribute/last-name.json': {
			url: 'http://platform.selfkey.org/schema/attribute/last-name.json',
			schema: {
				$id: 'http://platform.selfkey.org/schema/attribute/last-name.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['individual'],
				title: 'Last Name',
				description: 'Family Name.',
				type: 'string'
			},
			dereferenced: {
				$id: 'http://platform.selfkey.org/schema/attribute/last-name.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['individual'],
				title: 'Last Name',
				description: 'Family Name.',
				type: 'string'
			}
		},
		'http://platform.selfkey.org/schema/attribute/legal-entity-type.json': {
			url: 'http://platform.selfkey.org/schema/attribute/legal-entity-type.json',
			schema: {
				$id: 'http://platform.selfkey.org/schema/attribute/legal-entity-type.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				entityType: ['corporate'],
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				title: 'Legal Entity Type',
				description: 'Please specify the type of legal entity.',
				type: 'string',
				enum: [
					'Company Limited by Shares (LTD)',
					'Limited Liability Company (LLC)',
					'Trust (TST)',
					'Foundation (FND)',
					'Limited Partnership (LLP)',
					'Other'
				]
			},
			dereferenced: {
				$id: 'http://platform.selfkey.org/schema/attribute/legal-entity-type.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				entityType: ['corporate'],
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				title: 'Legal Entity Type',
				description: 'Please specify the type of legal entity.',
				type: 'string',
				enum: [
					'Company Limited by Shares (LTD)',
					'Limited Liability Company (LLC)',
					'Trust (TST)',
					'Foundation (FND)',
					'Limited Partnership (LLP)',
					'Other'
				]
			}
		},
		'http://platform.selfkey.org/schema/attribute/legal-jurisdiction.json': {
			url: 'http://platform.selfkey.org/schema/attribute/legal-jurisdiction.json',
			schema: {
				$id: 'http://platform.selfkey.org/schema/attribute/legal-jurisdiction.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				entityType: ['corporate'],
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				title: 'Legal Jurisdiction',
				description: 'Please specify the jurisdiction your legal entity is incorporated in',
				type: 'string',
				enum: [
					' Afghanistan',
					'Albania',
					'Algeria',
					'Andorra',
					'Angola',
					'Anguilla',
					'Antigua and Barbuda',
					'Argentina',
					'Armenia',
					'Aruba',
					'Australia',
					'Austria',
					'Azerbaijan',
					'Bahamas',
					'Bangladesh',
					'Bahrain',
					'Barbados',
					'Belarus',
					'Belgium',
					'Belize',
					'Benin',
					'Bermuda',
					'Bhutan',
					'Bolivia',
					'Bosnia and Herzegovina',
					'Botswana',
					'Brazil',
					'British Virgin Islands',
					'Brunei',
					'Bulgaria',
					'Burkina Faso',
					'Burundi',
					'Cambodia',
					'Cameroon',
					'Canada',
					'Cape Verde',
					'Cayman Islands',
					'Central African Republic',
					'Chile',
					"China, People's Republic of Hong Kong",
					"China, People's Republic of Macau",
					'Taiwan',
					'Colombia',
					'Congo, Democratic Republic of the',
					'Congo, Republic of the',
					'Cook Islands',
					'Costa Rica',
					"Côte d'Ivoire",
					'Croatia',
					'Cuba',
					'Curaçao',
					'Cyprus',
					'Czech Republic',
					'Denmark',
					'Danish Realms - Faroe Islands',
					'Danish Realms - Greenland',
					'Djibouti',
					'Dominica',
					'Dominican Republic',
					'Ecuador',
					'Egypt',
					'El Salvador',
					'Eritrea',
					'Estonia',
					'Ethiopia',
					'Fiji',
					'Finland',
					'France',
					'Gabon',
					'Gambia',
					'Georgia',
					'Germany',
					'Ghana',
					'Gibraltar',
					'Greece',
					'Grenada',
					'Guatemala',
					'Guernsey, Channel Islands',
					'Guinea',
					'Guyana',
					'Haiti',
					'Honduras',
					'Hungary',
					'Iceland',
					'India',
					'Indonesia',
					'Iran',
					'Iraq',
					'Ireland',
					'Isle of Man',
					'Israel',
					'Italy',
					'Jamaica',
					'Japan',
					'Jersey, Channel Islands',
					'Jordan',
					'Kazakhstan',
					'Kenya',
					'Kiribati',
					'Kosovo',
					'Kuwait',
					'Kyrgyzstan',
					'Laos',
					'Latvia',
					'Lebanon',
					'Lesotho',
					'Liberia',
					'Liechtenstein',
					'Lithuania',
					'Luxembourg',
					'Macedonia',
					'Madagascar',
					'Malta',
					'Malawi',
					'Malaysia',
					'Maldives',
					'Mali',
					'Marshall Islands',
					'Mauritania',
					'Mauritius',
					'Mexico',
					'Micronesia, Federated States of',
					'Moldova',
					'Monaco',
					'Mongolia',
					'Montenegro',
					'Montserrat',
					'Morocco',
					'Mozambique',
					'Myanmar',
					'Namibia',
					'Nauru',
					'Nepal',
					'Netherlands',
					'Caribbean Netherlands - Bonaire',
					'Caribbean Netherlands - Sint Eustatius ',
					'Caribbean Netherlands - Saba ',
					'New Zealand',
					'Nicaragua',
					'Niger',
					'Nigeria',
					'Niue',
					'Norway',
					'Oman',
					'Pakistan',
					'Palau',
					'Palestinian territories',
					'Panama',
					'Papua New Guinea',
					'Paraguay',
					'Peru',
					'Philippines',
					'Poland',
					'Portugal',
					'Qatar',
					'Romania',
					'Russian Federation',
					'Rwanda',
					'Saint Kitts and Nevis',
					'Saint Lucia',
					'Saint Vincent and the Grenadines',
					'Samoa',
					'San Marino',
					'São Tomé and Príncipe',
					'Saudi Arabia',
					'Senegal',
					'Serbia',
					'Seychelles',
					'Sierra Leone',
					'Singapore',
					'Slovakia',
					'Slovenia',
					'Solomon Islands',
					'South Africa',
					'South Korea',
					'South Sudan',
					'Spain',
					'Sri Lanka',
					'Sint Maarten',
					'Sudan',
					'Suriname',
					'Swaziland',
					'Sweden',
					'Switzerland',
					'Tajikistan',
					'Tanzania',
					'Thailand',
					'Timor-Leste',
					'Tonga',
					'Togo',
					'Tunisia',
					'Turkey',
					'Turks and Caicos Islands',
					'Trinidad & Tobago',
					'Uganda',
					'Ukraine',
					'United Arab Emirates',
					'United Kingdom',
					'United States - Alabama',
					'United States - Alaska',
					'United States - Arizona',
					'United States - Arkansas',
					'United States - California',
					'United States - Colorado',
					'United States - Connecticut',
					'United States - Delaware',
					'United States - Florida',
					'United States - Georgia',
					'United States - Hawaii',
					'United States - Idaho',
					'United States - Illinois',
					'United States - Indiana',
					'United States - Iowa',
					'United States - Kansas',
					'United States - Kentucky',
					'United States - Louisiana',
					'United States - Maine',
					'United States - Maryland',
					'United States - Massachusetts',
					'United States - Michigan',
					'United States - Minnesota',
					'United States - Mississippi',
					'United States - Missouri',
					'United States - Montana',
					'United States - Nebraska',
					'United States - Nevada',
					'United States - New Hampshire',
					'United States - New Jersey',
					'United States - New Mexico',
					'United States - New York',
					'Uruguay',
					'Uzbekistan',
					'Vanuatu',
					'Venezuela',
					'Vietnam',
					'Yemen',
					'Zambia',
					'Zimbabwe'
				]
			},
			dereferenced: {
				$id: 'http://platform.selfkey.org/schema/attribute/legal-jurisdiction.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				entityType: ['corporate'],
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				title: 'Legal Jurisdiction',
				description: 'Please specify the jurisdiction your legal entity is incorporated in',
				type: 'string',
				enum: [
					' Afghanistan',
					'Albania',
					'Algeria',
					'Andorra',
					'Angola',
					'Anguilla',
					'Antigua and Barbuda',
					'Argentina',
					'Armenia',
					'Aruba',
					'Australia',
					'Austria',
					'Azerbaijan',
					'Bahamas',
					'Bangladesh',
					'Bahrain',
					'Barbados',
					'Belarus',
					'Belgium',
					'Belize',
					'Benin',
					'Bermuda',
					'Bhutan',
					'Bolivia',
					'Bosnia and Herzegovina',
					'Botswana',
					'Brazil',
					'British Virgin Islands',
					'Brunei',
					'Bulgaria',
					'Burkina Faso',
					'Burundi',
					'Cambodia',
					'Cameroon',
					'Canada',
					'Cape Verde',
					'Cayman Islands',
					'Central African Republic',
					'Chile',
					"China, People's Republic of Hong Kong",
					"China, People's Republic of Macau",
					'Taiwan',
					'Colombia',
					'Congo, Democratic Republic of the',
					'Congo, Republic of the',
					'Cook Islands',
					'Costa Rica',
					"Côte d'Ivoire",
					'Croatia',
					'Cuba',
					'Curaçao',
					'Cyprus',
					'Czech Republic',
					'Denmark',
					'Danish Realms - Faroe Islands',
					'Danish Realms - Greenland',
					'Djibouti',
					'Dominica',
					'Dominican Republic',
					'Ecuador',
					'Egypt',
					'El Salvador',
					'Eritrea',
					'Estonia',
					'Ethiopia',
					'Fiji',
					'Finland',
					'France',
					'Gabon',
					'Gambia',
					'Georgia',
					'Germany',
					'Ghana',
					'Gibraltar',
					'Greece',
					'Grenada',
					'Guatemala',
					'Guernsey, Channel Islands',
					'Guinea',
					'Guyana',
					'Haiti',
					'Honduras',
					'Hungary',
					'Iceland',
					'India',
					'Indonesia',
					'Iran',
					'Iraq',
					'Ireland',
					'Isle of Man',
					'Israel',
					'Italy',
					'Jamaica',
					'Japan',
					'Jersey, Channel Islands',
					'Jordan',
					'Kazakhstan',
					'Kenya',
					'Kiribati',
					'Kosovo',
					'Kuwait',
					'Kyrgyzstan',
					'Laos',
					'Latvia',
					'Lebanon',
					'Lesotho',
					'Liberia',
					'Liechtenstein',
					'Lithuania',
					'Luxembourg',
					'Macedonia',
					'Madagascar',
					'Malta',
					'Malawi',
					'Malaysia',
					'Maldives',
					'Mali',
					'Marshall Islands',
					'Mauritania',
					'Mauritius',
					'Mexico',
					'Micronesia, Federated States of',
					'Moldova',
					'Monaco',
					'Mongolia',
					'Montenegro',
					'Montserrat',
					'Morocco',
					'Mozambique',
					'Myanmar',
					'Namibia',
					'Nauru',
					'Nepal',
					'Netherlands',
					'Caribbean Netherlands - Bonaire',
					'Caribbean Netherlands - Sint Eustatius ',
					'Caribbean Netherlands - Saba ',
					'New Zealand',
					'Nicaragua',
					'Niger',
					'Nigeria',
					'Niue',
					'Norway',
					'Oman',
					'Pakistan',
					'Palau',
					'Palestinian territories',
					'Panama',
					'Papua New Guinea',
					'Paraguay',
					'Peru',
					'Philippines',
					'Poland',
					'Portugal',
					'Qatar',
					'Romania',
					'Russian Federation',
					'Rwanda',
					'Saint Kitts and Nevis',
					'Saint Lucia',
					'Saint Vincent and the Grenadines',
					'Samoa',
					'San Marino',
					'São Tomé and Príncipe',
					'Saudi Arabia',
					'Senegal',
					'Serbia',
					'Seychelles',
					'Sierra Leone',
					'Singapore',
					'Slovakia',
					'Slovenia',
					'Solomon Islands',
					'South Africa',
					'South Korea',
					'South Sudan',
					'Spain',
					'Sri Lanka',
					'Sint Maarten',
					'Sudan',
					'Suriname',
					'Swaziland',
					'Sweden',
					'Switzerland',
					'Tajikistan',
					'Tanzania',
					'Thailand',
					'Timor-Leste',
					'Tonga',
					'Togo',
					'Tunisia',
					'Turkey',
					'Turks and Caicos Islands',
					'Trinidad & Tobago',
					'Uganda',
					'Ukraine',
					'United Arab Emirates',
					'United Kingdom',
					'United States - Alabama',
					'United States - Alaska',
					'United States - Arizona',
					'United States - Arkansas',
					'United States - California',
					'United States - Colorado',
					'United States - Connecticut',
					'United States - Delaware',
					'United States - Florida',
					'United States - Georgia',
					'United States - Hawaii',
					'United States - Idaho',
					'United States - Illinois',
					'United States - Indiana',
					'United States - Iowa',
					'United States - Kansas',
					'United States - Kentucky',
					'United States - Louisiana',
					'United States - Maine',
					'United States - Maryland',
					'United States - Massachusetts',
					'United States - Michigan',
					'United States - Minnesota',
					'United States - Mississippi',
					'United States - Missouri',
					'United States - Montana',
					'United States - Nebraska',
					'United States - Nevada',
					'United States - New Hampshire',
					'United States - New Jersey',
					'United States - New Mexico',
					'United States - New York',
					'Uruguay',
					'Uzbekistan',
					'Vanuatu',
					'Venezuela',
					'Vietnam',
					'Yemen',
					'Zambia',
					'Zimbabwe'
				]
			}
		},
		'http://platform.selfkey.org/schema/attribute/middle-name.json': {
			url: 'http://platform.selfkey.org/schema/attribute/middle-name.json',
			schema: {
				$id: 'http://platform.selfkey.org/schema/attribute/middle-name.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['individual'],
				title: 'Middle Name',
				description: 'Middle Name.',
				type: 'string'
			},
			dereferenced: {
				$id: 'http://platform.selfkey.org/schema/attribute/middle-name.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['individual'],
				title: 'Middle Name',
				description: 'Middle Name.',
				type: 'string'
			}
		},
		'http://platform.selfkey.org/schema/attribute/national-id.json': {
			url: 'http://platform.selfkey.org/schema/attribute/national-id.json',
			schema: {
				$id: 'http://platform.selfkey.org/schema/attribute/national-id.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['individual'],
				title: 'National ID',
				description: 'Please provide a valid national identification document.',
				type: 'object',
				properties: {
					front: {
						title: 'Front image',
						$ref: 'http://platform.selfkey.org/schema/file/image.json'
					},
					back: {
						title: 'Back image',
						$ref: 'http://platform.selfkey.org/schema/file/image.json'
					},
					issued: {
						$ref: 'http://platform.selfkey.org/schema/misc/issue-date.json'
					},
					expires: {
						$ref: 'http://platform.selfkey.org/schema/misc/expiry-date.json'
					},
					selfie: {
						$ref: 'http://platform.selfkey.org/schema/misc/selfie.json'
					},
					extra: {
						$ref: 'http://platform.selfkey.org/schema/misc/extra-images.json'
					}
				},
				required: ['front', 'issued', 'selfie']
			},
			dereferenced: {
				$id: 'http://platform.selfkey.org/schema/attribute/national-id.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['individual'],
				title: 'National ID',
				description: 'Please provide a valid national identification document.',
				type: 'object',
				properties: {
					front: {
						title: 'Front image',
						$schema: 'http://json-schema.org/draft-07/schema',
						$id: 'http://platform.selfkey.org/schema/file/image.json',
						type: 'object',
						format: 'file',
						properties: {
							mimeType: {
								type: 'string',
								enum: ['image/jpeg', 'image/png', 'application/pdf']
							},
							size: {
								type: 'integer',
								maximum: 50000000
							},
							content: {
								type: 'string'
							}
						},
						required: ['mimeType', 'size', 'content']
					},
					back: {
						title: 'Back image',
						$schema: 'http://json-schema.org/draft-07/schema',
						$id: 'http://platform.selfkey.org/schema/file/image.json',
						type: 'object',
						format: 'file',
						properties: {
							mimeType: {
								type: 'string',
								enum: ['image/jpeg', 'image/png', 'application/pdf']
							},
							size: {
								type: 'integer',
								maximum: 50000000
							},
							content: {
								type: 'string'
							}
						},
						required: ['mimeType', 'size', 'content']
					},
					issued: {
						$id: 'http://platform.selfkey.org/schema/misc/issue-date.json',
						$schema: 'http://json-schema.org/draft-07/schema',
						title: 'Issue Date',
						type: 'string',
						format: 'date'
					},
					expires: {
						$id: 'http://platform.selfkey.org/schema/misc/expiry-date.json',
						$schema: 'http://json-schema.org/draft-07/schema',
						title: 'Expiry Date',
						type: 'string',
						format: 'date'
					},
					selfie: {
						$id: 'http://platform.selfkey.org/schema/misc/selfie.json',
						$schema: 'http://json-schema.org/draft-07/schema',
						title: 'Selfie',
						description:
							"Take a selfie, making sure the image is clear, and your face isn't covered by any items, such as glasses.",
						type: 'object',
						properties: {
							image: {
								$schema: 'http://json-schema.org/draft-07/schema',
								$id: 'http://platform.selfkey.org/schema/file/image.json',
								type: 'object',
								title: 'Image',
								format: 'file',
								properties: {
									mimeType: {
										type: 'string',
										enum: ['image/jpeg', 'image/png', 'application/pdf']
									},
									size: {
										type: 'integer',
										maximum: 50000000
									},
									content: {
										type: 'string'
									}
								},
								required: ['mimeType', 'size', 'content']
							}
						},
						required: ['image']
					},
					extra: {
						$id: 'http://platform.selfkey.org/schema/misc/extra-images.json',
						$schema: 'http://json-schema.org/draft-07/schema',
						title: 'Extra Images',
						description: 'Please add any extra images that are relevant',
						type: 'array',
						items: {
							$schema: 'http://json-schema.org/draft-07/schema',
							$id: 'http://platform.selfkey.org/schema/file/image.json',
							type: 'object',
							title: 'Image',
							format: 'file',
							properties: {
								mimeType: {
									type: 'string',
									enum: ['image/jpeg', 'image/png', 'application/pdf']
								},
								size: {
									type: 'integer',
									maximum: 50000000
								},
								content: {
									type: 'string'
								}
							},
							required: ['mimeType', 'size', 'content']
						}
					}
				},
				required: ['front', 'issued', 'selfie']
			}
		},
		'http://platform.selfkey.org/schema/attribute/nationality.json': {
			url: 'http://platform.selfkey.org/schema/attribute/nationality.json',
			schema: {
				$id: 'http://platform.selfkey.org/schema/attribute/nationality.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['individual'],
				title: 'Nationality',
				description: 'Please specify your current nationality.',
				type: 'object',
				properties: {
					country: {
						$ref: 'http://platform.selfkey.org/schema/misc/country.json'
					},
					denonym: {
						type: 'string',
						title: 'Denonym',
						description: 'The word used to identify citizens of the country'
					}
				},
				required: ['country']
			},
			dereferenced: {
				$id: 'http://platform.selfkey.org/schema/attribute/nationality.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['individual'],
				title: 'Nationality',
				description: 'Please specify your current nationality.',
				type: 'object',
				properties: {
					country: {
						$id: 'http://platform.selfkey.org/schema/misc/country.json',
						$schema: 'http://json-schema.org/draft-07/schema',
						title: 'Country',
						type: 'string',
						enum: [
							'AF',
							'AX',
							'AL',
							'DZ',
							'AS',
							'AD',
							'AO',
							'AI',
							'AQ',
							'AG',
							'AR',
							'AM',
							'AW',
							'AU',
							'AT',
							'AZ',
							'BS',
							'BH',
							'BD',
							'BB',
							'BY',
							'BE',
							'BZ',
							'BJ',
							'BM',
							'BT',
							'BO',
							'BQ',
							'BA',
							'BW',
							'BV',
							'BR',
							'IO',
							'BN',
							'BG',
							'BF',
							'BI',
							'KH',
							'CM',
							'CA',
							'CV',
							'KY',
							'CF',
							'TD',
							'CL',
							'CN',
							'CX',
							'CC',
							'CO',
							'KM',
							'CG',
							'CD',
							'CK',
							'CR',
							'CI',
							'HR',
							'CU',
							'CW',
							'CY',
							'CZ',
							'DK',
							'DJ',
							'DM',
							'DO',
							'EC',
							'EG',
							'SV',
							'GQ',
							'ER',
							'EE',
							'ET',
							'FK',
							'FO',
							'FJ',
							'FI',
							'FR',
							'GF',
							'PF',
							'TF',
							'GA',
							'GM',
							'GE',
							'DE',
							'GH',
							'GI',
							'GR',
							'GL',
							'GD',
							'GP',
							'GU',
							'GT',
							'GG',
							'GN',
							'GW',
							'GY',
							'HT',
							'HM',
							'VA',
							'HN',
							'HK',
							'HU',
							'IS',
							'IN',
							'ID',
							'IR',
							'IQ',
							'IE',
							'IM',
							'IL',
							'IT',
							'JM',
							'JP',
							'JE',
							'JO',
							'KZ',
							'KE',
							'KI',
							'KP',
							'KR',
							'KW',
							'KG',
							'LA',
							'LV',
							'LB',
							'LS',
							'LR',
							'LY',
							'LI',
							'LT',
							'LU',
							'MO',
							'MK',
							'MG',
							'MW',
							'MY',
							'MV',
							'ML',
							'MT',
							'MH',
							'MQ',
							'MR',
							'MU',
							'YT',
							'MX',
							'FM',
							'MD',
							'MC',
							'MN',
							'ME',
							'MS',
							'MA',
							'MZ',
							'MM',
							'NA',
							'NR',
							'NP',
							'NL',
							'NC',
							'NZ',
							'NI',
							'NE',
							'NG',
							'NU',
							'NF',
							'MP',
							'NO',
							'OM',
							'PK',
							'PW',
							'PS',
							'PA',
							'PG',
							'PY',
							'PE',
							'PH',
							'PN',
							'PL',
							'PT',
							'PR',
							'QA',
							'RE',
							'RO',
							'RU',
							'RW',
							'BL',
							'SH',
							'KN',
							'LC',
							'MF',
							'PM',
							'VC',
							'WS',
							'SM',
							'ST',
							'SA',
							'SN',
							'RS',
							'SC',
							'SL',
							'SG',
							'SX',
							'SK',
							'SI',
							'SB',
							'SO',
							'ZA',
							'GS',
							'SS',
							'ES',
							'LK',
							'SD',
							'SR',
							'SJ',
							'SZ',
							'SE',
							'CH',
							'SY',
							'TW',
							'TJ',
							'TZ',
							'TH',
							'TL',
							'TG',
							'TK',
							'TO',
							'TT',
							'TN',
							'TR',
							'TM',
							'TC',
							'TV',
							'UG',
							'UA',
							'AE',
							'GB',
							'US',
							'UM',
							'UY',
							'UZ',
							'VU',
							'VE',
							'VN',
							'VG',
							'VI',
							'WF',
							'EH',
							'YE',
							'ZM',
							'ZW'
						],
						enumNames: [
							'Afghanistan',
							'Åland Islands',
							'Albania',
							'Algeria',
							'American Samoa',
							'Andorra',
							'Angola',
							'Anguilla',
							'Antarctica',
							'Antigua and Barbuda',
							'Argentina',
							'Armenia',
							'Aruba',
							'Australia',
							'Austria',
							'Azerbaijan',
							'Bahamas',
							'Bahrain',
							'Bangladesh',
							'Barbados',
							'Belarus',
							'Belgium',
							'Belize',
							'Benin',
							'Bermuda',
							'Bhutan',
							'Bolivia, Plurinational State of',
							'Bonaire, Sint Eustatius and Saba',
							'Bosnia and Herzegovina',
							'Botswana',
							'Bouvet Island',
							'Brazil',
							'British Indian Ocean Territory',
							'Brunei Darussalam',
							'Bulgaria',
							'Burkina Faso',
							'Burundi',
							'Cambodia',
							'Cameroon',
							'Canada',
							'Cape Verde',
							'Cayman Islands',
							'Central African Republic',
							'Chad',
							'Chile',
							'China',
							'Christmas Island',
							'Cocos (Keeling) Islands',
							'Colombia',
							'Comoros',
							'Congo',
							'Congo, the Democratic Republic of the',
							'Cook Islands',
							'Costa Rica',
							"Côte d'Ivoire",
							'Croatia',
							'Cuba',
							'Curaçao',
							'Cyprus',
							'Czech Republic',
							'Denmark',
							'Djibouti',
							'Dominica',
							'Dominican Republic',
							'Ecuador',
							'Egypt',
							'El Salvador',
							'Equatorial Guinea',
							'Eritrea',
							'Estonia',
							'Ethiopia',
							'Falkland Islands (Malvinas)',
							'Faroe Islands',
							'Fiji',
							'Finland',
							'France',
							'French Guiana',
							'French Polynesia',
							'French Southern Territories',
							'Gabon',
							'Gambia',
							'Georgia',
							'Germany',
							'Ghana',
							'Gibraltar',
							'Greece',
							'Greenland',
							'Grenada',
							'Guadeloupe',
							'Guam',
							'Guatemala',
							'Guernsey',
							'Guinea',
							'Guinea-Bissau',
							'Guyana',
							'Haiti',
							'Heard Island and McDonald Islands',
							'Holy See (Vatican City State)',
							'Honduras',
							'Hong Kong',
							'Hungary',
							'Iceland',
							'India',
							'Indonesia',
							'Iran, Islamic Republic of',
							'Iraq',
							'Ireland',
							'Isle of Man',
							'Israel',
							'Italy',
							'Jamaica',
							'Japan',
							'Jersey',
							'Jordan',
							'Kazakhstan',
							'Kenya',
							'Kiribati',
							"Korea, Democratic People's Republic of",
							'Korea, Republic of',
							'Kuwait',
							'Kyrgyzstan',
							"Lao People's Democratic Republic",
							'Latvia',
							'Lebanon',
							'Lesotho',
							'Liberia',
							'Libya',
							'Liechtenstein',
							'Lithuania',
							'Luxembourg',
							'Macao',
							'Macedonia, the Former Yugoslav Republic of',
							'Madagascar',
							'Malawi',
							'Malaysia',
							'Maldives',
							'Mali',
							'Malta',
							'Marshall Islands',
							'Martinique',
							'Mauritania',
							'Mauritius',
							'Mayotte',
							'Mexico',
							'Micronesia, Federated States of',
							'Moldova, Republic of',
							'Monaco',
							'Mongolia',
							'Montenegro',
							'Montserrat',
							'Morocco',
							'Mozambique',
							'Myanmar',
							'Namibia',
							'Nauru',
							'Nepal',
							'Netherlands',
							'New Caledonia',
							'New Zealand',
							'Nicaragua',
							'Niger',
							'Nigeria',
							'Niue',
							'Norfolk Island',
							'Northern Mariana Islands',
							'Norway',
							'Oman',
							'Pakistan',
							'Palau',
							'Palestine, State of',
							'Panama',
							'Papua New Guinea',
							'Paraguay',
							'Peru',
							'Philippines',
							'Pitcairn',
							'Poland',
							'Portugal',
							'Puerto Rico',
							'Qatar',
							'Réunion',
							'Romania',
							'Russian Federation',
							'Rwanda',
							'Saint Barthélemy',
							'Saint Helena, Ascension and Tristan da Cunha',
							'Saint Kitts and Nevis',
							'Saint Lucia',
							'Saint Martin (French part)',
							'Saint Pierre and Miquelon',
							'Saint Vincent and the Grenadines',
							'Samoa',
							'San Marino',
							'Sao Tome and Principe',
							'Saudi Arabia',
							'Senegal',
							'Serbia',
							'Seychelles',
							'Sierra Leone',
							'Singapore',
							'Sint Maarten (Dutch part)',
							'Slovakia',
							'Slovenia',
							'Solomon Islands',
							'Somalia',
							'South Africa',
							'South Georgia and the South Sandwich Islands',
							'South Sudan',
							'Spain',
							'Sri Lanka',
							'Sudan',
							'Suriname',
							'Svalbard and Jan Mayen',
							'Swaziland',
							'Sweden',
							'Switzerland',
							'Syrian Arab Republic',
							'Taiwan, Province of China',
							'Tajikistan',
							'Tanzania, United Republic of',
							'Thailand',
							'Timor-Leste',
							'Togo',
							'Tokelau',
							'Tonga',
							'Trinidad and Tobago',
							'Tunisia',
							'Turkey',
							'Turkmenistan',
							'Turks and Caicos Islands',
							'Tuvalu',
							'Uganda',
							'Ukraine',
							'United Arab Emirates',
							'United Kingdom',
							'United States',
							'United States Minor Outlying Islands',
							'Uruguay',
							'Uzbekistan',
							'Vanuatu',
							'Venezuela, Bolivarian Republic of',
							'Viet Nam',
							'Virgin Islands, British',
							'Virgin Islands, U.S.',
							'Wallis and Futuna',
							'Western Sahara',
							'Yemen',
							'Zambia',
							'Zimbabwe'
						]
					},
					denonym: {
						type: 'string',
						title: 'Denonym',
						description: 'The word used to identify citizens of the country'
					}
				},
				required: ['country']
			}
		},
		'http://platform.selfkey.org/schema/attribute/passport.json': {
			url: 'http://platform.selfkey.org/schema/attribute/passport.json',
			schema: {
				$id: 'http://platform.selfkey.org/schema/attribute/passport.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['individual'],
				title: 'Passport',
				description: 'Please provide an image of your passport. It must still be valid.',
				type: 'object',
				properties: {
					image: {
						$ref: 'http://platform.selfkey.org/schema/file/image.json'
					},
					issued: {
						$ref: 'http://platform.selfkey.org/schema/misc/issue-date.json'
					},
					expires: {
						$ref: 'http://platform.selfkey.org/schema/misc/expiry-date.json'
					},
					selfie: {
						$ref: 'http://platform.selfkey.org/schema/misc/selfie.json'
					},
					extra: {
						$ref: 'http://platform.selfkey.org/schema/misc/extra-images.json'
					}
				},
				required: ['image', 'issued', 'expires', 'selfie']
			},
			dereferenced: {
				$id: 'http://platform.selfkey.org/schema/attribute/passport.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['individual'],
				title: 'Passport',
				description: 'Please provide an image of your passport. It must still be valid.',
				type: 'object',
				properties: {
					image: {
						$schema: 'http://json-schema.org/draft-07/schema',
						$id: 'http://platform.selfkey.org/schema/file/image.json',
						type: 'object',
						title: 'Image',
						format: 'file',
						properties: {
							mimeType: {
								type: 'string',
								enum: ['image/jpeg', 'image/png', 'application/pdf']
							},
							size: {
								type: 'integer',
								maximum: 50000000
							},
							content: {
								type: 'string'
							}
						},
						required: ['mimeType', 'size', 'content']
					},
					issued: {
						$id: 'http://platform.selfkey.org/schema/misc/issue-date.json',
						$schema: 'http://json-schema.org/draft-07/schema',
						title: 'Issue Date',
						type: 'string',
						format: 'date'
					},
					expires: {
						$id: 'http://platform.selfkey.org/schema/misc/expiry-date.json',
						$schema: 'http://json-schema.org/draft-07/schema',
						title: 'Expiry Date',
						type: 'string',
						format: 'date'
					},
					selfie: {
						$id: 'http://platform.selfkey.org/schema/misc/selfie.json',
						$schema: 'http://json-schema.org/draft-07/schema',
						title: 'Selfie',
						description:
							"Take a selfie, making sure the image is clear, and your face isn't covered by any items, such as glasses.",
						type: 'object',
						properties: {
							image: {
								$schema: 'http://json-schema.org/draft-07/schema',
								$id: 'http://platform.selfkey.org/schema/file/image.json',
								type: 'object',
								title: 'Image',
								format: 'file',
								properties: {
									mimeType: {
										type: 'string',
										enum: ['image/jpeg', 'image/png', 'application/pdf']
									},
									size: {
										type: 'integer',
										maximum: 50000000
									},
									content: {
										type: 'string'
									}
								},
								required: ['mimeType', 'size', 'content']
							}
						},
						required: ['image']
					},
					extra: {
						$id: 'http://platform.selfkey.org/schema/misc/extra-images.json',
						$schema: 'http://json-schema.org/draft-07/schema',
						title: 'Extra Images',
						description: 'Please add any extra images that are relevant',
						type: 'array',
						items: {
							$schema: 'http://json-schema.org/draft-07/schema',
							$id: 'http://platform.selfkey.org/schema/file/image.json',
							type: 'object',
							title: 'Image',
							format: 'file',
							properties: {
								mimeType: {
									type: 'string',
									enum: ['image/jpeg', 'image/png', 'application/pdf']
								},
								size: {
									type: 'integer',
									maximum: 50000000
								},
								content: {
									type: 'string'
								}
							},
							required: ['mimeType', 'size', 'content']
						}
					}
				},
				required: ['image', 'issued', 'expires', 'selfie']
			}
		},
		'http://platform.selfkey.org/schema/attribute/phone-number.json': {
			url: 'http://platform.selfkey.org/schema/attribute/phone-number.json',
			schema: {
				$id: 'http://platform.selfkey.org/schema/attribute/phone-number.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['corporate', 'individual'],
				title: 'Phone Number',
				pattern: '^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$',
				description: 'Please enter your current phone number.',
				type: 'string'
			},
			dereferenced: {
				$id: 'http://platform.selfkey.org/schema/attribute/phone-number.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['corporate', 'individual'],
				title: 'Phone Number',
				pattern: '^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$',
				description: 'Please enter your current phone number.',
				type: 'string'
			}
		},
		'http://platform.selfkey.org/schema/attribute/physical-address.json': {
			url: 'http://platform.selfkey.org/schema/attribute/physical-address.json',
			schema: {
				$id: 'http://platform.selfkey.org/schema/attribute/physical-address.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['corporate', 'individual'],
				title: 'Address',
				description:
					'Please enter your current home address, including number, street, zip code and city',
				type: 'object',
				properties: {
					address_line_1: {
						type: 'string',
						title: 'Physical Address 1',
						description: 'Street name, number'
					},
					address_line_2: {
						type: 'string',
						title: 'Physical Address 2',
						description: 'Building, apartment, etc.'
					}
				},
				required: ['address_line_1']
			},
			dereferenced: {
				$id: 'http://platform.selfkey.org/schema/attribute/physical-address.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['corporate', 'individual'],
				title: 'Address',
				description:
					'Please enter your current home address, including number, street, zip code and city',
				type: 'object',
				properties: {
					address_line_1: {
						type: 'string',
						title: 'Physical Address 1',
						description: 'Street name, number'
					},
					address_line_2: {
						type: 'string',
						title: 'Physical Address 2',
						description: 'Building, apartment, etc.'
					}
				},
				required: ['address_line_1']
			}
		},
		'http://platform.selfkey.org/schema/attribute/tax-certificate.json': {
			url: 'http://platform.selfkey.org/schema/attribute/tax-certificate.json',
			schema: {
				$id: 'http://platform.selfkey.org/schema/attribute/tax-certificate.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['corporate', 'individual'],
				title: 'Tax Certificate',
				description:
					'Please provide a copy of a recent tax certificate. No older than 12 months.',
				type: 'object',
				properties: {
					image: {
						$ref: 'http://platform.selfkey.org/schema/file/image.json'
					},
					issued: {
						$ref: 'http://platform.selfkey.org/schema/misc/issue-date.json'
					},
					extra: {
						$ref: 'http://platform.selfkey.org/schema/misc/extra-images.json'
					}
				},
				required: ['image', 'issued']
			},
			dereferenced: {
				$id: 'http://platform.selfkey.org/schema/attribute/tax-certificate.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['corporate', 'individual'],
				title: 'Tax Certificate',
				description:
					'Please provide a copy of a recent tax certificate. No older than 12 months.',
				type: 'object',
				properties: {
					image: {
						$schema: 'http://json-schema.org/draft-07/schema',
						$id: 'http://platform.selfkey.org/schema/file/image.json',
						type: 'object',
						title: 'Image',
						format: 'file',
						properties: {
							mimeType: {
								type: 'string',
								enum: ['image/jpeg', 'image/png', 'application/pdf']
							},
							size: {
								type: 'integer',
								maximum: 50000000
							},
							content: {
								type: 'string'
							}
						},
						required: ['mimeType', 'size', 'content']
					},
					issued: {
						$id: 'http://platform.selfkey.org/schema/misc/issue-date.json',
						$schema: 'http://json-schema.org/draft-07/schema',
						title: 'Issue Date',
						type: 'string',
						format: 'date'
					},
					extra: {
						$id: 'http://platform.selfkey.org/schema/misc/extra-images.json',
						$schema: 'http://json-schema.org/draft-07/schema',
						title: 'Extra Images',
						description: 'Please add any extra images that are relevant',
						type: 'array',
						items: {
							$schema: 'http://json-schema.org/draft-07/schema',
							$id: 'http://platform.selfkey.org/schema/file/image.json',
							type: 'object',
							title: 'Image',
							format: 'file',
							properties: {
								mimeType: {
									type: 'string',
									enum: ['image/jpeg', 'image/png', 'application/pdf']
								},
								size: {
									type: 'integer',
									maximum: 50000000
								},
								content: {
									type: 'string'
								}
							},
							required: ['mimeType', 'size', 'content']
						}
					}
				},
				required: ['image', 'issued']
			}
		},
		'http://platform.selfkey.org/schema/attribute/tax-id-number.json': {
			url: 'http://platform.selfkey.org/schema/attribute/tax-id-number.json',
			schema: {
				$id: 'http://platform.selfkey.org/schema/attribute/tax-id-number.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['corporate', 'individual'],
				title: 'Tax ID',
				description: 'Please provide your taxpayer identification number.',
				type: 'string'
			},
			dereferenced: {
				$id: 'http://platform.selfkey.org/schema/attribute/tax-id-number.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['corporate', 'individual'],
				title: 'Tax ID',
				description: 'Please provide your taxpayer identification number.',
				type: 'string'
			}
		},
		'http://platform.selfkey.org/schema/attribute/utility-bill.json': {
			url: 'http://platform.selfkey.org/schema/attribute/utility-bill.json',
			schema: {
				$id: 'http://platform.selfkey.org/schema/attribute/utility-bill.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['individual'],
				title: 'Utility Bill',
				description:
					'Please provide an image with a recent utility bill. No older than 3 months.',
				type: 'object',
				properties: {
					images: {
						$ref: 'http://platform.selfkey.org/schema/file/multi-image.json'
					},
					issued: {
						$ref: 'http://platform.selfkey.org/schema/misc/issue-date.json'
					},
					extra: {
						$ref: 'http://platform.selfkey.org/schema/misc/extra-images.json'
					}
				},
				required: ['images', 'issued']
			},
			dereferenced: {
				$id: 'http://platform.selfkey.org/schema/attribute/utility-bill.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['individual'],
				title: 'Utility Bill',
				description:
					'Please provide an image with a recent utility bill. No older than 3 months.',
				type: 'object',
				properties: {
					images: {
						$schema: 'http://json-schema.org/draft-07/schema',
						$id: 'http://platform.selfkey.org/schema/file/multi-image.json',
						title: 'Multiple Images',
						type: 'array',
						items: {
							$schema: 'http://json-schema.org/draft-07/schema',
							$id: 'http://platform.selfkey.org/schema/file/image.json',
							type: 'object',
							title: 'Image',
							format: 'file',
							properties: {
								mimeType: {
									type: 'string',
									enum: ['image/jpeg', 'image/png', 'application/pdf']
								},
								size: {
									type: 'integer',
									maximum: 50000000
								},
								content: {
									type: 'string'
								}
							},
							required: ['mimeType', 'size', 'content']
						}
					},
					issued: {
						$id: 'http://platform.selfkey.org/schema/misc/issue-date.json',
						$schema: 'http://json-schema.org/draft-07/schema',
						title: 'Issue Date',
						type: 'string',
						format: 'date'
					},
					extra: {
						$id: 'http://platform.selfkey.org/schema/misc/extra-images.json',
						$schema: 'http://json-schema.org/draft-07/schema',
						title: 'Extra Images',
						description: 'Please add any extra images that are relevant',
						type: 'array',
						items: {
							$schema: 'http://json-schema.org/draft-07/schema',
							$id: 'http://platform.selfkey.org/schema/file/image.json',
							type: 'object',
							title: 'Image',
							format: 'file',
							properties: {
								mimeType: {
									type: 'string',
									enum: ['image/jpeg', 'image/png', 'application/pdf']
								},
								size: {
									type: 'integer',
									maximum: 50000000
								},
								content: {
									type: 'string'
								}
							},
							required: ['mimeType', 'size', 'content']
						}
					}
				},
				required: ['images', 'issued']
			}
		},
		'http://platform.selfkey.org/schema/attribute/voice-id.json': {
			url: 'http://platform.selfkey.org/schema/attribute/voice-id.json',
			schema: {
				$id: 'http://platform.selfkey.org/schema/attribute/voice-id.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['individual'],
				title: 'Voice ID',
				description: 'Please provide a recording with your voice authentication phrase.',
				type: 'array',
				items: {
					$ref: 'http://platform.selfkey.org/schema/file/audio.json'
				},
				minItems: 1,
				noFill: true
			},
			dereferenced: {
				$id: 'http://platform.selfkey.org/schema/attribute/voice-id.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['individual'],
				title: 'Voice ID',
				description: 'Please provide a recording with your voice authentication phrase.',
				type: 'array',
				items: {
					$schema: 'http://json-schema.org/draft-07/schema',
					$id: 'http://platform.selfkey.org/schema/file/audio.json',
					type: 'object',
					format: 'file',
					title: 'Audio',
					properties: {
						mimeType: {
							type: 'string',
							enum: [
								'audio/mp3',
								'audio/mp4',
								'audio/mpeg',
								'audio/ogg',
								'audio/x-wav'
							]
						},
						size: {
							type: 'integer',
							maximum: 50000000
						},
						content: {
							type: 'string'
						}
					},
					required: ['mimeType', 'size', 'content']
				},
				minItems: 1,
				noFill: true
			}
		},
		'http://platform.selfkey.org/schema/attribute/work-place.json': {
			url: 'http://platform.selfkey.org/schema/attribute/work-place.json',
			schema: {
				$id: 'http://platform.selfkey.org/schema/attribute/work-place.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['individual'],
				title: 'Workplace',
				description:
					'Please specify your current place of work. You can also state if you are un-employed or retired.',
				type: 'string'
			},
			dereferenced: {
				$id: 'http://platform.selfkey.org/schema/attribute/work-place.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['individual'],
				title: 'Workplace',
				description:
					'Please specify your current place of work. You can also state if you are un-employed or retired.',
				type: 'string'
			}
		},
		'http://platform.selfkey.org/schema/attribute/btc-address.json': {
			url: 'http://platform.selfkey.org/schema/attribute/btc-address.json',
			schema: {
				$id: 'http://platform.selfkey.org/schema/attribute/btc-address.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['corporate', 'individual'],
				title: 'BTC Wallet Address',
				description: 'Please enter your Bitcoin Wallet Address.',
				type: 'string',
				pattern: '^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$'
			},
			dereferenced: {
				$id: 'http://platform.selfkey.org/schema/attribute/btc-address.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['corporate', 'individual'],
				title: 'BTC Wallet Address',
				description: 'Please enter your Bitcoin Wallet Address.',
				type: 'string',
				pattern: '^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$'
			}
		},
		'http://platform.selfkey.org/schema/attribute/eth-address.json': {
			url: 'http://platform.selfkey.org/schema/attribute/eth-address.json',
			schema: {
				$id: 'http://platform.selfkey.org/schema/attribute/eth-address.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['corporate', 'individual'],
				title: 'ETH Wallet Address',
				description: 'Please enter your Ethereum Wallet Address',
				type: 'string',
				pattern: '^0x[a-fA-F0-9]{40}$'
			},
			dereferenced: {
				$id: 'http://platform.selfkey.org/schema/attribute/eth-address.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['corporate', 'individual'],
				title: 'ETH Wallet Address',
				description: 'Please enter your Ethereum Wallet Address',
				type: 'string',
				pattern: '^0x[a-fA-F0-9]{40}$'
			}
		},
		'http://platform.selfkey.org/schema/attribute/dash-address.json': {
			url: 'http://platform.selfkey.org/schema/attribute/dash-address.json',
			schema: {
				$id: 'http://platform.selfkey.org/schema/attribute/dash-address.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['corporate', 'individual'],
				title: 'Dash Wallet Address',
				description: 'Please enter your Dash Wallet Address.',
				type: 'string',
				pattern: '^X[1-9A-HJ-NP-Za-km-z]{33}'
			},
			dereferenced: {
				$id: 'http://platform.selfkey.org/schema/attribute/dash-address.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['corporate', 'individual'],
				title: 'Dash Wallet Address',
				description: 'Please enter your Dash Wallet Address.',
				type: 'string',
				pattern: '^X[1-9A-HJ-NP-Za-km-z]{33}'
			}
		},
		'http://platform.selfkey.org/schema/attribute/certificate-of-incorporation.json': {
			url: 'http://platform.selfkey.org/schema/attribute/certificate-of-incorporation.json',
			schema: {
				$id:
					'http://platform.selfkey.org/schema/attribute/certificate-of-incorporation.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['corporate'],
				title: 'Certificate of Incorporation',
				description:
					"Please provide a copy of your company's certificate of incorporation.",
				type: 'object',
				properties: {
					image: {
						$ref: 'http://platform.selfkey.org/schema/file/image.json'
					},
					issued: {
						$ref: 'http://platform.selfkey.org/schema/misc/issue-date.json'
					},
					extra: {
						$ref: 'http://platform.selfkey.org/schema/misc/extra-images.json'
					}
				},
				required: ['image', 'issued']
			},
			dereferenced: {
				$id:
					'http://platform.selfkey.org/schema/attribute/certificate-of-incorporation.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['corporate'],
				title: 'Certificate of Incorporation',
				description:
					"Please provide a copy of your company's certificate of incorporation.",
				type: 'object',
				properties: {
					image: {
						$schema: 'http://json-schema.org/draft-07/schema',
						$id: 'http://platform.selfkey.org/schema/file/image.json',
						type: 'object',
						title: 'Image',
						format: 'file',
						properties: {
							mimeType: {
								type: 'string',
								enum: ['image/jpeg', 'image/png', 'application/pdf']
							},
							size: {
								type: 'integer',
								maximum: 50000000
							},
							content: {
								type: 'string'
							}
						},
						required: ['mimeType', 'size', 'content']
					},
					issued: {
						$id: 'http://platform.selfkey.org/schema/misc/issue-date.json',
						$schema: 'http://json-schema.org/draft-07/schema',
						title: 'Issue Date',
						type: 'string',
						format: 'date'
					},
					extra: {
						$id: 'http://platform.selfkey.org/schema/misc/extra-images.json',
						$schema: 'http://json-schema.org/draft-07/schema',
						title: 'Extra Images',
						description: 'Please add any extra images that are relevant',
						type: 'array',
						items: {
							$schema: 'http://json-schema.org/draft-07/schema',
							$id: 'http://platform.selfkey.org/schema/file/image.json',
							type: 'object',
							title: 'Image',
							format: 'file',
							properties: {
								mimeType: {
									type: 'string',
									enum: ['image/jpeg', 'image/png', 'application/pdf']
								},
								size: {
									type: 'integer',
									maximum: 50000000
								},
								content: {
									type: 'string'
								}
							},
							required: ['mimeType', 'size', 'content']
						}
					}
				},
				required: ['image', 'issued']
			}
		},
		'http://platform.selfkey.org/schema/attribute/registration-certificate.json': {
			url: 'http://platform.selfkey.org/schema/attribute/registration-certificate.json',
			schema: {
				$id: 'http://platform.selfkey.org/schema/attribute/registration-certificate.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['corporate'],
				title: 'Registration Certificate',
				description: "Please provide a copy of your company's registration certificate.",
				type: 'object',
				properties: {
					image: {
						$ref: 'http://platform.selfkey.org/schema/file/image.json'
					},
					company_name: {
						title: 'Company Name',
						type: 'string'
					},
					registration_number: {
						title: 'Registration Number',
						type: 'string'
					},
					issued: {
						$ref: 'http://platform.selfkey.org/schema/misc/issue-date.json'
					},
					extra: {
						$ref: 'http://platform.selfkey.org/schema/misc/extra-images.json'
					}
				},
				required: ['image', 'company_name', 'registration_number', 'issued']
			},
			dereferenced: {
				$id: 'http://platform.selfkey.org/schema/attribute/registration-certificate.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['corporate'],
				title: 'Registration Certificate',
				description: "Please provide a copy of your company's registration certificate.",
				type: 'object',
				properties: {
					image: {
						$schema: 'http://json-schema.org/draft-07/schema',
						$id: 'http://platform.selfkey.org/schema/file/image.json',
						type: 'object',
						title: 'Image',
						format: 'file',
						properties: {
							mimeType: {
								type: 'string',
								enum: ['image/jpeg', 'image/png', 'application/pdf']
							},
							size: {
								type: 'integer',
								maximum: 50000000
							},
							content: {
								type: 'string'
							}
						},
						required: ['mimeType', 'size', 'content']
					},
					company_name: {
						title: 'Company Name',
						type: 'string'
					},
					registration_number: {
						title: 'Registration Number',
						type: 'string'
					},
					issued: {
						$id: 'http://platform.selfkey.org/schema/misc/issue-date.json',
						$schema: 'http://json-schema.org/draft-07/schema',
						title: 'Issue Date',
						type: 'string',
						format: 'date'
					},
					extra: {
						$id: 'http://platform.selfkey.org/schema/misc/extra-images.json',
						$schema: 'http://json-schema.org/draft-07/schema',
						title: 'Extra Images',
						description: 'Please add any extra images that are relevant',
						type: 'array',
						items: {
							$schema: 'http://json-schema.org/draft-07/schema',
							$id: 'http://platform.selfkey.org/schema/file/image.json',
							type: 'object',
							title: 'Image',
							format: 'file',
							properties: {
								mimeType: {
									type: 'string',
									enum: ['image/jpeg', 'image/png', 'application/pdf']
								},
								size: {
									type: 'integer',
									maximum: 50000000
								},
								content: {
									type: 'string'
								}
							},
							required: ['mimeType', 'size', 'content']
						}
					}
				},
				required: ['image', 'company_name', 'registration_number', 'issued']
			}
		},
		'http://platform.selfkey.org/schema/attribute/external-document.json': {
			url: 'http://platform.selfkey.org/schema/attribute/external-document.json',
			schema: {
				$id: 'http://platform.selfkey.org/schema/attribute/external-document.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['corporate', 'individual'],
				title: 'External Document',
				description: 'Please provide any external documents requested.',
				type: 'array',
				items: {
					$ref: 'http://platform.selfkey.org/schema/file/image.json'
				},
				minItems: 1,
				noFill: true
			},
			dereferenced: {
				$id: 'http://platform.selfkey.org/schema/attribute/external-document.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['corporate', 'individual'],
				title: 'External Document',
				description: 'Please provide any external documents requested.',
				type: 'array',
				items: {
					$schema: 'http://json-schema.org/draft-07/schema',
					$id: 'http://platform.selfkey.org/schema/file/image.json',
					type: 'object',
					title: 'Image',
					format: 'file',
					properties: {
						mimeType: {
							type: 'string',
							enum: ['image/jpeg', 'image/png', 'application/pdf']
						},
						size: {
							type: 'integer',
							maximum: 50000000
						},
						content: {
							type: 'string'
						}
					},
					required: ['mimeType', 'size', 'content']
				},
				minItems: 1,
				noFill: true
			}
		},
		'http://platform.selfkey.org/schema/attribute/company-name.json': {
			url: 'http://platform.selfkey.org/schema/attribute/company-name.json',
			schema: {
				$id: 'http://platform.selfkey.org/schema/attribute/company-name.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['corporate'],
				title: 'Company Name',
				description:
					'Please provide the name of your company, as it appears in official documents.',
				type: 'string'
			},
			dereferenced: {
				$id: 'http://platform.selfkey.org/schema/attribute/company-name.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['corporate'],
				title: 'Company Name',
				description:
					'Please provide the name of your company, as it appears in official documents.',
				type: 'string'
			}
		},
		'http://platform.selfkey.org/schema/attribute/birth-certificate.json': {
			url: 'http://platform.selfkey.org/schema/attribute/birth-certificate.json',
			schema: {
				$id: 'http://platform.selfkey.org/schema/attribute/birth-certificate.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['individual'],
				title: 'Birth Certificate',
				description: 'Please provide an image of your birth certificate.',
				type: 'object',
				properties: {
					images: {
						$ref: 'http://platform.selfkey.org/schema/file/multi-image.json'
					},
					extra: {
						$ref: 'http://platform.selfkey.org/schema/misc/extra-images.json'
					}
				},
				required: ['images']
			},
			dereferenced: {
				$id: 'http://platform.selfkey.org/schema/attribute/birth-certificate.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['individual'],
				title: 'Birth Certificate',
				description: 'Please provide an image of your birth certificate.',
				type: 'object',
				properties: {
					images: {
						$schema: 'http://json-schema.org/draft-07/schema',
						$id: 'http://platform.selfkey.org/schema/file/multi-image.json',
						title: 'Multiple Images',
						type: 'array',
						items: {
							$schema: 'http://json-schema.org/draft-07/schema',
							$id: 'http://platform.selfkey.org/schema/file/image.json',
							type: 'object',
							title: 'Image',
							format: 'file',
							properties: {
								mimeType: {
									type: 'string',
									enum: ['image/jpeg', 'image/png', 'application/pdf']
								},
								size: {
									type: 'integer',
									maximum: 50000000
								},
								content: {
									type: 'string'
								}
							},
							required: ['mimeType', 'size', 'content']
						}
					},
					extra: {
						$id: 'http://platform.selfkey.org/schema/misc/extra-images.json',
						$schema: 'http://json-schema.org/draft-07/schema',
						title: 'Extra Images',
						description: 'Please add any extra images that are relevant',
						type: 'array',
						items: {
							$schema: 'http://json-schema.org/draft-07/schema',
							$id: 'http://platform.selfkey.org/schema/file/image.json',
							type: 'object',
							title: 'Image',
							format: 'file',
							properties: {
								mimeType: {
									type: 'string',
									enum: ['image/jpeg', 'image/png', 'application/pdf']
								},
								size: {
									type: 'integer',
									maximum: 50000000
								},
								content: {
									type: 'string'
								}
							},
							required: ['mimeType', 'size', 'content']
						}
					}
				},
				required: ['images']
			}
		},
		'http://platform.selfkey.org/schema/attribute/member-register.json': {
			url: 'http://platform.selfkey.org/schema/attribute/member-register.json',
			schema: {
				$id: 'http://platform.selfkey.org/schema/attribute/member-register.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['corporate'],
				title: 'Member Register',
				description: 'Please provide a copy of your members register.',
				type: 'object',
				properties: {
					images: {
						$ref: 'http://platform.selfkey.org/schema/file/multi-image.json'
					},
					issued: {
						$ref: 'http://platform.selfkey.org/schema/misc/issue-date.json'
					},
					extra: {
						$ref: 'http://platform.selfkey.org/schema/misc/extra-images.json'
					}
				},
				required: ['images', 'issued']
			},
			dereferenced: {
				$id: 'http://platform.selfkey.org/schema/attribute/member-register.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['corporate'],
				title: 'Member Register',
				description: 'Please provide a copy of your members register.',
				type: 'object',
				properties: {
					images: {
						$schema: 'http://json-schema.org/draft-07/schema',
						$id: 'http://platform.selfkey.org/schema/file/multi-image.json',
						title: 'Multiple Images',
						type: 'array',
						items: {
							$schema: 'http://json-schema.org/draft-07/schema',
							$id: 'http://platform.selfkey.org/schema/file/image.json',
							type: 'object',
							title: 'Image',
							format: 'file',
							properties: {
								mimeType: {
									type: 'string',
									enum: ['image/jpeg', 'image/png', 'application/pdf']
								},
								size: {
									type: 'integer',
									maximum: 50000000
								},
								content: {
									type: 'string'
								}
							},
							required: ['mimeType', 'size', 'content']
						}
					},
					issued: {
						$id: 'http://platform.selfkey.org/schema/misc/issue-date.json',
						$schema: 'http://json-schema.org/draft-07/schema',
						title: 'Issue Date',
						type: 'string',
						format: 'date'
					},
					extra: {
						$id: 'http://platform.selfkey.org/schema/misc/extra-images.json',
						$schema: 'http://json-schema.org/draft-07/schema',
						title: 'Extra Images',
						description: 'Please add any extra images that are relevant',
						type: 'array',
						items: {
							$schema: 'http://json-schema.org/draft-07/schema',
							$id: 'http://platform.selfkey.org/schema/file/image.json',
							type: 'object',
							title: 'Image',
							format: 'file',
							properties: {
								mimeType: {
									type: 'string',
									enum: ['image/jpeg', 'image/png', 'application/pdf']
								},
								size: {
									type: 'integer',
									maximum: 50000000
								},
								content: {
									type: 'string'
								}
							},
							required: ['mimeType', 'size', 'content']
						}
					}
				},
				required: ['images', 'issued']
			}
		},
		'http://platform.selfkey.org/schema/attribute/cv.json': {
			url: 'http://platform.selfkey.org/schema/attribute/cv.json',
			schema: {
				$id: 'http://platform.selfkey.org/schema/attribute/cv.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['individual'],
				title: 'CV (Resume)',
				description: 'Please provide a detailed copy of your CV',
				type: 'array',
				items: {
					$ref: 'http://platform.selfkey.org/schema/file/image.json'
				},
				minItems: 1,
				noFill: true
			},
			dereferenced: {
				$id: 'http://platform.selfkey.org/schema/attribute/cv.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['individual'],
				title: 'CV (Resume)',
				description: 'Please provide a detailed copy of your CV',
				type: 'array',
				items: {
					$schema: 'http://json-schema.org/draft-07/schema',
					$id: 'http://platform.selfkey.org/schema/file/image.json',
					type: 'object',
					title: 'Image',
					format: 'file',
					properties: {
						mimeType: {
							type: 'string',
							enum: ['image/jpeg', 'image/png', 'application/pdf']
						},
						size: {
							type: 'integer',
							maximum: 50000000
						},
						content: {
							type: 'string'
						}
					},
					required: ['mimeType', 'size', 'content']
				},
				minItems: 1,
				noFill: true
			}
		},
		'http://platform.selfkey.org/schema/attribute/professional-reference-letter.json': {
			url: 'http://platform.selfkey.org/schema/attribute/professional-reference-letter.json',
			schema: {
				$id:
					'http://platform.selfkey.org/schema/attribute/professional-reference-letter.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['corporate', 'individual'],
				title: 'Professional Reference Letter',
				description: 'Please provide a copy of a recommendation letter your received.',
				type: 'array',
				items: {
					$ref: 'http://platform.selfkey.org/schema/file/image.json'
				},
				minItems: 1,
				noFill: true
			},
			dereferenced: {
				$id:
					'http://platform.selfkey.org/schema/attribute/professional-reference-letter.json',
				$schema: 'http://platform.selfkey.org/schema/identity-attribute.json',
				identityAttribute: true,
				identityAttributeRepository: 'http://platform.selfkey.org/repository.json',
				entityType: ['corporate', 'individual'],
				title: 'Professional Reference Letter',
				description: 'Please provide a copy of a recommendation letter your received.',
				type: 'array',
				items: {
					$schema: 'http://json-schema.org/draft-07/schema',
					$id: 'http://platform.selfkey.org/schema/file/image.json',
					type: 'object',
					title: 'Image',
					format: 'file',
					properties: {
						mimeType: {
							type: 'string',
							enum: ['image/jpeg', 'image/png', 'application/pdf']
						},
						size: {
							type: 'integer',
							maximum: 50000000
						},
						content: {
							type: 'string'
						}
					},
					required: ['mimeType', 'size', 'content']
				},
				minItems: 1,
				noFill: true
			}
		}
	},
	uiSchemas: {
		'http://platform.selfkey.org/schema/ui/bank-statement.json': {
			url: 'http://platform.selfkey.org/schema/ui/bank-statement.json',
			schema: {
				'ui:order': ['images', 'issued', 'extra'],
				images: {
					'ui:label': false
				},
				extra: {
					'ui:hidden': true
				}
			}
		},
		'http://platform.selfkey.org/schema/ui/date-of-birth.json': {
			url: 'http://platform.selfkey.org/schema/ui/date-of-birth.json',
			schema: {}
		},
		'http://platform.selfkey.org/schema/ui/incorporation-date.json': {
			url: 'http://platform.selfkey.org/schema/ui/incorporation-date.json',
			schema: {}
		},
		'http://platform.selfkey.org/schema/ui/country-of-residency.json': {
			url: 'http://platform.selfkey.org/schema/ui/country-of-residency.json',
			schema: {
				country: {
					'ui:label': false
				}
			}
		},
		'http://platform.selfkey.org/schema/ui/drivers-license.json': {
			url: 'http://platform.selfkey.org/schema/ui/drivers-license.json',
			schema: {
				'ui:order': ['front', 'back', 'expires', 'selfie', 'extra'],
				selfie: {
					image: {
						'ui:label': false
					}
				},
				extra: {
					'ui:hidden': true
				}
			}
		},
		'http://platform.selfkey.org/schema/ui/email.json': {
			url: 'http://platform.selfkey.org/schema/ui/email.json',
			schema: {}
		},
		'http://platform.selfkey.org/schema/ui/fingerprint.json': {
			url: 'http://platform.selfkey.org/schema/ui/fingerprint.json',
			schema: {
				'ui:order': ['images', 'extra'],
				images: {
					'ui:label': false
				},
				extra: {
					'ui:hidden': true
				}
			}
		},
		'http://platform.selfkey.org/schema/ui/first-name.json': {
			url: 'http://platform.selfkey.org/schema/ui/first-name.json',
			schema: {}
		},
		'http://platform.selfkey.org/schema/ui/last-name.json': {
			url: 'http://platform.selfkey.org/schema/ui/last-name.json',
			schema: {}
		},
		'http://platform.selfkey.org/schema/ui/legal-entity-type.json': {
			url: 'http://platform.selfkey.org/schema/ui/legal-entity-type.json',
			schema: {}
		},
		'http://platform.selfkey.org/schema/ui/legal-jurisdiction.json': {
			url: 'http://platform.selfkey.org/schema/ui/legal-jurisdiction.json',
			schema: {}
		},
		'http://platform.selfkey.org/schema/ui/middle-name.json': {
			url: 'http://platform.selfkey.org/schema/ui/middle-name.json',
			schema: {}
		},
		'http://platform.selfkey.org/schema/ui/national-id.json': {
			url: 'http://platform.selfkey.org/schema/ui/national-id.json',
			schema: {
				'ui:order': ['front', 'back', 'issued', 'expires', 'selfie', 'extra'],
				country: {
					'ui:label': false
				},
				selfie: {
					image: {
						'ui:label': false
					}
				},
				extra: {
					'ui:hidden': true
				}
			}
		},
		'http://platform.selfkey.org/schema/ui/nationality.json': {
			url: 'http://platform.selfkey.org/schema/ui/nationality.json',
			schema: {
				'ui:order': ['country', 'denonym']
			}
		},
		'http://platform.selfkey.org/schema/ui/passport.json': {
			url: 'http://platform.selfkey.org/schema/ui/passport.json',
			schema: {
				'ui:order': ['image', 'issued', 'expires', 'selfie', 'extra'],
				image: {
					'ui:label': false
				},
				selfie: {
					image: {
						'ui:label': false
					}
				},
				extra: {
					'ui:hidden': true
				}
			}
		},
		'http://platform.selfkey.org/schema/ui/phone-number.json': {
			url: 'http://platform.selfkey.org/schema/ui/phone-number.json',
			schema: {}
		},
		'http://platform.selfkey.org/schema/ui/physical-address.json': {
			url: 'http://platform.selfkey.org/schema/ui/physical-address.json',
			schema: {
				'ui:order': ['address_line_1', 'address_line_2']
			}
		},
		'http://platform.selfkey.org/schema/ui/tax-certificate.json': {
			url: 'http://platform.selfkey.org/schema/ui/tax-certificate.json',
			schema: {
				'ui:order': ['image', 'issued', 'extra'],
				image: {
					'ui:label': false
				},
				extra: {
					'ui:hidden': true
				}
			}
		},
		'http://platform.selfkey.org/schema/ui/tax-id-number.json': {
			url: 'http://platform.selfkey.org/schema/ui/tax-id-number.json',
			schema: {}
		},
		'http://platform.selfkey.org/schema/ui/utility-bill.json': {
			url: 'http://platform.selfkey.org/schema/ui/utility-bill.json',
			schema: {
				'ui:order': ['images', 'issued', 'extra'],
				images: {
					'ui:label': false
				},
				extra: {
					'ui:hidden': true
				}
			}
		},
		'http://platform.selfkey.org/schema/ui/voice-id.json': {
			url: 'http://platform.selfkey.org/schema/ui/voice-id.json',
			schema: {}
		},
		'http://platform.selfkey.org/schema/ui/work-place.json': {
			url: 'http://platform.selfkey.org/schema/ui/work-place.json',
			schema: {}
		},
		'http://platform.selfkey.org/schema/ui/btc-address.json': {
			url: 'http://platform.selfkey.org/schema/ui/btc-address.json',
			schema: {}
		},
		'http://platform.selfkey.org/schema/ui/eth-address.json': {
			url: 'http://platform.selfkey.org/schema/ui/eth-address.json',
			schema: {}
		},
		'http://platform.selfkey.org/schema/ui/dash-address.json': {
			url: 'http://platform.selfkey.org/schema/ui/dash-address.json',
			schema: {}
		},
		'http://platform.selfkey.org/schema/ui/certificate-of-incorporation.json': {
			url: 'http://platform.selfkey.org/schema/ui/certificate-of-incorporation.json',
			schema: {
				'ui:order': ['image', 'issued', 'extra'],
				image: {
					'ui:label': false
				},
				extra: {
					'ui:hidden': true
				}
			}
		},
		'http://platform.selfkey.org/schema/ui/registration-certificate.json': {
			url: 'http://platform.selfkey.org/schema/ui/registration-certificate.json',
			schema: {
				'ui:order': ['image', 'company_name', 'registration_number', 'issued', 'extra'],
				image: {
					'ui:label': false
				},
				extra: {
					'ui:hidden': true
				}
			}
		},
		'http://platform.selfkey.org/schema/ui/external-document.json': {
			url: 'http://platform.selfkey.org/schema/ui/external-document.json',
			schema: {}
		},
		'http://platform.selfkey.org/schema/ui/company-name.json': {
			url: 'http://platform.selfkey.org/schema/ui/company-name.json',
			schema: {}
		},
		'http://platform.selfkey.org/schema/ui/birth-certificate.json': {
			url: 'http://platform.selfkey.org/schema/ui/birth-certificate.json',
			schema: {
				'ui:order': ['images', 'extra'],
				images: {
					'ui:label': false
				},
				extra: {
					'ui:hidden': true
				}
			}
		},
		'http://platform.selfkey.org/schema/ui/member-register.json': {
			url: 'http://platform.selfkey.org/schema/ui/member-register.json',
			schema: {
				'ui:order': ['images', 'issued', 'extra'],
				extra: {
					'ui:hidden': true
				}
			}
		},
		'http://platform.selfkey.org/schema/ui/cv.json': {
			url: 'http://platform.selfkey.org/schema/ui/cv.json',
			schema: {}
		},
		'http://platform.selfkey.org/schema/ui/professional-reference-letter.json': {
			url: 'http://platform.selfkey.org/schema/ui/professional-reference-letter.json',
			schema: {}
		}
	},
	identityAttributeSchema: {
		url: 'http://platform.selfkey.org/schema/identity-attribute.json',
		schema: {
			$schema: 'http://json-schema.org/draft-07/schema',
			$id: 'http://platform.selfkey.org/schema/identity-attribute.json',
			allOf: [
				{
					$ref: 'http://json-schema.org/draft-07/schema'
				},
				{
					properties: {
						identityAttribute: {
							type: 'boolean',
							const: true
						},
						identityAttributeRepository: {
							type: 'string',
							format: 'url'
						},
						entityType: {
							type: 'array',
							uniqueItems: true,
							defaults: ['individual'],
							items: {
								type: 'string',
								enum: ['individual', 'corporate']
							}
						}
					}
				}
			],
			required: ['$id', 'title', 'description', 'identityAttribute']
		}
	}
};
