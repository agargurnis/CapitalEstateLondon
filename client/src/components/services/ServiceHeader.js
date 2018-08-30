import React, { Component } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import serviceHeaderMessages from '../../translations/serviceHeaderMessages';

class ServiceHeader extends Component {
	render() {
		return (
			<IntlProvider
				locale={this.props.lang}
				messages={serviceHeaderMessages[this.props.lang]}
			>
				<div>
					<div className="service-container">
						<h2 className="service-title text-center pt-5 ">
							<FormattedMessage
								id="serviceHeader.title"
								defaultMessage="Full Range of Services"
							/>
						</h2>
						<p className="my-5">
							<FormattedMessage
								id="serviceHeader.1"
								defaultMessage="Company Capital Estate London acts in your best interest to
						acquire and properly selected high-quality housing. "
							/>
							<br />
							<br />
							<FormattedMessage
								id="serviceHeader.2"
								defaultMessage="We will always advise a Russian-speaking lawyer, designer,
						serviceHeader broker with whom we have been working for a long time and
						strongly recommend our clients. "
							/>
							<br />
							<br />
							<FormattedMessage
								id="serviceHeader.3"
								defaultMessage="We offer assistance in opening accounts in the best banks, both
						simple accounts and Private, Premier, Investment; in the design of
						investor visas; citizenship of the state of St Kitts & Nevis, upon
						receipt of which you have the opportunity to enter 88 countries
						(including Great Britain, Europe, Canada) without obtaining
						additional visas."
							/>
							<br />
							<br />
							<FormattedMessage
								id="serviceHeader.4"
								defaultMessage="If real estate is bought for investment purposes, we will help in
						the management: let lease it, we will communicate with local
						realtors, we will evaluate the apartment, view it, arrange a lease
						contract, register utility contracts, register the apartment owner
						at the tax office, advise tax advisor for the annual tax return... "
							/>
							<br />
							<br />
							<FormattedMessage
								id="serviceHeader.5"
								defaultMessage="We organize real estate views: 5-6 offers per day for 2-3 hours,
						when viewing, we point out the nuances. Agents can not tell you
						that, for example, there is a branch of the metro nearby and this
						will affect the real estate; that opposite will demolish the house
						and the construction of a new one will take a year and a half;
						that when deciding to make a redevelopment in the apartment - for
						a long time may take the consideration of the application, since
						the house is an object of cultural heritage; that leasing to an
						apartment is short or that the service charge is too high (£
						12,000- 20,000 per year)..."
							/>
							<br />
							<br />
							<FormattedMessage
								id="serviceHeader.6"
								defaultMessage="Among the additional services: sale of existing property,
						organization of excursions, organization of a chauffeur, purchase
						of air tickets, meeting at the airport, hotel reservation,
						provision of translation services, hiring of staff and assistance
						in opening a company. Company Capital Estate London will take you
						all the way from the beginning of the real estate search, until
						the end of the transaction and after its completion."
							/>
						</p>
					</div>
				</div>
			</IntlProvider>
		);
	}
}

const mapStateToProps = state => ({
	lang: state.locale.lang
});

export default connect(mapStateToProps)(ServiceHeader);
