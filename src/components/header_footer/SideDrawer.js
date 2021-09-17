import {Drawer,List,ListItem} from "@material-ui/core";
import React from 'react';

const SideDrawer = (props) => {
	const links = [
		{where:'featured',value:'To Top'},
		{where:'biography',value:'Biography'},
		{where:'gigs',value:'Gigs'},
		{where:'music',value:'Music'},
		{where:'video',value:'Video'},
		{where:'contacts',value:'Contacts'},
	]

	const renderItem = (item) => {
		return (
			<ListItem button onClick={()=>alert(item.where)} key={item.where}>
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
