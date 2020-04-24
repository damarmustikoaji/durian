const { createConnection } = require('mysql');
require('dotenv').config();

const connectionParams = {
	host: process.env.DB_HOST,
	user: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	port: process.env.DB_PORT,
	database: process.env.DB_DATABASE
};
const executeSql = (sql) => {
	const conn = createConnection(connectionParams);
	conn.connect();
	new Promise((resolve, reject) => {
		conn.query(sql, (error, result) => {
			if (error) reject(error);
			conn.end();
			resolve(result);
		});
	});
};

module.exports = {
	executeSql
};
