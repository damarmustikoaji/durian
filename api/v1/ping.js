const supertest = require('supertest');
require('dotenv').config();

const api = supertest(process.env.COBAPI_URL);

const getPing = () => api.get('/v1/ping');

module.exports = {
	getPing
};