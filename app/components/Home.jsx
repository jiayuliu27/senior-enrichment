import React, { Component } from 'react';
import Navbar from './Navbar';

export default class Home extends Component {
	render() {
		return (
			<div className="container-fluid">
				<Navbar />
				Hello
			</div>
		);
	}
}