import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header, Footer, Home, BeerForm, SingleBeer, BeerList, NotFound } from './components';
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
       {/* <Header />
        <h1 className="App-title">This is the Home-page</h1>
        <BeerForm />

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
