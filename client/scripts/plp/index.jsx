import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Plp from './components';

export default function() {
	ReactDOM.render(
		<Provider store={store}>
			<Plp />
		</Provider>,
		document.getElementById('app')
	);
}
