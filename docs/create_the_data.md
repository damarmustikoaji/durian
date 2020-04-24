### [Back](../docs)
# How to using Data Test

File data test dengan menggunakan format JSON, berguna untuk memisahkan file test dengan data. Kedepannya jika ada perubahan data pendukung untuk test, maka hanya perlu merubah file data JSON.
File disimpan dalam folder data, dan diteruskan peletakan folder serta nama file seperti url endpoint.

1. Kita akan membuat data pada untuk test endpoint `https://reqres.in/api/login`, maka perlu membuat file didalam folder data dengan `data/login_data.json`
2. Scripts

```json
{
    "login":{
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    }
}
```

3. Import di file test
4. Dan sesuaikan pada parameter yang dikirim ke fungsi page

```javascript

const assert = require('chai').expect;
const chai = require('chai');
chai.use(require('chai-json-schema'));

const code = require('../helper/response.json');
const { postLogin } = require('../api/login');
const schemaLogin = require('../data/post_login_schema.json');

const data = require('../data/login_data.json');

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
			const response = await postLogin(data.login);
			assert(response.status).to.equal(code.success.ok, response.body.message);
			assert(response.body).to.be.jsonSchema(schemaLogin);
		});
	}); 
}); 

```
