import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class PropertyCard extends Component {
	handleClick = () => {
		this.props.selectProperty(this.props.property);
	};

	render() {
		const { property } = this.props;

		const style = {
			backgroundImage: `url('${property.property_images[0]}')`
		};

		return (
			<div className="property-card" onClick={this.handleClick}>
				<div className="property-picture" style={style} />
				<div className="property-info">
					<div className="property-price ">
						<div className="price-tag">
							<h6 className="ml-2">£{property.price}</h6>
						</div>
					</div>
					<div className="property-location">
						<div className="address pt-2 pl-3">
							<p className="mb-2">
								{property.address}
								<br />
								{property.district}, {property.post_code}
							</p>
						</div>
					</div>
					<div className="property-details">
						<div className="row pb-2 mx-1">
							<div className="col text-center">
								<i className="fas fa-bed card-icon">
									{' '}
									{property.nr_of_bedrooms}
								</i>
							</div>
							<div className="col text-center">
								<i className="fas fa-bath card-icon">
									{' '}
									{property.nr_of_bathrooms}
								</i>
							</div>
							<div className="col text-center">
								<i className="fas fa-car card-icon">
									{' '}
									{property.nr_of_parking}
								</i>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

PropertyCard.propTypes = {
	property: PropTypes.object.isRequired
};

export default PropertyCard;
