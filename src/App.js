import React from 'react';
import Traveler from './traveler';

function Jobs({ calling }) {
  return <h1>I am a {calling}</h1>;
}

function Food({ name, picture }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: "Bibimbap",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/800px-Dolsot-bibimbap.jpg"
  },
  {
    name: "Kimchi",
    image:
    "https://upload.wikimedia.org/wikipedia/commons/f/f8/Various_kimchi.jpg"
  },
  {
    name: "Kimbap",
    image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Vegetable_gimbap.jpg/440px-Vegetable_gimbap.jpg"
  }
];

function App() {
  return (
    <div>
      <h1>Hello, React & Virtual DOM!</h1>
      <Traveler />
      <Jobs calling="sojourner" />
      <Jobs calling="traveler" />
      <Jobs calling="writer" />
      <Jobs calling="programmer" />
      {foodILike.map(dish => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
