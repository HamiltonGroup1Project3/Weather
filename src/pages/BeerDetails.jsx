import React, { Component } from 'react';
import './../css/App.css';
import './../css/reset.css';
import SingleNav from './../components/SingleNav';
import 'font-awesome/css/font-awesome.min.css';

const BeerDetails = (props) => {
  console.log({'Beer details component loaded': {props}});
  return (
    <div className="beerForm">
      <br />
      <p>Name {props.beer.name}  </p><br />
      <p>Brewery </p><br />
      <p>Description </p><br />
      <p>some text  </p><br />
      <p>some text  </p><br />


        <SingleNav  />
      </div>

  );
}

export default BeerDetails;
