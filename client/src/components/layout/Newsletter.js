import React, { Component } from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addSubscriber } from '../../actions/newsletterActions';

class Newsletter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			success: false,
			errors: {}
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({
				errors: nextProps.errors
			});
		}
	}

	onSubmit(e) {
		e.preventDefault();

		const newsletterData = {
			email: this.state.email
		};

		this.props.addSubscriber(newsletterData);

		if (this.state.email !== '') {
			this.setState({ email: 'Thank you for subscribing', success: true });
		}
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	render() {
		const { errors } = this.state;
		return (
			<div className="newsletter-box">
				<div className="underlined-title-white mb-4 pt-4">
					<h2>Subscribe to our Newsletter</h2>
				</div>
				<form onSubmit={this.onSubmit}>
					<div className="row justify-content-center ">
						<div className="col-md-5 newsletter-col">
							<TextFieldGroup
								placeholder="Enter your email address here..."
								name="email"
								value={this.state.email}
								type="email"
								onChange={this.onChange}
								error={errors.email}
								success={this.state.success}
							/>
						</div>
						<div className="col-md-1 newsletter-col">
							<button type="submit" className="btn btn-lg btn-cel">
								Subscribe
							</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	errors: state.errors
});

Newsletter.propTypes = {
	addSubscriber: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired
};

export default connect(
	mapStateToProps,
	{ addSubscriber }
)(Newsletter);
