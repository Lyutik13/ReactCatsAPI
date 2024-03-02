import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import AppContext from '../context';
import CatBlock from '../components/CatBlock/CatBlock';
import SkeletonBlock from '../components/CatBlock/SkeletonBlock';
import { setItems } from '../redux/items/itemSlice';

const Home = () => {
	const { onAddFavorites, isLoading, setIsLoading } = React.useContext(AppContext);
	const items = useSelector((state) => state.items.items);
	const dispatch = useDispatch();

	const myKey = 'api_key=live_TGFRuaOSsQuKCS3qADEB8cC8RN4iHjy5icDZLAaQG5dtxVqyD6nDQhhXDKhHGdd1';

	// const loadingItems = async () => {
	// 	setIsLoading(true);

	// 	await fetch(`https://api.thecatapi.com/v1/images/search?limit=15&${myKey}`)
	// 		.then((res) => {
	// 			return res.json();
	// 		})
	// 		.then((json) => {
	// 			setItems((prev) => [...prev, ...json]);
	// 			setIsLoading(false);
	// 		})
	// 		.catch((err) => {
	// 			console.warn(err);
	// 			alert('Error fatch API');
	// 		});
	// };

	const loadingItems = async () => {
		setIsLoading(true);

		try {
			const { data } = await axios.get(
				`https://api.thecatapi.com/v1/images/search?limit=1&${myKey}`,
			);
			dispatch(setItems(data));
			setIsLoading(false);
		} catch (error) {
			console.warn(error);
			alert('Ошибка при получении данных от API');
		}
	};

	React.useEffect(() => {
		if (items.length <= 0) {
			loadingItems();
		}
		// eslint-disable-next-line
	}, []);

	return (
		<>
			<div className="main">
				{items.length === 0
					? [...new Array(1)].map((_, index) => <SkeletonBlock key={index} />)
					: items.map((item) => (
							<CatBlock key={item.id} {...item} onAddFavorites={() => onAddFavorites(item)} />
					  ))}
				{isLoading &&
					items.length > 0 &&
					[...new Array(1)].map((_, index) => <SkeletonBlock key={index} />)}
			</div>
			<button onClick={loadingItems} className="btnLoading">
				... Загружаем еще котиков ...
			</button>
		</>
	);
};

export default Home;
