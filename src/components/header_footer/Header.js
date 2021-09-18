import {AppBar, IconButton, Toolbar} from "@mui/material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

import React, {useEffect,useState} from 'react';

import SideDrawer from "./SideDrawer.js";
import psytonikLogo from '../../resources/images/psytonikLogoEdited.png'
const Header = () => {
	const [drawerOpen,setDrawerOpen] = useState(false);
	const [headerShow,setHeaderShow] = useState(false);
	const toggleDrawer = (value) => {
		setDrawerOpen(value)
	}
	const handleScroll = () => {
		if(window.scrollY > 0){
			setHeaderShow(true);
		} else {
			setHeaderShow(false);
		}
	}
	useEffect(()=>{
		window.addEventListener('scroll',handleScroll)
	},[]);

	return (
		<AppBar
			position="fixed"
			style={{
				backgroundColor:headerShow ? '#2f2f2f': 'transparent',
				boxShadow:"none",
				padding :'10px 0px'
			}}
		>
			<Toolbar>
				<div className="header_logo">
						<img src={psytonikLogo} alt="Psytonik logo" width="200px"/>
					<div className="header_logo_title" style={{paddingLeft:'8px'}}>Your Musical Butcher</div>
				</div>
				<IconButton  color="inherit" aria-label="menu" onClick={()=>toggleDrawer(true)}>
					<MenuRoundedIcon />
				</IconButton>
				<SideDrawer open={drawerOpen} onClose={()=>toggleDrawer(false)}/>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
