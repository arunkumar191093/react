import React from 'react';
import Content from './Content';
import Timer from './Timer';

export default class Settings extends React.Component{
	render(){
		const menus = [
			"Devices",
			"Control Panel",
			"Uninstall"
		].map((menu,i) => <Content key={i} content={menu}/>)

		


		return (
			<div>
				<h1>Settings</h1>
				<Timer />
				<div class="row">{menus}</div>
			</div>
		);
	}
		
}