import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PropertyCard from './PropertyCard';
import { connect } from 'react-redux';

class PropertyFeed extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedProperty: null
		};
	}

	selectProperty = property => {
		this.setState({
			selectedProperty: property
		});
	};

	render() {
		const { properties } = this.props;

		return properties.map(property => (
			<PropertyCard
				key={property._id}
				property={property}
				selectProperty={this.selectProperty}
			/>
		));
	}
}

PropertyFeed.propTypes = {
	properties: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
	selectedProperty: state.selectedProperty
});

export default connect(mapStateToProps)(PropertyFeed);
