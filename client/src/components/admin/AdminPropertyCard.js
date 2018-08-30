import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteProperty } from '../../actions/propertyActions';

class AdminPropertyCard extends Component {
	handleDelete = selected_id => {
		if (window.confirm('Are you sure you want to delete this property?')) {
			this.props.deleteProperty(selected_id);
		}
	};

	render() {
		const { property } = this.props;

		return (
			<div className="admin-property-card">
				<div className="row no-gutters">
					<div className="col-6 text-center align-items-center ">
						<Link to={`/manageproperties/${property._id}`}>
							<div className="btn-edit py-2">
								<i class="fas fa-edit" />
							</div>
						</Link>
					</div>
					<div className="col-6 text-center align-items-center ">
						<div
							className="btn-delete py-2"
							onClick={() => this.handleDelete(property._id)}
						>
							<i class="fas fa-trash-alt" />
						</div>
					</div>
				</div>
				<div
					className="property-picture"
					style={{
						backgroundImage: `url('${property.property_images[0]}')`
					}}
				/>
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

AdminPropertyCard.propTypes = {
	property: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	errors: state.errors
});

export default connect(
	mapStateToProps,
	{ deleteProperty }
)(AdminPropertyCard);
