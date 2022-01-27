import React from 'react';
import './App.css';
import Helloclass from './mycomponents/Helloclass';
import HelloFun from './mycomponents/HelloFun';

function App() {
  return (
    <div className="App">
    
     <HelloFun name = "Rasellll"  age = "20">></HelloFun>
     <Helloclass></Helloclass>

    </div>
  );
}

export default App;
