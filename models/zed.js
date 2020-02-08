const orm = require('../config/orm');

const zed = {
    edit: (cb) => {
        orm.selectAll((res) => {
            cb(res);
        })
    },
    rand: (cb) => {
        orm.selectRandom((res) => {
            cb(res);
        })
    },
    add: (data, cb) => {
        orm.addQuote(data, (res) => {
            cb(res);
        });
    }/*,
    update: (devourState, id, cb) => {
        // pass devourState from browser > controller > model and finally to orm
        orm.updateOne(devourState, id, (res) => {
            cb(res);
        });
    } */
};

module.exports = zed;
