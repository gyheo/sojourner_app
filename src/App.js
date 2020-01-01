import React from 'react';
import Traveler from './traveler';
import propTypes from 'prop-types';

/*
// Function Component
function Interest({ name, picture, startAge }) {
  return (
    <div>
      <h1>I'm interested in {name}</h1>
      <h2>{startAge}</h2>
      <img src={picture} alt={name}/>
    </div>
  );
}

function Food({ name, picture, rating }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: propTypes.string.isRequired,
  picture: propTypes.string.isRequired,
  rating: propTypes.number.isRequired
};

// Comment
Interest.propTypes = {
  name: propTypes.string.isRequired,
  picture: propTypes.string.isRequired,
  startAge: propTypes.number
};

const calling = [
  {
    id: 1,
    name: "sojourner",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Sojourner_on_Mars_PIA01122.jpg",
    startAge: 0
  },
  {
    id: 2,
    name: "labor",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Modern_Times_poster.jpg/440px-Modern_Times_poster.jpg",
    startAge: 21
  },
  {
    id: 3,
    name: "guitar",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Guitar_1.jpg/600px-Guitar_1.jpg",
    startAge: 18
  },
  {
    id: 4,
    name: "running",
    image: "https://cdn.pixabay.com/photo/2019/07/22/23/44/runner-4356298_960_720.jpg",
    startAge: 25
  },
  {
    id: 5,
    name: "programming",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/24/Wyvern-programming-languages-in-one.jpg",
    startAge: 18
  }
];

const foodILike = [
  {
    id: 1,
    name: "Bibimbap",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/800px-Dolsot-bibimbap.jpg",
    rating: 5.0
  },
  {
    id: 2,
    name: "Kimchi",
    image:
    "https://upload.wikimedia.org/wikipedia/commons/f/f8/Various_kimchi.jpg",
    rating: 5.0
  },
  {
    id: 3,
    name: "Kimbap",
    image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Vegetable_gimbap.jpg/440px-Vegetable_gimbap.jpg",
    rating: 4.5
  }
];

function App() {
  return (
    <div>
      <h1>Hello, React & Virtual DOM!</h1>
      <Traveler />
      {calling.map(values => (
        <Interest key={values.id} name={values.name} picture={values.image} startAge={values.startAge}/>
      ))}
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
      ))}
    </div>
  );
}
*/

// Class Component
class App extends React.Component{
  state = {
    count: 0
  };

  add = () => {
    console.log("add");
  }

  minus = () => {
    console.log("minus");
  }

  multiply = () => {
    console.log("multiply");
  }

  divide = () => {
    console.log("divide");
  }

  render(){
    return <div>
    <h1>I'm a class {this.state.count}</h1>
    <button onClick={this.add}>Add</button>
    <button onClick={this.minus}>Minus</button>
    <button onClick={this.multiply}>Multiply</button>
    <button onClick={this.divide}>Divide</button>
    </div>
  }
}

export default App;
