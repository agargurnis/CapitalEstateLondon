import React, { Component } from 'react';

class ContactMap extends Component {
	render() {
		return (
			<div>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1241.2701019713188!2d-0.158029!3d51.521651!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b92d362da5d%3A0x7ff03a03e2604470!2sCapital+Estate+London!5e0!3m2!1sen!2suk!4v1532813979547"
					title="google-map"
					width="100%"
					height="300"
					frameborder="0"
					style={{ border: '0' }}
				/>
			</div>
		);
	}
}

export default ContactMap;
