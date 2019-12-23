import React from 'react';
import Traveler from './traveler';

function Sojourner() {
  return <h3>I am a sojourner</h3>;
}

function Food({ favorite }) {
  return <h1>I like a {favorite}</h1>;
}
function App() {
  return (
    <div>
      <h1>Hello, React & Virtual DOM!</h1>
      <Sojourner/>
      <Traveler/>
      <Food favorite="kimchi"/>
      <Food favorite="ramen"/>
      <Food favorite="samgiopsal"/>
      <Food favorite="chukumi"/>
    </div>
  );
}

export default App;
