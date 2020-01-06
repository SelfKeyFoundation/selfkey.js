import * as utils from './utils';
import Ajv from 'ajv';
import { Repository, SELFKEY_REPOSITORY, SELFKEY_REPOSITORY_DEV } from './repository';
import sinon from 'sinon';

describe('Repository', () => {
	afterEach(() => {
		sinon.restore();
	});
	describe('factories', () => {
		describe('createSelfkeyRepo', () => {
			it('should create selfkey repo', async () => {
				const expected = 'ok';
				sinon.stub(Repository, 'fromConfig').resolves(expected);
				const repo = await Repository.createSelfkeyRepo();
				expect(repo).toEqual(expected);
				expect(Repository.fromConfig.getCall(0).args).toEqual([SELFKEY_REPOSITORY]);
			});
			it('should create dev selfkey repo', async () => {
				const expected = 'ok';
				sinon.stub(Repository, 'fromConfig').resolves(expected);
				const repo = await Repository.createSelfkeyRepo({ env: 'development' });
				expect(repo).toEqual(expected);
				expect(Repository.fromConfig.getCall(0).args).toEqual([SELFKEY_REPOSITORY_DEV]);
			});
		});
		describe('fromSchemaId', () => {
			it('should create repo from schemaId', async () => {
				const expected = 'ok';
				sinon.stub(Repository, 'fromConfig').resolves(expected);
				sinon.stub(utils, 'fetchJson').resolves({
					identityAttributeRepository: 'test'
				});
				const repo = await Repository.fromSchemaId('schemaId');
				expect(repo).toEqual(expected);
				expect(Repository.fromConfig.getCall(0).args).toEqual(['test', false]);
				expect(utils.fetchJson.getCall(0).args).toEqual(['schemaId']);
			});
		});
		describe('fromConfig', () => {
			it('should create repo from config', async () => {
				sinon.stub(Repository.prototype, 'resolveAll').resolves();
				const repo = await Repository.fromConfig({ repository: 'test' });
				expect(repo.config).toEqual({ repository: 'test' });
				expect(repo.resolveAll.calledOnce).toBe(true);
			});
		});
	});
	describe('resolvers', () => {
		const mockJsonSchemaResolver = attr => ({
			url: attr.json || attr,
			schema: { $id: attr.json || attr },
			dereferenced: { $id: attr.json || attr, dereferenced: true }
		});
		const mockUiSchemaResolver = attr => ({
			url: attr.ui || attr,
			schema: { testUi: 'test' }
		});
		const repository = {
			identityAttributeSchemaId: 'attribute-id',
			identityAttributeSchema: mockJsonSchemaResolver('attribute-id'),
			identityAttributes: [
				{
					json: 'test',
					ui: 'test-ui',
					entityType: ['individual']
				}
			]
		};
		const resolvedRepository = {
			...repository,
			jsonSchemas: {
				test: mockJsonSchemaResolver('test')
			},
			uiSchemas: {
				'test-ui': mockUiSchemaResolver('test-ui')
			}
		};
		describe('resolveAll', () => {
			it('should resolve repository with resolved url', async () => {
				const config = { repository: 'test-repo', resolved: 'test-repo-resolved' };
				const repo = new Repository(config);
				sinon.stub(utils, 'fetchJson').resolves(resolvedRepository);
				await repo.resolveAll();
				expect(utils.fetchJson.calledOnce).toBe(true);
				expect(utils.fetchJson.getCall(0).args).toEqual([config.resolved]);
				expect(repo).toEqual(expect.objectContaining(resolvedRepository));
			});
			it('should resolve repository with no resolved url', async () => {
				const config = { repository: 'test-repo' };
				const repo = new Repository(config);
				sinon.stub(utils, 'fetchJson').resolves(repository);
				sinon
					.stub(repo, 'resolveJsonSchema')
					.callsFake(url => Promise.resolve(mockJsonSchemaResolver(url)));
				await repo.resolveAll();
				expect(utils.fetchJson.calledOnce).toBe(true);
				expect(utils.fetchJson.getCall(0).args).toEqual([config.repository]);
				const noUiResolvedRepository = { ...resolvedRepository, uiSchemas: {} };
				expect(repo).toEqual(expect.objectContaining(noUiResolvedRepository));
			});
			it('should resolve repository with no resolved url with ui schemas', async () => {
				const config = { repository: 'test-repo', ui: true };
				const repo = new Repository(config);
				sinon.stub(utils, 'fetchJson').resolves(repository);
				sinon
					.stub(repo, 'resolveJsonSchema')
					.callsFake(url => Promise.resolve(mockJsonSchemaResolver(url)));
				sinon
					.stub(repo, 'resolveUiSchema')
					.callsFake(url => Promise.resolve(mockUiSchemaResolver(url)));
				await repo.resolveAll();
				expect(utils.fetchJson.calledOnce).toBe(true);
				expect(utils.fetchJson.getCall(0).args).toEqual([config.repository]);
				expect(repo).toEqual(expect.objectContaining(resolvedRepository));
			});
		});
		describe('resolveJsonSchema', () => {
			it('should resolve json schema', async () => {
				const expected = mockJsonSchemaResolver('test');
				const repo = new Repository();
				sinon.stub(utils, 'fetchJson').resolves(expected.schema);
				sinon.stub(utils, 'dereferenceSchema').resolves(expected.dereferenced);

				const resolved = await repo.resolveJsonSchema('test');
				expect(repo.jsonSchemas.test).toEqual(resolved);
				expect(resolved).toEqual(expected);
			});
			it('should honor transformSchemaUrl config option', async () => {
				const expected = mockJsonSchemaResolver('test');
				const repo = new Repository({ transformSchemaUrl: () => 'transformedTest' });
				sinon.stub(utils, 'fetchJson').resolves(expected.schema);
				sinon.stub(utils, 'dereferenceSchema').resolves(expected.dereferenced);

				const resolved = await repo.resolveJsonSchema('test');
				expect(repo.jsonSchemas.test).toEqual(resolved);
				expect(resolved).toEqual(expected);
				expect(utils.fetchJson.getCall(0).args).toEqual(['transformedTest']);
			});
		});
		describe('resolveUiSchema', () => {
			it('should resolve ui schema', async () => {
				const expected = mockUiSchemaResolver('test');
				const repo = new Repository();
				sinon.stub(utils, 'fetchJson').resolves(expected.schema);

				const resolved = await repo.resolveUiSchema('test');
				expect(repo.uiSchemas.test).toEqual(resolved);
				expect(resolved).toEqual(expected);
			});
			it('should honor transformSchemaUrl config option', async () => {
				const expected = mockUiSchemaResolver('test');
				const repo = new Repository({ transformSchemaUrl: () => 'transformedTest' });
				sinon.stub(utils, 'fetchJson').resolves(expected.schema);

				const resolved = await repo.resolveUiSchema('test');
				expect(repo.uiSchemas.test).toEqual(resolved);
				expect(resolved).toEqual(expected);
				expect(utils.fetchJson.getCall(0).args).toEqual(['transformedTest']);
			});
		});
	});
	describe('getValidator', () => {
		it('should return ajv validator', () => {
			const meta = sinon.stub(Ajv.prototype, 'addMetaSchema');
			const schema = sinon.stub(Ajv.prototype, 'addSchema');
			const repo = new Repository();
			repo.identityAttributeSchema = 'test-attribute';
			repo.jsonSchemas = {
				attr1: { schema: 'test1', dereferenced: 'test1-deref' },
				attr2: { schema: 'test2', dereferenced: 'test2-deref' }
			};

			repo.getValidator();

			expect(meta.calledWith(repo.identityAttributeSchema)).toBe(true);
			expect(schema.calledWith(repo.jsonSchemas.attr1.dereferenced)).toBe(true);
			expect(schema.calledWith(repo.jsonSchemas.attr2.dereferenced)).toBe(true);
		});
	});
	describe('validateData', () => {
		it('should return an error if schema not found', () => {
			const repo = new Repository();
			const schemaId = 'test';
			const data = { test: 'test' };

			expect(repo.validateData(schemaId, data)).toEqual({
				valid: false,
				errors: ['No schema found for ' + schemaId]
			});
		});

		it('should validate data', () => {
			const repo = new Repository();
			repo.jsonSchemas.test = {};
			const validationResults = {
				valid: true,
				errors: null
			};

			sinon.stub(repo, 'getValidator').returns({
				validate: () => validationResults.valid,
				errors: validationResults.errors
			});
			const schemaId = 'test';
			const data = { test: 'test' };

			expect(repo.validateData(schemaId, data)).toEqual(validationResults);
		});
	});
});
