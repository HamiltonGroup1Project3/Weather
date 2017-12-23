import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BeersList from './pages/BeersList';
import BeerForm from './pages/BeerForm';
import NotFound1 from './pages/NotFound1';
import './css/App.css';
import './css/reset.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
      user: null,

    };
  }
  render() {
    return (
      <div className="App">

        <Header />
        <h1 className="App-title"> TOP SHELF</h1>
        <p>This is the Home-page that will render the pages within </p>

        { /*
        <Home />
        <BeersList />
        <BeerForm />
        */}

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/BeersList" exact component={BeersList} />
          <Route
            path="/BeersList/Beer"
            render={props => <BeerForm {...props} /* beer={this.state.beer} */ />}
          />
          <Route path="/" component={NotFound1} />

        </Switch>

        <Footer />


      </div>
    );
  }
}

export default App;
