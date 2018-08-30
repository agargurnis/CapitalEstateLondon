import React, { Component } from 'react';
import HomeCarousel from './HomeCarousel';
import Searchbar from './Searchbar';
import FeaturedProperties from './FeaturedProperties';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';
import homePageMessages from '../../translations/homePageMessages';

class HomePage extends Component {
	render() {
		const { lang } = this.props;
		return (
			<IntlProvider locale={lang} messages={homePageMessages[lang]}>
				<div>
					<HomeCarousel />
					<Searchbar />
					<FeaturedProperties />
				</div>
			</IntlProvider>
		);
	}
}

const mapStateToProps = state => ({
	lang: state.locale.lang
});

export default connect(mapStateToProps)(HomePage);
