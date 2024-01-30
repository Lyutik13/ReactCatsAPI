import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';

import './sass/app.scss';

function App() {
	return (
		<>
			<h1 style={{ display: 'none' }}>Котики</h1>
			<Header />
			<div className="container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/favorites" element={<Favorites />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
