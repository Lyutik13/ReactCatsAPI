import React from 'react';
import { Link } from 'react-router-dom';

import CatBlock from '../components/CatBlock/CatBlock';

const Favorites = ({ catLikePage, onAddFavorites, onClickCategory }) => {
	return (
		<>
			<div className="main">
				{catLikePage.length !== 0 ? (
					catLikePage.map((item) => (
						<CatBlock key={item.id} {...item} onAddFavorites={() => onAddFavorites(item)} />
					))
				) : (
					<div className="error">
						<h2>
							<span>😕</span> <br />К сожалению вы не добавили ни одного котика
						</h2>
						<p className="desc">Так добавьте его скорее)))</p>
						<Link to="/" onClick={() => onClickCategory(0)} className="btnOnHome">
							На главную
						</Link>
					</div>
				)}
			</div>
		</>
	);
};

export default Favorites;
