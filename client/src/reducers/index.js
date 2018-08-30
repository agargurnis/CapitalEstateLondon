import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import propertyReducer from './propertyReducer';
import localeReducer from './localeReducer';
import newsletterReducer from './newsletterReducer';

export default combineReducers({
	auth: authReducer,
	property: propertyReducer,
	locale: localeReducer,
	newsletter: newsletterReducer,
	errors: errorReducer
});
