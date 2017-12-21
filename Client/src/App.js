import React, { Component } from 'react';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Home from './components/Home';
import BeerForm from './components/BeerForm';
import logo from './logo.svg';




class App extends Component {
      constructor(props){
    super(props);
    this.state = {
      auth: false,
      user: null,

    }
  }
  render() {
     return (
          <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">This is the Home-page</h1>
          <BeerForm />
        </header>

      </div>
       );
  }
}

export default App;
