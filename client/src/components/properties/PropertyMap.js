import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import PropertyMarker from './PropertyMarker';

class PropertyMap extends Component {
	constructor(props) {
		super(props);
		this.state = {
			flats: []
		};
	}

	componentDidMount() {
		const url =
			'https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json';

		fetch(url)
			.then(response => response.json())
			.then(data => {
				this.setState({
					flats: data
				});
			});
	}
	render() {
		const center = {
			lat: 48.8566,
			lng: 2.3522
		};
		const zoom = 14;

		return (
			// Important! Always set the container height explicitly
			<div className="the-map">
				<GoogleMapReact center={center} zoom={zoom}>
					{this.state.flats.map(flat => {
						return (
							<PropertyMarker
								key={flat.name}
								lat={flat.lat}
								lng={flat.lng}
								text={flat.price}
							/>
						);
					})}
				</GoogleMapReact>
			</div>
		);
	}
}

export default PropertyMap;
