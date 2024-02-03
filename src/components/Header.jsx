import Categories from './Categories';

const Header = ({ categoriesIndex, onClickCategory }) => {
	return (
		<header className="header">
			<Categories
				categoriesIndex={categoriesIndex}
				onClickCategory={onClickCategory}
			/>
		</header>
	);
};

export default Header;
