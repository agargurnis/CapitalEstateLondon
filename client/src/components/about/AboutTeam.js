import React, { Component } from 'react';
import profilePic from '../images/profilepic.png';

class AboutTeam extends Component {
	render() {
		return (
			<div>
				<div className="kaka">
					<h3 className="text-center my-5 about-why-title">
						Why Capital Estate London?
					</h3>
					<div className="row pb-5">
						<div className="col-sm-12 col-md-4 text-lg-right text-center profile-pic">
							<img src={profilePic} alt="Profile" className="rounded-circle" />
							<div className="profile-name">
								<h5>Elena Calpa</h5>
								<p style={{ color: '#50c9ff' }}>CEO</p>
							</div>
						</div>
						<div className="col-sm-12 col-md-8 text-lg-left text-center ">
							<div className="about-why-bubble sb6">
								<i className="fas fa-quote-left about-quote-left" />
								<p>
									&ensp; We are a professional company that knows its business.
									London for us is not just a point on the map, where today it
									is customary to do business. We love this metropolis, and we
									want to make it so that you feel comfortable here. Therefore,
									our company today takes on the solution of all problems
									associated with the process of buying and selling real estate
									in the UK. <br />
									<br />
									&nbsp; Our strongest advantage over other seemingly similar
									agencies is the excellent knowledge of the London real estate
									market, partnership relations with a large number of realtors
									in London, of which there are hundreds. Instead of contacting
									all agents who will offer you all the options for real estate
									that they need to sell, whether it meets your requirements or
									not, contact us and you will have your own manager who, after
									understanding your requirements, will offer what will be
									interesting personally to you. <br />
									<br />
									&nbsp; Another, no less important argument in favor of
									accessing the services of our company is the huge choice of
									offers that we provide to our clients. At the same time, you
									get access to both offers that are already on the market, and
									to those that do not even appear on it. It's not a secret that
									the most profitable options, very often do not go to the open
									market, but are simply dealt with by local agents.
								</p>
								<i className="fas fa-quote-right about-quote-right" />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AboutTeam;
