import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './index.css';
import './js/main.js'
import Logo from "./components/Logo";
import Content from "./pages/Content";

class App extends Component {

  state = {
  };

  render() {
    console.log(this.state.currentCat);
    return (
      <div className="App">
        <Logo />
        <Content />

      </div>
    );
  }
}

export default App;
