import React from 'react';
import spinner from '../images/spinner.gif';

export default () => {
	return (
		<div className="w-100 h-100">
			<img
				src={spinner}
				alt="Loading..."
				style={{
					width: '25%',
					marginLeft: '35%',
					marginTop: '35%',
					display: 'block'
				}}
			/>
		</div>
	);
};
