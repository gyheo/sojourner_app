import React from 'react';
import Traveler from './traveler';

function Jobs({ calling }) {
  return <h1>I am a {calling}</h1>;
}

function Food({ favorite }) {
  return <h1>I like a {favorite}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello, React & Virtual DOM!</h1>
      <Traveler/>
      <Jobs calling="sojourner"/>
      <Jobs calling="traveler"/>
      <Jobs calling="writer"/>
      <Jobs calling="programmer"/>
      <Food favorite="kimchi"/>
      <Food favorite="ramen"/>
      <Food favorite="samgiopsal"/>
      <Food favorite="chukumi"/>
    </div>
  );
}

export default App;
