import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Filter from './components/Filter';
import BeerList from './components/BeerList';
// import NotFound from './components/NotFound';
import Nav from './components/Nav';
import './css/App.css'




class App extends Component {
    constructor(props){
    super(props);
    this.state = {
      singleBeerData: null,
      dataLoaded: false,
      beerList: null,
      // addingBeerForm: null,
      }
    // this.
  }

componentDidMount(){
  this.getBeers();
}

getBeers() {
  console.log('mounting!')
   fetch('/api/beer')
  .then(res => res.json())
  .then(res => {
  this.setState({
  dataLoaded: true,
  beerData: res.data.beers,
    })
  })
  .catch(err => {
        console.log(err);
      })
}

  getSingleBeer(url){
       fetch(url)
      .then(res => res.json())
      .then(res => {
      console.log(res);
      this.setState({
        singleBeerData: true
      })
    })
    };


  //setting State to when we add A beer
  // AddBeer(){
  //   this.setState({
  //     addingBeer: true,
  //   })
  // }




  render() {
    return (
      <div className="App">

       <Header />
       <Filter />
       <Nav />
       <Home />
       <BeerList
          beerList={this.state.beerList}
          // dataLaoded={this.state.dataLoaded}
          // singleBeerData={this.singleBeerData}
      />
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
};

export default App;
