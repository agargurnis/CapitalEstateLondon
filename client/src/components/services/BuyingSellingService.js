import React, { Component } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import buyingSellingServiceMessages from '../../translations/buyingSellingServiceMessages';

class BuyingSellingService extends Component {
	render() {
		return (
			<IntlProvider
				locale={this.props.lang}
				messages={buyingSellingServiceMessages[this.props.lang]}
			>
				<div>
					<h2 className="text-center">
						<FormattedMessage
							id="buyingSelling.title1"
							defaultMessage="Buying and selling of real estate"
						/>
					</h2>

					<p className="pt-4">
						<FormattedMessage
							id="buyingSelling.1"
							defaultMessage="For you, buying or selling real estate is an important and expensive
						project that does not happen every day. For us, this is an everyday,
						painstaking work."
						/>
						<br />
						<br />
						<FormattedMessage
							id="buyingSelling.2"
							defaultMessage="Not only prices and regulatory documents change. Trends, preferences
							of sellers and buyers, tricks of various kinds of swindlers change.
							You can spend a lot of your time and energy on the work that the
							specialist will perform faster, better and cheaper!"
						/>
						<br />
						<br />
						<FormattedMessage
							id="buyingSelling.3"
							defaultMessage="Therefore, Capital Estate London employees not only look for suitable options
							for you, but also carry out full legal support for the transaction."
						/>
					</p>
					<h4 className="text-center">
						<FormattedMessage
							id="buyingSelling.title2"
							defaultMessage="How to choose a property?"
						/>
					</h4>
					<p className="pt-4">
						<FormattedMessage
							id="buyingSelling.4"
							defaultMessage="London does not practice a common realtor base. The vast majority of
						agents represent the interests of the seller and specialize in sales
						in certain areas."
						/>
						<br />
						<br />
						<FormattedMessage
							id="buyingSelling.5"
							defaultMessage="When a potential buyer addresses to such an agent, he shows him
							exclusively his objects. In other words, it does not offer the best
							in the market, but what the particular seller has. Therefore, for a
							thorough study of the market, the buyer has to contact a dozen
							realtors and this is when considering only one district of the city."
						/>
						<br />
						<br />
						<FormattedMessage
							id="buyingSelling.6"
							defaultMessage="Another characteristic feature is that the London real estate market
							is extremely dynamic. As a consequence, many attractive properties
							in London are sold out before they are officially put up for sale."
						/>
						<br />
						<br />
						<FormattedMessage
							id="buyingSelling.7"
							defaultMessage="The experience of Capital Estate London and thorough knowledge of
							the local specifics of the market allows our clients not to miss any
							advantageous offer when searching for real estate in London!"
						/>
						<br />
						<br />
						<FormattedMessage
							id="buyingSelling.8"
							defaultMessage="Capital Estate London will investigate the market for you and
							consider all offers that meet the selected criteria. We will study
							both the proposals of agencies and private sellers, as well as
							developers."
						/>
						<br />
						<br />
						<FormattedMessage
							id="buyingSelling.9"
							defaultMessage="We will personally visit the sites and give an assessment of the
							property that suits your requirements. We will choose the most
							attractive offers for you, we will present them to you and will be
							accompanied by an independent expert evaluation."
						/>
						<br />
						<br />
						<FormattedMessage
							id="buyingSelling.10"
							defaultMessage="In a convenient for you day and time we will meet you in our office
							or in any place convenient for you and show you the real estate from
							the shortened list that we have prepared for you."
						/>
						<br />
						<br />
						<FormattedMessage
							id="buyingSelling.11"
							defaultMessage="In a conven During the viewing, we draw your attention to all
							aspects of the house or apartment, as well as the infrastructure.
							The recommended number of viewed objects is 5-7 per day."
						/>
					</p>
					<h4 className="text-center">
						<FormattedMessage
							id="buyingSelling.title3"
							defaultMessage="Escort of the transaction"
						/>
					</h4>
					<p className="pt-4">
						<FormattedMessage
							id="buyingSelling.12"
							defaultMessage="The process of buying property in London is quite difficult, if only
						because the legal system for registration of ownership of real
						estate in England differs from other countries."
						/>
						<br />
						<br />
						<FormattedMessage
							id="buyingSelling.13"
							defaultMessage="Capital Estate London guarantees full support of the transaction.
							The purchase of real estate is made within the agreed time schedules
							and on the terms most favorable to the client."
						/>
						<br />
						<br />
						<FormattedMessage
							id="buyingSelling.14"
							defaultMessage="As soon as the agreement on the price is reached, our partners -
							reliable and trusted lawyers, technical experts, assessing the
							condition of the real estate, other necessary specialists will
							assist you and support in concluding the transaction and processing
							the documents required in accordance with the current legislation."
						/>
						<br />
						<br />
						<FormattedMessage
							id="buyingSelling.15"
							defaultMessage="At your request Capital Estate London will also prepare
							comprehensive information on the potential costs in managing and
							maintaining your chosen property."
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

export default connect(mapStateToProps)(BuyingSellingService);
