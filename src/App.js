import React from "react";
import Croatia from "./Croatia";
import Albania from "./Albania";
import { Route } from "wouter";
import "./css/global.css";

const App = () => {
  return (
    <>
      <Route path={"/croatia"} component={Croatia} />
      <Route path={"/albania"} component={Albania} />
    </>
  );
};

export default App;
