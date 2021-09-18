
import {Container, Divider} from "@mui/material";
import React from 'react';
import {Fade} from "react-awesome-reveal";

const Biography = () => {
	return (
		<div className="highlight_wrapper">
			<Container>
				<Fade>
					<h1 align="center">Biography</h1>
				</Fade>
				<Divider/>
				<div className="highlight_description">
					<p><span style={{color: '#fda20f'}}>Anthony Fink</span> was born in 1985 in the western part of Siberia. Since young age he's in love with electronic beats.</p>
					<p>All childhood long he was dreaming of becoming a DJ and playing good music at parties around the world. Since the 6'th grade at school he organized school parties for his classmates playing Rave, Acid House and Techno.</p>
					<p>At 1999 Anthony moved to Israel, where he met new styles of music: Psychedelic & Goa Trance. Since 2006 he performed at various events from North to South of Israel</p>
					<p>In the year 2006, together with DJ Skylander from Moscow they organized PsR Net Label</p>
					<p>At 2011 Dj Psytonik, Dj Skylander and SOM released a compilation of 4 CDs which was called PsR Reincarnation.</p>
					<p>At 2013 Anthony was signed to be part of an underground and very interesting record label called UnderVoice Records.</p>
					<p>At 2014 he traveled to India/Goa for a month and found for himself a unique style of psychedelic colorful music.</p>
					<p>At 2015 he got back to India for half a year, He's been performing at 9 Bar (Goa), Uv Bar (Goa), Westend Club (Goa) and various parties around Anjuna (Goa), Vagator (Goa), Chapora (Goa)....
						He's been performing at Andaman Islands, North of India (Himachal Paradesh/Parvati Valley) After half a year in India he flew to act in Russia (Moscow / Crimea)</p>
					<p>From summer of 2016 became (former) Resident at Penguin Club ( Israel / Tel Aviv / Yehuda Halevi 43 ) on Wednesdays. And always looks for new gigs...</p>
					<p>At 2017 Anthony has released the first part of his compilation on UnderVoice records which was called <b>Space Ganesh Part 1</b></p>
					<p>At March of 2018 has released the second part of his compilation <b>Space Ganesh Part 2</b> that blowing dance floors around the world</p>
					<p>At 2020 Anthony was signed to Greek label Underground Experience</p>
					<p style={{marginBottom:0, paddingBottom:'25px'}}>At 2021 Anthony has released his final Space Ganesh compilation at Underground Experience</p>
				</div>
			</Container>
		</div>
	);
};

export default Biography;
