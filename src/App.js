import "./App.css";
import React from "react";
import LoginPageOne from "./components/LogInPageOne/LoginPageOne";
import LogInPageTwo from "./components/LogInPageTwo/LogInPageTwo";
import TopNaveber from "./components/Top Navber/TopNaveber";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Deals from "./components/Deals/Deals";
import Blog from "./components/Blog/Blog";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddProduct from "./components/Admin/AddProduct/AddProduct";
import EditProduct from "./components/Admin/EditProduct/EditProduct";
import ManegeProduct from "./components/Admin/ManegeProduct/ManegeProduct";
import CheckOut from "./components/CheckOut/CheckOut";
import Order from "./components/Order/Order";


function App() {
  return (
    <div>
      <Router>
        <TopNaveber></TopNaveber>
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/Orders">
            <Order/>
          </Route>

          <Route path="/AddProduct">
            <AddProduct />
          </Route>

          <Route path="/EditProduct">
            <EditProduct />
          </Route>

          <Route path="/ManegeProduct">
            <ManegeProduct />
          </Route>

          <Route path="/Contact">
            <Contact />
          </Route>

          <Route path="/Blog">
            <Blog />
          </Route>

          <Route path="/Deals">
            <Deals />
          </Route>
          <Route path="/Login_1">
            <LoginPageOne />
          </Route>

          <Route path="/LogIn_2">
            <LogInPageTwo />
          </Route>

          <Route path="/Checkout">
            <CheckOut/>
          </Route>

          <Route path="/CheckOutBuyNowBtn">
          <CheckOut/>
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
