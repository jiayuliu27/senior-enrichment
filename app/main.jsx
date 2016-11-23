'use strict';

import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router';

import store from './store'
import Root from './components/Root'
import Home from './components/Home'
import Questions from './components/Questions'
import Users from './components/Users'

render (
  <Provider store={store}>
    <Router history={ hashHistory } >
    	<Route path="/" component={ Home } />
    	<Route path="/questions" component={ Questions } />
    	<Route path="/users" component={ Users } />
    </Router>
  </Provider>,
  document.getElementById('main')
)