import React from 'react';
import SingleBeer from './../components/SingleBeer';
import AddBeer from './../components/AddBeer';
// import { Route, Switch, Link } from 'react-router-dom';
// import BeerForm from './BeerForm';
// import  NotFound from  './../components/NotFound';
import './../css/App.css';
import './../css/reset.css';


const BeersList = (props) => {
  console.log({ 'BeersList loaded': props });
  return (
    <div className="beersList">
      {/* This is the main page that renders the list of beers */}
      <div className="container">

        {/* add beer links to form */}
        <AddBeer />

        { /* itterates over beers list to display full list of beers */}
        { props.beersList.map(beer => (
          <SingleBeer
            key={beer.id}
            name={beer.name}
            brewery={beer.brewery}
            id={beer.id}
          />
          ))}

      </div>
    </div>
  );
};

export default BeersList;
