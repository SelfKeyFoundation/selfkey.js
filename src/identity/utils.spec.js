import {
	attributeMapBySchema,
	denormalizeDocumentsSchema,
	normalizeDocumentsSchema,
	schemaContainsFile
} from './utils';
import attributeList from './__fixtures__/attribute-list';
import parsedList from './__fixtures__/parsed-list';
import platform from './__fixtures__/platform';

const findAttributeType = id => {
	const schema = platform.jsonSchemas[id];
	if (!schema) {
		return null;
	}
	return schema.dereferenced;
};

describe('identity attributes utils', () => {
	describe('attributeMapBySchema', () => {
		it('should map attribute list', () => {
			expect(attributeMapBySchema(attributeList)).toEqual(parsedList);
		});
	});

	describe('denormilizeDocumentsSchema', () => {
		it('should do nothing if attribute has no documents', () => {
			const value = {
				image: null
			};
			const documents = [];
			const attrTypeSchema = findAttributeType(
				'http://platform.selfkey.org/schema/attribute/tax-certificate.json'
			);

			expect(denormalizeDocumentsSchema(attrTypeSchema, value, documents)).toEqual({
				value,
				documents
			});
		});
		it('should do nothing if documents are denormalized', () => {
			let value = {
				image: {
					content: 'abc'
				}
			};
			let documents = [];

			const attrTypeSchema = findAttributeType(
				'http://platform.selfkey.org/schema/attribute/tax-certificate.json'
			);

			expect(denormalizeDocumentsSchema(attrTypeSchema, value, documents)).toEqual({
				value,
				documents
			});

			value = {
				image: {
					id: 15,
					content: 'abc'
				}
			};

			documents = [];

			expect(denormalizeDocumentsSchema(attrTypeSchema, value, documents)).toEqual({
				value,
				documents
			});
		});
		it('should denormalize attr if there are documents', () => {
			let value = {
				image: '$document-1'
			};
			let documents = [
				{
					id: 1,
					content: 'abc'
				}
			];
			const attrTypeSchema = findAttributeType(
				'http://platform.selfkey.org/schema/attribute/tax-certificate.json'
			);

			expect(denormalizeDocumentsSchema(attrTypeSchema, value, documents)).toEqual({
				value: {
					image: {
						id: 1,
						content: 'abc'
					}
				},
				documents: []
			});
			value = {
				image: '$document-#ref{document1.id}'
			};
			documents = [
				{
					'#id': 'document1',
					content: 'abc'
				}
			];

			expect(denormalizeDocumentsSchema(attrTypeSchema, value, documents)).toEqual({
				value: {
					image: {
						content: 'abc'
					}
				},
				documents: []
			});
		});
		it('should normalize arrays of documents', () => {
			const attrTypeSchema = findAttributeType(
				'http://platform.selfkey.org/schema/attribute/national-id.json'
			);
			const value = {
				front: '$document-15',
				back: '$document-17',
				extra: ['$document-#ref{document0.id}', '$document-#ref{document1.id}']
			};
			const documents = [
				{
					id: 15,
					content: 'abc'
				},
				{
					id: 17,
					content: 'abc2'
				},
				{
					'#id': 'document0',
					content: 'abc3'
				},
				{
					'#id': 'document1',
					content: 'abc4'
				}
			];

			expect(denormalizeDocumentsSchema(attrTypeSchema, value, documents)).toEqual({
				value: {
					front: {
						id: 15,
						content: 'abc'
					},
					back: {
						id: 17,
						content: 'abc2'
					},
					extra: [
						{
							content: 'abc3'
						},
						{
							content: 'abc4'
						}
					]
				},
				documents: []
			});
		});
	});

	describe('normalizeDocumentsSchema', () => {
		it('should do nothing if attribute has no documnents', () => {
			const value = {
				image: null
			};
			const documents = [];
			const attrTypeSchema = findAttributeType(
				'http://platform.selfkey.org/schema/attribute/tax-certificate.json'
			);

			expect(normalizeDocumentsSchema(attrTypeSchema, value, documents)).toEqual({
				value,
				documents
			});
		});
		it('should do nothing if documents are normalized', () => {
			let value = {
				image: '$document-#ref{document1.id}'
			};
			let documents = [
				{
					'#id': 'document1',
					content: 'abc'
				}
			];

			const attrTypeSchema = findAttributeType(
				'http://platform.selfkey.org/schema/attribute/tax-certificate.json'
			);

			expect(normalizeDocumentsSchema(attrTypeSchema, value, documents)).toEqual({
				value,
				documents
			});

			value = {
				image: '$document-15'
			};

			documents = [
				{
					id: 15,
					content: 'abc'
				}
			];

			expect(normalizeDocumentsSchema(attrTypeSchema, value, documents)).toEqual({
				value,
				documents
			});
		});
		it('should do nothing if documents are normalized', () => {
			let value = {
				image: '$document-#ref{document1.id}'
			};
			let documents = [
				{
					'#id': 'document1',
					content: 'abc'
				}
			];
			const attrTypeSchema = findAttributeType(
				'http://platform.selfkey.org/schema/attribute/tax-certificate.json'
			);

			expect(normalizeDocumentsSchema(attrTypeSchema, value, documents)).toEqual({
				value,
				documents
			});

			value = {
				image: '$document-15'
			};

			documents = [
				{
					id: 15,
					content: 'abc'
				}
			];

			expect(normalizeDocumentsSchema(attrTypeSchema, value, documents)).toEqual({
				value,
				documents
			});
		});
		it('should normalize attr if there are documents', () => {
			let value = {
				image: {
					content: 'abc'
				}
			};
			let documents = [];
			const attrTypeSchema = findAttributeType(
				'http://platform.selfkey.org/schema/attribute/tax-certificate.json'
			);

			expect(normalizeDocumentsSchema(attrTypeSchema, value, documents)).toEqual({
				value: {
					image: '$document-#ref{document0.id}'
				},
				documents: [
					{
						'#id': 'document0',
						content: 'abc'
					}
				]
			});
			value = {
				image: {
					id: 15,
					content: 'abc'
				}
			};
			documents = [];

			expect(normalizeDocumentsSchema(attrTypeSchema, value, documents)).toEqual({
				value: {
					image: '$document-15'
				},
				documents: [
					{
						id: 15,
						content: 'abc'
					}
				]
			});
		});
		it('should normalize arrays of documents', () => {
			const attrTypeSchema = findAttributeType(
				'http://platform.selfkey.org/schema/attribute/national-id.json'
			);
			const value = {
				front: {
					id: 15,
					content: 'abc'
				},
				back: {
					id: 17,
					content: 'abc2'
				},
				extra: [
					{
						content: 'abc3'
					},
					{
						content: 'abc4'
					}
				]
			};
			const documents = [];

			expect(normalizeDocumentsSchema(attrTypeSchema, value, documents)).toEqual({
				value: {
					front: '$document-15',
					back: '$document-17',
					extra: ['$document-#ref{document2.id}', '$document-#ref{document3.id}']
				},
				documents: [
					{
						id: 15,
						content: 'abc'
					},
					{
						id: 17,
						content: 'abc2'
					},
					{
						'#id': 'document2',
						content: 'abc3'
					},
					{
						'#id': 'document3',
						content: 'abc4'
					}
				]
			});
		});
	});
	describe('schemaContainsFile', () => {
		it('false if simple schema', () => {
			const attrTypeSchema = findAttributeType(
				'http://platform.selfkey.org/schema/attribute/email.json'
			);
			expect(schemaContainsFile(attrTypeSchema)).toBe(false);
		});
		it('false if complext non file schema', () => {
			const attrTypeSchema = findAttributeType(
				'http://platform.selfkey.org/schema/attribute/physical-address.json'
			);
			expect(schemaContainsFile(attrTypeSchema)).toBe(false);
		});
		it('true if simple file schema', () => {
			const attrTypeSchema = findAttributeType(
				'http://platform.selfkey.org/schema/attribute/tax-certificate.json'
			);
			expect(schemaContainsFile(attrTypeSchema)).toBe(true);
		});
		it('true if complex file schema', () => {
			const attrTypeSchema = findAttributeType(
				'http://platform.selfkey.org/schema/attribute/national-id.json'
			);
			expect(schemaContainsFile(attrTypeSchema)).toBe(true);
		});
	});
});
