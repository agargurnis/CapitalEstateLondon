import React, { Component } from 'react';
import qs from 'qs';
import PropertyCard from './PropertyCard';
import GoogleMapReact from 'google-map-react';
import PropertyMarker from './PropertyMarker';
import SelectStringListGroup from '../common/SelectStringListGroup';
import SelectNumberListGroup from '../common/SelectNumberListGroup';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { EmailShareButton } from 'react-share';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProperties } from '../../actions/propertyActions';
import { IntlProvider, FormattedMessage } from 'react-intl';
import propertyMessages from '../../translations/propertyMessages';
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
			status: '',
			selectedMarker: null,
			selectedProperty: null,
			selectedImage: null,
			searchValue: ''
		};

		this.onChangeStr = this.onChangeStr.bind(this);
		this.onChangeInt = this.onChangeInt.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.selectProperty = this.selectProperty.bind(this);
		this.openPropertyModal = this.openPropertyModal.bind(this);
		this.selectImage = this.selectImage.bind(this);
		this.showContactForm = this.showContactForm.bind(this);
	}

	componentDidMount() {
		this.props.getProperties();

		const query = qs.parse(this.props.location.search);
		console.log(query);
		if (Object.keys(query).length !== 0) {
			this.setState({
				minPrice: parseInt(query.minPrice, 10),
				maxPrice: parseInt(query.maxPrice, 10),
				minBeds: parseInt(query.minBeds, 10),
				maxBeds: parseInt(query.maxBeds, 10),
				parking: parseInt(query.parking, 10),
				status: query.status,
				searchValue: query.keywords.toLocaleLowerCase()
			});
		}
	}

	selectProperty = property => {
		this.setState({
			selectedProperty: property,
			selectedMarker: property
		});
	};

	showContactForm() {
		window.location.assign('/contacts?book');
		// this.props.history.push('/contacts?book');
	}

	onChangeStr(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	onChangeInt(e) {
		this.setState({ [e.target.name]: parseInt(e.target.value, 10) });
	}

	handleSearch = e => {
		this.setState({
			searchValue: e.target.value.toLocaleLowerCase()
		});
	};

	openPropertyModal = property => {
		this.setState({
			selectedMarker: property,
			selectedImage: null
		});
	};

	selectImage = image => {
		this.setState({
			selectedImage: image
		});
	};

	render() {
		const { properties, loading } = this.props.property;
		const { lang } = this.props;
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
						property={property}
						openPropertyModal={this.openPropertyModal}
						selected={property === this.state.selectedProperty}
					/>
				);
			});
		}

		// Select options for min beds
		const minBedOptions = [
			{
				label: <FormattedMessage id="property.any" defaultMessage="Any" />,
				value: 0
			},
			{ label: '1', value: 1 },
			{ label: '2', value: 2 },
			{ label: '3', value: 3 },
			{ label: '4', value: 4 },
			{ label: '5', value: 5 },
			{ label: '6', value: 6 }
		];
		// Select options for max beds
		const maxBedOptions = [
			{
				label: <FormattedMessage id="property.any" defaultMessage="Any" />,
				value: 20
			},
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
			{
				label: <FormattedMessage id="property.any" defaultMessage="Any" />,
				value: 100000000
			},
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
			{
				label: <FormattedMessage id="property.any" defaultMessage="Any" />,
				value: 0
			},
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
			{
				label: <FormattedMessage id="property.any" defaultMessage="Any" />,
				value: 0
			},
			{ label: '1', value: 1 },
			{ label: '2', value: 2 },
			{ label: '3', value: 3 }
		];
		// Select options for property status
		const statusOptions = [
			{
				label: <FormattedMessage id="property.any" defaultMessage="Any" />,
				value: 'Any'
			},
			{ label: 'Available', value: 'Available' },
			{ label: 'Under Development', value: 'Under Development' }
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
			<IntlProvider locale={lang} messages={propertyMessages[lang]}>
				<div>
					{this.state.selectedMarker !== null ? (
						<div
							className="modal fade"
							id="propertyModal"
							tabIndex="-1"
							role="dialog"
							aria-labelledby="propertyModalLabel"
							aria-hidden="true"
						>
							<div
								className="modal-dialog modal-dialog-centered modal-lg"
								role="document"
							>
								<div className="modal-content">
									<div className="modal-header">
										<h5
											className="modal-title"
											id="propertyModalLabel"
											style={{ width: '65%' }}
										>
											{this.state.selectedMarker.address +
												', ' +
												this.state.selectedMarker.district +
												', ' +
												this.state.selectedMarker.post_code}
										</h5>
										<h5
											className="modal-title text-right"
											style={{ width: '35%' }}
										>
											<FormattedMessage
												id="property.date"
												defaultMessage="Listed on:"
											/>
											<Moment format="DD/MM/YYYY">
												{this.state.selectedMarker.date}
											</Moment>
										</h5>
										<button
											type="button"
											className="close"
											data-dismiss="modal"
											aria-label="Close"
										>
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div className="modal-body">
										<div className="row">
											<div className="col-12">
												<img
													src={
														this.state.selectedImage !== null
															? this.state.selectedImage
															: this.state.selectedMarker.property_images[0]
													}
													alt="property"
													style={{ width: '100%' }}
												/>
											</div>
										</div>
										<button
											className="more-pictures-button mt-1"
											type="button"
											data-toggle="collapse"
											data-target="#collapseMorePictures"
											aria-expanded="false"
											aria-controls="collapseMorePictures"
										>
											<FormattedMessage
												id="property.morePictures"
												defaultMessage="More Pictures"
											/>
										</button>
										<div
											className="row collapse mx-0"
											id="collapseMorePictures"
										>
											{this.state.selectedMarker.property_images.map(
												(image, i) => {
													return (
														<div key={i} className="col-3 my-1 px-1">
															<img
																src={image}
																className="modal-images"
																alt="rooms"
																onClick={() => this.selectImage(image)}
															/>
														</div>
													);
												}
											)}
										</div>
										<div className="row mx-0 mt-1">
											<div className="col-6 text-center">
												<FormattedMessage
													id="property.price"
													defaultMessage="Price"
												/>{' '}
												<br />{' '}
												<p style={{ color: '#50c9ff', fontSize: '21px' }}>
													£{this.state.selectedMarker.price}
												</p>
											</div>
											<div className="col-6 text-center">
												<FormattedMessage
													id="property.ownershipType"
													defaultMessage="Ownership Type"
												/>{' '}
												<br />
												<p style={{ color: '#50c9ff', fontSize: '21px' }}>
													{this.state.selectedMarker.ownership_type}
												</p>
											</div>
										</div>
										<div className="row mx-0">
											<div className="col-3 text-center">
												<i className="fas fa-bed modal-icon" />
												<br />{' '}
												<p style={{ fontSize: '18px' }}>
													{this.state.selectedMarker.nr_of_bedrooms}{' '}
													<FormattedMessage
														id="property.bedrooms"
														defaultMessage="Bedrooms"
													/>
												</p>
											</div>
											<div className="col-3 text-center">
												<i className="fas fa-bath modal-icon" />
												<br />{' '}
												<p style={{ fontSize: '18px' }}>
													{this.state.selectedMarker.nr_of_bathrooms}{' '}
													<FormattedMessage
														id="property.bathrooms"
														defaultMessage="Bathrooms"
													/>
												</p>
											</div>
											<div className="col-3 text-center">
												<i className="fas fa-drafting-compass modal-icon" />
												<br />{' '}
												<p style={{ fontSize: '18px' }}>
													<FormattedMessage
														id="property.area"
														defaultMessage="Area of"
													/>{' '}
													{this.state.selectedMarker.area_sqm} m<sup>2</sup>
												</p>
											</div>
											<div className="col-3 text-center">
												<i className="fas fa-car modal-icon" />
												<br />{' '}
												<p style={{ fontSize: '18px' }}>
													{this.state.selectedMarker.nr_of_parking}{' '}
													{this.state.selectedMarker.nr_of_parking > 1 ? (
														<FormattedMessage
															id="property.parkingSpaces"
															defaultMessage="Parking Spaces"
														/>
													) : (
														<FormattedMessage
															id="property.parkingSpace"
															defaultMessage="Parking Space"
														/>
													)}
												</p>
											</div>
										</div>
										<div className="row mx-0">
											<div className="col-12">
												{this.state.selectedMarker.description
													.split(`\n`)
													.map((paragraph, i) => {
														return (
															<span key={i}>
																{paragraph}
																<br />
															</span>
														);
													})}
											</div>
										</div>
									</div>
									<div className="modal-footer">
										<Link
											to={`/properties/${this.state.selectedMarker._id}`}
											onClick={() => this.props.toggleHeaderAndFooter(true)}
											className="btn modal-icon-btn hide-on-phone"
										>
											<i className="fas fa-file-powerpoint" />{' '}
											<FormattedMessage
												id="property.print"
												defaultMessage="Print Page"
											/>
										</Link>
										<button type="button" className="btn modal-icon-btn">
											<EmailShareButton url="google.com" quote="my first share">
												<i className="fas fa-share-square" />{' '}
												<FormattedMessage
													id="property.shareEmail"
													defaultMessage="Share by Email"
												/>
											</EmailShareButton>
										</button>
										<button
											onClick={this.showContactForm}
											type="button"
											className="btn modal-icon-btn"
										>
											<i className="fas fa-book" />{' '}
											<FormattedMessage
												id="property.book"
												defaultMessage="Book Viewing"
											/>
										</button>
									</div>
								</div>
							</div>
						</div>
					) : null}
					<div className="search-container">
						<div className="row justify-content-center">
							<div className="col-sm-10 col-xs-10 property-search-bar mr-0 pr-0">
								<div className="search">
									<input
										type="text"
										placeholder={
											lang === 'en'
												? 'Search by street, district or post code...'
												: `Поиск по улицам, районам или почтовым индексам ...`
										}
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
										<FormattedMessage
											id="property.more"
											defaultMessage="More"
										/>{' '}
										<span className="hide-below-eh">
											<FormattedMessage
												id="property.options"
												defaultMessage="Options"
											/>
										</span>
									</button>
								</div>
							</div>
						</div>
						<div className="row collapse px-2" id="collapseMoreOptions">
							<div className="col-lg col-sm-6 col-xs-12">
								<SelectNumberListGroup
									placeholder="Any"
									name="minPrice"
									value={this.state.minPrice}
									onChange={this.onChangeInt}
									options={minPriceOptions}
									info={
										<FormattedMessage
											id="property.minPrice"
											defaultMessage="Min Price"
										/>
									}
								/>
							</div>
							<div className="col-lg col-sm-6 col-xs-12">
								<SelectNumberListGroup
									placeholder="Any"
									name="maxPrice"
									value={this.state.maxPrice}
									onChange={this.onChangeInt}
									options={maxPriceOptions}
									info={
										<FormattedMessage
											id="property.maxPrice"
											defaultMessage="Max Price"
										/>
									}
								/>
							</div>
							<div className="col-lg col-sm-6 col-xs-12">
								<SelectNumberListGroup
									placeholder="Any"
									name="minBeds"
									value={this.state.minBeds}
									onChange={this.onChangeInt}
									options={minBedOptions}
									info={
										<FormattedMessage
											id="property.minBeds"
											defaultMessage="Min Beds"
										/>
									}
								/>
							</div>
							<div className="col-lg col-sm-6 col-xs-12">
								<SelectNumberListGroup
									placeholder="Any"
									name="maxBeds"
									value={this.state.maxBeds}
									onChange={this.onChangeInt}
									options={maxBedOptions}
									info={
										<FormattedMessage
											id="property.maxBeds"
											defaultMessage="Max Beds"
										/>
									}
								/>
							</div>
							<div className="col-lg col-sm-6 col-xs-12">
								<SelectNumberListGroup
									placeholder="Any"
									name="parking"
									value={this.state.parking}
									onChange={this.onChangeInt}
									options={parkingOptions}
									info={
										<FormattedMessage
											id="property.parking"
											defaultMessage="Parking"
										/>
									}
								/>
							</div>
							<div className="col-lg col-sm-6 col-xs-12">
								<SelectStringListGroup
									placeholder="Any"
									name="status"
									value={this.state.status}
									onChange={this.onChangeStr}
									options={statusOptions}
									info={
										<FormattedMessage
											id="property.status"
											defaultMessage="Status"
										/>
									}
								/>
							</div>
						</div>
					</div>
					<div className="hide-below-md">
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
					<div className="show-below-md">
						<div className="row">
							<div className="col-12">
								<div className="properties-container-sm">
									<div className="properties">{propertyContent}</div>
								</div>
							</div>
							<div className="col-12">
								<div className="the-map-sm">
									<GoogleMapReact center={center} zoom={zoom}>
										{propertyMarkers}
									</GoogleMapReact>
								</div>
							</div>
						</div>
					</div>
				</div>
			</IntlProvider>
		);
	}
}
PropertyPage.propTypes = {
	getProperties: PropTypes.func.isRequired,
	property: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	property: state.property,
	lang: state.locale.lang,
	selectedProperty: state.selectedProperty
});

export default connect(
	mapStateToProps,
	{ getProperties }
)(withRouter(PropertyPage));
