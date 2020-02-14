const orm = require("../config/orm");

const zed = {
	edit: cb => {
		orm.selectAll(res => {
			cb(res);
		});
	},
	rand: cb => {
		orm.selectRandom(res => {
			cb(res);
		});
	},
	add: (data, cb) => {
		orm.addQuote(data, res => {
			cb(res);
		});
	}
};

module.exports = zed;
