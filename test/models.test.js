'use strict';

let expect = require('chai').expect;
let Promise = require('bluebird');
let db = require('../db');

let models = require('../db/models');

describe('User', function() {
	// clear database before all tests
	before(function() {
		return db.sync({ force: true });
	});
	// erase all tasks after each spec
	afterEach(function() {
		return db.sync({ force: true });
	});

	describe('getterMethods', function() {
		describe('fullName', function() {
			it('returns the first and last names concatenated with a space', function() {
				let user = models.User.build({
					firstName: 'John',
					lastName: 'Doe'
				});
				expect(user.fullName).to.equal("John Doe");
			});
		});
	});

});

// delete a user also delets all associated responses
// delete a question also deletes all associated responses

describe('Question', function() {

});

describe('Response', function() {
	describe('classMethods', function() {
		// describe('d');
	})
});