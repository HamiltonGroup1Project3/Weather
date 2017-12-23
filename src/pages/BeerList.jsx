import React from 'react';
// import BeerForm from './BeerForm';
import SingleBeer from './../components/SingleBeer';
// import  NotFound from  './../components/NotFound';
import './../css/App.css';
import './../css/reset.css';


const BeerList = () => {
  return(
    <div className="beerList">
      <h1> BeerList </h1>
      <p> This is the main page that renders the list of beers. </p>
      <div className="container">
        { /* eventually these will be an object itterated over */}
        <SingleBeer name="name1" description="description1" brewery="brewery1" />
        <SingleBeer name="name2" description="description2" brewery="brewery2" />
        <SingleBeer name="name3" description="description3" brewery="brewery3" />
        <SingleBeer name="name1" description="description1" brewery="brewery1" />
        <SingleBeer name="name2" description="description2" brewery="brewery2" />
        <SingleBeer name="name3" description="description3" brewery="brewery3" />
        <SingleBeer name="name1" description="description1" brewery="brewery1" />
        <SingleBeer name="name2" description="description2" brewery="brewery2" />
        <SingleBeer name="name3" description="description3" brewery="brewery3" />
        <SingleBeer name="name1" description="description1" brewery="brewery1" />
        <SingleBeer name="name2" description="description2" brewery="brewery2" />
        <SingleBeer name="name3" description="description3" brewery="brewery3" />
        <SingleBeer name="name1" description="description1" brewery="brewery1" />
        <SingleBeer name="name2" description="description2" brewery="brewery2" />
        <SingleBeer name="name3" description="description3" brewery="brewery3" />
        <SingleBeer name="name1" description="description1" brewery="brewery1" />
        <SingleBeer name="name2" description="description2" brewery="brewery2" />
        <SingleBeer name="name3" description="description3" brewery="brewery3" />
      </div>
    </div>
  );
};

export default BeerList;
