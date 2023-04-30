import React from 'react'

/**
* @author
* @function MyComponent
**/

class MyComponent extends React.Component {  
  constructor(props) {  
     super(props);
     const obj={hello: "Jaya Prasad"}  
     this.state = obj;    
     this.changeState = this.changeState.bind(this)  
  }    
  render() {  
     return (  
        <div>  
            <h1>ReactJS component's Lifecycle</h1>  
            <h3>Hello {this.state.hello}</h3>  
            <button onClick = {this.changeState}>Click Here!</button>          
        </div>  
     );  
  }  
  componentWillMount() {  
     console.log('Component Will MOUNT!')  
  }  
  componentDidMount() {  
     console.log('Component Did MOUNT!')  
  }  
  changeState(){  
     this.setState({hello:"All!!- Its a great reactjs tutorial."});  
  }  
  componentWillReceiveProps(newProps) {      
     console.log('Component Will Recieve Props!')  
  }  
  shouldComponentUpdate(newProps, newState) {  
     return true;  
  }  
  componentWillUpdate(nextProps, nextState) {  
     console.log('Component Will UPDATE!');  
  }  
  componentDidUpdate(prevProps, prevState) {  
     console.log('Component Did UPDATE!')  
  }  
  componentWillUnmount() {  
     console.log('Component Will UNMOUNT!')  
  }  
}  
export default MyComponent;  


/*In this example, 
we define a MyComponent 
class that extends Component from React. 
We set the initial state of the component to { count: 0 } using the class property syntax.

We also define three lifecycle methods: 
componentDidMount, 
componentDidUpdate, 
and componentWillUnmount, using arrow function syntax.

componentDidMount is called after the component is mounted to the DOM.
 In this example, we log a message to the console when the component is mounted.

componentDidUpdate is called after the component's state or props have been updated. In this example, we log a message to the console when the component's count state changes.

componentWillUnmount is called before the component is removed from the DOM. In this example, we log a message to the console when the component will unmount.

Finally, we define a handleClick method that updates the component's state when the button is clicked. We render the component by displaying the current count and a button that increments the count when clicked.
*/