import React from 'react';

import AppContext from '../context';
import CatBlock from '../components/CatBlock/CatBlock';
import SkeletonBlock from '../components/CatBlock/SkeletonBlock';

const Home = () => {
	const { onAddFavorites } = React.useContext(AppContext);

	const [items, setItems] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);

	const myKey = 'api_key=live_TGFRuaOSsQuKCS3qADEB8cC8RN4iHjy5icDZLAaQG5dtxVqyD6nDQhhXDKhHGdd1';

	const loadingItems = async () => {
		setIsLoading(true);

		await fetch(`https://api.thecatapi.com/v1/images/search?limit=15&${myKey}`)
			.then((res) => {
				return res.json();
			})
			.then((json) => {
				setItems((prev) => [...prev, ...json]);
				setIsLoading(false);
			})
			.catch((err) => {
				console.warn(err);
				alert('Error fatch API');
			});
	};

	React.useEffect(() => {
		loadingItems();
	}, []);

	return (
		<>
			<div className="main">
				{items.length === 0
					? [...new Array(15)].map((_, index) => <SkeletonBlock key={index} />)
					: items.map((item) => (
							<CatBlock key={item.id} {...item} onAddFavorites={() => onAddFavorites(item)} />
					  ))}
				{isLoading && [...new Array(15)].map((_, index) => <SkeletonBlock key={index} />)}
			</div>
			<button onClick={loadingItems} className="btnLoading">
				... Загружаем еще котиков ...
			</button>
		</>
	);
};

export default Home;
