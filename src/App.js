import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//CSS
import "./App.css";
import Cart from "./components/Cart";
//Components
import Home from "./components/Home";
import ProductsDetails from "./components/ProductDetails";
import Topbar from "./components/Topbar";

const App = () => {
  return (
    <BrowserRouter>
      <Topbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product/:id" component={ProductsDetails} />
        <Route path="/cart" component={Cart} />
        <Route component={() => <h1>404</h1>} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
