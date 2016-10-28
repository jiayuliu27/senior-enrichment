'use strict';
const Sequelize = require('sequelize');
let db = require('APP/db');

module.exports = db.define('questions', {
	text: {
		type: Sequelize.TEXT,
		allowNull: false
	},
	tags: {
		type: Sequelize.ARRAY(Sequelize.STRING)
	}
});
