import React from 'react';

const NotFound = () => {
	return (
		<div className='error'>
			<h2>
				<span>😿</span> <br />
				Ничего не найденно
			</h2>
			<p className='desc'>
				К сожалению данная страница отсутствует.
				<br /> <span>404!</span>
			</p>
		</div>
	);
};

export default NotFound;
