import { createClient } from './kycc-internal-client';
import rp from 'request-promise-native';
import request from 'request';
import sinon from 'sinon';

describe('kycc-internal-client', () => {
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
			expect(client.options.endpoint).toBe('test/api/v2');
		});

		describe('auth.login', () => {
			it('should resolve a user', async () => {
				const client = createClient({ instanceUrl: 'test' });
				const token = 'test_jwt';
				sinon.stub(rp, 'post').resolves({ user: 'test-user' });
				const res = await client.auth.login(token);
				expect(rp.post.calledOnce).toBe(true);
				expect(rp.post.getCall(0).args).toEqual([
					{
						url: 'test/api/v2/auth/login',
						body: {
							jwt: token
						},
						json: true
					}
				]);
				expect(res).toEqual('test-user');
			});
		});
		describe('applications', () => {
			it('list', async () => {
				const testJar = { test: 'test' };
				const applications = ['app1', 'app2'];
				const clientOpt = { instanceUrl: 'test', jar: testJar };
				const fields = ['field1', 'fields2'];
				const filters = { template_id: 123 };
				const client = createClient(clientOpt);
				sinon.stub(rp, 'get').resolves(applications);
				const res = await client.applications.list(filters, fields);
				expect(res).toEqual(applications);
				expect(rp.get.calledOnce).toBe(true);
				expect(rp.get.getCall(0).args).toEqual([
					{
						url: `${client.options.endpoint}/applications`,
						jar: testJar,
						qs: {
							fields: 'field1,fields2',
							template_id: 123
						},
						json: true
					}
				]);
			});

			it('get', async () => {
				const testJar = { test: 'test' };
				const application = 'test';
				const applicationId = 'app-id';
				const clientOpt = { instanceUrl: 'test', jar: testJar };
				const fields = ['field1', 'fields2'];
				const client = createClient(clientOpt);
				sinon.stub(rp, 'get').resolves(application);
				const res = await client.applications.get(applicationId, fields);
				expect(res).toEqual(application);
				expect(rp.get.calledOnce).toBe(true);
				expect(rp.get.getCall(0).args).toEqual([
					{
						url: `${client.options.endpoint}/applications/${applicationId}`,
						jar: testJar,
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
				const testJar = { test: 'test' };
				const file = 'test';
				const fileId = 'file-id';
				const clientOpt = {
					instanceUrl: 'test',
					jar: testJar,
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
						jar: testJar
					}
				]);
			});
			it('get promise', () => {
				const testJar = { test: 'test' };
				const file = 'test';
				const fileId = 'file-id';
				const clientOpt = {
					instanceUrl: 'test',
					jar: testJar
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
						jar: testJar
					}
				]);
			});
		});
	});
});
