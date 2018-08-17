import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';
import sLogo from '../images/small-logo.png';

class AdminPage extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			errors: {}
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	componentDidMount() {
		if (this.props.auth.isAuthenticated) {
			this.props.history.push('/dashboard');
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.auth.isAuthenticated) {
			this.props.history.push('/dashboard');
		}
		if (nextProps.errors) {
			this.setState({ errors: nextProps.errors });
		}
	}

	onSubmit(e) {
		e.preventDefault();

		const userData = {
			email: this.state.email,
			password: this.state.password
		};

		this.props.loginUser(userData);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	render() {
		const { errors } = this.state;

		return (
			<div className="admin-wrapper">
				<div className="login-box text-center">
					<div className="col-sm-8 main-section">
						<div className="admin-modal-content">
							<div className="col-12 user-img">
								<a href="/">
									<img src={sLogo} alt="logo" />
								</a>
							</div>
							<form onSubmit={this.onSubmit} className="col-12">
								<div className=" admin-form-group">
									<TextFieldGroup
										placeholder="Email Address"
										name="email"
										value={this.state.email}
										type="email"
										onChange={this.onChange}
										error={errors.email}
									/>
								</div>
								<div className=" admin-form-group">
									<TextFieldGroup
										placeholder="Password"
										name="password"
										value={this.state.password}
										type="password"
										onChange={this.onChange}
										error={errors.password}
									/>
								</div>
								<button type="submit" className="btn admin-button">
									<i className="fas fa-sign-in-alt login-icon" />Login
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
});

AdminPage.propTypes = {
	loginUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

export default connect(
	mapStateToProps,
	{ loginUser }
)(AdminPage);
