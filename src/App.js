import * as React from "react";
import "./App.css";
import ContactNfooter from "./mycomponents/ContactNfooter";
import Header from "./mycomponents/Header";
import Home from "./mycomponents/Home";
import MenuSection from "./mycomponents/MenuSection";
import Pagecontent from "./mycomponents/Pagecontent";

function App() {
  return (
    <div className="App">
 
   <Home></Home>
   <Header></Header>
   <Pagecontent></Pagecontent>
   <MenuSection></MenuSection>
   <ContactNfooter></ContactNfooter>
      
    </div>
  );
}

export default App;