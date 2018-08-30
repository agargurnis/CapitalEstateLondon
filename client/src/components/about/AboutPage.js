import React, { Component } from 'react';
import AboutTimeline from './AboutTimeline';
import AboutTeam from './AboutTeam';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';
import aboutPageMessages from '../../translations/aboutPageMessages';

class AboutPage extends Component {
	render() {
		const { lang } = this.props;
		return (
			<IntlProvider locale={lang} messages={aboutPageMessages[lang]}>
				<div>
					<AboutTimeline />
					<AboutTeam />
				</div>
			</IntlProvider>
		);
	}
}

const mapStateToProps = state => ({
	lang: state.locale.lang
});

export default connect(mapStateToProps)(AboutPage);
