import React, { Component } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import repairServiceMessages from '../../translations/repairServiceMessages';

class RepairService extends Component {
	render() {
		return (
			<IntlProvider
				locale={this.props.lang}
				messages={repairServiceMessages[this.props.lang]}
			>
				<div>
					<h2 className="text-center">
						<FormattedMessage
							id="repair.title"
							defaultMessage="Repair and design"
						/>
					</h2>

					<p className="pt-4">
						<FormattedMessage
							id="repair.1"
							defaultMessage="The latest trend in the market - buyers are increasingly reliant on
				the taste of previous property owners in terms of interior design and
				go for his cardinal changes."
						/>
						<br />
						<br />
						<FormattedMessage
							id="repair.2"
							defaultMessage="This is understandable. Times change, tastes too."
						/>
						<br />
						<br />
						<FormattedMessage
							id="repair.3"
							defaultMessage="Capital Estate London cooperates fruitfully with leading London
					architects, interior designers who have an excellent reputation in
					their field of activity. After agreeing an indicative budget,
					designers begin to work, offering as a result to the client for
					consideration and approval of several projects developed by them."
						/>
						<br />
						<br />
						<FormattedMessage
							id="repair.4"
							defaultMessage="After choosing the option you like, the client communicates with the
					designers directly. However, at the request of the client, Capital
					Estate London employees will be able to participate in all subsequent
					meetings and negotiations."
						/>
						<br />
						<br />
						<FormattedMessage
							id="repair.5"
							defaultMessage="Services offered:"
						/>
						<br />
						<br />
						&ensp; &ensp;{' '}
						<FormattedMessage
							id="repair.6"
							defaultMessage="- Development of redevelopment project and / or project
					design"
						/>
						<br />
						<br />
						&ensp; &ensp;{' '}
						<FormattedMessage
							id="repair.7"
							defaultMessage=" - Reconciliation of redevelopment with local authorities
					and / or the building manager"
						/>
						<br />
						<br />
						&ensp; &ensp;{' '}
						<FormattedMessage
							id="repair.8"
							defaultMessage="- Supervision of construction works"
						/>
						<br />
						<br />
						&ensp; &ensp;{' '}
						<FormattedMessage
							id="repair.9"
							defaultMessage=" - Interior design"
						/>
						<br />
						<br />
						&ensp; &ensp;{' '}
						<FormattedMessage
							id="repair.10"
							defaultMessage="- Selection of style, color, furniture and accessories"
						/>
						<br />
						<br />
						&ensp; &ensp;{' '}
						<FormattedMessage
							id="repair.11"
							defaultMessage="- Organization of delivery and installation of
					furniture."
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

export default connect(mapStateToProps)(RepairService);
