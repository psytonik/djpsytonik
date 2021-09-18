import React from 'react';
import {Container, Grid} from "@mui/material";
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';const Contacts = () => {
	return (
		<div className="bck_black">
			<Container>
				<Grid container>
					<Grid style={{paddingBottom:25,margin:0,color:'#fff'}} item md={6}>
						<p >PsyToniK offers full-musical service for any event, large or small. I can understand your needs and I will play the music to satisfy the biggest criteria of them all. Do not hesitate to contact me.</p>
						<p>You can contact me by phone +972-54-5249-433 or e-mail djpsytonik@gmail.com</p>
					</Grid>
					<Grid item md={6}>
						<h1 style={{margin:0,padding:25, color:'#fff'}} align="center">Contacts</h1>
						<PhoneAndroidRoundedIcon color="secondary" sx={{ fontSize: 80 }}/>
						<MailOutlineOutlinedIcon color="secondary" sx={{ fontSize: 80 }}/>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default Contacts;
