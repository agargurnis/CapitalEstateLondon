import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import mdLogo from '../images/medium-logo.png';
import lgLogo from '../images/large-logo.png';
import MediaQuery from 'react-responsive';

class Navbar extends Component {
	render() {
		const authLinks = (
			<ul className="navbar-nav ml-auto">
				<li className="nav-item">
					<Link className="nav-link nav-item-effect" to="/">
						Home
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link nav-item-effect" to="/properties">
						Properties
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link nav-item-effect" to="/services">
						Services
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link nav-item-effect" to="/about">
						About
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link nav-item-effect" to="/contacts">
						Contacts
					</Link>
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

				<div className="collapse navbar-collapse">{authLinks}</div>
			</nav>
		);
	}
}

export default Navbar;
