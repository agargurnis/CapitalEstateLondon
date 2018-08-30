import React, { Component } from 'react';
import AdminNavbar from './AdminNavbar';
import { connect } from 'react-redux';
import { getSubscribers } from '../../actions/newsletterActions';
import Spinner from '../common/Spinner';

class ManageNewsletter extends Component {
	componentDidMount() {
		this.props.getSubscribers();
	}

	render() {
		const { subscribers, loading } = this.props.newsletter;

		let subscriberList;

		if (subscribers === null || loading) {
			subscriberList = <Spinner />;
		} else {
			subscriberList = subscribers.map(subscriber => <p>{subscriber.email}</p>);
		}

		return (
			<div>
				<AdminNavbar />
				<div className="newsletter-flex-wrap">
					<div className="newsletter-subs-container">
						<div className="newsletter-mails">
							<div className="active-subscribers">
								<div className="subscriber-list-title">
									2 Active Subscribers
								</div>
								<div className="subscriber-list">{subscriberList}</div>
							</div>
						</div>
					</div>
					<div className="newsletter-input-container">
						<div className="newsletter-admin-form">
							<h1 className="text-center mx-5">
								A form to be added when more people subscribe
							</h1>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	newsletter: state.newsletter
});

export default connect(
	mapStateToProps,
	{ getSubscribers }
)(ManageNewsletter);
