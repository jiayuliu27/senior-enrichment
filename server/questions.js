'use strict';

let router = require('express').Router();
let Question = require('../db/models').Question;
let Response = require('../db/models').Response;

router.route('/')
	.get((req, res, next) => {
		Question
			.findAll()
			.then(questions => res.status(200).send(questions))
			.catch(next);

	})
	.post((req, res, next) => {
		Question
			.create(req.body)
			.then(question => res.status(201).send(question))
			.catch(next);
	});

router.route('/:questionId')
	.get((req, res, next) => {
		// return question and all its responses
		Question
			.findById(req.params.questionId)
			.then(quetsion => res.status(200).send(question))
			.catch(next);
	})
	.post((req, res, next) => {
		// post a response to this question
		req.body.questionId = req.params.questionId;
		Response
			.create(req.body)
			.then(response => res.status(201).send(response))
			.catch(next);
	})
	.delete((req, res, next) => {
		Question
			.destroy({
				where: {
					id: req.params.questionId
				}
			})
			.then(() => res.status(202).send())
			.catch(next);
	});

module.exports = router;