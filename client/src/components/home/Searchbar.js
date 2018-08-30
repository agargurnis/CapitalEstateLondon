import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
import SelectStringListGroup from '../common/SelectStringListGroup';
import SelectNumberListGroup from '../common/SelectNumberListGroup';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

class Searchbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			keywords: '',
			status: '',
			parking: 0,
			minBeds: 0,
			maxBeds: 20,
			minPrice: 0,
			maxPrice: 100000000
		};
		this.onChangeStr = this.onChangeStr.bind(this);
		this.onChangeInt = this.onChangeInt.bind(this);
		this.searchProperties = this.searchProperties.bind(this);
	}

	searchProperties() {
		this.props.history.push(
			`/properties?&keywords=${this.state.keywords}&minBeds=${
				this.state.minBeds
			}&maxBeds=${this.state.maxBeds}&minPrice=${
				this.state.minPrice
			}&maxPrice=${this.state.maxPrice}&parking=${this.state.parking}&status=${
				this.state.status
			}`
		);
	}

	onChangeStr(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	onChangeInt(e) {
		this.setState({ [e.target.name]: parseInt(e.target.value, 10) });
	}

	render() {
		// Select options for min beds
		const minBedOptions = [
			{
				label: <FormattedMessage id="home.any" defaultMessage="Any" />,
				value: 0
			},
			{ label: '1', value: 1 },
			{ label: '2', value: 2 },
			{ label: '3', value: 3 },
			{ label: '4', value: 4 },
			{ label: '5', value: 5 },
			{ label: '6', value: 6 }
		];
		// Select options for max beds
		const maxBedOptions = [
			{
				label: <FormattedMessage id="home.any" defaultMessage="Any" />,
				value: 20
			},
			{ label: '1', value: 1 },
			{ label: '2', value: 2 },
			{ label: '3', value: 3 },
			{ label: '4', value: 4 },
			{ label: '5', value: 5 },
			{ label: '10', value: 10 },
			{ label: '15', value: 15 }
		];
		// Select options for max price
		const maxPriceOptions = [
			{
				label: <FormattedMessage id="home.any" defaultMessage="Any" />,
				value: 100000000
			},
			{ label: '£500,000', value: 500000 },
			{ label: '£750,000', value: 750000 },
			{ label: '£1,000,000', value: 1000000 },
			{ label: '£1,250,000', value: 1250000 },
			{ label: '£1,500,000', value: 1500000 },
			{ label: '£1,750,000', value: 1750000 },
			{ label: '£2,000,000', value: 2000000 },
			{ label: '£2,500,000', value: 2500000 },
			{ label: '£3,000,000', value: 3000000 },
			{ label: '£3,500,000', value: 3500000 },
			{ label: '£4,000,000', value: 4000000 },
			{ label: '£5,000,000', value: 5000000 },
			{ label: '£10,000,000', value: 10000000 },
			{ label: '£25,000,000', value: 25000000 },
			{ label: '£50,000,000', value: 50000000 }
		];
		// Select options for min price
		const minPriceOptions = [
			{
				label: <FormattedMessage id="home.any" defaultMessage="Any" />,
				value: 0
			},
			{ label: '£500,000', value: 500000 },
			{ label: '£750,000', value: 750000 },
			{ label: '£1,000,000', value: 1000000 },
			{ label: '£1,250,000', value: 1250000 },
			{ label: '£1,500,000', value: 1500000 },
			{ label: '£1,750,000', value: 1750000 },
			{ label: '£2,000,000', value: 2000000 },
			{ label: '£2,500,000', value: 2500000 },
			{ label: '£3,000,000', value: 3000000 },
			{ label: '£3,500,000', value: 3500000 },
			{ label: '£4,000,000', value: 4000000 },
			{ label: '£5,000,000', value: 5000000 }
		];
		// Select options for parking
		const parkingOptions = [
			{
				label: (
					<FormattedMessage
						id="home.notEssential"
						defaultMessage="Not Essential"
					/>
				),
				value: 0
			},
			{ label: '1', value: 1 },
			{ label: '2', value: 2 },
			{ label: '3', value: 3 }
		];
		// Select options for property status
		const statusOptions = [
			{
				label: (
					<FormattedMessage
						id="home.propertyStatus"
						defaultMessage="Property Status"
					/>
				),
				value: 'Any'
			},
			{ label: 'Available', value: 'Available' },
			{ label: 'Under Development', value: 'Under Development' }
		];

		return (
			<div>
				<div className="search-form">
					<div className="row justify-content-center">
						<div className="col-1 ">
							<button
								onClick={this.searchProperties}
								className="btn btn-light search-button"
							>
								<FormattedMessage id="home.search" defaultMessage="Search" />
							</button>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 col-sm-6">
							<TextFieldGroup
								placeholder={
									this.props.lang === 'en'
										? 'Address, district or post code...'
										: `Адрес, район или почтовый индекс...`
								}
								name="keywords"
								value={this.state.keywords}
								onChange={this.onChangeStr}
								info={
									<FormattedMessage
										id="home.keywords"
										defaultMessage="Keywords"
									/>
								}
							/>
						</div>

						<div className="col-md-3 col-sm-6 hide-on-xs">
							<SelectStringListGroup
								placeholder="Any"
								name="status"
								value={this.state.status}
								onChange={this.onChangeStr}
								options={statusOptions}
								info={
									<FormattedMessage id="home.status" defaultMessage="Status" />
								}
							/>
						</div>
						<div className="col-md-3 col-sm-6 hide-on-xs">
							<SelectNumberListGroup
								placeholder="Any"
								name="parking"
								value={this.state.parking}
								onChange={this.onChangeInt}
								options={parkingOptions}
								info={
									<FormattedMessage
										id="home.parking"
										defaultMessage="Parking"
									/>
								}
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-3 col-xs-12 hide-on-xs">
							<SelectNumberListGroup
								placeholder="Any"
								name="minPrice"
								value={this.state.minPrice}
								onChange={this.onChangeInt}
								options={minPriceOptions}
								info={
									<FormattedMessage
										id="home.minPrice"
										defaultMessage="Min Price"
									/>
								}
							/>
						</div>
						<div className="col-sm-3 col-xs-12 hide-on-xs">
							<SelectNumberListGroup
								placeholder="Any"
								name="maxPrice"
								value={this.state.maxPrice}
								onChange={this.onChangeInt}
								options={maxPriceOptions}
								info={
									<FormattedMessage
										id="home.maxPrice"
										defaultMessage="Max Price"
									/>
								}
							/>
						</div>
						<div className="col-sm-3 col-xs-12 hide-on-xs">
							<SelectNumberListGroup
								placeholder="Any"
								name="minBeds"
								value={this.state.minBeds}
								onChange={this.onChangeInt}
								options={minBedOptions}
								info={
									<FormattedMessage
										id="home.minBeds"
										defaultMessage="Min Beds"
									/>
								}
							/>
						</div>
						<div className="col-sm-3 col-xs-12 hide-on-xs">
							<SelectNumberListGroup
								placeholder="Any"
								name="maxBeds"
								value={this.state.maxBeds}
								onChange={this.onChangeInt}
								options={maxBedOptions}
								info={
									<FormattedMessage
										id="home.maxBeds"
										defaultMessage="Max Beds"
									/>
								}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	lang: state.locale.lang
});

export default connect(mapStateToProps)(withRouter(Searchbar));
