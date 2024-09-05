import React from 'react';

import favorite from '../../assets/img/heart-solid.svg';
import favoriteBorder from '../../assets/img/heart-regular.svg';


interface ICatBlockProps {
  id: number;
  url: string;
  onAddFavorites: () => void;
  isFavorites?: boolean;
}


const CatBlock: React.FC<ICatBlockProps> = ({ isFavorites = true, onAddFavorites, url, id }) => {
	const [isLike, setIsLike] = React.useState(isFavorites);

	const onClickLike = () => {
		setIsLike(!isLike);
		onAddFavorites();
	};

	return (
		<>
			<div className="catBlock">
				<div className="catBlockImg">
					<img src={url} alt={id.toString()} />
				</div>
				<img
					className="favoriteSvg"
					src={isLike ? favoriteBorder : favorite}
					alt={isLike ? 'favoriteBorder' : 'favorite'}
					onClick={() => onClickLike()}
				/>
			</div>
		</>
	);
};

export default CatBlock;
