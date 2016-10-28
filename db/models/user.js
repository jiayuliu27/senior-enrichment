'use strict';
var Sequelize = require('sequelize');
var db = require('APP/db');
let Response = require('./response');

module.exports = db.define('users', {
  firstName: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  lastName: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  email: {
  	type: Sequelize.STRING,
  	validate: {
  		isEmail: true
  	}
  }
}, {
	getterMethods: {
		fullName() {
			return this.firstName + ' ' + this.lastName;
		}
	}
});
