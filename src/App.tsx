import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AppContext from './context';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';
import { IItems } from './redux/items/itemSlice';

import './sass/app.scss';

function App() {
  const catLikePageData = localStorage.getItem('catLike');
  const initialCatLikePage = catLikePageData ? JSON.parse(catLikePageData) : [];
  
  const [catLikePage, setCatLikePage] = React.useState<IItems[]>(initialCatLikePage);

	const saveLocalStorage = () => {
		localStorage.setItem('catLike', JSON.stringify(catLikePage));
	};

	saveLocalStorage();

	const onAddFavorites = (item: IItems) => {
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

	return (
		<AppContext.Provider value={{ catLikePage, onAddFavorites}}>
			<h1 style={{ display: 'none' }}>Котики API</h1>
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
