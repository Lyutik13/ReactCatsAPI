import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <React.StrictMode>
	<HashRouter future={{ v7_startTransition: true }}>
		<Provider store={store}>
			<App />
		</Provider>
	</HashRouter>,
	// </React.StrictMode>
);
