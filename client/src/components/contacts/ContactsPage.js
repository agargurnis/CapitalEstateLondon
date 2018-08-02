import React, { Component } from 'react';
import ContactIconBox from './ContactIconBox';
import ContactMap from './ContactMap';
import ContactQueryForm from './ContactQueryForm';

class ContactsPage extends Component {
	render() {
		return (
			<div>
				<ContactMap />
				<ContactIconBox />
				<ContactQueryForm />
			</div>
		);
	}
}

export default ContactsPage;
