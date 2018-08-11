import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import store from './store';
import PrivateRoute from './components/common/PrivateRoute';

import Navbar from './components/layout/Navbar';
import Dashboard from './components/admin/Dashboard';
import Footer from './components/layout/Footer';
import HomePage from './components/home/HomePage';
import Newsletter from './components/layout/Newsletter';
import ServicePage from './components/services/ServicePage';
import ContactsPage from './components/contacts/ContactsPage';
import AboutPage from './components/about/AboutPage';
import PropertyPage from './components/properties/PropertyPage';
import AdminPage from './components/admin/AdminPage';
import ManagePropertiesPage from './components/admin/ManageProperties';
import ManageNewsletterPage from './components/admin/ManageNewsletter';

import './App.css';

// Check for Token
if (localStorage.jwtToken) {
	// Set Auth token header
	setAuthToken(localStorage.jwtToken);
	// Decode token and get user info and expiration
	const decoded = jwt_decode(localStorage.jwtToken);
	// Set user and isAuthenticated
	store.dispatch(setCurrentUser(decoded));
	// Check for expired token
	const currentTime = Date.now() / 1000;
	if (decoded.exp < currentTime) {
		// Logout user
		store.dispatch(logoutUser());
		// Redirect to login
		// window.location.href = '/login';
	}
}

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isAdmin: false
		};
	}

	componentDidMount() {
		const currentRoute = window.location.pathname;
		if (currentRoute === '/admin' || localStorage.jwtToken) {
			this.setState({ isAdmin: true });
		}
	}

	render() {
		return (
			<Provider store={store}>
				<Router>
					<div>
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
						<Switch>
							<PrivateRoute exact path="/dashboard" component={Dashboard} />
						</Switch>
						<Switch>
							<PrivateRoute
								exact
								path="/managenewsletter"
								component={ManageNewsletterPage}
							/>
						</Switch>
						<Switch>
							<PrivateRoute
								exact
								path="/manageproperties"
								component={ManagePropertiesPage}
							/>
						</Switch>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
