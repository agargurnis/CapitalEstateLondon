import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import PrivateRoute from './components/common/PrivateRoute';
import store from './store';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/admin/Dashboard';
import Footer from './components/layout/Footer';
import HomePage from './components/home/HomePage';
import Newsletter from './components/layout/Newsletter';
import ServicePage from './components/services/ServicePage';
import ContactsPage from './components/contacts/ContactsPage';
import AboutPage from './components/about/AboutPage';
import PropertyPage from './components/properties/PropertyPage';
import IndividualPropertyPage from './components/properties/IndividualPropertyPage';
import AdminPage from './components/admin/AdminPage';
import ManagePropertiesPage from './components/admin/ManageProperties';
import EditPropertyPage from './components/admin/EditProperty';
import ManageNewsletterPage from './components/admin/ManageNewsletter';
import { addLocaleData } from 'react-intl';
import { setLocale } from './actions/localeActions';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import './App.css';

// Add Locale data
addLocaleData(en);
addLocaleData(ru);

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
		const currentRoute = this.props.location.pathname;
		if (currentRoute === '/admin' || localStorage.jwtToken) {
			this.setState({ isAdmin: true });
		}
		if (localStorage.celLang === 'en') {
			this.props.setLocale('en');
		} else if (localStorage.celLang === 'ru') {
			this.props.setLocale('ru');
		}
	}

	render() {
		const { isHidden } = this.props;

		return (
			<div>
				{this.state.isAdmin ? null : (
					<div className="public">
						<div
							className="public-pages"
							style={{
								marginBottom: isHidden === true ? '0' : null
							}}
						>
							{isHidden === true ? null : <Navbar />}
							<Route exact path="/" component={HomePage} />
							<Route
								exact
								path="/properties"
								component={() => (
									<PropertyPage toggleHeaderAndFooter={this.toggleHidden} />
								)}
							/>
							<Route
								exact
								path="/properties/:property_id"
								component={IndividualPropertyPage}
							/>
							<Route exact path="/services" component={ServicePage} />
							<Route exact path="/contacts" component={ContactsPage} />
							<Route exact path="/about" component={AboutPage} />
						</div>
						{isHidden === true ? null : (
							<div className="parallax">
								<Newsletter />
								<Footer />
							</div>
						)}
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
				<Switch>
					<PrivateRoute
						exact
						path="/manageproperties/:property_id"
						component={EditPropertyPage}
					/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	isHidden: state.property.isHidden,
	lang: state.locale.lang
});

export default connect(
	mapStateToProps,
	{ setLocale }
)(App);
