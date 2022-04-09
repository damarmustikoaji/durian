const assert = require('chai').expect;
const chai = require('chai');
chai.use(require('chai-json-schema'));

const code = require('../helper/response.json');
const { getUnknown } = require('../api/unknown');
const schemaList = require('../data/schema/get_list_schema.json');

const testCase = {
	describe: 'REQ|RES List <resource> | [GET] /api/unknown',
	describePositive: 'Positive Testing',
	positive: {
		getList: 'As a User, I should be able to successfully get the list data'
	}
};

describe(`@getListTest ${testCase.describe}`, () => {
	describe(`${testCase.describePositive}`, () => {
		it.skip(`@get @getList ${testCase.positive.getList}`, async() => {
			const response = await getUnknown();
			assert(response.status).to.equal(code.success.ok, response.body.message);
			assert(response.body).to.be.jsonSchema(schemaList);
		});
	}); 
}); 
