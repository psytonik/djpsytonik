import React from 'react';
import { Container,Grid,Box } from "@material-ui/core";
import YouTube from 'react-youtube';

const Video = () => {
	const youtubeLinks = [
		{videoName:'For PsyVibes 2021',videoId:'K4g2ez-GUTw'},
		{videoName:'Spirit Tribe 2018',videoId:'xPg_RpYjBPU'},
		{videoName:'Comfort Club (Israel) 2018',videoId:'y5RSPKvYBFg'},
		{videoName:'Purim Moksha 2017',videoId:'-Gq8AQgUX18'},
		{videoName:'Palmachim Beach 2016',videoId:'_2l7QkBa1j8'}
	]
	const opts = {
		width: '50%',
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1,
		},
	};
	const _onReady = (event) => {
		// access to player in all event handlers via event.target
		event.target.pauseVideo();
	}
	return (
		<div style={{background: '#fda20f'}}>
			<Container>

				<h1 align="center" style={{marginTop: 0, paddingTop: 25, color: '#000'}}>Videos</h1>
				{youtubeLinks.map((youtube,index)=>(
					<Box
						key={index}
						sx={{boxShadow: 3}}
					>
						<Grid >
							<div>{youtube.videoName}</div>
							<YouTube videoId={youtube.videoId} opts={opts} onReady={_onReady} />
						</Grid>
					</Box>
				))}
			</Container>
		</div>
	);
};

export default Video;
