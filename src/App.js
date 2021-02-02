import React from 'react';

// function Food(props){
//   console.log(props);
//   return <h1>I like {props.fav}</h1>
// }

function Food({fav}){
  console.log({fav});
  return <h1>I like {fav}</h1>
}

function App() {
  //return <div className="App" />;
  return (
    <div>
      <h1>Hello React!</h1>
      <Food fav="kimchi"/>
      <Food fav="samgiopsal"/>
      <Food fav="chukumi"/>
    </div>
  );
}

export default App;
