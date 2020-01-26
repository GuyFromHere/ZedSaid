const connection = require('../config/connection');

const orm = {
    selectAll: (cb) => {
        connection.query(`select * from quotes;`, (err, result) => {
            if (err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;