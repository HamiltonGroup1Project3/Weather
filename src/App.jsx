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
      dataLoaded: false,
      beersData:   {
        name:    'coke',
        brewery: 'GA',

      },
      // addingBeerForm: null
    };


    // this.beerSubmit = this.beerSubmit.bind(this);
    // this.deleteBeer = this.deleteBeer.bind(this);

// const FakeApi = {
//   beerData2: [
//         {id: 1, name:"BudLight", brewery: "Budwiser", type: "Ale" },
//         {id: 2, name:"Octoberfest", brewery: "Sam Adams", type: "Seasonal" },
//         {id: 3, name:"Boston Lager", brewery: "Sam Adams", type: "Lager" }
//   ]
// }


  }

  componentDidMount() {
    console.log('component did mount');
    this.getBeers();
  }

  getBeers() {
    console.log('get beers');
    fetch('/api/beers')
      .then(res => res.json())
      .then((res) => {
        this.setState({
          dataLoaded: true,
          beersData:   res,
        });
        console.log({ "res": res });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getSingleBeer(url) {
    fetch(url)
      .then(res => res.json())
      .then((res) => {
        console.log(res);
        this.setState({
          singleBeerData: true,
        });
      });
  }




  deleteBeer(name){
    fetch(`/api/beers/${name}`,{
      method: 'Delete'
    }).then(res => res.json())
      .then((res) => {
        this.getBeers();
      });
  }


  // setting State to when we add A beer
  AddBeer() {
    this.setState({
      addingBeer: true,
    });
  }


  render() {
    return (
      <div className="App">

        <Header />
        <p />

        { /*
        <Home />
        <BeersList />
        <BeerForm />
        */}

        <Switch>
          <Route path="/" exact component={Home} />

          <Route
            path="/BeersList"
            exact
            component={BeersList}
           /* beerList={this.state.beerList} */
          />

          <Route
            path="/BeersList"
            render={props => (<BeersList
              {...props}
              beer={this.state.beer}
            />
            )}
            exact
            /* beerList={this.state.beerList} */
          />

          <Route
            path="/BeersList/BeerDetails"
            render={props => (<BeerDetails
              {...props}
              beer={this.state.beerData}
            />
            )}
          />

          <Route
            path="/BeersList/BeerEdit"
            render={props => (<BeerForm
              {...props}
              beer={this.state.beerData}
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
