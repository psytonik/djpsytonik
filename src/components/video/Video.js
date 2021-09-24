import React from 'react';
import {Fade} from "react-awesome-reveal";
import {Row, Container, Col} from "react-bootstrap";

const Video = () => {
	const youtubeLinks = [
		{videoName:'For PsyVibes 2021',videoId:'K4g2ez-GUTw'},
		{videoName:'Spirit Tribe 2018',videoId:'xPg_RpYjBPU'},
		{videoName:'Comfort Club (Israel) 2018',videoId:'y5RSPKvYBFg'},
		{videoName:'Purim Moksha 2017',videoId:'-Gq8AQgUX18'},
		{videoName:'Palmachim Beach 2016',videoId:'_2l7QkBa1j8'}
	]
	return (
		<div style={{background: '#fda20f'}}>
			<Container>
				<Fade>
					<h1 align="center" style={{marginTop: 0, paddingTop: 25, color: '#fff'}}>Video</h1>
				</Fade>
				<Row
					style={{marginBottom:0,paddingBottom:25}}
				>
					{youtubeLinks.map((youtube,index)=>(
						<Col
							key={index}
							md={6}>
							<h3 align="center">{youtube.videoName}</h3>
							<iframe id={index}
							        width="100%"
							        height="350px"
							        title={youtube.videoName}
							        src={`https://www.youtube.com/embed/${youtube.videoId}?enablejsapi=1&origin=https://psytonik.dj`}
							        frameBorder="0"/>
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
};

export default Video;
