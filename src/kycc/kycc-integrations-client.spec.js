import { createClient } from './kycc-integrations-client';
import rp from 'request-promise-native';
import request from 'request';
import sinon from 'sinon';

describe('kycc-integrations-client', () => {
	afterEach(() => {
		sinon.restore();
	});
	describe('createClient', () => {
		it('should create client', () => {
			const client = createClient();
			expect(typeof client).toBe('object');
		});

		it('should have endpoint', () => {
			const client = createClient({ instanceUrl: 'test' });
			expect(client.options.endpoint).toBe('test/integrations/v2');
		});

		it('should have api key', () => {
			const client = createClient({ instanceUrl: 'test', apiKey: 'testKey' });
			expect(client.options.apiKey).toBe('testKey');
		});
	});
	describe('applications', () => {
		it('list', async () => {
			const applications = ['app1', 'app2'];
			const clientOpt = { instanceUrl: 'test', apiKey: 'testKey' };
			const fields = ['field1', 'fields2'];
			const filters = { template_id: 123 };
			const client = createClient(clientOpt);
			sinon.stub(rp, 'get').resolves({ items: applications });
			const res = await client.applications.list(filters, fields);
			expect(res).toEqual(applications);
			expect(rp.get.calledOnce).toBe(true);
			expect(rp.get.getCall(0).args).toEqual([
				{
					url: `${client.options.endpoint}/applications`,
					headers: {
						apiKey: client.options.apiKey
					},
					qs: {
						fields: 'field1,fields2',
						template_id: 123
					},
					json: true
				}
			]);
		});

		it('get', async () => {
			const application = 'test';
			const applicationId = 'app-id';
			const clientOpt = { instanceUrl: 'test', apiKey: 'testKey' };
			const fields = ['field1', 'fields2'];
			const client = createClient(clientOpt);
			sinon.stub(rp, 'get').resolves(application);
			const res = await client.applications.get(applicationId, fields);
			expect(res).toEqual(application);
			expect(rp.get.calledOnce).toBe(true);
			expect(rp.get.getCall(0).args).toEqual([
				{
					url: `${client.options.endpoint}/applications/${applicationId}`,
					headers: {
						apiKey: client.options.apiKey
					},
					qs: {
						fields: 'field1,fields2'
					},
					json: true
				}
			]);
		});
	});
	describe('files', () => {
		it('get stream', () => {
			const file = 'test';
			const fileId = 'file-id';
			const clientOpt = {
				instanceUrl: 'test',
				apiKey: 'testKey',
				streamFile: true
			};
			const fields = ['field1', 'fields2'];
			const client = createClient(clientOpt);
			sinon.stub(request, 'get').returns(file);
			const res = client.files.get(fileId, fields);
			expect(res).toEqual(file);
			expect(request.get.calledOnce).toBe(true);
			expect(request.get.getCall(0).args).toEqual([
				{
					url: `${client.options.endpoint}/files/${fileId}`,
					headers: {
						apiKey: client.options.apiKey
					}
				}
			]);
		});
		it('get promise', () => {
			const file = 'test';
			const fileId = 'file-id';
			const clientOpt = {
				instanceUrl: 'test',
				apiKey: 'testKey'
			};
			const fields = ['field1', 'fields2'];
			const client = createClient(clientOpt);
			sinon.stub(rp, 'get').returns(file);
			const res = client.files.get(fileId, fields);
			expect(res).toEqual(file);
			expect(rp.get.calledOnce).toBe(true);
			expect(rp.get.getCall(0).args).toEqual([
				{
					url: `${client.options.endpoint}/files/${fileId}`,
					headers: {
						apiKey: client.options.apiKey
					}
				}
			]);
		});
	});
});
