import {
	ADD_SUBSCRIBER,
	REMOVE_SUBSCRIBER,
	GET_SUBSCRIBERS
} from '../actions/types';

const initialState = {
	subscribers: [],
	subscriber: {}
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_SUBSCRIBERS:
			return {
				...state,
				subscribers: action.payload
			};
		case ADD_SUBSCRIBER:
			return {
				...state,
				subscribers: [action.payload, ...state.subscribers]
			};
		case REMOVE_SUBSCRIBER:
			return {
				...state,
				subscribers: state.properties.filter(
					subscriber => subscriber._id !== action.payload
				)
			};
		default:
			return state;
	}
}
