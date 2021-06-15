// npm i redux react-redux
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (<BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </BrowserRouter>);
}

export default App;
