'use strict';

const Sequelize = require('sequelize');
let db = require('APP/db');

module.exports = db.define('responses', {
	text: {
		type: Sequelize.TEXT,
		allowNull: false
	},
	upVote: {
		type: Sequelize.INTEGER,
		defaultValue: 0
	},
	downVote: {
		type: Sequelize.INTEGER,
		defaultValue: 0
	}
});
// validation for one user can only vote once