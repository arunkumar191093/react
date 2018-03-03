import React from 'react';
import $ from 'jquery';

class Test extends React.Component{
    constructor(){
        super();
        this.state = {
            courseData:[]
        }
    }

    componentDidMount(){    
        this.setState({
            courseData: $.parseJSON($.ajax({
                url:'./content/data.json',
                async:false,
                dataType:'json'
            }).responseText)
            })
    }

    render(){

        const dataArr = this.state.courseData.map(function(data){
            console.log(data)
            return (
                <li key={data.Name}>{data.Name}</li>
                
            )
        })

        return(
            <div>
                <ul>
                    {dataArr}
                </ul>

            </div>

        );
    }
}

export default Test;