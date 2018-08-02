import React, { Component } from 'react';

class PropertyCard extends Component {
	handleClick = () => {
		this.props.selectProperty(this.props.property);
	};
	render() {
		const title =
			this.props.property.price +
			this.props.property.priceCurrency +
			' - ' +
			this.props.property.name;

		const style = {
			backgroundImage: `url('${this.props.property.imageUrl}')`
		};

		return (
			<div className="property" onClick={this.handleClick}>
				<div className="property-picture" style={style} />
				<div className="property-title">{title}</div>
			</div>
		);
	}
}

export default PropertyCard;
