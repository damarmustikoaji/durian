[![Automation Testing](https://github.com/damarmustikoaji/durian/actions/workflows/main.yml/badge.svg?branch=master)](https://github.com/damarmustikoaji/durian/actions/workflows/main.yml)![mochai](https://img.shields.io/badge/Mocha-Chai-yellowgreen.svg)

# Boilerplate API Automation Testing

### Mocha

> Mocha termasuk pustaka pengetesan yang bisa dipakai secara BDD ataupun TDD. Pustaka ini secara default memakai style BDD. Metode umum BDD adalah seperti describe, it, beforeEach, beforeAfter, before, after. (http://idjs.github.io/belajar-nodejs/testing/mocha.html)

### Chai

> Chai library yang digunakan untuk memudahkan Mocha dalam melakukan assertion pada setiap API yang dipanggil. (https://medium.com/@albertkurnia/api-testing-dengan-mocha-chai-6543ff03010b)

### SuperTest

> SuperTest yaitu modul npm yang khusus untuk mengetest server HTTP. (https://idjs.github.io/belajar-nodejs/testing/rest_testing.html)

### Prerequisites

- Install Node.js and npm, we will use npm to install Mocha & Chai and SuperTest

### Tested on

- MacOS Catalina version 10.15.2
- node version `^v12.14.1`
- npm version `^6.14.4`

### How to Getting Started

```sh
$ cd mochaiwithsupertest
$ npm install
$ cp .env.sample .env
```

### This is directory structure within `mochaiwithsupertest`

    .
    ├── api             
    ├── data     
    |        ├── data_test.json
    |        └── schema
    ├── helpers
    |        ├── grafana.js
    |        ├── random_string.js
    |        ├── message.json
    |        └── response.json      
    ├── reports 
    |        ├── report.json 
    |        └── report.html
    ├── tests
    ├── .env
    └── package.json 

| Directory | Description                                                       |
| --------- | ----------------------------------------------------------------- |
| api       | 1 endpoint, many HTTP method in one file .js                      |
| data      | For test data, file extention should be .json                     |
| helpers   | Common code, for general needed such as response_code, token, etc |
| tests     | 1 endpoint, 1 HTTP method, many test cases. or e2e                |

### Foldering and Naming Convention

1. Filename using `snake_case`
2. Variable name using `camelCase`
3. The file (.js and .json) should be located in a path that matches the endpoint path
4. Env Variable using `UPPER_CASE`

```sh
GET {{url}}/authors/books
--page: /api/authors/books.js
--test: /test/authors/get_books_test.js
--data: /data/authors/book_data.json
```

## Run the test

You can specify the command that you want to run from package.json file.

###### Here are our default commands

```sh
$ npm run test-api                              | to run all tests
$ npm run test-api -- --grep @tag               | to run test with specific tag
$ npm run test-api -- --grep @skip --invert     | to exclude @skip tag

$ npm run open-reports                          | to open the mochawesome report
```

## Dummy Sample REST API

- http://fakerestapi.azurewebsites.net/swagger
- https://reqres.in
- http://dummy.restapiexample.com
- https://jsonplaceholder.typicode.com/

## Generate Schema JSON

- https://jsonschema.net

## Reference

- https://medium.com/@fadlymahendra/api-test-automation-menggunakan-mocha-chai-22a78c48e842
- https://medium.com/ralali-engineering/quality-engineering-transformation-in-ralali-com-4852b03fe5f8

## [Documentation](docs)
