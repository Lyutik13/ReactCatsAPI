import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import AppContext from '../context';
import CatBlock from '../components/CatBlock/CatBlock';
import { setCategoriesHeaderIndex } from '../redux/cats/slice';

const Favorites: React.FC = () => {
	const { catLikePage, onAddFavorites } = React.useContext(AppContext);
	const dispatch = useDispatch();

	return (
		<>
			<div className="main">
				{catLikePage.length !== 0 ? (
					catLikePage.map((item) => (
						<CatBlock
							key={item.id}
							{...item}
							onAddFavorites={async () => onAddFavorites(item)}
							isFavorites={false}
						/>
					))
				) : (
					<div className="error">
						<h3>
							<span>😿</span> <br />К сожалению вы не добавили ни одного котика
						</h3>
						<p className="desc">Так добавьте его скорее)))</p>
						<Link
							to="/"
							onClick={() => dispatch(setCategoriesHeaderIndex(0))}
							className="btnOnHome">
							На главную
						</Link>
					</div>
				)}
			</div>
		</>
	);
};

export default Favorites;
