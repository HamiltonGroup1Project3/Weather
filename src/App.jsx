/* global fetch:false */
import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BeersList from './pages/BeersList';
import BeerForm from './pages/BeerForm';
import BeerDetails from './pages/BeerDetails';
import NotFound from './pages/NotFound';
import './css/App.css';
import './css/reset.css';

// state of main application
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beersLoaded: false,
      beersData:   {
        id:          null,
        name:        null,
        brewery:     null,
        description: null,
        type:        null,
      },
      typesData:     null,
      typesLoaded:   false,
      singleBeer: null,
      singleBeerLoaded: false,
    };
    this.getAllBeers = this.getAllBeers.bind(this);
    this.getAllTypes = this.getAllTypes.bind(this);
    this.getSingleBeer = this.getSingleBeer.bind(this);
    this.beerSubmit = this.beerSubmit.bind(this);
    // this.deleteBeer = this.deleteBeer.bind(this);
  }

  // items to load when the main page mounts
  componentDidMount() {
    console.log('component did mount');
    this.getAllBeers();
    this.getAllTypes();
    // this.getSingleBeer(6);
  }

  // api call to our local api to return beersData
  getAllBeers() {
    console.log('get beers');
    fetch('/api/beers/')
      .then(res => res.json())
      .then((res) => {
        this.setState({
          beersData:   res.data.beers,
          beersLoaded: true,
        });
        console.log({ 'Beers Api': res.data.beers });
      })
      .catch(err => console.log(err));
  }

// api call to our local api to return types of beers list
  getAllTypes() {
    console.log('get types');
    fetch('/api/types/')
      .then(res => res.json())
      .then((res) => {
        this.setState({
          typesData:   res.data.types,
          typesLoaded: true,
        });
        console.log({ 'Types Api': res.data.types });
      })
      .catch(err => console.log(err));
  }



  // method of using another api call to get single beer
  getSingleBeer(id) {
    console.log('get one beer');
    console.log({ 'state before': this.state });
    fetch(`/api/beers/${id}`)
      .then(res => res.json())
      .then((res) => {
        this.setState({
          singleBeer: res.data.beer,
          singleBeerLoaded: true,
        })
        console.log({ 'Single ApiResult': res });
        console.log({ 'state after': this.state });
      })
      .catch(err => console.log(err));
  }


  beerSubmit(method, event, data, id) {
    console.log({"beersubmit": { method, event, data, id }});
    event.preventDefault();
    fetch(`/api/beers/:${11} || '' `, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then((res) => {
          this.getAllBeers();
        });
      }


// for deleting a beer based by id
  deleteBeer(id) {
    fetch(`/api/beers/${id}`, {
      method: 'Delete',
    }).then(res => res.json())
      .then((res) => {
        this.getAllBeers();
      });
  }


  // setting State to when we add A beer
  AddBeer() {
    this.setState({
      addingBeer: true,

    });
  }



  editForm(id) {
    this.setState({
      editName:    name,
      editBrewery: brewery,
      editType:    type,
      editDesc:    description,
    });
  }


  render() {
    return (
      <div className="App">
        {/* pass in types for filtering on if loaded*/}
        {(this.state.typesLoaded) && (this.state.beersLoaded)
        ? <Header type={this.state.typesData} brewery={this.state.typesData} />
        : <p> Loading... </p> }


        <Switch>
          <Route path="/" exact component={Home} />


          {/* If api Beers data has returned beerlist component is rendered */}
          {(this.state.beersLoaded)
          ? <Route
            path="/BeersList"
            render={props => (<BeersList
              {...props}
              beersList={this.state.beersData}
            />
            )}
            exact
            beersList={this.state.beerList}
          />
          : <p> Loading... </p> }


        {/* route for individual beer details */}
          <Route
            path="/BeersList/BeerDetails"
            render={props => (<BeerDetails
              {...props}
              beer={this.state.beersData}
            />
            )}
          />


          {/* route to edit form */}
          <Route
            path="/BeersList/BeerEdit"
            render={props => (<BeerForm
              {...props}
              beer={this.state.beersData}
              beerSubmit={this.beerSubmit}

            />
            )}
          />


          {/* catch all for bad routes */}
          <Route path="/" component={NotFound} />

        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
