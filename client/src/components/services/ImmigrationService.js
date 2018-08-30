import React, { Component } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import immigrationServiceMessages from '../../translations/immigrationServiceMessages';

class ImmigrationService extends Component {
	render() {
		return (
			<IntlProvider
				locale={this.props.lang}
				messages={immigrationServiceMessages[this.props.lang]}
			>
				<div>
					<h2 className="text-center">
						<FormattedMessage
							id="immigration.title1"
							defaultMessage="Immigration"
						/>
					</h2>

					<p className="pt-4">
						<FormattedMessage
							id="immigration.1"
							defaultMessage="Great Britain is a country that people of the whole world are always
					happy to choose for living."
						/>
						<br />
						<br />
						<FormattedMessage
							id="immigration.2"
							defaultMessage="This is facilitated by the political and economic stability of
						Britain, a developed system of social guarantees, loyal attitude
						towards immigrants, an excellent system of education."
						/>
						<br />
						<br />
						<FormattedMessage
							id="immigration.3"
							defaultMessage="The British passport is respected. The British themselves enjoy the
					right of visa-free entry into 180 countries located on all
					continents of the globe. There are no other such examples in the
					world."
						/>
						<br />
						<br />
						<FormattedMessage
							id="immigration.4"
							defaultMessage="Another strong trump card in the UK is a convenient location. Flight
					by plane from Russia and other countries of Eastern Europe lasts
					about 4 hours."
						/>
						<br />
						<br />
						<FormattedMessage
							id="immigration.5"
							defaultMessage="It is also important that when you receive the citizenship of Great
					Britain, you are not deprived of citizenship of your current
					citizenship. In any case, unless otherwise provided by the laws of
					your country. In Russia, it is possible to obtain a second
					citizenship, under which all the rights and obligations of a citizen
					of the Russian Federation are preserved."
						/>
						<br />
						<br />
						<FormattedMessage
							id="immigration.6"
							defaultMessage="The rights of a permanent resident in the UK can be obtained in
					several ways."
						/>
						<br />
						<br />
						<FormattedMessage
							id="immigration.7"
							defaultMessage="After 5 years:"
						/>
						<br />
						<br />
						&ensp; &ensp;{' '}
						<FormattedMessage
							id="immigration.8"
							defaultMessage=" - If you are a spouse or a regular business partner of
						a UK or EU citizen."
						/>
						<br />
						<br />
						&ensp; &ensp;{' '}
						<FormattedMessage
							id="immigration.9"
							defaultMessage=" - When staying in the country for professional
						immigration categories."
						/>
						<br />
						<br />
						<FormattedMessage
							id="immigration.10"
							defaultMessage="After 10 years:"
						/>
						<br />
						<br />
						&ensp; &ensp;{' '}
						<FormattedMessage
							id="immigration.11"
							defaultMessage=" - With legal residence in the UK during this period."
						/>
					</p>
					<h4 className="text-center">
						<FormattedMessage
							id="immigration.title2"
							defaultMessage="How to become a resident"
						/>
					</h4>
					<p className="pt-4">
						<FormattedMessage
							id="immigration.12"
							defaultMessage="Buying and owning property in the UK does not give its owners the
					right to permanent residence."
						/>
						<br />
						<br />
						<FormattedMessage
							id="immigration.13"
							defaultMessage="Therefore, the most attractive immigration programs in the UK, at
					the moment, are the Investor's visa and the Entrepreneur's Visa.
					They lead to a permanent residence permit (permanent residence), and
					then British citizenship for the whole family."
						/>
					</p>
					<h4 className="text-center">
						<FormattedMessage
							id="immigration.title3"
							defaultMessage="Investors Visa"
						/>
					</h4>
					<p className="pt-4">
						<FormattedMessage
							id="immigration.14"
							defaultMessage="To obtain a residence permit under the Visa Investor program, it is
					required to invest at least £ 1 million in the UK economy."
						/>
						<br />
						<br />
						<FormattedMessage
							id="immigration.15"
							defaultMessage="The Investors Visa (Tier 1 Investor) is issued for the whole
					family, including children under 18 years of age."
						/>
						<br />
						<br />
						<FormattedMessage
							id="immigration.16"
							defaultMessage="Initially, the visa is issued for 3 years with the subsequent
					extension for another 2 years. The applicant undertakes not to spend
					more than 180 days a year outside the UK. This is the only category
					for which there is no requirement for knowledge of English."
						/>
						<br />
						<br />
						<FormattedMessage
							id="immigration.17"
							defaultMessage="Since 2011, the amount of investment for Investor Visa can be from 1
					to 10 million pounds sterling:"
						/>
						<br />
						<br />
						&emsp; &emsp;{' '}
						<FormattedMessage
							id="immigration.18"
							defaultMessage="£ 1 million - Permanent residence in 5 years and the
						citizenship of Great Britain in 6 years."
						/>{' '}
						<br />
						<br />
						&emsp; &emsp;{' '}
						<FormattedMessage
							id="immigration.19"
							defaultMessage=" £ 5 million - Permanent residence in 3 years and the
						citizenship of Great Britain in 5 years."
						/>
						<br />
						<br />
						&emsp; &emsp;{' '}
						<FormattedMessage
							id="immigration.20"
							defaultMessage=" £ 10 million - Permanent residence in 2 years and the
						citizenship of Great Britain after 5 years."
						/>
						<br />
						<br />
					</p>
					<h4 className="text-center">
						<FormattedMessage
							id="immigration.title4"
							defaultMessage="Entrepreneurs Visa"
						/>
					</h4>
					<p className="pt-4">
						<FormattedMessage
							id="immigration.21"
							defaultMessage="The Entrepreneur program assumes the opening (purchase) of his
					business, investing at least £ 200,000. It is also possible to open
					(buy) a business in the UK with a partner, where each contributes £
					100,000. Both partners and their families will have equal
					immigration rights to reside in the UK."
						/>
						<br />
						<br />
						<FormattedMessage
							id="immigration.22"
							defaultMessage="Capital Estate London actively cooperates with first-class
					immigration lawyers who will be able to give more detailed advice on
					the possibilities of obtaining a residence permit in each specific
					case."
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

export default connect(mapStateToProps)(ImmigrationService);
