import React from 'react';

const Categories = () => {
	const [categoriesIndex, setCategoriesIndex] = React.useState(0);

	const categoriesMenu = [{ name: 'Все котики' }, { name: 'Любимые котики' }];

	function onClickCategory(i) {
		setCategoriesIndex(i);
	}

	return (
		<div className="categories">
			<ul>
				{categoriesMenu.map((obj, i) => (
					<li
						className={categoriesIndex === i ? 'active' : ''}
						key={obj.name}
						onClick={() => onClickCategory(i)}>
						{obj.name}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Categories;
