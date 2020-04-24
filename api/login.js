const supertest = require('supertest');
require('dotenv').config();

const api = supertest(process.env.REQRES_BASE_URL);

const postLogin = (payload) => api.post('/api/login')
	.set('Content-Type', 'application/json')
	.send(payload);

module.exports = {
	postLogin
};