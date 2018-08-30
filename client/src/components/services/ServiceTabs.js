import React, { Component } from 'react';
import BuyingSellingService from './BuyingSellingService';
import ExcursionService from './ExcursionService';
import BankService from './BankService';
import MovingService from './MovingService';
import ManagementService from './ManagementService';
import RepairService from './RepairService';
import ImmigrationService from './ImmigrationService';
import LegalService from './LegalService';
import MortgageService from './MortgageService';
import EducationService from './EducationService';
import TaxService from './TaxService';
import InvestmentService from './InvestmentService';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import serviceTabsMessages from '../../translations/serviceTabsMessages';

class ServiceTabs extends Component {
	render() {
		return (
			<IntlProvider
				locale={this.props.lang}
				messages={serviceTabsMessages[this.props.lang]}
			>
				<div>
					<div className="show-on-small-screens">
						<div id="accordion">
							<div className="card">
								<div className="card-header" id="headingOne">
									<h5 className="mb-0 service-row">
										<i className="fas fa-shopping-cart service-icon" />
										<button
											className="btn btn-link collapsed btn-accordion"
											data-toggle="collapse"
											data-target="#collapseOne"
											aria-expanded="false"
											aria-controls="collapseOne"
										>
											<FormattedMessage
												id="serviceTabs.1"
												defaultMessage="Buying and Selling Real Estate"
											/>
										</button>
									</h5>
								</div>

								<div
									id="collapseOne"
									className="collapse"
									aria-labelledby="headingOne"
									data-parent="#accordion"
								>
									<div className="card-body">
										<BuyingSellingService />
									</div>
								</div>
							</div>
							<div className="card">
								<div className="card-header" id="headingTwo">
									<h5 className="mb-0 service-row">
										<i className="fas fa-map-marked-alt service-icon" />
										<button
											className="btn btn-link collapsed btn-accordion"
											data-toggle="collapse"
											data-target="#collapseTwo"
											aria-expanded="false"
											aria-controls="collapseTwo"
										>
											<FormattedMessage
												id="serviceTabs.2"
												defaultMessage="Excursions and Study Tours"
											/>
										</button>
									</h5>
								</div>
								<div
									id="collapseTwo"
									className="collapse"
									aria-labelledby="headingTwo"
									data-parent="#accordion"
								>
									<div className="card-body">
										<ExcursionService />
									</div>
								</div>
							</div>
							<div className="card">
								<div className="card-header" id="headingThree">
									<h5 className="mb-0 service-row">
										<i className="fas fa-piggy-bank service-icon" />
										<button
											className="btn btn-link collapsed btn-accordion"
											data-toggle="collapse"
											data-target="#collapseThree"
											aria-expanded="false"
											aria-controls="collapseThree"
										>
											<FormattedMessage
												id="serviceTabs.3"
												defaultMessage="Opening Bank Accounts"
											/>
										</button>
									</h5>
								</div>
								<div
									id="collapseThree"
									className="collapse"
									aria-labelledby="headingThree"
									data-parent="#accordion"
								>
									<div className="card-body">
										<BankService />
									</div>
								</div>
							</div>
							<div className="card">
								<div className="card-header" id="headingFour">
									<h5 className="mb-0 service-row">
										<i className="fas fa-people-carry service-icon" />
										<button
											className="btn btn-link collapsed btn-accordion"
											data-toggle="collapse"
											data-target="#collapseFour"
											aria-expanded="false"
											aria-controls="collapseFour"
										>
											<FormattedMessage
												id="serviceTabs.4"
												defaultMessage="Moving and Arranging"
											/>
										</button>
									</h5>
								</div>

								<div
									id="collapseFour"
									className="collapse"
									aria-labelledby="headingFour"
									data-parent="#accordion"
								>
									<div className="card-body">
										<MovingService />
									</div>
								</div>
							</div>
							<div className="card">
								<div className="card-header" id="headingFive">
									<h5 className="mb-0 service-row">
										<i className="fas fa-concierge-bell service-icon" />
										<button
											className="btn btn-link collapsed btn-accordion"
											data-toggle="collapse"
											data-target="#collapseFive"
											aria-expanded="false"
											aria-controls="collapseFive"
										>
											<FormattedMessage
												id="serviceTabs.5"
												defaultMessage="Property Management"
											/>
										</button>
									</h5>
								</div>

								<div
									id="collapseFive"
									className="collapse"
									aria-labelledby="headingFive"
									data-parent="#accordion"
								>
									<div className="card-body">
										<ManagementService />
									</div>
								</div>
							</div>
							<div className="card">
								<div className="card-header" id="headingSix">
									<h5 className="mb-0 service-row">
										<i className="fas fa-paint-roller service-icon" />
										<button
											className="btn btn-link collapsed btn-accordion"
											data-toggle="collapse"
											data-target="#collapseSix"
											aria-expanded="false"
											aria-controls="collapseSix"
										>
											<FormattedMessage
												id="serviceTabs.6"
												defaultMessage="Repair and Design"
											/>
										</button>
									</h5>
								</div>

								<div
									id="collapseSix"
									className="collapse"
									aria-labelledby="headingSix"
									data-parent="#accordion"
								>
									<div className="card-body">
										<RepairService />
									</div>
								</div>
							</div>
							<div className="card">
								<div className="card-header" id="headingSeven">
									<h5 className="mb-0 service-row">
										<i className="fas fa-plane-arrival service-icon" />
										<button
											className="btn btn-link collapsed btn-accordion"
											data-toggle="collapse"
											data-target="#collapseSeven"
											aria-expanded="false"
											aria-controls="collapseSeven"
										>
											<FormattedMessage
												id="serviceTabs.7"
												defaultMessage="Immigration"
											/>
										</button>
									</h5>
								</div>

								<div
									id="collapseSeven"
									className="collapse"
									aria-labelledby="headingSeven"
									data-parent="#accordion"
								>
									<div className="card-body">
										<ImmigrationService />
									</div>
								</div>
							</div>
							<div className="card">
								<div className="card-header" id="headingEight">
									<h5 className="mb-0 service-row">
										<i className="fas fa-balance-scale service-icon" />
										<button
											className="btn btn-link collapsed btn-accordion"
											data-toggle="collapse"
											data-target="#collapseEight"
											aria-expanded="false"
											aria-controls="collapseEight"
										>
											<FormattedMessage
												id="serviceTabs.8"
												defaultMessage="Legal Advice"
											/>
										</button>
									</h5>
								</div>

								<div
									id="collapseEight"
									className="collapse"
									aria-labelledby="headingEight"
									data-parent="#accordion"
								>
									<div className="card-body">
										<LegalService />
									</div>
								</div>
							</div>
							<div className="card">
								<div className="card-header" id="headingNine">
									<h5 className="mb-0 service-row">
										<i className="fas fa-home service-icon" />
										<button
											className="btn btn-link collapsed btn-accordion"
											data-toggle="collapse"
											data-target="#collapseNine"
											aria-expanded="false"
											aria-controls="collapseNine"
										>
											<FormattedMessage
												id="serviceTabs.9"
												defaultMessage="Mortgage"
											/>
										</button>
									</h5>
								</div>

								<div
									id="collapseNine"
									className="collapse"
									aria-labelledby="headingNine"
									data-parent="#accordion"
								>
									<div className="card-body">
										<MortgageService />
									</div>
								</div>
							</div>
							<div className="card">
								<div className="card-header" id="headingTen">
									<h5 className="mb-0 service-row">
										<i className="fas fa-graduation-cap service-icon" />
										<button
											className="btn btn-link collapsed btn-accordion"
											data-toggle="collapse"
											data-target="#collapseTen"
											aria-expanded="false"
											aria-controls="collapseTen"
										>
											<FormattedMessage
												id="serviceTabs.10"
												defaultMessage="Education"
											/>
										</button>
									</h5>
								</div>

								<div
									id="collapseTen"
									className="collapse"
									aria-labelledby="headingTen"
									data-parent="#accordion"
								>
									<div className="card-body">
										<EducationService />
									</div>
								</div>
							</div>
							<div className="card">
								<div className="card-header" id="headingEleven">
									<h5 className="mb-0 service-row">
										<i className="fas fa-hand-holding-usd service-icon" />
										<button
											className="btn btn-link collapsed btn-accordion"
											data-toggle="collapse"
											data-target="#collapseEleven"
											aria-expanded="false"
											aria-controls="collapseEleven"
										>
											<FormattedMessage
												id="serviceTabs.11"
												defaultMessage="Tax Issues"
											/>
										</button>
									</h5>
								</div>

								<div
									id="collapseEleven"
									className="collapse"
									aria-labelledby="headingEleven"
									data-parent="#accordion"
								>
									<div className="card-body">
										<TaxService />
									</div>
								</div>
							</div>
							<div className="card">
								<div className="card-header" id="headingTwelve">
									<h5 className="mb-0 service-row">
										<i className="fas fa-dollar-sign service-icon" />
										<button
											className="btn btn-link btn-accordion"
											data-toggle="collapse"
											data-target="#collapseTwelve"
											aria-expanded="true"
											aria-controls="collapseTwelve"
										>
											<FormattedMessage
												id="serviceTabs.12"
												defaultMessage="Investments"
											/>
										</button>
									</h5>
								</div>

								<div
									id="collapseTwelve"
									className="collapse show"
									aria-labelledby="headingTwelve"
									data-parent="#accordion"
								>
									<div className="card-body">
										<InvestmentService />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="show-on-large-screens">
						<div className="d-flex flex-row py-5">
							<ul
								className="nav nav-tabs nav-tabs--vertical nav-tabs--left"
								role="navigation"
							>
								<li className="service-nav-item">
									<a
										href="#buysell"
										className="nav-link active"
										data-toggle="tab"
										role="tab"
										aria-controls="lorem"
									>
										<FormattedMessage
											id="serviceTabs.1"
											defaultMessage="Buying and Selling Real Estate"
										/>
									</a>
								</li>
								<li className="service-nav-item">
									<a
										href="#excursion"
										className="nav-link"
										data-toggle="tab"
										role="tab"
										aria-controls="sit-amet"
									>
										<FormattedMessage
											id="serviceTabs.2"
											defaultMessage="Excursions and Study Tours"
										/>
									</a>
								</li>
								<li className="service-nav-item">
									<a
										href="#bank"
										className="nav-link"
										data-toggle="tab"
										role="tab"
										aria-controls="sit-amet"
									>
										<FormattedMessage
											id="serviceTabs.3"
											defaultMessage="Opening Bank Accounts"
										/>
									</a>
								</li>
								<li className="service-nav-item">
									<a
										href="#moving"
										className="nav-link"
										data-toggle="tab"
										role="tab"
										aria-controls="sit-amet"
									>
										<FormattedMessage
											id="serviceTabs.4"
											defaultMessage="Mortgage"
										/>
									</a>
								</li>
								<li className="service-nav-item">
									<a
										href="#management"
										className="nav-link"
										data-toggle="tab"
										role="tab"
										aria-controls="ipsum"
									>
										<FormattedMessage
											id="serviceTabs.5"
											defaultMessage="Property Management"
										/>
									</a>
								</li>
								<li className="service-nav-item">
									<a
										href="#repair"
										className="nav-link"
										data-toggle="tab"
										role="tab"
										aria-controls="sit-amet"
									>
										<FormattedMessage
											id="serviceTabs.6"
											defaultMessage="Repair and Design"
										/>
									</a>
								</li>
								<li className="service-nav-item">
									<a
										href="#immigration"
										className="nav-link"
										data-toggle="tab"
										role="tab"
										aria-controls="sit-amet"
									>
										<FormattedMessage
											id="serviceTabs.7"
											defaultMessage="Immigration"
										/>
									</a>
								</li>
								<li className="service-nav-item">
									<a
										href="#legal"
										className="nav-link"
										data-toggle="tab"
										role="tab"
										aria-controls="sit-amet"
									>
										<FormattedMessage
											id="serviceTabs.8"
											defaultMessage="Legal Advice"
										/>
									</a>
								</li>
								<li className="service-nav-item">
									<a
										href="#mortgage"
										className="nav-link"
										data-toggle="tab"
										role="tab"
										aria-controls="dolor"
									>
										<FormattedMessage
											id="serviceTabs.9"
											defaultMessage="Mortgage"
										/>
									</a>
								</li>
								<li className="service-nav-item">
									<a
										href="#education"
										className="nav-link"
										data-toggle="tab"
										role="tab"
										aria-controls="sit-amet"
									>
										<FormattedMessage
											id="serviceTabs.10"
											defaultMessage="Education"
										/>
									</a>
								</li>
								<li className="service-nav-item">
									<a
										href="#tax"
										className="nav-link"
										data-toggle="tab"
										role="tab"
										aria-controls="sit-amet"
									>
										<FormattedMessage
											id="serviceTabs.11"
											defaultMessage="Tax Issues"
										/>
									</a>
								</li>
								<li className="service-nav-item">
									<a
										href="#investment"
										className="nav-link"
										data-toggle="tab"
										role="tab"
										aria-controls="sit-amet"
									>
										<FormattedMessage
											id="serviceTabs.12"
											defaultMessage="Investments"
										/>
									</a>
								</li>
							</ul>

							<div className="tab-content mr-3">
								<div
									className="tab-pane fade show active"
									id="buysell"
									role="tabpanel"
								>
									<BuyingSellingService />
								</div>

								<div className="tab-pane fade" id="excursion" role="tabpanel">
									<ExcursionService />
								</div>

								<div className="tab-pane fade" id="bank" role="tabpanel">
									<BankService />
								</div>

								<div className="tab-pane fade" id="moving" role="tabpanel">
									<MovingService />
								</div>

								<div className="tab-pane fade" id="management" role="tabpanel">
									<ManagementService />
								</div>

								<div className="tab-pane fade" id="repair" role="tabpanel">
									<RepairService />
								</div>

								<div className="tab-pane fade" id="immigration" role="tabpanel">
									<ImmigrationService />
								</div>

								<div className="tab-pane fade" id="legal" role="tabpanel">
									<LegalService />
								</div>

								<div className="tab-pane fade" id="mortgage" role="tabpanel">
									<MortgageService />
								</div>

								<div className="tab-pane fade" id="education" role="tabpanel">
									<EducationService />
								</div>

								<div className="tab-pane fade" id="tax" role="tabpanel">
									<TaxService />
								</div>

								<div className="tab-pane fade" id="investment" role="tabpanel">
									<InvestmentService />
								</div>
							</div>
						</div>
					</div>
				</div>
			</IntlProvider>
		);
	}
}

const mapStateToProps = state => ({
	lang: state.locale.lang
});

export default connect(mapStateToProps)(ServiceTabs);
