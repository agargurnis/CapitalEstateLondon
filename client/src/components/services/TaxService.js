import React, { Component } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import taxServiceMessages from '../../translations/taxServiceMessages';

class TaxService extends Component {
	render() {
		return (
			<IntlProvider
				locale={this.props.lang}
				messages={taxServiceMessages[this.props.lang]}
			>
				<div>
					<h2 className="text-center">
						<FormattedMessage id="tax.title" defaultMessage="Tax issues" />
					</h2>

					<p className="pt-4">
						<FormattedMessage
							id="tax.1"
							defaultMessage="In England, as in any other country, there are standards of buying
					real estate, of which a foreign investor can only have an
					approximate idea."
						/>
						<br />
						<br />
						<FormattedMessage
							id="tax.2"
							defaultMessage="However, the questions that should be asked when buying a house or
					apartment are extremely important. One of them: \'How is it better to
					place the acquired real estate - on a legal or physical person?\'."
						/>
						<br />
						<br />
						<FormattedMessage
							id="tax.3"
							defaultMessage="Many people are interested in the issue of transferring real estate
						to inheritance, as well as what taxes are paid on profits. Our
						advice is to entrust the solution of legal issues to professionals."
						/>
						<br />
						<br />
						<FormattedMessage
							id="tax.4"
							defaultMessage="Capital Estate London will gladly introduce you to our experienced
						partners, lawyers and tax specialists who will provide professional
						assistance in acquiring, registering real estate and resolving all
						tax issues."
						/>
						<br />
						<br />
						<FormattedMessage
							id="tax.5"
							defaultMessage="You should be prepared for the following mandatory expenses:"
						/>
						<br />
						<br />
						<FormattedMessage
							id="tax.6"
							defaultMessage="1. Stamp Duty. This is the main tax on the purchase of real estate,
						which must be paid on the day the transaction ends. Since December
						4, 2014, the Stamp duty rate system in the UK has changed.
						Previously, this tax was calculated as a percentage of the value of
						real estate, depending on a certain group of rates."
						/>
						<br />
						<br />
						<FormattedMessage
							id="tax.7"
							defaultMessage="Now it is calculated by a simple progressive system, which looks
					like this:"
						/>
						<br />
						<br />
						&emsp; &emsp;{' '}
						<FormattedMessage
							id="tax.8"
							defaultMessage=" The first £ 125,000 - 0%"
						/>
						<br />
						<br />
						&emsp; &emsp;{' '}
						<FormattedMessage
							id="tax.9"
							defaultMessage="from £ 125,000 to £ 250,000 - 2%"
						/>
						<br />
						<br />
						&emsp; &emsp;{' '}
						<FormattedMessage
							id="tax.10"
							defaultMessage="from £ 250,001 to £ 925,000 - 5%"
						/>
						<br />
						<br />
						&emsp; &emsp;{' '}
						<FormattedMessage
							id="tax.11"
							defaultMessage=" from £ 925,001 to £ 1,500,000 - 10%"
						/>
						<br />
						<br />
						&emsp; &emsp;{' '}
						<FormattedMessage
							id="tax.12"
							defaultMessage="over £ 1,500,000 - 12%"
						/>
						<br />
						<br />
						<FormattedMessage
							id="tax.13"
							defaultMessage="Each interest rate will apply only to a portion of the value of the
						property falling within the appropriate range. over £ 2.000.000 for
						a legal entity - 15%"
						/>
						<br />
						<br />
						<FormattedMessage
							id="tax.14"
							defaultMessage="2. Registration of the purchase in the Register is approximately
						0.1%."
						/>
						<br />
						<br />
						<FormattedMessage
							id="tax.15"
							defaultMessage="3. Municipal tax for accommodation in the purchased and rented
						accommodation. Its size is about 100 pounds a month, depending on
						the area in which the property is located and its total area. All
						students are exempt from this tax."
						/>
						<br />
						<br />
						<FormattedMessage
							id="tax.16"
							defaultMessage="4. Other payments. These are administrative and registration fees,
						payment of brokerage services for taxs and bank charges."
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

export default connect(mapStateToProps)(TaxService);
