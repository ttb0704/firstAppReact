import React from 'react';

function Food({name,picture}){
  return (
    <div>
      <h1>I like {name}</h1>
      <img src={picture} width="500" />
    </div>
  );
}

//서버에서 넘어온 데이터를 저장할 수 있는 빈배열 할당
const foodILike=[
  {
    name:"banana",
    image:"https://cdn.pixabay.com/photo/2017/06/27/22/21/banana-2449019_960_720.jpg"
  },
  {
    name:"apple",
    image:"https://cdn.pixabay.com/photo/2014/02/01/17/28/apple-256261_960_720.jpg"
  },
  {
    name:"peach",
    image:"https://cdn.pixabay.com/photo/2017/09/06/15/08/peach-2721852_960_720.jpg"
  },
  {
    name:"orange",
    image:"https://cdn.pixabay.com/photo/2017/01/20/15/06/orange-1995056_960_720.jpg"
 }
];

function App() {
  //return <div className="App" />;
  return (
    <div>
      {foodILike.map(dish=>(
        <Food name={dish.name} picture={dish.image}/>
      ))}
    </div>
  );
}

export default App;
