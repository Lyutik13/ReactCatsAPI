import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AppContext from './context';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';

import './sass/app.scss';

function App() {
	const [catLikePage, setCatLikePage] = React.useState(
		JSON.parse(localStorage.getItem('catLike')) || [],
	);
	const [categoriesIndex, setCategoriesIndex] = React.useState(0);

	const saveLocalStorage = () => {
		localStorage.setItem('catLike', JSON.stringify(catLikePage));
	};

	saveLocalStorage();

	const onAddFavorites = (item) => {
		try {
			if (catLikePage.find((favObj) => favObj.id === item.id)) {
				setCatLikePage((prev) => prev.filter((favObj) => favObj.id !== item.id));
				saveLocalStorage();
			} else {
				setCatLikePage((prev) => [...prev, item]);
				saveLocalStorage();
			}
		} catch (error) {
			alert('Не удалось добавить в фавориты');
			console.error(error);
		}
	};

	function onClickCategory(i) {
		setCategoriesIndex(i);
	}

	console.log(catLikePage);

	return (
		<AppContext.Provider value={{ catLikePage, categoriesIndex, onAddFavorites, onClickCategory }}>
			<h1 style={{ display: 'none' }}>Котики</h1>
			<Header />
			<div className="container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/favorites" element={<Favorites />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</AppContext.Provider>
	);
}

export default App;
