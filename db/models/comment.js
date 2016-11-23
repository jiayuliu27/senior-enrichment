'use strict';
var Sequelize = require('sequelize')
var db = require('APP/db')

module.exports = db.define('comment', {
	content: {
		type: Sequelize.TEXT
	}
});