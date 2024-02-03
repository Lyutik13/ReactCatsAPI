import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';

import './sass/app.scss';

function App() {
	const [catLikePage, setCatLikePage] = React.useState([]);
	const [categoriesIndex, setCategoriesIndex] = React.useState(0);

	const onAddFavorites = (item) => {
		if (catLikePage.find((favObj) => favObj.id === item.id)) {
			setCatLikePage((prev) => prev.filter((favObj) => favObj.id !== item.id));
		} else {
			setCatLikePage((prev) => [...prev, item]);
		}
	};

	function onClickCategory(i) {
		setCategoriesIndex(i);
	}

	console.log(catLikePage);

	return (
		<>
			<h1 style={{ display: 'none' }}>Котики</h1>
			<Header
				categoriesIndex={categoriesIndex}
				setCategoriesIndex={setCategoriesIndex}
				onClickCategory={onClickCategory}
			/>
			<div className="container">
				<Routes>
					<Route path="/" element={<Home onAddFavorites={onAddFavorites} />} />
					<Route
						path="/favorites"
						element={
							<Favorites
								catLikePage={catLikePage}
								onAddFavorites={onAddFavorites}
								onClickCategory={onClickCategory}
							/>
						}
					/>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
