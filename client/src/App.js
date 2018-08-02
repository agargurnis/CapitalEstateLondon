import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import PrivateRoute from './components/common/PrivateRoute';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './components/home/HomePage';
import Newsletter from './components/layout/Newsletter';
import ServicePage from './components/services/ServicePage';
import ContactsPage from './components/contacts/ContactsPage';
import AboutPage from './components/about/AboutPage';
import PropertyPage from './components/properties/PropertyPage';
import AdminPage from './components/admin/AdminPage';

import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isAdmin: false
		};
	}

	componentDidMount() {
		const currentRoute = window.location.pathname;
		if (currentRoute === '/admin') {
			this.setState({ isAdmin: true });
		}
	}

	render() {
		const { isNavbarHidden } = this.state;
		return (
			<Router>
				<Switch>
					{this.state.isAdmin ? null : (
						<div className="public">
							<div className="public-pages">
								<Navbar />
								<Route exact path="/" component={HomePage} />
								<Route exact path="/properties" component={PropertyPage} />
								<Route exact path="/services" component={ServicePage} />
								<Route exact path="/contacts" component={ContactsPage} />
								<Route exact path="/about" component={AboutPage} />
							</div>
							<div className="parallax">
								<Newsletter />
								<Footer />
							</div>
						</div>
					)}
					{this.state.isAdmin ? (
						<div className="admin">
							<div className="admin-pages">
								<Route exact path="/admin" component={AdminPage} />
							</div>
						</div>
					) : null}
				</Switch>
			</Router>
		);
	}
}

export default App;
