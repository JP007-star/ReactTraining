import React, { Component, PropTypes } from 'react';

class NewComponent extends Component {
    constructor(props) {
        super(props);
        this.state={hello:"JayaPrasad"}

    }
    handleClick=(e)=>{
        if(e.target.tagName==="LI"){
            console.log(e.target.textContent);
        }
       console.log("hello");
       console.log(e.type);
       console.log(e.target.tagName);
    }

   
    render() {
        return (
            <div>
               <div id="para" onMouseEnter={this.handleClick}>{this.state.hello}</div>
               <button >Click here</button>
               <ul onMouseEnter={this.handleClick} >
                 <li>Item1</li>
                 <li>Item2</li>
                 <li>Item3</li>
               </ul>
            </div>
        );
    }
}

NewComponent.propTypes = {

};

export default NewComponent;