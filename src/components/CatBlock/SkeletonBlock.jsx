import React from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonBlock = (props) => (
	<ContentLoader
		className="catBlock"
		speed={10}
		width={225}
		height={225}
		viewBox="0 0 225 225"
		backgroundColor="#f3f3f3"
		foregroundColor="#1e88e5"
		{...props}>
		<rect x="0" y="0" rx="0" ry="0" width="225" height="225" />
	</ContentLoader>
);

export default SkeletonBlock;
