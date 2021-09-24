import React from 'react';
import Carousel from "./Carousel.js";
import TimeUntil from "./TimeUntil.js";

const Featured = () => {
	return (
		<div className="featured_container">
			<Carousel />
			<TimeUntil />
		</div>
	);
};

export default Featured;
