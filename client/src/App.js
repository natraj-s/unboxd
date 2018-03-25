import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './index.css';
import './js/main.js'
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import Catbar from "./components/Catbar";

class App extends Component {

  state = {
    currentPage: "Trending",
    currentCat: "All"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  }

  handleCatChange = cat => {
    this.setState({ currentCat: cat });
  }

  render() {
    return (
      <div className="App">
        <Logo />

        <Navbar currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />

        <Catbar currentCat={this.state.currentCat}
          handleCatChange={this.handleCatChange}
        />

      </div>
    );
  }
}

export default App;
