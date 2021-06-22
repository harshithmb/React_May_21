import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//CSS
import './App.css';
//Components
import Home from "./components/Home";
import Topbar from "./components/Topbar";

const App = () => {
  return (<BrowserRouter>
    <Topbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route component={() => <h1>404</h1>} />
    </Switch>
  </BrowserRouter>);
}

export default App;