const assert = require('chai').expect;
const chai = require('chai');
chai.use(require('chai-json-schema'));

const code = require('../../helper/response.json');
const { getBooksId } = require('../../api/authors/books');
const schemaUsers = require('../../data/schema/authors/get_books_id_schema.json');

const idBook = 2, wrongId = 1, invalidId = 'abc123';

const testCase = {
	describe: 'FakeRestAPI.Web - Get Books by ID | [GET] /authors/books/{idBook}',
	describePositive: 'Positive Testing',
	describeNegative: 'Negative Testing',
	positive: {
		getBooksId: `As a User, I should be able to successfully get the books using valid id ${idBook}`
	},
	negative: {
		wrongId: `As a User, I should not be able to successfully get the books using wrong id ${wrongId}`,
		invalidId: `As a User, I should not be able to successfully get the books using invalid id ${invalidId}`
	}
};

describe(`@getBooksIdTest ${testCase.describe}`, () => {
	describe(`${testCase.describePositive}`, () => {
		it.skip(`@get @getBooksId ${testCase.positive.getBooksId}`, async() => {
			const response = await getBooksId(idBook);
			assert(response.status).to.equal(code.success.ok, response.body.message);
			assert(response.body).to.be.jsonSchema(schemaUsers);
		});
	});
	describe(`${testCase.describeNegative}`, () => {
		it.skip(`@get @wrongId ${testCase.negative.wrongId}`, async() => {
			const response = await getBooksId(wrongId);
			assert(response.status).to.equal(code.success.ok, response.body.message);
		});
		it.skip(`@get @invalidId ${testCase.negative.invalidId}`, async() => {
			const response = await getBooksId(invalidId);
			assert(response.status).to.equal(code.error.badRequest, response.body.message);
		});
	}); 
}); 
