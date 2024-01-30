import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <React.StrictMode>
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	// </React.StrictMode>
);

// Результат и резюме отправляй на почту igumnova@uchi.ru в теме письма: ТЗ Frontend-разработчик JS (стажировка).
