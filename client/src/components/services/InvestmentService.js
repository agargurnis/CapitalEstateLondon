import React, { Component } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import investmentServiceMessages from '../../translations/investmentServiceMessages';

class InvestmentService extends Component {
	render() {
		return (
			<IntlProvider
				locale={this.props.lang}
				messages={investmentServiceMessages[this.props.lang]}
			>
				<div>
					<h2 className="text-center">
						<FormattedMessage
							id="investment.title1"
							defaultMessage="Investments"
						/>
					</h2>

					<p className="pt-4">
						<FormattedMessage
							id="investment.1"
							defaultMessage="England is first of all stability and reliability of investments."
						/>
						<br />
						<br />
						<FormattedMessage
							id="investment.2"
							defaultMessage="Despite the global recession, the prices for investment property in
					central London, according to the latest estimates of analysts, reached
					their pre-crisis peaks."
						/>

						<br />
						<br />
						<FormattedMessage
							id="investment.3"
							defaultMessage="So, for example, in 2011, prices for apartments in the area of
					​​Westminster increased by 10%."
						/>

						<br />
						<br />
						<FormattedMessage
							id="investment.4"
							defaultMessage="If you look at a more global picture - over the past two decades, the
					average price of real estate in England has increased almost 4 times.
					This is a capital increase of 400% in a developed country, despite all
					the crises experienced."
						/>

						<br />
						<br />
						<FormattedMessage
							id="investment.5"
							defaultMessage="In British real estate, as a rule, they invest for the purpose of
					preserving and increasing capital in the long term (10 years). But in
					the past two years we have seen unprecedented growth and so high
					rental prices - by 30% in London."
						/>

						<br />
						<br />
						<FormattedMessage
							id="investment.6"
							defaultMessage="A direct effect is the inflow of foreign investment, including from
					the CIS countries."
						/>
					</p>
					<h4 className="text-center">
						<FormattedMessage id="investment.title2" defaultMessage="Control" />
					</h4>
					<p className="pt-4">
						<FormattedMessage
							id="investment.7"
							defaultMessage="If you regard the purchase of real estate in the UK as a direct
				investment, our specialists will be able to undertake the search for
				responsible tenants, check their creditworthiness, formalize the
				contract and register with the tax authorities."
						/>
						<br />
						<br />
						<FormattedMessage
							id="investment.8"
							defaultMessage="Services offered:"
						/>
						<br />
						<br />
						&ensp; &ensp;{' '}
						<FormattedMessage
							id="investment.9"
							defaultMessage="- Consultation of owners about the most profitable use
					of their real estate."
						/>
						<br />
						<br />
						&ensp; &ensp;{' '}
						<FormattedMessage
							id="investment.10"
							defaultMessage="- Search for potential tenants of your property."
						/>
						<br />
						<br />
						&ensp; &ensp;{' '}
						<FormattedMessage
							id="investment.11"
							defaultMessage="- Optimization of payment for all utility, technical and
					administrative accounts."
						/>
						<br />
						<br />
						&ensp; &ensp;{' '}
						<FormattedMessage
							id="investment.12"
							defaultMessage="- Regular check of mail and correspondence arriving at
					the address."
						/>
						<br />
						<br />
						&ensp; &ensp;{' '}
						<FormattedMessage
							id="investment.13"
							defaultMessage=" - Asset security."
						/>
						<br />
						<br />
						&ensp; &ensp;{' '}
						<FormattedMessage
							id="investment.14"
							defaultMessage="- Maintenance and technical support of the premises."
						/>
						<br />
						<br />
					</p>
				</div>
			</IntlProvider>
		);
	}
}

const mapStateToProps = state => ({
	lang: state.locale.lang
});

export default connect(mapStateToProps)(InvestmentService);
