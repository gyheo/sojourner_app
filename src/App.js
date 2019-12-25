import React from 'react';
import Traveler from './traveler';

function Interest({ name, picture }) {
  return (
    <div>
      <h1>I'm interested in {name}</h1>
      <img src={picture}/>
    </div>
  );
}

function Food({ name, picture }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <img src={picture} />
    </div>
  );
}

const calling = [
  {
    name: "sojourner",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Sojourner_on_Mars_PIA01122.jpg"
  },
  {
    name: "labor",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Modern_Times_poster.jpg/440px-Modern_Times_poster.jpg"
  },
  {
    name: "guitar",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Guitar_1.jpg/600px-Guitar_1.jpg"
  },
  {
    name: "running",
    image: "https://cdn.pixabay.com/photo/2019/07/22/23/44/runner-4356298_960_720.jpg"
  },
  {
    name: "programming",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/24/Wyvern-programming-languages-in-one.jpg"
  }
];

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
      {calling.map(values => (
        <Interest name={values.name} picture={values.image}/>
      ))}
      {foodILike.map(dish => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
