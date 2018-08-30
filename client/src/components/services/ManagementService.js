import React, { Component } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import managementServiceMessages from '../../translations/managementServiceMessages';

class ManagementService extends Component {
	render() {
		return (
			<IntlProvider
				locale={this.props.lang}
				messages={managementServiceMessages[this.props.lang]}
			>
				<div>
					<h2 className="text-center">
						<FormattedMessage
							id="management.title1"
							defaultMessage="Property management"
						/>
					</h2>

					<p className="pt-4">
						<FormattedMessage
							id="management.1"
							defaultMessage="Many are attracted not only by the opportunity to live in London,
					but also the benefits of buying homes or apartments here: the cost
					of square meters in the main city of the UK is constantly growing."
						/>
						<br />
						<br />
						<FormattedMessage
							id="management.2"
							defaultMessage="Therefore, the answer to the question of whether to invest in real
					estate in the UK, in principle, is clear."
						/>
						<br />
						<br />
						<FormattedMessage
							id="management.3"
							defaultMessage="On the other hand, the success of an investment depends on
					understanding: what exactly to acquire and how. Finally, who should
					be allowed to use their property?"
						/>
					</p>
					<h4 className="text-center">
						<FormattedMessage
							id="management.title2"
							defaultMessage="Management without letting"
						/>
					</h4>
					<p className="pt-4">
						<FormattedMessage
							id="management.4"
							defaultMessage="The property management services provided by Capital Estate London
					are designed in such a way as to free the owners from the worries of
					maintaining the property in London."
						/>
						<br />
						<br />
						<FormattedMessage
							id="management.5"
							defaultMessage="The package of services includes full support of the entry into the
					new real estate and the solution of related issues. Including:
					opening of accounts for public services, connection of telephone
					line and Internet, insurance, registration in the local
					municipality, choice of interior designer, furnishing and
					organization of cleaning."
						/>

						<br />
						<br />
						<FormattedMessage
							id="management.6"
							defaultMessage="Thanks to this, our clients can call on the fully functional,
						furnished and prepared living space and get rid of the unnecessary
						headache, which is most often associated with both repair and moving
						to a new location."
						/>
						<br />
						<br />
						<FormattedMessage
							id="management.7"
							defaultMessage="Our employees provide full service of the real estate, including
					checking and timely payment of all utilities and maintenance
					payments and municipal tax. We also organize the necessary annual
					inspections with the help of experts for the care of equipment,
					preventive maintenance and regular cleaning."
						/>
						<br />
						<br />
						<FormattedMessage
							id="management.8"
							defaultMessage="In the event of an unforeseen situation, our clients real estate
					related business can take care of the problem (by prior
					arrangement)."
						/>
					</p>
					<h4 className="text-center">
						<FormattedMessage
							id="management.title3"
							defaultMessage="Management when entering the arena"
						/>
					</h4>
					<p className="pt-4">
						<FormattedMessage
							id="management.9"
							defaultMessage="If you regard the purchase of real estate in the UK as a direct
					investment, our specialists will be able to undertake the search for
					responsible tenants, check their creditworthiness, formalize the
					contract and register with the tax authorities."
						/>
						<br />
						<br />
						<FormattedMessage
							id="management.10"
							defaultMessage="Services offered:"
						/>
						<br />
						<br />
						&ensp; &ensp;{' '}
						<FormattedMessage
							id="management.11"
							defaultMessage=" - Consultation of owners about the most profitable use
						of their property."
						/>
						<br />
						<br />
						&ensp; &ensp;{' '}
						<FormattedMessage
							id="management.12"
							defaultMessage=" - Search for potential tenants of your property."
						/>
						<br />
						<br />
						&ensp; &ensp;{' '}
						<FormattedMessage
							id="management.13"
							defaultMessage=" - Optimization of payment for all utility, technical
						and administrative accounts."
						/>{' '}
						<br />
						<br />
						&ensp; &ensp;{' '}
						<FormattedMessage
							id="management.14"
							defaultMessage=" - Regular check of mail and correspondence arriving at
						the address."
						/>
						<br />
						<br />
						&ensp; &ensp;{' '}
						<FormattedMessage
							id="management.15"
							defaultMessage=" - Guarantee of property safety."
						/>
						<br />
						<br />
						&ensp; &ensp;{' '}
						<FormattedMessage
							id="management.16"
							defaultMessage=" - Maintenance and technical support of the premises."
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

export default connect(mapStateToProps)(ManagementService);
