import React, { Component } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import excursionServiceMessages from '../../translations/excursionServiceMessages';

class ExcursionService extends Component {
	render() {
		return (
			<IntlProvider
				locale={this.props.lang}
				messages={excursionServiceMessages[this.props.lang]}
			>
				<div>
					<h2 className="text-center">
						<FormattedMessage
							id="excursion.title"
							defaultMessage="Excursions and study tours"
						/>
					</h2>

					<p className="pt-4">
						<FormattedMessage
							id="excursion.1"
							defaultMessage="In these trips, if you want, you will get acquainted with the
					developers, lawyers, bankers and our employees who will be able to
					tell you about the local market and show you the real estate offered
					for sale."
						/>
						<br />
						<br />
						<FormattedMessage
							id="excursion.2"
							defaultMessage="You will be able to personally evaluate the advantages of buying
						property in a particular area of ​​the UK and London."
						/>

						<br />
						<br />
						<FormattedMessage
							id="excursion.3"
							defaultMessage="All this together will allow us to make a balanced and deliberate
						decision to buy housing for one purpose or another."
						/>

						<br />
						<br />
						<FormattedMessage
							id="excursion.4"
							defaultMessage="More details on how we organize an inspection of real estate - in the
						section \' Buying and Selling Real Estate.\'"
						/>
					</p>
				</div>
			</IntlProvider>
		);
	}
}

const mapStateToProps = state => ({
	lang: state.locale.lang
});

export default connect(mapStateToProps)(ExcursionService);
