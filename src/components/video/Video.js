import React from 'react';
import { Container,Grid } from "@mui/material";

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
				<h1 align="center" style={{marginTop: 0, paddingTop: 25, color: '#000'}}>Videos</h1>
					<Grid container>
						{youtubeLinks.map((youtube,index)=>(
							<Grid
								key={index}
								sx={{ justifyContent: 'center',alignItems:'center' }}
								item md={6}>
								<div>{youtube.videoName}</div>
								<iframe id="player"
								        title={youtube.videoName}
								        src={`https://www.youtube.com/embed/${youtube.videoId}?enablejsapi=1&origin=https://psytonik.dj`}
								        frameBorder="0"/>
							</Grid>
						))}
					</Grid>
			</Container>
		</div>
	);
};

export default Video;
