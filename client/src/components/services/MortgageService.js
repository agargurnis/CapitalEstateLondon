import React, { Component } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import mortgageServiceMessages from '../../translations/mortgageServiceMessages';

class MortgageService extends Component {
	render() {
		return (
			<IntlProvider
				locale={this.props.lang}
				messages={mortgageServiceMessages[this.props.lang]}
			>
				<div>
					<h2 className="text-center">
						<FormattedMessage id="mortgage.title" defaultMessage="Mortgage" />
					</h2>

					<p className="pt-4">
						<FormattedMessage
							id="mortgage.1"
							defaultMessage="Assisting clients in obtaining mortgage lending is one of the
					sought-after services provided by Capital Estate London."
						/>
						<br />
						<br />
						<FormattedMessage
							id="mortgage.2"
							defaultMessage="We cooperate with leading banks and brokers in the UK, which allows
						our clients to avoid unnecessary delays in processing documents and
						achieve the most favorable loan conditions."
						/>
						<br />
						<br />
						<FormattedMessage
							id="mortgage.3"
							defaultMessage="In the rules of English banks to consider each case individually and
						to study all the circumstances of the transaction. If there are no
						special conditions, then the average amount of a possible loan is the
						official annual income of the applicant, multiplied by three times."
						/>
						<br />
						<br />
						<FormattedMessage
							id="mortgage.4"
							defaultMessage="For people who live in the UK, banks can offer loans up to 100 percent
						of the value of the property they purchase."
						/>
						<br />
						<br />
						<FormattedMessage
							id="mortgage.5"
							defaultMessage="In the event that the purchase is made for the first time, the loan
						size usually ranges from 90 to 95 percent."
						/>
						<br />
						<br />
						<FormattedMessage
							id="mortgage.6"
							defaultMessage="For non-residents, it is possible to get a loan in the amount of 65-70
						percent of the purchase price, taking into account the permanent place
						of residence and some other factors."
						/>
						<br />
						<br />
						<FormattedMessage
							id="mortgage.7"
							defaultMessage="It is worth remembering that when buying a property you will also need
						to find the amount to deposit a security deposit that will cover the
						difference between the purchase price and the amount of the mortgage.
						The interest rate on mortgages in the UK is usually fixed and ranges
						from 2.5% to 4.5% per year."
						/>
						<br />
						<br />
						<FormattedMessage
							id="mortgage.8"
							defaultMessage="To obtain a loan for the purchase of real estate in the UK you must
						provide the following documents:"
						/>
						<br />
						<br />
						<FormattedMessage
							id="mortgage.9"
							defaultMessage="For entrepreneurs:"
						/>
						<br />
						<br />
						&ensp; &ensp;{' '}
						<FormattedMessage
							id="mortgage.10"
							defaultMessage=" 1) Copies of passports.."
						/>
						<br />
						<br />
						&ensp; &ensp;{' '}
						<FormattedMessage
							id="mortgage.11"
							defaultMessage=" 2) Business reporting for the last 3 years."
						/>
						<br />
						<br />
						&ensp; &ensp;{' '}
						<FormattedMessage
							id="mortgage.12"
							defaultMessage=" 3) Personal tax returns reflecting salary or dividends."
						/>
						<br />
						<br />
						&ensp; &ensp;{' '}
						<FormattedMessage
							id="mortgage.13"
							defaultMessage=" 4) Extracts from a personal bank account on the income
						to the account."
						/>
						<br />
						<br />
						<FormattedMessage
							id="mortgage.14"
							defaultMessage="For those who work for hire:"
						/>
						<br />
						<br />
						&ensp; &ensp;{' '}
						<FormattedMessage
							id="mortgage.15"
							defaultMessage=" 1) Copies of passports."
						/>
						<br />
						<br />
						&ensp; &ensp;{' '}
						<FormattedMessage
							id="mortgage.16"
							defaultMessage=" 2) References 2NDFL for the last 3 years."
						/>
						<br />
						<br />
						&ensp; &ensp;{' '}
						<FormattedMessage
							id="mortgage.17"
							defaultMessage=" 3) Extracts from a personal bank account on the income
						to the account."
						/>
						<br />
						<br />
						<FormattedMessage
							id="mortgage.18"
							defaultMessage="Subtlety and local features in mortgage lending abound. Therefore,
						before applying to a particular bank, we strongly recommend consulting
						with our mortgage broker in London, which will provide an exhaustive
						consultation, evaluate specifically your chances of obtaining a loan
						and help to present your application in the best possible light."
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

export default connect(mapStateToProps)(MortgageService);
