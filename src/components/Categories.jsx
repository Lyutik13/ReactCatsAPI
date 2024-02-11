import React from 'react';
import { Link } from 'react-router-dom';

import AppContext from '../context';

const Categories = () => {
	const { categoriesIndex, onClickCategory } = React.useContext(AppContext);

	const categoriesMenu = [
		{ name: <Link className='headerBtn' to="/">Все котики</Link> },
		{ name: <Link className='headerBtn' to="/favorites">Любимые котики</Link> },
	];

	return (
		<div className="categories">
			<ul>
				{categoriesMenu.map((obj, i) => (
					<li
						className={categoriesIndex === i ? 'active' : ''}
						key={i}
						onClick={() => onClickCategory(i)}>
						{obj.name}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Categories;
