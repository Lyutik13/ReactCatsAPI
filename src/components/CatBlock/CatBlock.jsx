const CatBlock = ({id, url}) => {
	return (
		<div className="catBlock">
			<img src={url} alt={id} />
		</div>
	);
};

export default CatBlock;
