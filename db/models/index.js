'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user');
const Question = require('./question');
const Response = require('./response');

Question.hasMany(Response, { onDelete: 'cascade', hooks: true });
Response.belongsTo(Question);
User.hasMany(Response, { onDelete: 'cascade', hooks: true });
Response.belongsTo(User);


module.exports = {
	User,
	Question,
	Response
}
