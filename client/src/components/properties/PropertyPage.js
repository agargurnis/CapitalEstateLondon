import React, { Component } from 'react';
import FlatCard from './PropertyCard';
import GoogleMapReact from 'google-map-react';
import PropertyMarker from './PropertyMarker';
import SelectListGroup from '../common/SelectListGroup';

class Flat extends Component {
	constructor(props) {
		super(props);
		this.state = {
			properties: [],
			allProperties: [],
			selectedProperty: null,
			search: ''
		};
	}

	componentDidMount() {
		const url =
			'https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json';

		fetch(url)
			.then(response => response.json())
			.then(data => {
				this.setState({
					properties: data,
					allProperties: data
				});
			});
	}

	selectProperty = property => {
		this.setState({
			selectedProperty: property
		});
	};

	handleSearch = event => {
		this.setState({
			search: event.target.value,
			properties: this.state.allProperties.filter(property =>
				new RegExp(event.target.value, 'i').exec(property.name)
			)
		});
	};

	render() {
		// Select options for number of rooms
		const bedNumberOptions = [
			{ label: 'Any', value: 0 },
			{ label: '1', value: '1' },
			{ label: '2', value: '2' },
			{ label: '3', value: '3' },
			{ label: '4', value: '4' },
			{ label: '5', value: '5' },
			{ label: '6+', value: '6+' }
		];
		// Select options for price
		const priceOptions = [
			{ label: 'Any', value: 0 },
			{ label: '£500k', value: '500' },
			{ label: '£750k', value: '750' },
			{ label: '£1m', value: '1000' },
			{ label: '£1.25m', value: '1250' },
			{ label: '£1.5m', value: '1500' },
			{ label: '£1.75m', value: '1750' },
			{ label: '£2m', value: '2000' },
			{ label: '£2.5m', value: '2500' },
			{ label: '£3m', value: '3000' },
			{ label: '£3.5m', value: '3500' },
			{ label: '£4m', value: '4000' },
			{ label: '£5m+', value: '5000+' }
		];
		// Select options for parking
		const parkingOptions = [
			{ label: 'Parking', value: 0 },
			{ label: '1+', value: '1' },
			{ label: '2+', value: '2' },
			{ label: '3+', value: '3' }
		];

		let center = {
			lat: 48.8566,
			lng: 2.3522
		};

		if (this.state.selectedProperty) {
			center = {
				lat: this.state.selectedProperty.lat,
				lng: this.state.selectedProperty.lng
			};
		}

		const zoom = 14;

		return (
			<div>
				<div className="search-container">
					<div className="row">
						<div className="col-10 mr-0 pr-0">
							<div className="search">
								<input
									type="text"
									placeholder="What are you looking for?"
									value={this.state.search}
									onChange={this.handleSearch}
								/>
							</div>
						</div>
						<div className="col-2 align-self-center pl-0 ml-0">
							<div>
								<button
									className="more-button"
									type="button"
									data-toggle="collapse"
									data-target="#collapseMoreOptions"
									aria-expanded="false"
									aria-controls="collapseMoreOptions"
								>
									More Options
								</button>
							</div>
						</div>
					</div>
					<div className="row collapse px-2" id="collapseMoreOptions">
						<div className="col">
							<SelectListGroup
								placeholder="Any"
								name="minPrice"
								value={this.state.minPrice}
								onChange={this.onChange}
								options={priceOptions}
								info="Min Price"
							/>
						</div>
						<div className="col">
							<SelectListGroup
								placeholder="Any"
								name="maxPrice"
								value={this.state.maxPrice}
								onChange={this.onChange}
								options={priceOptions}
								info="Max Price"
							/>
						</div>
						<div className="col">
							<SelectListGroup
								placeholder="Any"
								name="parking"
								value={this.state.minBeds}
								onChange={this.onChange}
								options={bedNumberOptions}
								info="Min Beds"
							/>
						</div>
						<div className="col">
							<SelectListGroup
								placeholder="Any"
								name="parking"
								value={this.state.maxBeds}
								onChange={this.onChange}
								options={bedNumberOptions}
								info="Max Beds"
							/>
						</div>
						<div className="col">
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
						<div className="properties">
							{this.state.properties.map(property => {
								return (
									<FlatCard
										key={property.name}
										property={property}
										selectProperty={this.selectProperty}
									/>
								);
							})}
						</div>
					</div>

					<div className="map-container">
						<div className="the-map">
							<GoogleMapReact center={center} zoom={zoom}>
								{this.state.properties.map(property => {
									return (
										<PropertyMarker
											key={property.name}
											lat={property.lat}
											lng={property.lng}
											text={property.price}
											selected={property === this.state.selectedProperty}
										/>
									);
								})}
							</GoogleMapReact>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Flat;
