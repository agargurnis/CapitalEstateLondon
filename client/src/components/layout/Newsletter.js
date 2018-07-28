import React, { Component } from 'react';
import TextFieldGroup from '../common/TextFieldGroup';

class Newsletter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newsletter: ''
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(e) {
		e.preventDefault();

		console.log(e.target.value);
		// this.props.createProfile(profileData, this.props.history);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	render() {
		return (
			<div className="newsletter-box">
				<div className="underlined-title-white mb-4 pt-4">
					<h2>Subscribe to our Newsletter</h2>
				</div>
				<div className="row justify-content-center ">
					<div className="col-5">
						<TextFieldGroup
							placeholder="Enter your email address here..."
							name="newsletter"
							value={this.state.newsletter}
							onChange={this.onChange}
						/>
					</div>
					<div className="col-1">
						<button className="btn btn-lg btn-cel">Subscribe</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Newsletter;
