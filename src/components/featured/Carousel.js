import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import psytonik1 from '../../resources/images/psytonik1.jpg'
import psytonik2 from '../../resources/images/psytonik2.jpg'
import psytonik3 from '../../resources/images/psytonik3.jpg'
import psytonik4 from '../../resources/images/psytonik4.jpg'
import psytonik5 from '../../resources/images/psytonik5.jpg'
import psytonik6 from '../../resources/images/psytonik6.jpg'
import psytonik7 from '../../resources/images/psytonik7.jpg'
import psytonik8 from '../../resources/images/psytonik8.jpg'

const Carousel = () => {
	const settings = {
		dots: false,
		lazyLoad: true,
		infinite: true,
		autoplay:true,
		speed: 400,
	};

	return (
		<div
			className="carrousel_wrapper"
			style={{height:`${window.innerHeight}px`}}
		>
			<Slider {...settings}>
				<div>
					<div
						className="carrousel_image"
						style={{
							background:`url(${psytonik1})`,
							height:`${window.innerHeight}px`}}
					>

					</div>
				</div>
				<div>
					<div
						className="carrousel_image"
						style={{background:`url(${psytonik2})`, height:`${window.innerHeight}px`}}
					>

					</div>
				</div>
				<div>
					<div
						className="carrousel_image"
						style={{background:`url(${psytonik3})`, height:`${window.innerHeight}px`}}
					>

					</div>
				</div>
				<div>
					<div
						className="carrousel_image"
						style={{background:`url(${psytonik4})`, height:`${window.innerHeight}px`}}
					>

					</div>
				</div>
				<div>
					<div
						className="carrousel_image"
						style={{background:`url(${psytonik5})`, height:`${window.innerHeight}px`}}
					>

					</div>
				</div>
				<div>
					<div
						className="carrousel_image"
						style={{background:`url(${psytonik6})`, height:`${window.innerHeight}px`}}
					>

					</div>
				</div>
				<div>
					<div
						className="carrousel_image"
						style={{background:`url(${psytonik7})`, height:`${window.innerHeight}px`}}
					>

					</div>
				</div>
				<div>
					<div
						className="carrousel_image"
						style={{background:`url(${psytonik8})`, height:`${window.innerHeight}px`}}
					>

					</div>
				</div>
			</Slider>
		</div>
	);
};

export default Carousel;
