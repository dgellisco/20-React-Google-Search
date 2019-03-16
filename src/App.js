// Import React
import React, { Component } from 'react';
// Import Components
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Result from "./components/Result";
import Results from "./components/Results";
import SearchBar from "./components/SearchBar";
// Import JSON
// 
// Default imports
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()
  }

  state = {
    
  }

  render() {
    return (
      <div className="App">

        <NavBar/>

        <Header/>

        <Result/>

        <Results/>

        <SearchBar/>

        <Footer/>

      </div>
    );
  }
}

export default App;
