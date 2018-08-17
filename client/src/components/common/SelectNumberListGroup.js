import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const SelectListGroup = ({ name, value, error, info, onChange, options }) => {
	const selectOptions = options.map(option => (
		<option key={option.label} value={option.value}>
			{option.label}
		</option>
	));
	return (
		<div className="form-group">
			{info && <p className="text-muted">{info}</p>}
			<select
				className={classnames('form-control form-control-lg', {
					'is-invalid': error
				})}
				name={name}
				value={value}
				onChange={onChange}
			>
				{selectOptions}
			</select>
			{error && <div className="invalid-feedback">{error}</div>}
		</div>
	);
};

SelectListGroup.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.number.isRequired,
	error: PropTypes.string,
	info: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	options: PropTypes.array.isRequired
};

export default SelectListGroup;
