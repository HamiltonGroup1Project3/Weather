import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Filter from './components/Filter';
import BeerList from './components/BeerList';
import NotFound from './components/NotFound';
import Nav from './components/Nav';
import './css/App.css'




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

       <Header />
       <Filter />
       <Nav />
       <Home />
       <BeerList />



        <h1 className="App-title">This is the Home-page</h1>

        { /*
         <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/BeerList" component={BeerList} />
            <Route
              path="/Beer"
              render={props => <SingleBeer {...props} beer={this.state.beer} />}
            />
            <Route path="/" component={NotFound} />

          </Switch>  */}
          <Footer />

      </div>
    );
  }
}

export default App;
