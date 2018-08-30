import React, { Component } from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

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
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	render() {
		const { lang } = this.props;
		return (
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h3 className="query-title pt-5">
							<FormattedMessage
								id="contacts.subTitle"
								defaultMessage="Get In Touch"
							/>
						</h3>
					</div>
				</div>
				<form
					method="POST"
					action="//formspree.io/arcijs95@gmail.com"
					className="query-form"
				>
					<input
						type="hidden"
						name="_language"
						value={lang === 'en' ? `uk` : `ru`}
					/>
					<div className="row">
						<div className="col">
							<TextFieldGroup
								placeholder={lang === 'en' ? `Name` : `Ваше имя`}
								name="name"
								value={this.state.name}
								onChange={this.onChange}
								info={
									<FormattedMessage
										id="contacts.fullName"
										defaultMessage="Full Name *"
									/>
								}
							/>
						</div>
						<div className="col">
							<TextFieldGroup
								placeholder={lang === 'en' ? `Email` : `Эл. почта`}
								name="email"
								value={this.state.email}
								onChange={this.onChange}
								info={
									<FormattedMessage
										id="contacts.email"
										defaultMessage="Email Address *"
									/>
								}
							/>
						</div>
						<div className="col">
							<TextFieldGroup
								placeholder={lang === 'en' ? `Number` : `Номер`}
								name="phone_number"
								value={this.state.phone_number}
								onChange={this.onChange}
								info={
									<FormattedMessage
										id="contacts.phone"
										defaultMessage="Phone Number"
									/>
								}
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<TextAreaFieldGroup
								placeholder={lang === 'en' ? `Message` : `Сообщение`}
								name="message"
								value={this.state.message}
								onChange={this.onChange}
								info={
									<FormattedMessage
										id="contacts.message"
										defaultMessage="Your Message"
									/>
								}
							/>
						</div>
					</div>
					<div className="row ">
						<div className="col-12 ">
							<button className="btn btn-light submit-button">
								<FormattedMessage
									id="contacts.btn"
									defaultMessage="Send Message"
								/>
							</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	lang: state.locale.lang
});

export default connect(mapStateToProps)(ContactQueryForm);
