'use strict'
const api = require('express').Router()
const db = require('APP/db')

api.get('/hello', (req, res) => res.send({hello: 'world'}))

api.route('/users', require('./users'));
api.use('/questions', require('./questions'));


module.exports = api