'use strict'
const comments = require('express').Router()
const db = require('APP/db')

const Comment = require('../db/models').Comment;

comments.route('/')
	.get((req, res, next) => {
		Comment.findAll()
			.then(comments => comments.json())
			.then(comments => res.status(200).send(comments))
			.catch(next);
	})

module.exports = comments;