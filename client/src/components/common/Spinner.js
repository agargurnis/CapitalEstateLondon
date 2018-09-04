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
					marginLeft: '38%',
					paddingTop: '10%',
					paddingBottom: '10%',
					display: 'block'
				}}
			/>
		</div>
	);
};
