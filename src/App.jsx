/*global fetch:false*/
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
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
        name: null,
        brewery: null,
        description: null,
        type: null,
      },
    };
    this.getAllBeers = this.getAllBeers.bind(this);

    // this.beerSubmit = this.beerSubmit.bind(this);
    // this.deleteBeer = this.deleteBeer.bind(this);
  }

  componentDidMount() {
    console.log('component did mount');
    this.getAllBeers();
  }

  getAllBeers() {
    console.log('get beers');
    console.log({ 'beersData before': this.state.beersData });
    fetch('/api/beers/')
      .then(res => res.json())
      .then((res) => {
        this.setState({
          beersData: res.data.beers,
          beersLoaded: true,
        })
        console.log({ 'ApiResult': res });
        console.log({ 'beersData after': this.state.beersData });
      })
      .catch(err => console.log(err));
  }

  getSingleBeer(id) {
    fetch(url)
      .then(res => res.json())
      .then((res) => {
        console.log(res);
        this.setState({
          singleBeerData: true,
        });
      });
  }

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

  editForm(name){
    this.setState({
      editName: name,
      editBrewry: brewry,
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
