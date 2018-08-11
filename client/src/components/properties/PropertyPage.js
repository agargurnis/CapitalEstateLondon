import React, { Component } from 'react';
import PropertyCard from './PropertyCard';
import GoogleMapReact from 'google-map-react';
import PropertyMarker from './PropertyMarker';
import SelectListGroup from '../common/SelectListGroup';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProperties } from '../../actions/propertyActions';
import Spinner from '../common/Spinner';

class PropertyPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			minPrice: 0,
			maxPrice: 100000000,
			minBeds: 0,
			maxBeds: 20,
			parking: 0,
			selectedProperty: null,
			properties: [],
			allProperties: [],
			searchValue: ''
		};

		this.onChange = this.onChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.selectProperty = this.selectProperty.bind(this);
	}

	componentDidMount() {
		this.props.getProperties();
	}

	selectProperty = property => {
		this.setState({
			selectedProperty: property
		});
	};

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSearch = e => {
		this.setState({
			searchValue: e.target.value.toLocaleLowerCase()
		});
	};

	render() {
		const { properties, loading } = this.props.property;
		let propertyContent;
		let propertyMarkers;

		if (properties === null || loading) {
			propertyContent = <Spinner />;
		} else {
			const filteredList = properties.filter(
				property =>
					(property.address
						.toLocaleLowerCase()
						.includes(this.state.searchValue) &&
						parseInt(property.price.replace(/,/g, ''), 10) >=
							this.state.minPrice &&
						parseInt(property.price.replace(/,/g, ''), 10) <=
							this.state.maxPrice &&
						property.nr_of_bedrooms >= this.state.minBeds &&
						property.nr_of_bedrooms <= this.state.maxBeds &&
						property.nr_of_parking >= this.state.parking) ||
					(property.district
						.toLocaleLowerCase()
						.includes(this.state.searchValue) &&
						parseInt(property.price.replace(/,/g, ''), 10) >=
							this.state.minPrice &&
						parseInt(property.price.replace(/,/g, ''), 10) <=
							this.state.maxPrice &&
						property.nr_of_bedrooms >= this.state.minBeds &&
						property.nr_of_bedrooms <= this.state.maxBeds &&
						property.nr_of_parking >= this.state.parking) ||
					(property.post_code
						.toLocaleLowerCase()
						.includes(this.state.searchValue) &&
						parseInt(property.price.replace(/,/g, ''), 10) >=
							this.state.minPrice &&
						parseInt(property.price.replace(/,/g, ''), 10) <=
							this.state.maxPrice &&
						property.nr_of_bedrooms >= this.state.minBeds &&
						property.nr_of_bedrooms <= this.state.maxBeds &&
						property.nr_of_parking >= this.state.parking)
			);

			propertyContent = filteredList.map(property => (
				<PropertyCard
					key={property._id}
					property={property}
					selectProperty={this.selectProperty}
				/>
			));

			propertyMarkers = filteredList.map(property => {
				return (
					<PropertyMarker
						key={property._id}
						lat={property.lat}
						lng={property.lon}
						text={property.price}
						selected={property === this.state.selectedProperty}
					/>
				);
			});
		}
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
			{ label: 'Any', value: 0 },
			{ label: '1', value: 1 },
			{ label: '2', value: 2 },
			{ label: '3', value: 3 }
		];

		const zoom = 14;

		let center = {
			lat: 51.5074,
			lng: -0.1278
		};

		if (this.state.selectedProperty) {
			center = {
				lat: this.state.selectedProperty.lat,
				lng: this.state.selectedProperty.lon
			};
		}

		return (
			<div>
				<div className="search-container">
					<div className="row justify-content-center">
						<div className="col-sm-10 col-xs-10 property-search-bar mr-0 pr-0">
							<div className="search">
								<input
									type="text"
									placeholder="You can search by street, district or post code..."
									value={this.state.searchValue}
									onChange={this.handleSearch}
								/>
							</div>
						</div>
						<div className="col-sm-2 col-xs-2 property-search-button align-self-center pl-0 ml-0">
							<div>
								<button
									className="more-button"
									type="button"
									data-toggle="collapse"
									data-target="#collapseMoreOptions"
									aria-expanded="false"
									aria-controls="collapseMoreOptions"
								>
									More <span className="hide-below-eh">Options</span>
								</button>
							</div>
						</div>
					</div>
					<div className="row collapse px-2" id="collapseMoreOptions">
						<div className="col-sm col-xs-12">
							<SelectListGroup
								placeholder="Any"
								name="minPrice"
								value={this.state.minPrice}
								onChange={this.onChange}
								options={minPriceOptions}
								info="Min Price"
							/>
						</div>
						<div className="col-sm col-xs-12">
							<SelectListGroup
								placeholder="Any"
								name="maxPrice"
								value={this.state.maxPrice}
								onChange={this.onChange}
								options={maxPriceOptions}
								info="Max Price"
							/>
						</div>
						<div className="col-sm col-xs-12">
							<SelectListGroup
								placeholder="Any"
								name="minBeds"
								value={this.state.minBeds}
								onChange={this.onChange}
								options={minBedOptions}
								info="Min Beds"
							/>
						</div>
						<div className="col-sm col-xs-12">
							<SelectListGroup
								placeholder="Any"
								name="maxBeds"
								value={this.state.maxBeds}
								onChange={this.onChange}
								options={maxBedOptions}
								info="Max Beds"
							/>
						</div>
						<div className="col-sm col-xs-12">
							<SelectListGroup
								placeholder="Any"
								name="parking"
								value={this.state.parking}
								onChange={this.onChange}
								options={parkingOptions}
								info="Parking"
							/>
						</div>
					</div>
				</div>
				<div className="flex-wrapper">
					<div className="properties-container">
						<div className="properties">{propertyContent}</div>
					</div>
					<div className="map-container">
						<div className="the-map">
							<GoogleMapReact center={center} zoom={zoom}>
								{propertyMarkers}
							</GoogleMapReact>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
PropertyPage.propTypes = {
	getProperties: PropTypes.func.isRequired,
	property: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	property: state.property,
	selectedProperty: state.selectedProperty
});

export default connect(
	mapStateToProps,
	{ getProperties }
)(PropertyPage);
