const assert = require('chai').expect;
const chai = require('chai');
chai.use(require('chai-json-schema'));

const code = require('../helper/response.json');
const { postLogin } = require('../api/login');
const schemaLogin = require('../data/schema/post_login_schema.json');

const payload = {
	'email': 'eve.holt@reqres.in',
	'password': 'cityslicka'
};

const testCase = {
	describe: 'REQ|RES Login | [POST] /api/login',
	describePositive: 'Positive Testing',
	positive: {
		postLogin: 'As a User, I should be able to successfully sign in'
	}
};

describe(`@loginTest ${testCase.describe}`, () => {
	describe(`${testCase.describePositive}`, () => {
		it(`@get @postUsers ${testCase.positive.postLogin}`, async() => {
			const response = await postLogin(payload);
			assert(response.status).to.equal(code.success.ok, response.body.message);
			assert(response.body).to.be.jsonSchema(schemaLogin);
		});
	}); 
}); 
