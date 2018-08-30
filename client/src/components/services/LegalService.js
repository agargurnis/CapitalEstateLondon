import React, { Component } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import legalServiceMessages from '../../translations/legalServiceMessages';

class LegalService extends Component {
	render() {
		return (
			<IntlProvider
				locale={this.props.lang}
				messages={legalServiceMessages[this.props.lang]}
			>
				<div>
					<h2 className="text-center">
						<FormattedMessage id="legal.title1" defaultMessage="Legal advice" />
					</h2>

					<p className="pt-4">
						<FormattedMessage
							id="legal.1"
							defaultMessage="Buying a property is a complex and time-consuming process, which
					involves a whole range of measures, both before the transaction,
					during its registration and even after it."
						/>
						<br />
						<br />
						<FormattedMessage
							id="legal.2"
							defaultMessage="It is especially difficult to acquire real estate abroad, because
					you do not fully understand the legislative subtleties, as well as
					the details that you need to pay attention to when choosing an
					object."
						/>
						<br />
						<br />
						<FormattedMessage
							id="legal.3"
							defaultMessage="For example, there is a notion of \'gesamping\' when, after signing a
					preliminary contract, the seller declares that he has found a more
					profitable buyer and wants to give up the agreement if the buyer
					does not lay out an additional amount of money."
						/>
						<br />
						<br />
						<FormattedMessage
							id="legal.4"
							defaultMessage="As a rule, this is a trick, but the buyer intending to acquire this
					object has to make concessions."
						/>
						<br />
						<br />
						<FormattedMessage
							id="legal.5"
							defaultMessage="	Another legislative moment unknown to foreigners - the seller is not
						responsible for the defects of the object discovered after the
						transaction. There are many nuances..."
						/>
						<br />
						<br />
						<FormattedMessage
							id="legal.6"
							defaultMessage="Therefore, if you want to conduct a deal from start to finish
					without losing for yourself - trust professionals! We acquaint
					ourselves with the main legal terms with which you will face during
					the sale and purchase of real estate."
						/>
					</p>
					<h4 className="text-center">
						<FormattedMessage id="legal.title2" defaultMessage="Freehold" />
					</h4>
					<p className="pt-4">
						<FormattedMessage
							id="legal.7"
							defaultMessage="Freehold, in English terms - this is the absolute right of ownership
						of real estate."
						/>
						<br />
						<br />
						<FormattedMessage
							id="legal.8"
							defaultMessage="Buying real estate freehold, the buyer becomes a full owner of the
					land and all buildings located on the site."
						/>

						<br />
						<br />
						<FormattedMessage
							id="legal.9"
							defaultMessage="	Unconditional ownership gives the buyer the right to do anything
							with his house, but naturally within the law."
						/>
						<br />
						<br />
						<FormattedMessage
							id="legal.10"
							defaultMessage="	Most often, real estate freeholds, these are detached houses,
						estates or land. Usually, this property is more expensive than real
						estate leasing, but still not in all cases."
						/>

						<br />
						<br />
						<FormattedMessage
							id="legal.11"
							defaultMessage="Since the freehold is an absolute right of ownership of real estate
						and land, annual ground rent is not payable, and the owner himself
						determines and controls the costs for the care, maintenance and
						maintenance of real estate."
						/>
					</p>
					<h4 className="text-center">
						<FormattedMessage id="legal.title3" defaultMessage="Leasehold" />
					</h4>
					<p className="pt-4">
						<FormattedMessage
							id="legal.12"
							defaultMessage="Leasehold - an extremely common form of ownership, when it comes to
					apartments. In this case, the buyer receives an exclusive right of
					ownership of the internal area of ​​the apartment and is responsible
					for maintaining in good condition only this particular \'cell\', which
					occupies the building of his apartment."
						/>

						<br />
						<br />
						<FormattedMessage
							id="legal.13"
							defaultMessage="Leasehold implies the transfer to the buyer of the exclusive right
						to own property for a period of time established in the contract
						between the landowner and the buyer of real estate in this land."
						/>

						<br />
						<br />
						<FormattedMessage
							id="legal.14"
							defaultMessage="The term of ownership can be from one to 999 years. In this case,
						the buyer pays an annual land tax to the owner of the land plot."
						/>
						<br />
						<br />
						<FormattedMessage
							id="legal.15"
							defaultMessage="The size of this \'ground rent\' is from 100 to 1000 pounds per year."
						/>
						<br />
						<br />
						<FormattedMessage
							id="legal.16"
							defaultMessage="Leasehold renewal in the UK is a complex legal process, in which the
					experts of our company will help you to understand."
						/>
					</p>
					<h4 className="text-center">
						<FormattedMessage
							id="legal.title4"
							defaultMessage="Shared Freehold"
						/>
					</h4>
					<p className="pt-4">
						<FormattedMessage
							id="legal.17"
							defaultMessage="Sometimes, apartments can be sold with the right of shareholding
					freehold, meaning that the buyer, acquiring property with the right
					of ownership on a lease, also acquires a share of the freehold of
					the building in which the property is located."
						/>

						<br />
						<br />
						<FormattedMessage
							id="legal.18"
							defaultMessage="Such a right can be transferred through the acquisition of shares in
						the company to which the freehold of the building belongs or the
						freehold may belong to individuals (maximum four)."
						/>

						<br />
						<br />
						<FormattedMessage
							id="legal.19"
							defaultMessage="In the case of a shared freehold, the costs for the care,
						maintenance and maintenance of the building can be controlled by the
						owners themselves."
						/>
					</p>
					<h4 className="text-center">
						<FormattedMessage
							id="legal.title5"
							defaultMessage="How to arrange a redevelopment?"
						/>
					</h4>
					<p className="pt-4">
						<FormattedMessage
							id="legal.20"
							defaultMessage="Before starting work in the house, it is important to check the
					relevant laws and conditions of the signed lease with respect to the
					restrictions and requirements for the redevelopment work."
						/>

						<br />
						<br />
						<FormattedMessage
							id="legal.21"
							defaultMessage="	If the property is acquired with the right to own real estate on
							lease (lizhold), then certain redevelopment work may require prior
							permission from the landlord or the owner of the freehold, as well
							as from the local architectural and planning office."
						/>

						<br />
						<br />
						<FormattedMessage
							id="legal.22"
							defaultMessage="Employees of Capital Estate London will be able to advise on all
						matters related to the redevelopment of your property."
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

export default connect(mapStateToProps)(LegalService);
