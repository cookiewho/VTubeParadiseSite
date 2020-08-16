import React from "react";
import "./App.css";

import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import Product from "./pages/Product";
import Error from "./pages/Error";

import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products/" component={AllProducts} />
        <Route exact path="/products:item" component={Product} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
