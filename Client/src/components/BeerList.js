import React from 'react';
import BeerForm from './BeerForm';
import SingleBeer from './SingleBeer';
import  NotFound from  './NotFound';
import './../css/App.css'


const BeerList = () => {
  return(
    <div className="beerList">
      <h1> BeerList </h1>
       <BeerForm />
       <SingleBeer />
       <NotFound />

    </div>
  );
};

export default BeerList;
