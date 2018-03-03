import React from 'react';

class Result extends React.Component{

   /* componentWillReceiveProps(newProps){
        console.log("Recieved props",newProps)
    }

    shouldComponentUpdate(newProps,newState){
        if(this.props.updatedValue<=4){
            console.log("should update",newProps)
            return true;
        }
        else{
            return false;
        }
    }

    componentWillUpdate(newProps,nextState){
        console.log("compoent updated",newProps);
        // var node = $(ReactDOM.findDOMNode(this))
        // node.slideUp();
        // node.slideDown();
    }

    componentDidUpdate(prevProp,prevState){
        console.log("previous value destroyed",prevProp)
    }*/


    render(){
        const resultStyle = {
            color:"green",
            backgroundColor:"yellow"
        }
        return(
            <div>
                <h3 style={resultStyle}>{this.props.updatedValue}</h3>
            </div>

        );
    }
}

export default Result;