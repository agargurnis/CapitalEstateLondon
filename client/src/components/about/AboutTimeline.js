import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class AboutTimeline extends Component {
	render() {
		return (
			<div className="parlx">
				<h2 className="about-title text-center pt-4 ">
					<FormattedMessage id="about.aboutUs" defaultMessage="About Us" />
				</h2>
				<div className="timeline">
					<div className="timeline-container timeline-left">
						<div className="timeline-content">
							<h2>2004</h2>
							<p>
								<FormattedMessage
									id="about.2004"
									defaultMessage="A English real estate market company called Capital Estate
							London is established."
								/>
							</p>
						</div>
					</div>
					<div className="timeline-container timeline-right">
						<div className="timeline-content">
							<h2>2010</h2>
							<p>
								<FormattedMessage
									id="about.2010"
									defaultMessage="During this time we have passed the way from a small office for
							hiring housing, to a large agency, which today employs a whole
							team of expert professionals. What has not changed in our work
							is that we are still always happy to help our customers!"
								/>
							</p>
						</div>
					</div>
					<div className="timeline-container timeline-left">
						<div className="timeline-content">
							<h2>2012</h2>
							<p>
								<FormattedMessage
									id="about.2012"
									defaultMessage="We started selling real estate outside of London England in hot
							places like Spain and France."
								/>
							</p>
						</div>
					</div>
					<div className="timeline-container timeline-right">
						<div className="timeline-content">
							<h2>2014</h2>
							<p>
								<FormattedMessage
									id="about.2014"
									defaultMessage="10 year anniversary."
								/>
							</p>
						</div>
					</div>
					<div className="timeline-container timeline-left">
						<div className="timeline-content">
							<h2>2016</h2>
							<p>
								<FormattedMessage
									id="about.2016"
									defaultMessage="We have hit a huge milestone this year, we have now sold over 1000
							properties. And also aquired holiday homes over 10 different
							countries."
								/>
							</p>
						</div>
					</div>
					<div className="timeline-container timeline-right">
						<div className="timeline-content">
							<h2>2018</h2>
							<p>
								<FormattedMessage
									id="about.2018"
									defaultMessage="Our website got updated to a newer more modern and sleeker look."
								/>
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AboutTimeline;
