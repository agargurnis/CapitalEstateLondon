import React, { Component } from 'react';

class PropertyMarker extends Component {
	handleClick = () => {
		this.props.openPropertyModal(this.props.property);
	};

	render() {
		let classes = 'marker';
		if (this.props.selected) {
			classes += ' selected';
		}
		return (
			<div>
				<div
					className={classes}
					data-toggle="modal"
					data-target="#propertyModal"
					onClick={this.handleClick.bind(this)}
				>
					£{this.props.property.price}
				</div>;
			</div>
		);
	}
}

export default PropertyMarker;
