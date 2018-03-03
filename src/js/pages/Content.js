import React from 'react';

export default class Content extends React.Component{
	render(){
        const {content} = this.props;

        const styleSheet = {
            color:"red"
        }
		return (
            <div class="col-lg-12">
                <h4 style={styleSheet}>{content}</h4>
            </div>
			
		);
	}
		
}