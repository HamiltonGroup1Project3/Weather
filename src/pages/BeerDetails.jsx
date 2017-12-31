import React, { Component } from 'react';
import './../css/App.css';
import './../css/reset.css';
import SingleNav from './../components/SingleNav';
import 'font-awesome/css/font-awesome.min.css';

const BeerDetails = (props) => {
  console.log({'Beer details component loaded': {props}});

 // pulls the beer id from the hash and stores it as id, if none then set it to 1st id
 // **Should pass up to class
let id = null;
if (props.location.hash == false) (id=0); else (id= props.location.hash.substr(1)-1);


  return (
    <div className="beerForm">
      <br />
      <p>Name: {props.beer[`${id}`].name}  </p><br />
      <p>Brewery: {props.beer[`${id}`].brewery} </p><br />
      <p>Type: {props.beer[`${id}`].type.join(',')}  </p><br />
      <p>Description: {props.beer[`${id}`].description} </p><br />
      <p>some text  </p><br />


        <SingleNav  />
      </div>

  );
}

export default BeerDetails;
