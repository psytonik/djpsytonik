

import {Container, Grid} from "@mui/material";
import React from 'react';
import {Zoom} from "react-awesome-reveal";

import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';

const Gigs = () => {
	return (
		<div className="bck_black">
			<Container>
				<h1 align="center" style={{marginTop: 0, paddingTop: 25, color: '#fff'}}>Next Show</h1>
				<Grid
					container
					sx={{ justifyContent: 'center',alignItems:'center' }}
					style={{paddingTop:'100px', paddingBottom:'100px'}}
				>
					<Grid
						item
						md={6}>
							<Zoom className="vn_item" triggerOnce>
								<div>
									<div className="vn_outer">
										<div className="vn_inner">
											<div className="vn_icon_square bck_red"/>
											<div
												className="vn_icon"
												style={{
													background:`url(${icon_calendar})`
												}}
											/>
											<div className="vn_title">
												Event Date & Time
											</div>
											<div className="vn_desc">
												20.November.2021
											</div>
										</div>
									</div>
								</div>
							</Zoom>
					</Grid>

					<Grid
						item
						md={6}>
						<Zoom className="vn_item" delay={500} >
							<div>
								<div className="vn_outer">
									<div className="vn_inner">
										<div className="vn_icon_square bck_yellow"/>
										<div
											className="vn_icon"
											style={{
												background:`url(${icon_location})`
											}}
										/>
										<div className="vn_title">
											Event Location
										</div>
										<div className="vn_desc">
											Tel Aviv, Gagarin
										</div>

									</div>
								</div>
							</div>
						</Zoom>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default Gigs;
