import React, { Component } from 'react'
import { ThemeContext } from './App';

export default class Counter extends Component {

  constructor(props){
super(props);
this.state={
  count:this.props.initialCounter
}

  }
  render() {
    return (
      <ThemeContext.Consumer>
        {style=>(<div>
        <button style={style} onClick={()=>this.handleCountChange(-1)}>-</button>
        <span>{this.state.count}</span>
        <button style={style}  onClick={()=>this.handleCountChange(1)}>+</button>
      </div> )}
      
      </ThemeContext.Consumer>
    )
  }
  handleCountChange(amount){
    this.setState(prevState=>({count:prevState.count+amount}));
    this.setState(prevState=>({count:prevState.count+amount}))
    // this.setState({count:this.state.count+amount})

  }
}
