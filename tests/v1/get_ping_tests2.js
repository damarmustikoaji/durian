// const assert = require('chai').expect;
// const chai = require('chai');
// chai.use(require('chai-json-schema'));

// const code = require('../../helpers/response');
// const schema = require('../../data/schema/v1/get_ping_schema.json');
// const { getPing } = require('../../api/v1/ping');

// const testCase = {
// 	describe: 'COBAPI - List Employees | [GET] /v1/employees',
// 	describePositive: 'Positive Testing',
// 	positive: {
// 		getValid: '[C106] As a User, I should be able to successfully request GET employee list'
// 	}
// };

// describe(`@cobaApi @get @getPingTest ${testCase.describe}`, () => {
// 	describe(`${testCase.describePositive}`, () => {
// 		it(`@get @getPing ${testCase.positive.getValid}`, async() => {
// 			const response = await getPing();
// 			assert(response.status).to.equal(code.status.success.ok, response.body.message);
// 			assert(response.body).to.be.jsonSchema(schema);
// 			assert(response.body.status).to.equal(code.jsonStatus.success, response.body.message);
// 			assert(response.body.message).to.contain(code.jsonMessage.health, response.body.message);
// 		});
// 	}); 
// }); 
