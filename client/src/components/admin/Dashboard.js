import React, { Component } from 'react';
import AdminNavbar from './AdminNavbar';

class Dashboard extends Component {
	render() {
		return (
			<div>
				<AdminNavbar />
				<div className="stats" />
			</div>
		);
	}
}

export default Dashboard;
