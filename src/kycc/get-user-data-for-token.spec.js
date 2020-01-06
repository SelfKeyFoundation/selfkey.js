import sinon from 'sinon';
import * as client from './kycc-internal-client';
import parsedUserData from './__fixtures__/parsed-user-data';
import user from './__fixtures__/user';
import applicationsList from './__fixtures__/applications';
import applicationDetails from './__fixtures__/application-details';

import { getUserDataForToken } from './get-user-data-for-token';

xdescribe('getUserDataForToken', () => {
	afterEach(() => {
		sinon.restore();
	});
	it('should return user data', async () => {
		const token = 'test';
		sinon.stub(client, 'createClient').returns({
			auth: {
				login: sinon.stub().resolves(user.user),
				validateUserToken: sinon.stub().returns(true)
			},
			applications: {
				list: sinon.stub().resolves(applicationsList),
				get: sinon.stub().resolves(applicationDetails)
			},
			files: {
				get: sinon.stub().resolves('test')
			}
		});
		const fileProcessor = {
			stream: false,
			process: (file, id) => {
				return `resolved-file-${id}`;
			}
		};
		const res = await getUserDataForToken(token, {
			instanceUrl: 'test',
			templateId: 'test',
			fileProcessor
		});
		expect(res).toEqual(parsedUserData);
	});
});
