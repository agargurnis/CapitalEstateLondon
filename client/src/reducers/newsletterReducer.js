import {
	REMOVE_SUBSCRIBER,
	GET_SUBSCRIBERS,
	SUBS_LOADING
} from '../actions/types';

const initialState = {
	subscribers: [],
	loading: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case SUBS_LOADING:
			return {
				...state,
				loading: true
			};
		case GET_SUBSCRIBERS:
			return {
				...state,
				subscribers: action.payload,
				loading: false
			};
		case REMOVE_SUBSCRIBER:
			return {
				...state,
				subscribers: state.subscribers.filter(
					subscriber => subscriber._id !== action.payload
				)
			};
		default:
			return state;
	}
}
