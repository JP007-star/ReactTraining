import React from 'react'

/**
* @author
* @function MyComponent
**/

export const MyComponent = (props) => {
    state = { count: 0 };

  componentDidMount = () => {
    console.log('Component did mount');
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.count !== prevState.count) {
      console.log('Component did update');
    }
  };

  componentWillUnmount = () => {
    console.log('Component will unmount');
  };

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  return(
    <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
   )

 }


/*In this example, we define a MyComponent class that extends Component from React. We set the initial state of the component to { count: 0 } using the class property syntax.

We also define three lifecycle methods: componentDidMount, componentDidUpdate, and componentWillUnmount, using arrow function syntax.

componentDidMount is called after the component is mounted to the DOM. In this example, we log a message to the console when the component is mounted.

componentDidUpdate is called after the component's state or props have been updated. In this example, we log a message to the console when the component's count state changes.

componentWillUnmount is called before the component is removed from the DOM. In this example, we log a message to the console when the component will unmount.

Finally, we define a handleClick method that updates the component's state when the button is clicked. We render the component by displaying the current count and a button that increments the count when clicked.
*/