import sinon from 'sinon';
import { Repository } from './repository';
import AttributeManager from './attribute-manager';

describe('AttributeManager', () => {
	const testSchemaId = 'http://platform.selfkey.org/schemas/attribute/test.json';
	let testRepository;
	let testManager;

	beforeEach(() => {
		testRepository = new Repository();
		testRepository.jsonSchemas[testSchemaId] = { $id: testSchemaId };
		testManager = new AttributeManager();
		testManager.addRepository(testRepository);
	});

	describe('createWithSelfkeyRepository', () => {
		it('should create with selfkey repo', async () => {
			sinon.stub(Repository, 'createSelfkeyRepo').resolves(testRepository);
			const manager = await AttributeManager.createWithSelfkeyRepository();
			expect(Repository.createSelfkeyRepo.calledOnce).toBe(true);
			expect(manager.repositories).toEqual([testRepository]);
		});
	});
	describe('findRepositoryForAttribute', () => {
		it('should return null if no repository found', () => {
			expect(testManager.findRepositoryForAttribute({ schemaId: 'does not exist' })).toBe(
				null
			);
		});
		it('should handle string attribute', () => {
			expect(testManager.findRepositoryForAttribute(testSchemaId)).toBe(testRepository);
		});
		it('should handle attributes', () => {
			expect(testManager.findRepositoryForAttribute({ schemaId: testSchemaId })).toBe(
				testRepository
			);
		});
	});

	describe('validateOneAttribute', () => {
		it('should handle requirement without attribute', () => {
			expect(testManager.validateOneAttribute(null, { required: true })).toEqual({
				valid: false,
				errors: ['no attribute for requirement'],
				required: true
			});
		});
		it('should handle attribute without repository', () => {
			expect(
				testManager.validateOneAttribute({ schemaId: 'unknown' }, { required: true })
			).toEqual({
				valid: false,
				errors: ['no repository for attribute schema'],
				required: true
			});
		});
		it('should validate attribute via repository', () => {
			sinon
				.stub(testRepository, 'validateData')
				.returns({ valid: false, errors: ['test error'] });
			expect(
				testManager.validateOneAttribute(
					{ schemaId: testSchemaId, data: { test: 'test' } },
					{ required: true }
				)
			).toEqual({
				valid: false,
				errors: ['test error'],
				required: true
			});
		});
	});

	describe('validateAttributes', () => {
		it('should validate attributes', () => {
			sinon.stub(testManager, 'zipAttributesWithRequirements').returns([
				{ requirement: { id: 1 }, attr: { id: 1 } },
				{ requirement: { id: 4 }, attr: null },
				{ requirement: { schemaId: 'test1' }, attr: { schemaId: 'test1' } },
				{
					requirement: { required: true, schemaId: 'test3' },
					attr: { schemaId: 'test3' }
				},
				{ requirement: { schemaId: 'test4' }, attr: null },
				{ requirement: null, attr: { id: 2 } },
				{ requirement: null, attr: { id: 3 } },
				{ requirement: null, attr: { schemaId: 'test2' } }
			]);
			sinon.stub(testManager, 'findRepositoryForAttribute').returns(testRepository);
			sinon.stub(testManager, 'validateOneAttribute').callsFake((attr, requirement) => {
				const valid = !!attr && !!attr.schemaId;
				const errors = attr && attr.schemaId ? [] : ['no schema id'];
				const { required = true } = requirement || { required: false };
				return { valid, errors, required };
			});
			expect(testManager.validateAttributes()).toEqual({
				attributes: [
					{
						id: 1,

						valid: false,
						errors: ['no schema id'],
						requirement: {
							id: 1
						}
					},
					{
						valid: false,
						errors: ['no schema id'],
						requirement: {
							id: 4
						}
					},
					{
						schemaId: 'test1',

						valid: true,
						errors: [],
						requirement: {
							schemaId: 'test1'
						}
					},
					{
						schemaId: 'test3',

						valid: true,
						errors: [],
						requirement: {
							required: true,
							schemaId: 'test3'
						}
					},
					{
						valid: false,
						errors: ['no schema id'],
						requirement: {
							schemaId: 'test4'
						}
					},
					{
						id: 2,

						valid: false,
						errors: ['no schema id'],
						requirement: null
					},
					{
						id: 3,
						valid: false,
						errors: ['no schema id'],
						requirement: null
					},
					{
						schemaId: 'test2',
						valid: true,
						errors: [],
						requirement: null
					}
				],
				errors: [
					'no schema id',
					'no schema id',
					'no schema id',
					'no schema id',
					'no schema id'
				],
				valid: false
			});
		});
	});

	describe('zipAttributesWithRequirements', () => {
		const testAttributes = [
			{ id: 1 },
			{ id: 2 },
			{ id: 3 },
			{ schemaId: 'test1' },
			{ schemaId: 'test2' },
			{ schemaId: 'test3' }
		];
		const requirements = [
			{ id: 1 },
			{ id: 4 },
			{ schemaId: 'test1' },
			'test3',
			{ schemaId: 'test4' }
		];
		it('should zip attributes with requirements', () => {
			expect(testManager.zipAttributesWithRequirements(testAttributes, requirements)).toEqual(
				[
					{ requirement: { id: 1 }, attr: { id: 1 } },
					{ requirement: { id: 4 }, attr: null },
					{ requirement: { schemaId: 'test1' }, attr: { schemaId: 'test1' } },
					{
						requirement: { required: true, schemaId: 'test3' },
						attr: { schemaId: 'test3' }
					},
					{ requirement: { schemaId: 'test4' }, attr: null },
					{ requirement: null, attr: { id: 2 } },
					{ requirement: null, attr: { id: 3 } },
					{ requirement: null, attr: { schemaId: 'test2' } }
				]
			);
		});
	});
});
