import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { editProperty, getProperty } from '../../actions/propertyActions';

class EditProperty extends Component {
	constructor(props) {
		super(props);
		this.state = {
			district: '',
			address: '',
			post_code: '',
			status: '',
			nr_of_bedrooms: '',
			nr_of_bathrooms: '',
			nr_of_parking: '',
			area_sqm: '',
			lat: '',
			lon: '',
			description_en: '',
			description_ru: '',
			ownership_type: '',
			price: '',
			property_images: [''],
			errors: {}
		};

		this.handleChange = this.handleChange.bind(this);
		this.fileInput = React.createRef();
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	componentDidMount() {
		this.props.getProperty(this.props.match.params.property_id);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({
				errors: nextProps.errors
			});
		}

		if (nextProps.property.property) {
			const property = nextProps.property.property;
			// Set component fields state
			this.setState({
				district: property.district,
				address: property.address,
				post_code: property.post_code,
				price: property.price,
				status: property.status,
				nr_of_parking: property.nr_of_parking,
				nr_of_bedrooms: property.nr_of_bedrooms,
				nr_of_bathrooms: property.nr_of_bathrooms,
				description_en: property.description_en,
				description_ru: property.description_ru,
				lat: property.lat,
				lon: property.lon,
				ownership_type: property.ownership_type,
				area_sqm: property.area_sqm,
				property_images: property.property_images
			});
		}
	}

	handleChange(e) {
		console.log(this.fileInput.current.files);
	}

	onSubmit(e) {
		e.preventDefault();

		var propertyData = new FormData();
		propertyData.append('district', this.state.district);
		propertyData.append('address', this.state.address);
		propertyData.append('post_code', this.state.post_code);
		propertyData.append('status', this.state.status);
		propertyData.append('nr_of_bedrooms', this.state.nr_of_bedrooms);
		propertyData.append('nr_of_bathrooms', this.state.nr_of_bathrooms);
		propertyData.append('nr_of_parking', this.state.nr_of_parking);
		propertyData.append('area_sqm', this.state.area_sqm);
		propertyData.append('lat', this.state.lat);
		propertyData.append('lon', this.state.lon);
		propertyData.append('description_en', this.state.description_en);
		propertyData.append('description_ru', this.state.description_ru);
		propertyData.append('ownership_type', this.state.ownership_type);
		propertyData.append('price', this.state.price);

		var data = this.fileInput.current.files;

		for (var i = 0; i < data.length; i++) {
			propertyData.append('photos', data[i]);
		}

		this.props.editProperty(
			this.props.match.params.property_id,
			propertyData,
			this.props.history
		);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	render() {
		const { errors } = this.state;

		return (
			<div>
				<AdminNavbar />
				<div className="manage-properties">
					<div className="edit-property">
						<Link to="/dashboard" className="btn btn-light mt-2 ml-5">
							Go Back
						</Link>
						<h1 className="text-center mb-4">Edit Property</h1>
						<div className="container">
							<div
								className="property-picture"
								style={
									this.state.property_images !== undefined
										? {
												height: '400px',
												marginBottom: '10px',
												backgroundImage: `url('${
													this.state.property_images[0]
												}')`
										  }
										: null
								}
							/>
						</div>
						<form onSubmit={this.onSubmit}>
							<div className="container">
								<div className="row">
									<div className="col-6">
										<TextFieldGroup
											placeholder="Address"
											name="address"
											value={this.state.address}
											onChange={this.onChange}
											error={errors.address}
										/>
									</div>
									<div className="col-3">
										<TextFieldGroup
											placeholder="Latitude"
											name="lat"
											value={this.state.lat}
											onChange={this.onChange}
											error={errors.lat}
										/>
									</div>
									<div className="col-3">
										<TextFieldGroup
											placeholder="Longditude"
											name="lon"
											value={this.state.lon}
											onChange={this.onChange}
											error={errors.lon}
										/>
									</div>
								</div>
								<div className="row">
									<div className="col-3">
										<TextFieldGroup
											placeholder="Post Code"
											name="post_code"
											value={this.state.post_code}
											onChange={this.onChange}
											error={errors.post_code}
										/>
									</div>
									<div className="col-3">
										<TextFieldGroup
											placeholder="District"
											name="district"
											value={this.state.district}
											onChange={this.onChange}
											error={errors.district}
										/>
									</div>

									<div className="col-6">
										<TextFieldGroup
											placeholder="Status"
											name="status"
											value={this.state.status}
											onChange={this.onChange}
											error={errors.status}
										/>
									</div>
								</div>
								<div className="row">
									<div className="col-3">
										<TextFieldGroup
											placeholder="Number of Bedrooms"
											name="nr_of_bedrooms"
											value={this.state.nr_of_bedrooms}
											onChange={this.onChange}
											error={errors.nr_of_bedrooms}
										/>
									</div>
									<div className="col-3">
										<TextFieldGroup
											placeholder="Number of Bathrooms"
											name="nr_of_bathrooms"
											value={this.state.nr_of_bathrooms}
											onChange={this.onChange}
											error={errors.nr_of_bathrooms}
										/>
									</div>
									<div className="col-3">
										<TextFieldGroup
											placeholder="Number of Parking Spaces"
											name="nr_of_parking"
											value={this.state.nr_of_parking}
											onChange={this.onChange}
											error={errors.nr_of_parking}
										/>
									</div>
									<div className="col-3">
										<TextFieldGroup
											placeholder="Area in sqaure meters"
											name="area_sqm"
											value={this.state.area_sqm}
											onChange={this.onChange}
											error={errors.area_sqm}
										/>
									</div>
								</div>
								<div className="row">
									<div className="col-6">
										<TextFieldGroup
											placeholder="Price"
											name="price"
											value={this.state.price}
											onChange={this.onChange}
											error={errors.price}
										/>
									</div>
									<div className="col-6">
										<TextFieldGroup
											placeholder="Ownership Type"
											name="ownership_type"
											value={this.state.ownership_type}
											onChange={this.onChange}
											error={errors.ownership_type}
										/>
									</div>
								</div>
								<div className="row">
									<div className="col-6">
										<TextAreaFieldGroup
											placeholder="Description in English"
											name="description_en"
											value={this.state.description_en}
											onChange={this.onChange}
											error={errors.description_en}
										/>
									</div>
									<div className="col-6">
										<TextAreaFieldGroup
											placeholder="Description in Russian"
											name="description_ru"
											value={this.state.description_ru}
											onChange={this.onChange}
											error={errors.description_ru}
										/>
									</div>
								</div>
								<div className="form-group">
									<label>Upload one or more images...</label>
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
									className="btn btn-new-property btn-block my-4"
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

EditProperty.propTypes = {
	getProperty: PropTypes.func.isRequired,
	editProperty: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	property: state.property,
	errors: state.errors
});

export default connect(
	mapStateToProps,
	{ editProperty, getProperty }
)(withRouter(EditProperty));
