import React, { Component } from 'react';

class ContactIconBox extends Component {
	render() {
		return (
			<div>
				<div className="title-box" />
				<div className="icon-box">
					<div className="container">
						<div className="row justify-content-center pt-5">
							<div className="col-12">
								<h2 className="contact-title ">Contact Us</h2>
							</div>
						</div>
						<div className="row icon-row">
							<div className="col text-center">
								<span className="fa-stack fa-2x">
									<i className="far fa-circle fa-stack-2x" />
									<i className="contact-icon fas fa-map-marker-alt fa-stack-1x" />
								</span>
								<h6 className="contacts-white-text">
									{' '}
									6 Porter Street, Marylebone<br /> London, W1U 6DD{' '}
								</h6>
							</div>
							<div className="col text-center">
								<span className="fa-stack fa-2x">
									<i className="far fa-circle fa-stack-2x" />
									<i className="contact-icon fas fa-at fa-stack-1x" />
								</span>
								<h6 className="contacts-white-text">
									info@capitalestatelondon.com
								</h6>
							</div>
							<div className="col text-center">
								<span className="fa-stack fa-2x">
									<i className="far fa-circle fa-stack-2x" />
									<i className="contact-icon fas fa-mobile-alt fa-stack-1x" />
								</span>
								<h6 className="contacts-white-text">+44 (0) 788 6879 176</h6>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ContactIconBox;
