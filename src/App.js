import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'antd/dist/antd.css'; // ANTD CSS
import { BrowserRouter, Route, Switch } from 'react-router-dom'; // Routing
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import SignUp from "./components/SignUp";
import PageNotFound from './components/PageNotFound';
import SignIn from './components/SignIn';

const App = () => {
  return (<BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>);
}

export default App;