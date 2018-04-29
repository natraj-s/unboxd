import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import './index.css';
import Logo from "./components/Logo";
import Content from "./pages/Content";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import TransitionPage from "./pages/TransitionPage";
import Userpage from "./pages/Userpage";
import Post from "./pages/Post";

class App extends Component {

  state = {
    isLoggedIn: false
  };

  handleLoginChange = status => {
    // console.log("in handle login change");
    this.setState({ isLoggedIn: status });
  }

  render() {
    // console.log("here ", this.state.isLoggedIn);
    return (
      <Router>
      <div className="App">
        <div className="container mainContainer">
        <Logo isLoggedIn={this.state.isLoggedIn} handleLoginChange={this.handleLoginChange}/>
        <Switch>
        <Route exact path="/login" render={(props) => <Login isLoggedIn={this.state.isLoggedIn} 
                                        handleLoginChange={this.handleLoginChange}{...props} />} />
        {/* <Route exact path="/login" component={Login} /> */}
        <Route exact path="/loggedin" component={(this.state.isLoggedIn || localStorage.getItem("__u") !== null)
                                                  ? TransitionPage : Content} />
        <Route exact path="/logout" component={(this.state.isLoggedIn || localStorage.getItem("__u") !== null)
                                                  ? Logout                                                  
                                                  : Content } />
        <Route exact path="/userpage" component={(this.state.isLoggedIn || localStorage.getItem("__u") !== null)
                                                  ? Userpage : Content} />
        <Route path="/post/:id" component={Post} />
        <Route exact path="/*" render={() => (<Content isLoggedIn={this.state.isLoggedIn} />)} />
        </Switch>
      </div>
      </div>
      </Router>
    );
  }
}

export default App;
