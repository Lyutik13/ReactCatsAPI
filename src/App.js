import React from 'react';

import Header from './components/Header';
import CatBlock from './components/CatBlock';

import './sass/app.scss';

function App() {
  const [items, setItems] = React.useState([]);

  
  React.useEffect(() => {
    fetch(`https://api.thecatapi.com/v1/images/search?limit=15`)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      setItems(json);
    })
    .catch((err) => {
      console.warn(err);
      alert('Error fatch API');
    });
	}, []);
  
  console.log(items);

	return (
		<>
			<Header />
			<div className="container">
				<main className='main'>
          {items.map((obj) => (
            <CatBlock key={obj.id} id={obj.id} url={obj.url}/>
          ))}
				</main>
			</div>
		</>
	);
}

export default App;
