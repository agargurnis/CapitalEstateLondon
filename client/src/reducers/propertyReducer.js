import {
	CREATE_PROPERTY,
	GET_PROPERTIES,
	GET_PROPERTY,
	PROPERTY_LOADING,
	DELETE_PROPERTY
} from '../actions/types';

const initialState = {
	properties: [],
	property: {},
	loading: false,
	isHidden: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case PROPERTY_LOADING:
			return {
				...state,
				loading: true
			};
		case GET_PROPERTIES:
			return {
				...state,
				properties: action.payload,
				loading: false,
				isHidden: false
			};
		case GET_PROPERTY:
			return {
				...state,
				property: action.payload,
				loading: false,
				isHidden: true
			};
		case CREATE_PROPERTY:
			return {
				...state,
				loading: false,
				properties: [action.payload, ...state.properties]
			};
		case DELETE_PROPERTY:
			return {
				...state,
				properties: state.properties.filter(
					property => property._id !== action.payload
				)
			};
		default:
			return state;
	}
}
