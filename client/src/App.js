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
    isLoggedIn: false
  };

  handleLoginChange = status => {
    console.log("in handle login change");
    this.setState({ isLoggedIn: status });
  }

  render() {
    console.log("here ", this.state.isLoggedIn);
    return (
      <Router>
      <div className="App">
        <div className="container mainContainer">
        <Logo isLoggedIn={this.state.isLoggedIn} />
        <Switch>
        <Route exact path="/" render={() => (<Content isLoggedIn={this.state.isLoggedIn} />)} />
        <Route exact path="/login" render={(props) => <Login isLoggedIn={this.state.isLoggedIn} 
                                        handleLoginChange={this.handleLoginChange}{...props} />} />
        {/* <Route exact path="/login" component={Login} /> */}
        <Route exact path="/loggedin" component={Userpage} />
        </Switch>
      </div>
      </div>
      </Router>
    );
  }
}

export default App;
