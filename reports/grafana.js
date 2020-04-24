require('dotenv').config();

const jsonfile = require('jsonfile');

const file = __dirname + '/mochawesome/mochawesome.json';

const { executeSql } = require('../seed_data/sql_page');

let stats, timeStart, timeEnd, startDate, endDate;

jsonfile.readFile(file, async function(err, obj) {
	if (err) throw(err);
	stats = obj.stats;

	startDate = obj.stats.start.split('T');
	timeStart = startDate[1].split('.');
	endDate = obj.stats.end.split('T');
	timeEnd = endDate[1].split('.');

	startDate = startDate[0] + ' ' + timeStart[0];
	endDate = endDate[0] + ' ' + timeEnd[0];

	const sql = `INSERT INTO mochawesome (name, suites, tests, passes, pending, failures, start, end, duration, testsRegistered, passPercent, pendingPercent, other, hasOther, skipped, hasSkipped, created_at) VALUES ("test", ${stats.suites}, ${stats.tests}, ${stats.passes}, ${stats.pending}, ${stats.failures}, "${startDate}", "${endDate}", ${stats.duration}, ${stats.testsRegistered}, ${stats.pendingPercent}, ${stats.pendingPercent}, ${stats.other}, "${stats.hasOther}", ${stats.skipped}, "${stats.hasSkipped}", "${startDate}");`;
	await executeSql(sql);
});