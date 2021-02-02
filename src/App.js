import React from 'react';
import propTypes from 'prop-types';

function Food({name,picture, rating}){
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src={picture} width="500" alt={name} />
    </div>
  );
}

//서버에서 넘어온 데이터를 저장할 수 있는 빈배열 할당
const foodILike=[
  {
    id:1,
    name:"banana",
    image:"https://cdn.pixabay.com/photo/2017/06/27/22/21/banana-2449019_960_720.jpg",
    rating:5
  },
  {
    id:2,
    name:"apple",
    image:"https://cdn.pixabay.com/photo/2014/02/01/17/28/apple-256261_960_720.jpg",
    rating:4.9
  },
  {
    id:3,
    name:"peach",
    image:"https://cdn.pixabay.com/photo/2017/09/06/15/08/peach-2721852_960_720.jpg",
    rating:4.8
  },
  {
    id:4,
    name:"orange",
    image:"https://cdn.pixabay.com/photo/2017/01/20/15/06/orange-1995056_960_720.jpg",
    rating:4.7
    
 }
];

function App() {
  return (
    <div>
      {foodILike.map(dish=>(
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
      ))}
    </div>
  );
}

Food.propTypes={
  name : propTypes.string.isRequired,
  picture : propTypes.string.isRequired,
  rating : propTypes.number.isRequired
};

export default App;
