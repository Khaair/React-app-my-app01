import React from 'react';
import './App.css';
import Heading from './mycomponents/Heading';
import Helloclass from './mycomponents/Helloclass';

function App() {
  return (
    <div className="App">
    
     <Heading name = "Rasel"  age = "20">></Heading>
     <Helloclass></Helloclass>

    </div>
  );
}

export default App;
