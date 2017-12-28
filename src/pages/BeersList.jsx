import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import SingleBeer from './../components/SingleBeer';
import AddBeer from './../components/AddBeer';
// import BeerForm from './BeerForm';
// import  NotFound from  './../components/NotFound';
import './../css/App.css';
import './../css/reset.css';


const BeersList = (props) => {
  console.log({ 'BeersList loaded': props });
  return (
    <div className="beersList">
      {/* } <h1> Beers List </h1>
      <p> This is the main page that renders the list of beers. </p> */}
      <div className="container">

        <AddBeer  />

        { /* itterates over beers list to display full list of beers */}
       { props.beersList.map(( beer ) => {
        // <Link to={`/${this.props.beer.id}`} >
        return ( <SingleBeer key={beer.id} name={beer.name} brewery={beer.brewery} id={beer.id} /> );
        // </Link>
        })
     }

      </div>
    </div>
  );
};

export default BeersList;
