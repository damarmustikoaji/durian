const assert = require('chai').expect;
const chai = require('chai');
chai.use(require('chai-json-schema'));

const code = require('../helper/response.json');
const { postUsers } = require('../api/users');
const schemaUsers = require('../data/post_users_schema.json');

const payload = {
	'name': 'morpheus',
	'job': 'leader'
};

const testCase = {
	describe: 'REQ|RES Create Users | [POST] /api/users',
	describePositive: 'Positive Testing',
	positive: {
		postUsers: 'As a User, I should be able to successfully create users'
	}
};

describe(`@createUsersTest ${testCase.describe}`, () => {
	describe(`${testCase.describePositive}`, () => {
		it(`@get @postUsers ${testCase.positive.postUsers}`, async() => {
			const response = await postUsers(payload);
			assert(response.status).to.equal(code.success.created, response.body.message);
			assert(response.body).to.be.jsonSchema(schemaUsers);
		});
	}); 
}); 
