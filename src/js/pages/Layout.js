// import React from 'react';
// import Header from './Header';
// import Footer from './Footer';

// export default class Layout extends React.Component{
// 	//creating a state
// 	constructor(){
// 		super();
// 		this.state = { name : "Arun"};
// 	}	

// 	changeTitle(title){
// 		this.setState({name:title});//its similar to {title:title}
// 	}

// 	render(){
// 		//setting a state
// 		/*setTimeout(() => {
// 			this.setState({name:"Arun Kumar"})
// 		},2000);*/


// 		//using props
// 		//const title = "Welcome Arun";

// 		return (
// 			<div>
				
// 				<Header changeTitle={this.changeTitle.bind(this)} title={"Welcome "+this.state.name} />
				
// 				<Footer />
// 			</div>
// 			);
// 	}
// }
 
// import React from 'react';
// import {Link} from 'react-router';


// export default class Layout extends React.Component{

// 	navigate(){
// 		this.props.history.pushState(null,"/");
// 	}

// 	render(){
// 		return (
// 			<div>	
// 				<h1>React Layout page</h1>
// 				{this.props.children}
// 				<Link to="archives">archives</Link>
// 				<Link to="setting">settings</Link>
// 				<button onClick={this.navigate.bind(this)}>Featured</button>


// 			</div>
// 		);
// 	}
		
// }


import React from "react";
import { Link } from "react-router";

import Footer from "../components/Footer";
import Nav from "./Nav";
import Timer from "./Timer"

export default class Layout extends React.Component {
  render() {
    //console.log("prop",this.props.location)
    
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };
    console.log("loc",{location})
    return (
      <div>

        <Nav location={location} />
        
        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              <h1>React Application</h1>

              {this.props.children}

            </div>
          </div>
          <Footer/>
        </div>
      </div>

    );
  }
}