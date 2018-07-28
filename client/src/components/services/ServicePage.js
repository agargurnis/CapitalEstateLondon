import React, { Component } from 'react';
import ServiceTabs from './ServiceTabs';
import ServiceHeader from './ServiceHeader';

class ServicePage extends Component {
	render() {
		return (
			<div>
				<ServiceHeader />
				<ServiceTabs />
			</div>
		);
	}
}

export default ServicePage;
