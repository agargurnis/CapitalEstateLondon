import React, { Component } from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import SelectListGroup from '../common/SelectListGroup';
// import PropTypes from 'prop-types';

class Searchbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			keywords: '',
			location: '',
			property_type: '',
			property_status: '',
			parking: '',
			bathrooms: '',
			bedrooms: '',
			price: '',
			area: ''
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(e) {
		e.preventDefault();

		const searchData = {
			keywords: this.state.keywords,
			location: this.state.location,
			property_type: this.state.property_type,
			property_status: this.state.property_status,
			parking: this.state.parking,
			bathrooms: this.state.bathrooms,
			bedrooms: this.state.bedrooms,
			price: this.state.price,
			area: this.state.area
		};
		console.log(searchData);
		// this.props.createProfile(profileData, this.props.history);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	render() {
		// Select options for number of rooms
		const roomNumberOptions = [
			{ label: '1', value: '1' },
			{ label: '2', value: '2' },
			{ label: '3', value: '3' },
			{ label: '4', value: '4' },
			{ label: '5', value: '5' },
			{ label: '6+', value: '6+' }
		];
		// Select options for parking
		const parkingOptions = [
			{ label: 'Parking', value: 0 },
			{ label: 'Yes', value: 'Yes' },
			{ label: 'No', value: 'No' }
		];
		// Select options for property type
		const typeOptions = [
			{ label: 'Property Type', value: 0 },
			{ label: 'Apartment', value: 'Apartment' },
			{ label: 'House', value: 'House' },
			{ label: 'Investment', value: 'Investment' },
			{ label: 'New Construction', value: 'New Construction' },
			{ label: 'Holiday Home', value: 'Holiday Home' }
		];
		// Select options for property status
		const statusOptions = [
			{ label: 'Property Status', value: 0 },
			{ label: 'Available', value: 'Available' },
			{ label: 'Under Development', value: 'Under Development' }
		];
		// Select options for status
		const locationOptions = [
			{ label: 'Location', value: 0 },
			{ label: 'Covent Garden', value: 'Covent Garden' },
			{ label: 'Holborn', value: 'Holborn' },
			{ label: 'Regents Park', value: 'Regents Park' },
			{ label: 'Hyde Park', value: 'Hyde Park' },
			{ label: 'Paddington', value: 'Paddington' },
			{ label: 'Battersea', value: 'Battersea' },
			{ label: 'Westminster', value: 'Westminster' },
			{ label: 'Canary Wharf', value: 'Canary Wharf' },
			{ label: 'Stratford', value: 'Stratford' },
			{ label: 'Acton', value: 'Acton' },
			{ label: 'Waterloo', value: 'Waterloo' }
		];

		return (
			<div>
				<form onSubmit={this.onSubmit} className="search-form">
					<div className="row justify-content-center">
						<div className="col-1 ">
							<button className="btn btn-light search-button">Search</button>
						</div>
					</div>
					<div className="row">
						<div className="col-md-3 col-sm-6">
							<TextFieldGroup
								placeholder="Keywords"
								name="keywords"
								value={this.state.keywords}
								onChange={this.onChange}
								info="Keywords"
							/>
						</div>
						<div className="col-md-3 col-sm-6">
							<SelectListGroup
								placeholder="Location"
								name="location"
								value={this.state.location}
								onChange={this.onChange}
								options={locationOptions}
								info="Location"
							/>
						</div>
						<div className="col-md-3 col-sm-6 hide-on-xs">
							<SelectListGroup
								placeholder="Property Type"
								name="property_type"
								value={this.state.property_type}
								onChange={this.onChange}
								options={typeOptions}
								info="Type"
							/>
						</div>
						<div className="col-md-3 col-sm-6 hide-on-xs">
							<SelectListGroup
								placeholder="Property Status"
								name="property_status"
								value={this.state.property_status}
								onChange={this.onChange}
								options={statusOptions}
								info="Status"
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-2 col-xs-12 hide-on-xs">
							<SelectListGroup
								placeholder="Parking"
								name="parking"
								value={this.state.parking}
								onChange={this.onChange}
								options={parkingOptions}
								info="Parking"
							/>
						</div>
						<div className="col-sm-2 col-xs-12 hide-on-xs">
							<SelectListGroup
								placeholder="Number of Bathrooms"
								name="bathrooms"
								value={this.state.bathrooms}
								onChange={this.onChange}
								options={roomNumberOptions}
								info="Bathrooms"
							/>
						</div>
						<div className="col-sm-2 col-xs-12 hide-on-xs">
							<SelectListGroup
								placeholder="Number of Bedrooms"
								name="bedrooms"
								value={this.state.bedrooms}
								onChange={this.onChange}
								options={roomNumberOptions}
								info="Bedrooms"
							/>
						</div>
						<div className="col-sm-3 col-xs-12 hide-on-xs">
							<TextFieldGroup
								placeholder="Price"
								name="price"
								value={this.state.price}
								onChange={this.onChange}
								info="Price"
							/>
						</div>
						<div className="col-sm-3 col-xs-12 hide-on-xs">
							<TextFieldGroup
								placeholder="Area"
								name="area"
								value={this.state.area}
								onChange={this.onChange}
								info="Area"
							/>
						</div>
					</div>
				</form>
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

export default Searchbar;
