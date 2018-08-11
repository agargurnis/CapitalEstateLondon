import React, { Component } from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';

class ContactQueryForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			phone_number: '',
			message: ''
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(e) {
		e.preventDefault();

		const formData = {
			name: this.state.name,
			email: this.state.email,
			phone_number: this.state.phone_number,
			message: this.state.message
		};
		console.log(formData);
		// this.props.createProfile(profileData, this.props.history);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h3 className="query-title pt-5">Get In Touch</h3>
					</div>
				</div>
				<form onSubmit={this.onSubmit} className="query-form">
					<div className="row">
						<div className="col">
							<TextFieldGroup
								placeholder="Name"
								name="name"
								value={this.state.name}
								onChange={this.onChange}
								info="Full Name *"
							/>
						</div>
						<div className="col">
							<TextFieldGroup
								placeholder="Email"
								name="email"
								value={this.state.email}
								onChange={this.onChange}
								info="Email Address *"
							/>
						</div>
						<div className="col">
							<TextFieldGroup
								placeholder="Number"
								name="phone_number"
								value={this.state.phone_number}
								onChange={this.onChange}
								info="Phone Number"
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<TextAreaFieldGroup
								placeholder="Message"
								name="message"
								value={this.state.message}
								onChange={this.onChange}
								info="Your Message"
							/>
						</div>
					</div>
					<div className="row ">
						<div className="col-12 ">
							<button className="btn btn-light submit-button">
								Send Message
							</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default ContactQueryForm;
