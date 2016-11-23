'use strict';
var Sequelize = require('sequelize')
var db = require('APP/db')

module.exports = db.define('users', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email: {
  	type: Sequelize.STRING,
  	allowNull: false,
  	validate: {
  		isEmail: true
  	}
  }
}, {
	getterMethods: {
		fullName: () => {
			return this.firstName + ' ' + this.lastName;
		}
	}
});
