'use strict'
const questions = require('express').Router()
const db = require('APP/db')

const Question = require('../db/models').Question;

questions.route('/')
	.get((req, res, next) => {
		Question.findAll()
			.then(questions => questions.json())
			.then(questions => res.status(200).send(questions))
			.catch(next);
	})

module.exports = questions;