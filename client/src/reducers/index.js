import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import propertyReducer from './propertyReducer';
// import newsletterReducer from './newsletterReducer';

export default combineReducers({
	auth: authReducer,
	property: propertyReducer,
	// newsletter: newsletterReducer,
	errors: errorReducer
});
