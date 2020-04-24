const supertest = require('supertest');
require('dotenv').config();

const api = supertest(process.env.REQRES_BASE_URL);

const getUnknown = () => api.get('/api/unknown');

module.exports = {
	getUnknown
};