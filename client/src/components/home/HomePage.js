import React, { Component } from 'react';
import HomeCarousel from './HomeCarousel';
import Searchbar from './Searchbar';
import FeaturedProperties from './FeaturedProperties';

class HomePage extends Component {
	render() {
		return (
			<div>
				<HomeCarousel />
				<Searchbar />
				<FeaturedProperties />
			</div>
		);
	}
}

export default HomePage;
