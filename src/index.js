import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import combineReducers from './reducers';

//middlewares
import thunkMiddleware from 'redux-thunk';

const store = createStore(combineReducers, applyMiddleware(thunkMiddleware));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
