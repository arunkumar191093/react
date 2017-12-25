import React from 'react';


export default class Header extends React.Component{
	
	handleChange(e){
		const title = e.target.value
		this.props.changeTitle(title);
	}	

	render(){
		return (
			<div>
				<input onChange={this.handleChange.bind(this)}/>
				<h1>{this.props.title}</h1>
			</div>
			);
	}
}