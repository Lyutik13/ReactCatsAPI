import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';

import AppContext from '../context';
import CatBlock from '../components/CatBlock/CatBlock';
import SkeletonBlock from '../components/CatBlock/SkeletonBlock';
// import { setItems } from '../redux/items/itemSlice';
import { fetchItems } from '../redux/items/itemSlice';

const Home = () => {
	const { onAddFavorites } = React.useContext(AppContext);
	const { items, status } = useSelector((state) => state.items);
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
		dispatch(fetchItems(myKey));
	};

	React.useEffect(() => {
		if (items.length <= 0) {
			loadingItems();
		}
		// eslint-disable-next-line
	}, []);

	console.log(items);

	return (
		<>
			<div className="main">
				{items.length === 0 && status !== 'error'
					? [...new Array(1)].map((_, index) => <SkeletonBlock key={index} />)
					: items.map((item) => (
							<CatBlock key={item.id} {...item} onAddFavorites={() => onAddFavorites(item)} />
					  ))}

				{status === 'loading' &&
					items.length > 0 &&
					[...new Array(1)].map((_, index) => <SkeletonBlock key={index} />)}

				{status === 'error' && (
					<div className="error">
						<h3>
							<span>😿</span> <br />404!
						</h3>
						<p className="desc">Котан приуныл.</p>
					</div>
				)}
			</div>

			{status !== 'error' && (
				<button onClick={loadingItems} className="btnLoading">
					... Загружаем еще котиков ...
				</button>
			)}
		</>
	);
};

export default Home;
