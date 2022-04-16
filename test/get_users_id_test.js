const assert = require('chai').expect;
const chai = require('chai');
chai.use(require('chai-json-schema'));

const code = require('../helper/response.json');
const { getUsersId } = require('../api/users');
const schemaUsers = require('../data/schema/get_users_id_schema.json');

const userId = 2, invalidId = 'abc';

const testCase = {
	describe: `REQ|RES Single Users | [GET] /api/users/${userId}`,
	describePositive: 'Positive Testing',
	describeNegative: 'Negative Testing',
	positive: {
		getUsersId: 'As a User, I should be able to successfully get the single users'
	},
	negative: {
		invalidId: 'As a User, I should not be able to successfully get the single users using invalid id'
	}
};

describe(`@getUsersIdTest ${testCase.describe}`, () => {
	describe(`${testCase.describePositive}`, () => {
		it.skip(`@get @getUsersId ${testCase.positive.getUsersId}`, async() => {
			const response = await getUsersId(userId);
			assert(response.status).to.equal(code.success.ok, response.body.message);
			assert(response.body).to.be.jsonSchema(schemaUsers);
		});
	});
	describe(`${testCase.describeNegative}`, () => {
		it(`@get @invalidId ${testCase.negative.invalidId}`, async() => {
			const response = await getUsersId(invalidId);
			assert(response.status).to.equal(404, response.body.message);
		});
	}); 
}); 
