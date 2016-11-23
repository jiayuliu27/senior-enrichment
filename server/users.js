'use strict'
const users = require('express').Router()
const db = require('APP/db')

const User = require('../db/models').User;

users.route('/')
	.get((req, res, next) => {
		User.findAll()
			.then((users) => users.json())
			.then((users) => res.status(200).send(users))
			.catch(next)
	})
	.post((req, res, next) => {
		User.create(req.body)
			.then(user => res.status(201).send(user))
			.catch(next)
	})

users.route('/:userId')
	.get((req, res, next) => {
		User.findById(req.params.userId)
			.then(user => user.json())
			.then(user => res.status(200).send(user))
	})
	.post((req, res, next) => {
		User.findById(req.params.userId)
			.then(user => {
				if(!user) {
					let err = new Error("User not found");
					err.status = 404;
					next(err);
				}
				return user.update(req.body);
			})
			.then(user => res.status(202).send(user))
			.catch(next);
	})

module.exports = users;