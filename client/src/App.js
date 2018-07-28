import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import store from './store';
import PrivateRoute from './components/common/PrivateRoute';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './components/home/HomePage';
import Newsletter from './components/layout/Newsletter';
import ServicePage from './components/services/ServicePage';

import './App.css';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div className="App">
						<Navbar />
						<Route exact path="/" component={HomePage} />
						<Route exact path="/services" component={ServicePage} />
						<div className="parallax">
							<Newsletter />
							<Footer />
						</div>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
