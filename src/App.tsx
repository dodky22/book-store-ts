import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import SingleProduct from "./pages/SingleProduct";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ backgroundColor: "rgb(238, 238, 238)" }}>
      <header>
        <Nav></Nav>
      </header>
      <main className="content">
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/store" exact component={Store}></Route>
          <Route path="/cart" exact component={Cart}></Route>
          <Route path="/store/:slug" exact component={SingleProduct}></Route>
          <Route component={Error}></Route>
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
