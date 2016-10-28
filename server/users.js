'use strict';
let router = require('express').Router();
let User = require('../db/models').User;

router.route('/')
	.get((req, res, next) => {
		// get all users
		User
			.findAll()
			.then(users => res.send(users))
			.catch(next);
	})
	.post((req, res, next) => {
		// ad a new user
		User
			.create(req.body)
			.then(user => res.status(201).send(user))
			.catch(next);
	})

router.route('/:userId')
	.get((req, res, next) => {
		// get user info with all questions reponded to
		User
			.findById(req.params.userId)
			.then(user => res.status(200).send(user))
			.catch(next);

	})
	.put((req, res, next) => {
		// update user profile
		let user = User.findById(req.params.userId);
		user
			.update(req.body)
			.then(user => res.status(200).send(user))
			.catch(next);
	})
	.delete((req, res, next) => {
		User
			.destroy({
				where: {
					id: req.params.userId
				}
			})
			.then(() => res.status(202).send())
			.catch(next);
	});

module.exports = router;