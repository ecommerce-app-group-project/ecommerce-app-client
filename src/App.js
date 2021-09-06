import "./App.css";
import React from 'react';
// react router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//pages
import Home from "./components/Home/Home";
import About from "./components/About";
import Product from "./components/Product";
import SingleProduct from "./components/SingleProduct";
import Error from "./components/Error";
import Cart from "./components/Cart";
import Auth from "./components/Auth";
//navbar
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <h2>Codecademy E-Commerce APP</h2>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route exact path="/cart">
            <Cart/>
          </Route>
          <Route exact path="/auth">
            <Auth/>
          </Route>
          <Route path="/product/:id" children={<Product />}></Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
