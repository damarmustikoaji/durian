const supertest = require('supertest');
require('dotenv').config();

const api = supertest(process.env.FAKERESTAPI_BASE_URL);

const getBooksId = (idBook) => api.get(`/authors/books/${idBook}`)
	.set('Accept', 'application/json');

module.exports = {
	getBooksId
};