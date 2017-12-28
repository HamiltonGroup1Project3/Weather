/*global fetch:false*/
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


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beersLoaded: false,
      beersData: {
        id: null,
        name: null,
        brewery: null,
        description: null,
        type: null,
      },
      singleBeer: null,
    };
    this.getAllBeers = this.getAllBeers.bind(this);

    // this.beerSubmit = this.beerSubmit.bind(this);
    // this.deleteBeer = this.deleteBeer.bind(this);
  }

  // items to load when the main page mounts
  componentDidMount() {
    console.log('component did mount');
    this.getAllBeers();
  }

  // api call to our local api to return beersData
  getAllBeers() {
    console.log('get beers');
    console.log({ 'state before': this.state });
    fetch('/api/beers/')
      .then(res => res.json())
      .then((res) => {
        this.setState({
          beersData: res.data.beers,
          beersLoaded: true,
        })
        console.log({ 'ApiResult': res });
        console.log({ 'state after': this.state });
      })
      .catch(err => console.log(err));
  }


  // bellow aren't working yet

  // getSingleBeer(id) {
  //   console.log(`single beer id is ${this.state.singleBeer}`);
  //   if (this.state.singleBeer === id) {
  //     this.setState({ singleBeer: null });
  //   } else { this.setState({ singleBeer: id });
  //   }
  // }


  // getSingleBeer(method, event, data, id) {
  //   console.log({"getSingleBeer": { method, event, data, id }});
  //   event.prevent.DEfault();
  //   fetch(`/api/beers/:${id} || '' `, {
  //     method: method,
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then(res => res.json())
  //     .then((res) => {
  //         this.getAllBeers();
  //       });
  //     }


  deleteBeer(id){
    fetch(`/api/beers/${id}`,{
      method: 'Delete'
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

  editForm(id){
    this.setState({
      editName: name,
      editBrewery: brewery,
      editType: type,
      editDesc: description,
    })
  }


  render() {
    return (
      <div className="App">

        <Header />

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

          <Route
            path="/BeersList/BeerDetails"
            render={props => (<BeerDetails
              {...props}
              beer={this.state.beersData}
            />
            )}
          />

          <Route
            path="/BeersList/BeerEdit"
            render={props => (<BeerForm
              {...props}
              beer={this.state.beersData}
            />
            )}
          />

          <Route path="/" component={NotFound} />

        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
