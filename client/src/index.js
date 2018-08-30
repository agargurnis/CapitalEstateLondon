import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Router>
		<Provider store={store}>
			<Route component={App} />
		</Provider>
	</Router>,
	document.getElementById('root')
);
registerServiceWorker();
