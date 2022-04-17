const status = {
	success: {
		ok: 200,
		created: 201,
		accepted: 202,
		noContent: 24
	},
	error: {
		badRequest: 400,
		unAuthorized: 401,
		paymentRequired: 402,
		forbidden: 403,
		notFound: 404,
		unprocessableEntity: 422
	}
};

const jsonStatus = {
	success: '00'
};

const jsonMessage = {
	health: 'Health'
};

module.exports = {
	status,
	jsonStatus,
	jsonMessage
};