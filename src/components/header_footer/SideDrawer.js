import {Drawer,List,ListItem} from "@material-ui/core";
import React from 'react';
import {scroller} from 'react-scroll'
const SideDrawer = (props) => {
	const links = [
		{where:'featured',value:'Featured'},
		{where:'biography',value:'Biography'},
		{where:'gigs',value:'Gigs'},
		{where:'music',value:'Music'},
		{where:'video',value:'Video'},
		{where:'contacts',value:'Contacts'},
	]

	const scrollToElement = (element) => {
		scroller.scrollTo(element,{
			duration: 1500,
			delay:100,
			smooth:true,
			offset:-96
		});
		props.onClose(false)
	}
	const renderItem = (item) => {
		return (
			<ListItem button onClick={()=>scrollToElement(item.where)} key={item.where}>
				{item.value}
			</ListItem>
		)
	}
	return (
		<Drawer
			anchor="right"
			open={props.open}
			onClose={()=>props.onClose(false)}
		>
			<List component="nav">
				{links.map((link)=>renderItem(link))}
			</List>
		</Drawer>
	);
};

export default SideDrawer;
