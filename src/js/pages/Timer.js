import React from 'react';
import Result from './TimerValue';

class Timer extends React.Component{
    constructor(){
        super();
        this.startTimer = this.startTimer.bind(this);
        this.updateTimer = this.updateTimer.bind(this);
        this.state={
            timeElapse:0
        }
    }
    updateTimer(){
        
            this.setState({timeElapse:this.state.timeElapse+1})
        
    }
    /*componentWillMount(){
        alert("component mounted")
    }*/

    /*componentDidMount(){
        console.log("component mounted2")
        setInterval(this.updateTimer,1000);
    }*/

    startTimer(){
        
        setInterval(this.updateTimer,1000);
    }
    

    render(){
        return(
                <div>
                    <button className="btn btn-primary" onClick={this.startTimer}>Click Me!</button>
                    <Result updatedValue = {this.state.timeElapse}/>
                </div>
        );
    }

}

export default Timer;