import { Container, Grid } from "@material-ui/core";
import React from 'react';

const Music = () => {
	const musicLinks = [
		{
			mixName: 'Dj Set for PsyVibes Radio 2021',
			mixLink: 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FDj_PsyToniK%2Fpsytonik-mix-for-psyvibes-radio%2F'
		},
		{
			mixName: 'Reactive innovations 2019',
			mixLink: 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FDj_PsyToniK%2Fpsytonik-reactive-innovations%2F'
		},
		{
			mixName: 'Inspiration 2017',
			mixLink: 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FDj_PsyToniK%2Fpsytonik-inspiration%2F'
		},
		{
			mixName: 'Different Reality 2016',
			mixLink: 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FDj_PsyToniK%2Fpsytonik-different-reality%2F'
		},
		{
			mixName: 'Key To The Summer 2016',
			mixLink: 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FDj_PsyToniK%2Fpsytonik-key-to-the-summer-2016-promo-mix%2F'
		},
		{
			mixName: 'Way To Himachal 2015',
			mixLink: 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FDj_PsyToniK%2Fpsytonik-way-to-himachal%2F'
		},
		{
			mixName: 'Dirty Smoke 2015',
			mixLink: 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FDj_PsyToniK%2Fpsytonik-dirty-smoke%2F'
		},
		{
			mixName: 'Wild and Crazy Things 2014',
			mixLink: 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FDj_PsyToniK%2Fpsytonik-wild-and-crazy-things%2F'
		},
		{
			mixName: 'Viva Bom Shanka 2014',
			mixLink: 'https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FDj_PsyToniK%2Fpsytonik-viva-bom-shanka%2F'
		}
	]

	return (
		<div style={{background: 'black', color: "#fda20f"}}>
			<Container>
				<h2 align="center" style={{marginTop: 0, paddingTop: 25, color: '#fff'}}>Music / Mixes</h2>
				{musicLinks.map((link, index) => {
					return (
						<Grid container columns={{ sm: 2, md: 6 }} key={index}>
								<h3>{link.mixName}</h3>
								<iframe width="100%" height="120"
								        title={index}
								        src={link.mixLink}
								        frameBorder="0"/>
						</Grid>
					)
				})}
				<p style={{marginBottom: 0, paddingBottom: 25}}>more music on <a
					href="https://www.mixcloud.com/Dj_PsyToniK/" target="_blank" rel="noreferrer">MixCloud</a></p>
			</Container>
		</div>
	);
};

export default Music;
