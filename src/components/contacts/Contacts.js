import React from 'react';
import {Box, Container, Grid} from "@mui/material";
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';const Contacts = () => {
	return (
		<div className="bck_black">
			<Container>
				<h1 style={{margin:0,padding:25, color:'#fff'}} align="center">Contacts</h1>
				<Grid container>
					<Grid
						style={{paddingBottom:25,marginTop:0,color:'#fff'}}
						item
						md={6}
					>
						<div style={{margin:0}}>
							<p style={{marginTop:0}} align="center">PsyToniK offers full-musical service for any event, large or small. I can understand your needs and I will play the music to satisfy the biggest criteria of them all. Do not hesitate to contact me.</p>
							<p align="center">You can contact me by phone  or e-mail </p>
						</div>
					</Grid>
					<Grid
						item
						md={6}

					>
						<Box sx={{ display: 'flex', gridTemplateRows: 'repeat(2, 1fr)' }}>
							<a href="tel:+972-54-5249-433"><PhoneAndroidRoundedIcon color="secondary" sx={{ fontSize: 50,alignItems:"center" }}/></a>
							<b align="center" style={{color:'#fff',fontSize:'20px'}}>+(972)-54-5249-433</b>

							<a href="mail:djpsytonik@gmail.com"><MailOutlineOutlinedIcon color="secondary" sx={{ fontSize: 50,alignItems:"center" }}/></a>
							<b align="center" style={{color:'#fff',fontSize:'20px',marginBottom:'15px'}}>djpsytonik@gmail.com</b>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default Contacts;
