import React from "react";
import { 
  BrowserRouter as Router,
  Switch, 
  Route, 
} from "react-router-dom"

import Header from "./components/Header"

import About from './components/About'
import Home from './components/Home'
import Blog from './components/Blog'
import BlogDetail from './components/BlogDetail'

import "./App.css";

function App() {
  return (
    <Router>
      <div className = "App">
        <Header />
        <div className="container">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route exact path="/blog"> 
              <Blog />
            </Route>
            <Route exact path ="/blog/:id" component={BlogDetail}></Route>
            <Route  exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

