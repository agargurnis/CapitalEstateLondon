import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
import SelectStringListGroup from '../common/SelectStringListGroup';
import SelectNumberListGroup from '../common/SelectNumberListGroup';
// import PropTypes from 'prop-types';

class Searchbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			keywords: '',
			property_status: '',
			parking: 0,
			minBeds: 0,
			maxBeds: 20,
			minPrice: 0,
			maxPrice: 100000000
		};
		this.onChange = this.onChange.bind(this);
		this.searchProperties = this.searchProperties.bind(this);
	}

	searchProperties() {
		this.props.history.push('/properties?minBeds=1&maxBeds=4');
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	render() {
		// Select options for min beds
		const minBedOptions = [
			{ label: 'Any', value: 0 },
			{ label: '1', value: 1 },
			{ label: '2', value: 2 },
			{ label: '3', value: 3 },
			{ label: '4', value: 4 },
			{ label: '5', value: 5 },
			{ label: '6', value: 6 }
		];
		// Select options for max beds
		const maxBedOptions = [
			{ label: 'Any', value: 20 },
			{ label: '1', value: 1 },
			{ label: '2', value: 2 },
			{ label: '3', value: 3 },
			{ label: '4', value: 4 },
			{ label: '5', value: 5 },
			{ label: '10', value: 10 },
			{ label: '15', value: 15 }
		];
		// Select options for max price
		const maxPriceOptions = [
			{ label: 'Any', value: 100000000 },
			{ label: '£500,000', value: 500000 },
			{ label: '£750,000', value: 750000 },
			{ label: '£1,000,000', value: 1000000 },
			{ label: '£1,250,000', value: 1250000 },
			{ label: '£1,500,000', value: 1500000 },
			{ label: '£1,750,000', value: 1750000 },
			{ label: '£2,000,000', value: 2000000 },
			{ label: '£2,500,000', value: 2500000 },
			{ label: '£3,000,000', value: 3000000 },
			{ label: '£3,500,000', value: 3500000 },
			{ label: '£4,000,000', value: 4000000 },
			{ label: '£5,000,000', value: 5000000 },
			{ label: '£10,000,000', value: 10000000 },
			{ label: '£25,000,000', value: 25000000 },
			{ label: '£50,000,000', value: 50000000 }
		];
		// Select options for min price
		const minPriceOptions = [
			{ label: 'Any', value: 0 },
			{ label: '£500,000', value: 500000 },
			{ label: '£750,000', value: 750000 },
			{ label: '£1,000,000', value: 1000000 },
			{ label: '£1,250,000', value: 1250000 },
			{ label: '£1,500,000', value: 1500000 },
			{ label: '£1,750,000', value: 1750000 },
			{ label: '£2,000,000', value: 2000000 },
			{ label: '£2,500,000', value: 2500000 },
			{ label: '£3,000,000', value: 3000000 },
			{ label: '£3,500,000', value: 3500000 },
			{ label: '£4,000,000', value: 4000000 },
			{ label: '£5,000,000', value: 5000000 }
		];
		// Select options for parking
		const parkingOptions = [
			{ label: 'Not Essential', value: 0 },
			{ label: '1', value: 1 },
			{ label: '2', value: 2 },
			{ label: '3', value: 3 }
		];
		// Select options for property status
		const statusOptions = [
			{ label: 'Property Status', value: 0 },
			{ label: 'Available', value: 'Available' },
			{ label: 'Under Development', value: 'Under Development' }
		];

		return (
			<div>
				<div onClick={this.searchProperties} className="search-form">
					<div className="row justify-content-center">
						<div className="col-1 ">
							<button className="btn btn-light search-button">Search</button>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 col-sm-6">
							<TextFieldGroup
								placeholder="Address, district or post code..."
								name="keywords"
								value={this.state.keywords}
								onChange={this.onChange}
								info="Keywords"
							/>
						</div>

						<div className="col-md-3 col-sm-6 hide-on-xs">
							<SelectStringListGroup
								placeholder="Any"
								name="property_status"
								value={this.state.property_status}
								onChange={this.onChange}
								options={statusOptions}
								info="Status"
							/>
						</div>
						<div className="col-md-3 col-sm-6 hide-on-xs">
							<SelectNumberListGroup
								placeholder="Any"
								name="parking"
								value={this.state.parking}
								onChange={this.onChange}
								options={parkingOptions}
								info="Parking"
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-3 col-xs-12 hide-on-xs">
							<SelectNumberListGroup
								placeholder="Any"
								name="minPrice"
								value={this.state.minPrice}
								onChange={this.onChange}
								options={minPriceOptions}
								info="Min Price"
							/>
						</div>
						<div className="col-sm-3 col-xs-12 hide-on-xs">
							<SelectNumberListGroup
								placeholder="Any"
								name="maxPrice"
								value={this.state.maxPrice}
								onChange={this.onChange}
								options={maxPriceOptions}
								info="Max Price"
							/>
						</div>
						<div className="col-sm-3 col-xs-12 hide-on-xs">
							<SelectNumberListGroup
								placeholder="Any"
								name="minBeds"
								value={this.state.minBeds}
								onChange={this.onChange}
								options={minBedOptions}
								info="Min Beds"
							/>
						</div>
						<div className="col-sm-3 col-xs-12 hide-on-xs">
							<SelectNumberListGroup
								placeholder="Any"
								name="maxBeds"
								value={this.state.maxBeds}
								onChange={this.onChange}
								options={maxBedOptions}
								info="Max Beds"
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

// Searchbar.propTypes = {
// 	errors: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
// 	profile: state.profile,
// 	errors: state.errors
// });

export default withRouter(Searchbar);
