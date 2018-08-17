import axios from 'axios';

import {
	REMOVE_SUBSCRIBER,
	GET_SUBSCRIBERS,
	ADD_SUBSCRIBER,
	GET_ERRORS,
	CLEAR_ERRORS
} from './types';

// Add subscriber to list
export const addSubscriber = newsletterData => dispatch => {
	dispatch(clearErrors());
	axios
		.post('/api/newsletter', newsletterData)
		.then(res =>
			dispatch({
				type: ADD_SUBSCRIBER,
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

// Get all subscribers from list
export const getSubscribers = () => dispatch => {
	axios
		.get('/api/newsletter')
		.then(res =>
			dispatch({
				type: GET_SUBSCRIBERS,
				payload: res.data
			})
		)
		.catch(err =>
			dispatch({
				type: GET_SUBSCRIBERS,
				payload: null
			})
		);
};

// Remove subscriber from list
export const removeSubscriber = id => dispatch => {
	axios
		.delete(`/api/newsletter/${id}`)
		.then(res =>
			dispatch({
				type: REMOVE_SUBSCRIBER,
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

// Clear errors
export const clearErrors = () => {
	return {
		type: CLEAR_ERRORS
	};
};
