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

class ServiceTabs extends Component {
	render() {
		return (
			<div>
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
								Buying and Selling Real Estate
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
								Excursions and Study Tours
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
								Opening Bank Accounts
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
								Moving and Arranging
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
								Property Management
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
								Repair and Design
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
								Immigration
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
								Legal Advice
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
								Mortgage
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
								Education
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
								Tax Issues
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
								Investments
							</a>
						</li>
					</ul>
					<div className="tab-content">
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
		);
	}
}

export default ServiceTabs;
