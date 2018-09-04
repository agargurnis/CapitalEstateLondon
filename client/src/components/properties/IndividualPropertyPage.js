import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProperty } from '../../actions/propertyActions';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import ContactLogo from '../images/contact-logo.png';

class IndividualPropertyPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false
		};
	}
	componentDidMount() {
		if (this.props.match.params.property_id) {
			this.props.getProperty(this.props.match.params.property_id);
			console.log(this.props);
		}
	}

	render() {
		const { property, loading } = this.props.property;
		let propertyContent;

		if (property === null || loading) {
			propertyContent = <Spinner />;
		} else {
			propertyContent = (
				<div className="modal-content">
					<div className="modal-header px-0 py-0">
						<img src={ContactLogo} alt="logo" style={{ width: '100%' }} />
					</div>
					<div className="modal-body">
						<div className="row">
							<h5
								className="modal-title ml-3 mb-2"
								id="propertyModalLabel"
								style={{ width: '60%' }}
							>
								{property.address +
									', ' +
									property.district +
									', ' +
									property.post_code}
							</h5>
							<h5
								className="modal-title text-right mr-2 mb-2"
								style={{ width: '35%' }}
							>
								Listed on: <Moment format="DD/MM/YYYY">{property.date}</Moment>
							</h5>
							<div className="col-12">
								<img
									src={
										property.property_images === undefined
											? null
											: `${property.property_images[0]}`
									}
									alt="property"
									style={{ width: '100%' }}
								/>
							</div>
						</div>

						<div className="row mx-0 mt-1">
							<div className="col-6 text-center">
								Price <br />{' '}
								<p style={{ color: '#50c9ff', fontSize: '21px' }}>
									£{property.price}
								</p>
							</div>
							<div className="col-6 text-center">
								Ownership Type <br />
								<p style={{ color: '#50c9ff', fontSize: '21px' }}>
									{property.ownership_type}
								</p>
							</div>
						</div>
						<div className="row mx-0">
							<div className="col-3 text-center">
								<i className="fas fa-bed modal-icon" />
								<br />{' '}
								<p style={{ fontSize: '18px' }}>
									{property.nr_of_bedrooms} Bedrooms
								</p>
							</div>
							<div className="col-3 text-center">
								<i className="fas fa-bath modal-icon" />
								<br />{' '}
								<p style={{ fontSize: '18px' }}>
									{property.nr_of_bathrooms} Bathrooms
								</p>
							</div>
							<div className="col-3 text-center">
								<i className="fas fa-drafting-compass modal-icon" />
								<br />{' '}
								<p style={{ fontSize: '18px' }}>
									Area of {property.area_sqm} m<sup>2</sup>
								</p>
							</div>
							<div className="col-3 text-center">
								<i className="fas fa-car modal-icon" />
								<br />{' '}
								<p style={{ fontSize: '18px' }}>
									{property.nr_of_parking}{' '}
									{property.nr_of_parking > 1
										? 'Parking Spaces'
										: 'Parking Space'}
								</p>
							</div>
						</div>
						<div className="row mx-0">
							<div className="col-12">
								{property.description === undefined
									? null
									: property.description.split(`\n`).map((paragraph, i) => {
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
						<div className="row mx-0">
							{property.property_images === undefined
								? null
								: property.property_images.map((image, i) => {
										return (
											<div key={i} className="col-6 my-1 px-1">
												<img
													src={`../${image}`}
													className="modal-images"
													alt="rooms"
												/>
											</div>
										);
								  })}
						</div>
					</div>
				</div>
			);
		}

		return <div className="a4">{propertyContent}</div>;
	}
}

IndividualPropertyPage.propTypes = {
	getProperty: PropTypes.func.isRequired,
	property: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	property: state.property
});

export default connect(
	mapStateToProps,
	{ getProperty }
)(IndividualPropertyPage);
