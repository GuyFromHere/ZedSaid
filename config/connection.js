const mysql = require("mysql");

// Local DB
/* const connection = mysql.createConnection({
    host: "localhost",
    user: "dbUser",
    password: "How do you like my password?",
    database: "zedsaid_db",
    multipleStatements: true
}); */

// Heroku / ClearDb:
const connection = mysql.createConnection({
	username: "bd541b76d1cb87",
	password: "86e2719f",
	host: "127.0.0.1",
	database: "heroku_3a8a7d70d740947"
});
connection.connect(err => {
	if (err) throw err;
});

module.exports = connection;
