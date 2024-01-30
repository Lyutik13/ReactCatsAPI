import React from 'react';

import CatBlock from '../components/CatBlock/CatBlock';
import SkeletonBlock from '../components/CatBlock/SkeletonBlock';

const Home = () => {
	const [items, setItems] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);

	const myKey = 'api_key=live_TGFRuaOSsQuKCS3qADEB8cC8RN4iHjy5icDZLAaQG5dtxVqyD6nDQhhXDKhHGdd1';

	React.useEffect(() => {
		setIsLoading(true);
		fetch(`https://api.thecatapi.com/v1/images/search?limit=5&${myKey}`)
			.then((res) => {
				return res.json();
			})
			.then((json) => {
				setItems(json);
				setIsLoading(false);
			})
			.catch((err) => {
				console.warn(err);
				alert('Error fatch API');
			});
	}, []);

  const loadingItems = () => {
    console.log('load');
  }

	return (
		<>
			<div className="main">
				{isLoading
					? [...new Array(15)].map((_, index) => <SkeletonBlock key={index} />)
					: items.map((obj) => <CatBlock key={obj.id} url={obj.url} />)}
			</div>
			<button onClick={() => loadingItems()} className="btnLoading">
				... загружаем еще котиков ...
			</button>
		</>
	);
};

export default Home;
