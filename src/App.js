import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components
import Nav from "./components/nav/Nav";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./components/ProductDetail/ProductDetail";

//pages
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";

import Auth from "./pages/account/Account";
import Collection from "./pages/product/collection/Collection";
import Admin from "./pages/admin/Admin";
import Cart from './components/Cart/Cart'

// import CartItem from "./components/CartItem";


function App() {
  
  return (
    <main>
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/cart'>
            <Cart/>
            
          </Route>
          <Route exact path='/auth'>
            <Auth />
          </Route>
          <Route exact path='/product'>
            <Collection />
          </Route>
          <Route exact path='/product/:id'>
            <ProductDetail />
          </Route>
          <Route path='/admin'>
            <Admin />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </main>
  )
}
export default App;
