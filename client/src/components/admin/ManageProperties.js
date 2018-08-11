import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createProperty } from '../../actions/propertyActions';

class ManageProperties extends Component {
	constructor(props) {
		super(props);
		this.state = {
			district: '',
			address: '',
			post_code: '',
			nr_of_rooms: '',
			nr_of_bedrooms: '',
			nr_of_bathrooms: '',
			nr_of_parking: '',
			area_sqm: '',
			lat: '',
			lon: '',
			description: '',
			ownership_type: '',
			price: '',
			errors: {}
		};

		this.handleChange = this.handleChange.bind(this);
		this.fileInput = React.createRef();
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({
				errors: nextProps.errors
			});
		}
	}

	handleChange(e) {
		// this.setState({ photos: e.target.files });
		// this.fileInput.curent.files;
		console.log(this.fileInput.current.files);
		// console.log(e.target.files);
	}

	onSubmit(e) {
		e.preventDefault();

		var propertyData = new FormData();
		propertyData.append('district', this.state.district);
		propertyData.append('address', this.state.address);
		propertyData.append('post_code', this.state.post_code);
		propertyData.append('nr_of_rooms', this.state.nr_of_rooms);
		propertyData.append('nr_of_bedrooms', this.state.nr_of_bedrooms);
		propertyData.append('nr_of_bathrooms', this.state.nr_of_bathrooms);
		propertyData.append('nr_of_parking', this.state.nr_of_parking);
		propertyData.append('area_sqm', this.state.area_sqm);
		propertyData.append('lat', this.state.lat);
		propertyData.append('lon', this.state.lon);
		propertyData.append('description', this.state.description);
		propertyData.append('ownership_type', this.state.ownership_type);
		propertyData.append('price', this.state.price);

		var data = this.fileInput.current.files;

		for (var i = 0; i < data.length; i++) {
			propertyData.append('photos', data[i]);
		}

		this.props.createProperty(propertyData, this.props.history);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	render() {
		const { errors } = this.state;
		return (
			<div>
				<AdminNavbar />
				<div className="create-property">
					<div className="container">
						<div className="row">
							<div className="col-md-8 m-auto">
								<Link to="/dashboard" className="btn btn-light">
									Go Back
								</Link>
								<h1 className="display-4 text-center">Create Property</h1>

								<small className="d-block pb-3">* = required fields</small>
								<form onSubmit={this.onSubmit}>
									<TextFieldGroup
										placeholder="* District"
										name="district"
										value={this.state.district}
										onChange={this.onChange}
										error={errors.district}
									/>
									<TextFieldGroup
										placeholder="* Address"
										name="address"
										value={this.state.address}
										onChange={this.onChange}
										error={errors.address}
									/>
									<TextFieldGroup
										placeholder="* Post Code"
										name="post_code"
										value={this.state.post_code}
										onChange={this.onChange}
										error={errors.post_code}
									/>
									<TextFieldGroup
										placeholder="* Number of Bedrooms"
										name="nr_of_bedrooms"
										value={this.state.nr_of_bedrooms}
										onChange={this.onChange}
										error={errors.nr_of_bedrooms}
									/>
									<TextFieldGroup
										placeholder="* Number of Bathrooms"
										name="nr_of_bathrooms"
										value={this.state.nr_of_bathrooms}
										onChange={this.onChange}
										error={errors.nr_of_bathrooms}
									/>
									<TextFieldGroup
										placeholder="* Number of Parking Spaces"
										name="nr_of_parking"
										value={this.state.nr_of_parking}
										onChange={this.onChange}
										error={errors.nr_of_parking}
									/>
									<TextFieldGroup
										placeholder="Number of Rooms"
										name="nr_of_rooms"
										value={this.state.nr_of_rooms}
										onChange={this.onChange}
										error={errors.nr_of_rooms}
									/>
									<TextFieldGroup
										placeholder="Area in sqaure meters"
										name="area_sqm"
										value={this.state.area_sqm}
										onChange={this.onChange}
										error={errors.area_sqm}
									/>
									<TextFieldGroup
										placeholder="Ownership Type"
										name="ownership_type"
										value={this.state.ownership_type}
										onChange={this.onChange}
										error={errors.ownership_type}
									/>
									<TextAreaFieldGroup
										placeholder="* Description"
										name="description"
										value={this.state.description}
										onChange={this.onChange}
										error={errors.description}
									/>
									<TextFieldGroup
										placeholder="* Price"
										name="price"
										value={this.state.price}
										onChange={this.onChange}
										error={errors.price}
									/>
									<TextFieldGroup
										placeholder="* Latitude"
										name="lat"
										value={this.state.lat}
										onChange={this.onChange}
										error={errors.lat}
									/>
									<TextFieldGroup
										placeholder="* Longditude"
										name="lon"
										value={this.state.lon}
										onChange={this.onChange}
										error={errors.lon}
									/>
									<div className="form-group">
										<label>Upload one or more files...</label>
										<input
											name="photos"
											type="file"
											multiple
											ref={this.fileInput}
											onChange={this.handleChange}
											className="form-control-file"
											id="imageUpload"
										/>
									</div>
									<input
										type="submit"
										value="Submit"
										className="btn btn-info btn-block mt-4"
									/>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

ManageProperties.propTypes = {
	createProperty: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	errors: state.errors
});

export default connect(
	mapStateToProps,
	{ createProperty }
)(withRouter(ManageProperties));
