import React from 'react';
import {Fade} from "react-awesome-reveal";
import {Col, Container, Row} from "react-bootstrap";
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

const Contacts = () => {
	return (
		<div className="bck_black" style={{paddingBottom:'25px'}}>
			<Container>
				<Fade>
					<h1 style={{margin:0,padding:25, color:'#fff'}} align="center">Contacts</h1>
				</Fade>
				<Row>
					<Col
						style={{paddingBottom:25,marginTop:0,color:'#fff'}}
						md={6}
					>
						<div style={{margin:0}}>
							<p style={{marginTop:0}} align="center">PsyToniK offers full-musical service for any event, large or small. I can understand your needs and I will play the music to satisfy the biggest criteria of them all. Do not hesitate to contact me.</p>
							<p className="text-center">You can contact me by phone  or e-mail </p>
						</div>
					</Col>

					<Col md={6}>
						<Row className="justify-content-center">
							<Col md={6}>
								<a href="tel:+972-54-5249-433"> <PhoneAndroidRoundedIcon color="primary" sx={{ fontSize: 50,alignItems:"center" }}/></a>
								<b align="center" style={{color:'#fff',fontSize:'20px'}}>+(972)-54-5249-433</b>
							</Col>
						</Row>
						<br/>
						<Row className="justify-content-center">
							<Col md={6}>
								<a href="mailto:djpsytonik@gmail.com"> <MailOutlineOutlinedIcon color="secondary" sx={{ fontSize: 50,alignItems:"center" }}/></a>
								<b align="center" style={{color:'#fff',fontSize:'20px',marginBottom:'25px'}}>djpsytonik@gmail.com</b>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Contacts;
