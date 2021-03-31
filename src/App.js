import './App.css';
import React from "react";
import LoginPageOne from './components/LogInPageOne/LoginPageOne';
import LogInPageTwo from './components/LogInPageTwo/LogInPageTwo';
import TopNaveber from './components/Top Navber/TopNaveber';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Deals from './components/Deals/Deals';
import Admin from './components/Admin/Admin';
import Blog from './components/Blog/Blog';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function App() {
  return (
    <div>
      <TopNaveber></TopNaveber>
             <Router>
          <Switch>
            <Route path="/Home">
              <Home />
            </Route>

            <Route exact path="/">
              <Home/>
            </Route>

            <Route path="/Orders">
             <LoginPageOne/>
            </Route>

            <Route path="/Admin">
             <Admin/>
            </Route>

            

            <Route path="/Contact">
             <Contact/>
            </Route>

            <Route path="/Blog">
              <Blog/>
            </Route>

            <Route path="/Deals">
              <Deals/>
            </Route>
            <Route path="/Login">
              <LoginPageOne/>
            </Route>

          </Switch>
        </Router>



    </div>
  );
}

export default App;
