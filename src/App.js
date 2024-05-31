import React from "react";
import Navbar from "./Navbar"; 
import Croatia from "./Croatia";
import Albania from "./Albania";
import Madeume from "./Madeume";
import { Route } from "wouter";
import "./css/global.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Route path={"/croatia"} component={Croatia} />
      <Route path={"/albania"} component={Albania} />
      <Route path={"/"} component={Madeume} />
    </>
  );
};

export default App;
