import React from 'react';
import {Container,Grid} from "@material-ui/core";
import {PhoneIphoneIcon} from '@material-ui/icons-material';

const Contacts = () => {
	return (
		<div className="bck_black">
			<Container>
				<h1 style={{margin:0,padding:25, color:'#fff'}} align="center">Contacts</h1>
				<Grid style={{paddingBottom:25,margin:0,color:'#fff'}}>
					<p >PsyToniK offers full-musical service for any event, large or small. I can understand your needs and I will play the music to satisfy the biggest criteria of them all. Do not hesitate to contact me.</p>
					<p>You can contact me by phone +972-54-5249-433 or e-mail djpsytonik@gmail.com</p>
				</Grid>
				<Grid>
					<PhoneIphoneIcon fontSize="large"/>
				</Grid>
			</Container>
		</div>
	);
};

export default Contacts;
