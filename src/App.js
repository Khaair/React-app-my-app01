import React from 'react';
import './App.css';
import HelloArrow from './mycomponents/HelloArrow';
import Helloclass from './mycomponents/Helloclass';
import HelloFun from './mycomponents/HelloFun';

function App() {
  return (
    <div className="App">
    
     <HelloFun name = "Rasellll"  age = "20">></HelloFun>
     <Helloclass></Helloclass>
     <HelloArrow></HelloArrow>

    </div>
  );
}

export default App;
