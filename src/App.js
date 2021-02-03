import React from 'react';


class App extends React.Component{
  state={
    isLoading:true,
    movie:[],
  }

  componentDidMount(){
    //영화 데이터 로딩이 완료 되면!
    setTimeout( ()=>{
      this.setState({isLoading:false});
    },6000 );
  }

  render(){
    const {isLoading}=this.state;
    return(
      <div>
        {isLoading ? 'Loaging...':'we are ready'}
      </div>
    )
  }
}

export default App;