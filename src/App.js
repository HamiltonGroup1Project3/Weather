import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BeerList from './pages/BeerList';
import BeerForm from './pages/BeerForm';
import NotFound from './components/NotFound';
import './css/App.css';
import './css/reset.css';


class App extends Component {
  constructor(props) {
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
        <h1 className="App-title"> TOP SHELF</h1>
        <p>This is the Home-page that will render the pages within </p>

        <Home />
        <BeerList />
        <BeerForm />


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
