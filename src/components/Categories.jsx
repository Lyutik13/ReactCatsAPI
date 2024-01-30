import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
	const [categoriesIndex, setCategoriesIndex] = React.useState(0);

	const categoriesMenu = [
		{ name: <Link to="/">Все котики</Link> },
		{ name: <Link to="/favorites">Любимые котики</Link> },
	];

	function onClickCategory(i) {
		setCategoriesIndex(i);
	}

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
