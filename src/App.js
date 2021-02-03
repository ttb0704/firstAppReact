import React from 'react';


class App extends React.Component{

  state ={
    count:0,
  }

  add = () => {
    console.log("add");
    //this.state.count=1;
    //this.setState({count:1});
    //this.setState({count:this.state.count+1});
    this.setState( current => ({
      count: current.count+1,
    }) );
  };

  minus = () => {
    console.log("minus");
    //this.state.count=-1;
    //this.setState({count:-1});
    //this.setState({count:this.state.count-1});
    this.setState( current => ({
      count: current.count-1,
    }) );
  };

  render(){
    console.log('render');
    return (
      <div>
        <h1>the number {this.state.count}</h1>
        <button onClick={this.add} >Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }

  constructor(props){
    super(props);
    console.log('constructor');
  }

  componentDidMount(){
    console.log('componentDidMount');
  }

  componentDidUpdate(){
    console.log('componentDidUpdate');
  }
  
  componemtWillUnmount(){
    console.log('componemtWillUnmount');
  }

}

export default App;