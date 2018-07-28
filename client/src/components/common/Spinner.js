import React from 'react';
import spinner from '../images/spinner.gif';

export default () => {
	return (
		<div>
			<img
				src={spinner}
				alt="Loading..."
				style={{ width: '25%', margin: 'auto', display: 'block' }}
			/>
		</div>
	);
};
