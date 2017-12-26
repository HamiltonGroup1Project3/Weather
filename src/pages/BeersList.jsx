import React from 'react';
// import BeerForm from './BeerForm';
import SingleBeer from './../components/SingleBeer';
// import  NotFound from  './../components/NotFound';
import './../css/App.css';
import './../css/reset.css';


const BeersList = (props) => {
  console.log('BeersList loaded');
  return (
    <div className="beersList">
      <h1> Beers List </h1>
      <p> This is the main page that renders the list of beers. </p>
      <div className="container">
        { /* eventually these will be an object itterated over */}
       {props.beer.map(beer => {
        return(props.beer == beer.name)
        ? <BeerForm key={beer.name}
       }



        <SingleBeer name="name1" brewery="brewery1" />
        <SingleBeer name="name2" brewery="brewery2" />
        <SingleBeer name="name3" brewery="brewery3" />
        <SingleBeer name="name1" brewery="brewery1" />
        <SingleBeer name="name2" brewery="brewery2" />
        <SingleBeer name="name3" brewery="brewery3" />
        <SingleBeer name="name1" brewery="brewery1" />
        <SingleBeer name="name2" brewery="brewery2" />
        <SingleBeer name="name3" brewery="brewery3" />
        <SingleBeer name="name1" brewery="brewery1" />
        <SingleBeer name="name2" brewery="brewery2" />
        <SingleBeer name="name3" brewery="brewery3" />
        <SingleBeer name="name1" brewery="brewery1" />
        <SingleBeer name="name2" brewery="brewery2" />
        <SingleBeer name="name3" brewery="brewery3" />
        <SingleBeer name="name1" brewery="brewery1" />
        <SingleBeer name="name2" brewery="brewery2" />
        <SingleBeer name="name3" brewery="brewery3" />
      </div>
    </div>
  );
};

export default BeersList;
