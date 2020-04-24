const supertest = require('supertest');
require('dotenv').config();

const api = supertest(process.env.REQRES_BASE_URL);

const getUsers = (count) => api.get('/api/users').query({page:count});

const getUsersId = (id) => api.get(`/api/users/${id}`);

const postUsers = (payload) => api.post('/api/users')
	.set('Content-Type', 'application/json')
	.send(payload);

module.exports = {
	getUsers,
	getUsersId,
	postUsers
};