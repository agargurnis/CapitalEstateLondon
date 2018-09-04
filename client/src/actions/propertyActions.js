import axios from 'axios';

import {
	GET_PROPERTY,
	GET_PROPERTIES,
	PROPERTY_LOADING,
	DELETE_PROPERTY,
	CREATE_PROPERTY,
	CLEAR_ERRORS,
	GET_ERRORS
} from './types';

// Get property
export const getProperty = id => dispatch => {
	dispatch(setPropertyLoading());
	axios
		.get(`/api/properties/${id}`)
		.then(res =>
			dispatch({
				type: GET_PROPERTY,
				payload: res.data
			})
		)
		.catch(err =>
			dispatch({
				type: GET_PROPERTY,
				payload: null
			})
		);
};

// Create property
export const createProperty = (propertyData, history) => dispatch => {
	dispatch(clearErrors());
	dispatch(setPropertyLoading());
	axios
		.post('/api/properties', propertyData)
		.then(res =>
			dispatch({
				type: CREATE_PROPERTY,
				payload: res.data
			})
		)
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};

// Edit property
export const editProperty = (id, propertyData, history) => dispatch => {
	dispatch(clearErrors());
	dispatch(setPropertyLoading());
	axios
		.post(`/api/properties/${id}`, propertyData)
		.then(res => history.push('/manageproperties'))
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};

// Get all properties
export const getProperties = () => dispatch => {
	dispatch(setPropertyLoading());
	axios
		.get('/api/properties')
		.then(res =>
			dispatch({
				type: GET_PROPERTIES,
				payload: res.data
			})
		)
		.catch(err =>
			dispatch({
				type: GET_PROPERTIES,
				payload: null
			})
		);
};

// Delete property
export const deleteProperty = id => dispatch => {
	axios
		.delete(`/api/properties/${id}`)
		.then(res =>
			dispatch({
				type: DELETE_PROPERTY,
				payload: id
			})
		)
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};

// Property loading
export const setPropertyLoading = () => {
	return {
		type: PROPERTY_LOADING
	};
};

// Clear errors
export const clearErrors = () => {
	return {
		type: CLEAR_ERRORS
	};
};
