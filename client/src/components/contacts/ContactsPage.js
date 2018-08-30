import React, { Component } from 'react';
import qs from 'qs';
import ContactIconBox from './ContactIconBox';
import ContactMap from './ContactMap';
import ContactQueryForm from './ContactQueryForm';
import scrollToComponent from 'react-scroll-to-component';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';
import contactsPageMessages from '../../translations/contactsPageMessages';

class ContactsPage extends Component {
	componentDidMount() {
		const query = qs.parse(this.props.location.search);
		if (Object.keys(query).length !== 0) {
			scrollToComponent(this.ContactForm, {
				offset: 100,
				align: 'top',
				duration: 500,
				ease: 'inCirc'
			});
		}
	}

	render() {
		const { lang } = this.props;
		return (
			<IntlProvider locale={lang} messages={contactsPageMessages[lang]}>
				<div>
					<ContactMap />
					<ContactIconBox />
					<section
						ref={section => {
							this.ContactForm = section;
						}}
					/>
					<ContactQueryForm />
				</div>
			</IntlProvider>
		);
	}
}

const mapStateToProps = state => ({
	lang: state.locale.lang
});

export default connect(mapStateToProps)(ContactsPage);
