import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import mdLogo from '../images/medium-logo.png';
import lgLogo from '../images/large-logo.png';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

class AdminNavbar extends Component {
	onLogoutClick(e) {
		e.preventDefault();
		this.props.logoutUser();
	}

	render() {
		const adminLinks = (
			<ul className="navbar-nav ml-auto">
				<li className="nav-item">
					<Link className="nav-link nav-item-effect" to="/managenewsletter">
						Manage Newsletter
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link nav-item-effect" to="/manageproperties">
						Manage Properties
					</Link>
				</li>
				<li className="nav-item">
					<a
						href=""
						onClick={this.onLogoutClick.bind(this)}
						className="nav-link nav-item-effect"
					>
						Log Out
					</a>
				</li>
			</ul>
		);

		return (
			<nav className="navbar navbar-expand-md navbar-dark bg-dark ">
				<MediaQuery minDeviceWidth={200} maxDeviceWidth={399}>
					<Link className="navbar-brand" to="/">
						<img src={mdLogo} alt="Logo" style={{ width: '110px' }} />
					</Link>
				</MediaQuery>
				<MediaQuery minDeviceWidth={400} maxDeviceWidth={968}>
					<Link className="navbar-brand" to="/">
						<img src={mdLogo} alt="Logo" style={{ width: '160px' }} />
					</Link>
				</MediaQuery>
				<MediaQuery minDeviceWidth={969}>
					<Link className="navbar-brand" to="/">
						<img src={lgLogo} alt="Logo" style={{ width: '400px' }} />
					</Link>
				</MediaQuery>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#mobile-nav"
				>
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse" id="mobile-nav">
					{adminLinks}
				</div>
			</nav>
		);
	}
}

AdminNavbar.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(
	mapStateToProps,
	{ logoutUser }
)(AdminNavbar);
