import React, { Component } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import movingServiceMessages from '../../translations/movingServiceMessages';

class MovingService extends Component {
	render() {
		return (
			<IntlProvider
				locale={this.props.lang}
				messages={movingServiceMessages[this.props.lang]}
			>
				<div>
					<h2 className="text-center">
						<FormattedMessage
							id="moving.title"
							defaultMessage="Moving and arranging"
						/>
					</h2>

					<p className="pt-4">
						<FormattedMessage
							id="moving.1"
							defaultMessage="The package of services of Capital Estate London includes full support
					of entry to a new property and the solution of related issues."
						/>
						<br />
						<br />
						<FormattedMessage
							id="moving.2"
							defaultMessage="Including: opening of accounts for public services, connection of
						telephone line and Internet, insurance, registration in the local
						municipality, choice of interior designer, furnishing and organization
						of cleaning."
						/>

						<br />
						<br />
						<FormattedMessage
							id="moving.3"
							defaultMessage="Thanks to this, our clients can call on the fully functional,
						furnished and prepared living space and get rid of the unnecessary
						headache, which is most often associated with both repair and moving
						to a new location."
						/>

						<br />
						<br />
						<FormattedMessage
							id="moving.4"
							defaultMessage="Our employees provide full service of the real estate, including
						checking and timely payment of all utilities and maintenance payments
						and municipal tax."
						/>

						<br />
						<br />
						<FormattedMessage
							id="moving.5"
							defaultMessage="We also organize the necessary annual inspections with the help of
						experts for the care of equipment, preventive maintenance and regular
						cleaning."
						/>

						<br />
						<br />
						<FormattedMessage
							id="moving.6"
							defaultMessage="In the event of an unforeseen situation, our client's real estate
						related business can take care of the problem (by prior arrangement)."
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

export default connect(mapStateToProps)(MovingService);
