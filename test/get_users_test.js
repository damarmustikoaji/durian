const assert = require('chai').expect;
const chai = require('chai');
chai.use(require('chai-json-schema'));

const code = require('../helper/response.json');
const { getUsers } = require('../api/users');
const schemaUsers = require('../data/schema/get_users_schema.json');

const { executeSql } = require('../seed_data/sql_page');
const { UPDATE_MOCHAWESOME } = require('../seed_data/query/update');

const page = 2;

const testCase = {
	describe: `REQ|RES List Users | [GET] /api/users?=page${page}`,
	describePositive: 'Positive Testing',
	positive: {
		getUsers: 'As a User, I should be able to successfully get the list users'
	},
	after: 'See data'
};

describe(`@skip @getUsersTest ${testCase.describe}`, () => {
	describe(`${testCase.describePositive}`, () => {
		it.skip(`@get @getUsers ${testCase.positive.getUsers}`, async() => {
			const response = await getUsers(page);
			assert(response.status).to.equal(code.success.ok, response.body.message);
			assert(response.body).to.be.jsonSchema(schemaUsers);
		});
		after(`${testCase.after}`, async() => {
			await executeSql(UPDATE_MOCHAWESOME);
		});
	}); 
}); 
