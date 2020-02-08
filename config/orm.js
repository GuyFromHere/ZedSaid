const connection = require('../config/connection');

const orm = {
    selectAll: (cb) => {
        connection.query(`select * from quotes;`, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    selectRandom: (cb) => {
        connection.query(`select * from quotes order by rand() limit 1;`, (err, result) => {
            if (err) throw err;
            cb(result);
        })
    },
    addQuote: (data, cb) => {
        connection.query('insert into quotes (age, quote, context) values (?, ?, ?);', data, (err, result) => {
            if (err) throw err;
            console.log('orm: ' + data)
            cb(result);
        });
    }
};

module.exports = orm;