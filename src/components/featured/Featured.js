import React from 'react';
import Carousel from "./Carousel.js";
import TimeUntil from "./TimeUntil.js";

const Featured = () => {
	return (
		<div className="featured_container">
			<Carousel />
			{/*<div className="artist_name">*/}
			{/*	<div className="wrapper">*/}
			{/*		Dj PsyToniK*/}
			{/*	</div>*/}
			{/*</div>*/}
			<TimeUntil />
		</div>
	);
};

export default Featured;
