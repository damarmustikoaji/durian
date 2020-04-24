### [Back](../)
# How to Create the Test

Penulisan test menggunakan framework mocha dan disimpan didalam folder `test`, sebelumnya kita harus membuat file page yang berisi url endpoint, tipe request, headers properties, dan juga body ([How to Create Page File](create_the_page.md)). Seperti melakukan testing API menggunakan POSTMAN, Swagger, ataupun Insomnia.

1. Masuk ke folder test, buat folder dan name sesuai dengan endpoint
2. Buat file test `test/post_login_test.js`
3. Scripts

```javascript
const assert = require('chai').expect;
const chai = require('chai');
chai.use(require('chai-json-schema'));

const code = require('../helper/response.json');
const { postLogin } = require('../api/login');
const schemaLogin = require('../data/post_login_schema.json');

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
```

4. Berikan @tagName didalam scenario describe untuk mempermudah dalam proses running test.
