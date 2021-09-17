import React from 'react';
import { Fade } from "react-awesome-reveal";

const Footer = () => {
	return (
		<footer className="bck_red">
			<Fade cascade delay={500} triggerOnce>
				<div className="font_righteous footer_logo_venue">Dj PsyToniK</div>
				<div className="footer_copyright">
					Website Designed with <span style={{color:'red'}}>♥</span> by Anthony Fink © All Rights Reserved
				</div>
			</Fade>
		</footer>
	);
};

export default Footer;
