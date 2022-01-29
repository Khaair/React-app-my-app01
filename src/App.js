import * as React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./mycomponents/About";
import Contact from "./mycomponents/Contact";
import Home from "./mycomponents/Home";

function App() {
  return (
    <div className="App">
      <nav className="navv">
        <ul>
          <li> <Link to="/" className="ll">Home</Link></li>
          <li> <Link to="/about" className="ll">About</Link></li>
          <li> <Link to="/contact" className="ll">Contact</Link></li>
         
          
          
        </ul>
         
         
  
        </nav>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>

      
    </div>
  );
}

export default App;