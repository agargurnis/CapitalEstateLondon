import React, { Component } from 'react';
import homeCarousel from '../images/home-carousel-overlay.jpg';
import houseCarousel from '../images/house-carousel-overlay.jpg';
import londonCarousel from '../images/london-carousel-overlay.jpg';
import turkeyCarousel from '../images/turkey-carousel-overlay.jpg';
import { FormattedMessage } from 'react-intl';

class HomePageCarousel extends Component {
	render() {
		return (
			<div>
				<div
					id="carouselIndicators"
					className="home-carousel carousel slide carousel-fade"
					data-ride="carousel"
				>
					<ol className="carousel-indicators d-none">
						<li
							data-target="#carouselIndicators"
							data-slide-to="0"
							className="active"
						/>
						<li data-target="#carouselIndicators" data-slide-to="1" />
						<li data-target="#carouselIndicators" data-slide-to="2" />
						<li data-target="#carouselIndicators" data-slide-to="3" />
					</ol>
					<div className="carousel-inner">
						<div className="home-carousel-item carousel-item active">
							<img
								className="d-block fill img-fluid "
								src={homeCarousel}
								alt="Home slide"
							/>
							<div className="carousel-caption d-none d-md-block">
								<h5>
									<FormattedMessage
										id="home.homeSlide.h"
										defaultMessage="Home"
									/>
								</h5>
								<p>
									<FormattedMessage
										id="home.homeSlide.p"
										defaultMessage="..is the starting place of love, hope and dreams."
									/>
								</p>
							</div>
						</div>
						<div className="home-carousel-item carousel-item">
							<img
								className="d-block fill img-fluid"
								src={houseCarousel}
								alt="House slide"
							/>
							<div className="carousel-caption d-none d-md-block">
								<h5>
									<FormattedMessage
										id="home.houseSlide.h"
										defaultMessage="Find your dream house"
									/>
								</h5>
								<p>
									<FormattedMessage
										id="home.houseSlide.p"
										defaultMessage="It's not about how big the house is. It's about how happy the
									home is."
									/>
								</p>
							</div>
						</div>
						<div className="home-carousel-item carousel-item">
							<img
								className="d-block fill img-fluid"
								src={londonCarousel}
								alt="London slide"
							/>
							<div className="carousel-caption d-none d-md-block">
								<h5>
									<FormattedMessage
										id="home.londonSlide.h"
										defaultMessage="London is calling you"
									/>
								</h5>
								<p>
									<FormattedMessage
										id="home.londonSlide.p"
										defaultMessage="Live in one of the best cities in the world."
									/>
								</p>
							</div>
						</div>
						<div className="home-carousel-item carousel-item">
							<img
								className="d-block fill img-fluid"
								src={turkeyCarousel}
								alt="Turkey slide"
							/>
							<div className="carousel-caption d-none d-md-block">
								<h5>
									<FormattedMessage
										id="home.turkeySlide.h"
										defaultMessage="Invest in your future"
									/>
								</h5>
								<p>
									<FormattedMessage
										id="home.turkeySlide.p"
										defaultMessage="Buy a house abroad which you can rent out."
									/>
								</p>
							</div>
						</div>
					</div>
					<a
						className="carousel-control-prev"
						href="#carouselIndicators"
						role="button"
						data-slide="prev"
					>
						<span className="carousel-control-prev-icon" aria-hidden="true" />
						<span className="sr-only">Previous</span>
					</a>
					<a
						className="carousel-control-next"
						href="#carouselIndicators"
						role="button"
						data-slide="next"
					>
						<span className="carousel-control-next-icon" aria-hidden="true" />
						<span className="sr-only">Next</span>
					</a>
				</div>
			</div>
		);
	}
}

export default HomePageCarousel;
