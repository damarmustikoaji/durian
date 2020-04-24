![mochai](https://img.shields.io/badge/AT--API-Mochai-yellow.svg) ![coverage](https://img.shields.io/badge/coverage-100%25-brightgreen.svg)

# Boilerplate of API Automation Testing

> Mocha termasuk pustaka pengetesan yang bisa dipakai secara BDD ataupun TDD. Pustaka ini secara default memakai style BDD. Metode umum BDD adalah seperti describe, it, beforeEach, beforeAfter, before, after. http://idjs.github.io/belajar-nodejs/testing/mocha.html

> Chai library yang digunakan untuk memudahkan Mocha dalam melakukan assertion pada setiap API yang dipanggil. https://medium.com/@albertkurnia/api-testing-dengan-mocha-chai-6543ff03010b

> SuperTest yaitu modul npm yang khusus untuk mengetest server HTTP. https://idjs.github.io/belajar-nodejs/testing/rest_testing.html

### Prerequisites:

- Install Node.js and npm, we will use npm to install Mocha & Chai and SuperTest

### How to Getting Started:

```sh
$ cd mochaiwithsupertest
$ npm install
$ cp .env.sample .env
```

### This is directory structure within `mochaiwithsupertest`

    .
    ├── api             
    ├── data     
    ├── helper
    |        ├── message.json
    |        └── response.json      
    ├── reports 
    |        ├── mochawesome 
    |        └── grafana.js 
    |  
    ├── seed_data 
    |        ├── query 
    |        └── sql_page.js 
    ├── test
    ├── .env
    └── package.json

| Directory | Description                                                       |
| --------- | ----------------------------------------------------------------- |
| api       | 1 endpoint, many HTTP method in one file .js                      |
| data      | For test data, file extention should be .json                     |
| helper    | Common code, for general needed such as response_code, token, etc |
| test      | 1 endpoint, 1 HTTP method, many test cases. or e2e                |

### Foldering and Naming Convention

1. Filename using `snake_case`
2. Variable name using `camelCase`
3. The file (.js and .json) should be located in a path that matches the endpoint path

```sh
POST {{url}}/suggestions/product
--page: /qa_test/api/page/suggentions/product.js
--test: /qa_test/api/test/suggentions/get_product_test.js
        /qa_test/api/test/suggentions/post_product_test.js
--data: /qa_test/api/data/suggentions/product_data.json
```

## Run the test

You can specify the command that you want to run from package.json file.

###### Here are our default commands:

```sh
$ npm run test-api                              | to run all tests
$ npm run test-api -- --grep @tag               | to run test with specific tag
$ npm run test-api -- --grep @skip --invert     | to exclude @skip tag

$ npm run open-reports                          | to open the mochawesome report
```

## Integrate with Grafana

```sh
$ npm run test-api -- --grep @skip --invert && npm run grafana
```

## Reference

- https://medium.com/@fadlymahendra/api-test-automation-menggunakan-mocha-chai-22a78c48e842 / Fadly Mahendra
- https://medium.com/ralali-engineering/quality-engineering-transformation-in-ralali-com-4852b03fe5f8 / Irwan Rosyadi

## [Documentation](docs)