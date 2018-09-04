import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import mdLogo from '../images/medium-logo.png';
import lgLogo from '../images/large-logo.png';
import flagRu from '../images/flag-ru.png';
import flagEn from '../images/flag-en.png';
import MediaQuery from 'react-responsive';
import { connect } from 'react-redux';
import { setLocale } from '../../actions/localeActions';
import { IntlProvider, FormattedMessage } from 'react-intl';
import navbarMessages from '../../translations/navbarMessages';

class Navbar extends Component {
	render() {
		const navLinks = (
			<ul className="navbar-nav ml-auto">
				<li className="nav-item">
					<Link className="nav-link nav-item-effect" to="/">
						<FormattedMessage id="nav.home" defaultMessage="Home" />
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link nav-item-effect" to="/properties">
						<FormattedMessage id="nav.properties" defaultMessage="Properties" />
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link nav-item-effect" to="/services">
						<FormattedMessage id="nav.services" defaultMessage="Services" />
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link nav-item-effect" to="/about">
						<FormattedMessage id="nav.about" defaultMessage="About" />
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link nav-item-effect" to="/contacts">
						<FormattedMessage id="nav.contacts" defaultMessage="Contacts" />
					</Link>
				</li>
				<div className="lang-buttons">
					<a
						role="button"
						onClick={() => this.props.setLocale('en')}
						className="lang-btn"
					>
						<img src={flagEn} alt="English" />
					</a>
					<span
						style={{ color: '#fff', marginLeft: '5px', marginRight: '5px' }}
					>
						{' '}
						|{' '}
					</span>
					<a
						role="button"
						onClick={() => this.props.setLocale('ru')}
						className="lang-btn"
					>
						<img src={flagRu} alt="Russian" />
					</a>
				</div>
			</ul>
		);
		const { lang } = this.props;
		return (
			<IntlProvider locale={lang} messages={navbarMessages[lang]}>
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
						{navLinks}
					</div>
				</nav>
			</IntlProvider>
		);
	}
}

const mapStateToProps = state => ({
	lang: state.locale.lang
});

export default connect(
	mapStateToProps,
	{ setLocale }
)(Navbar);
