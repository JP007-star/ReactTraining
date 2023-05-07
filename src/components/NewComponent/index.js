import React, { Component, PropTypes } from 'react';

class NewComponent extends Component {
    constructor(props) {
        super(props);
        this.state={name:"JayaPrasad"}

    }
    // handleClick=(e)=>{
    //     if(e.target.tagName==="LI"){
    //         console.log(e.target.textContent);
    //     }
    //    console.log("hello");
    //    console.log(e.type);
    //    console.log(e.target.tagName);
    // }
    
    changeName=()=>{
        this.setState({name:"Ram"})
    }
   
    render() {
        return (
            <div>
               {/* <div id="para" onMouseEnter={this.handleClick}>{this.state.hello}</div> */}
               <button onClick={this.changeName}>Click here</button>
               <div>{this.state.name}</div>
               {/* <ul onMouseEnter={this.handleClick} >
                 <li>Item1</li>
                 <li>Item2</li>
                 <li>Item3</li>
               </ul> */}
            </div>
        );
    }
}

NewComponent.propTypes = {

};

export default NewComponent;