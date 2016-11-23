'use strict'
const api = require('express').Router()
const db = require('APP/db')

api.get('/hello', (req, res) => res.send({hello: 'world'}))
	.use('/users', require('./users'))
	.use('/questions', require('./questions'))
	.use('/comments', require('./comments'))

module.exports = api