import React, { Component } from 'react';
import AboutTimeline from './AboutTimeline';
import AboutTeam from './AboutTeam';

class AboutPage extends Component {
	render() {
		return (
			<div>
				<AboutTimeline />
				<AboutTeam />
			</div>
		);
	}
}

export default AboutPage;
