import React from 'react';
// import BeerForm from './BeerForm';
import SingleBeer from './../components/SingleBeer';
import AddBeer from './../components/AddBeer';
// import  NotFound from  './../components/NotFound';
import './../css/App.css';
import './../css/reset.css';


const BeersList = (props) => {
  console.log('BeersList loaded');
  return (
    <div className="beersList">
      {/* } <h1> Beers List </h1>
      <p> This is the main page that renders the list of beers. </p> */}
      <div className="container">

        <AddBeer />

        { /* itterates over beers list to display full list of beers */}
       { props.beersList.map( beer => {
        return ( <SingleBeer key={beer.id} name={beer.name} brewery={beer.brewery} /> );
        })}

      </div>
    </div>
  );
};

export default BeersList;
