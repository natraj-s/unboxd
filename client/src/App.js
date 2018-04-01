import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import './index.css';
import './js/main.js'
import Logo from "./components/Logo";
import Content from "./pages/Content";
import Login from "./pages/Login";
import Userpage from "./pages/Userpage";

class App extends Component {

  state = {
  };

  render() {
    return (
      <Router>
      <div className="App">
        <div className="container mainContainer">
        <Logo />
        <Switch>
        <Route exact path="/" component={Content} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/loggedin" component={Userpage} />
        </Switch>
      </div>
      </div>
      </Router>
    );
  }
}

export default App;
