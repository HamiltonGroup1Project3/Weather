import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import SingleNav from './../components/SingleNav';
import './../css/reset.css';
import './../css/App.css';

import App from './../App';

const BeerDetails = (props) => {
  console.log({ 'Beer details component loaded': { props } });

  // pulls the index of the beer from the hash and stores it as index, if none then set it to 1st index
  // **Should pass up to class
  let index = null;
  if (props.location.hash == false) (index = 0); else (index = props.location.hash.substr(1)-1);

console.log({ 'index': index})

  // return the information of the individual beer
  return (
    <div className="beerForm">
      <br />
      <p>Name: {props.beer[`${index}`].name}  </p><br />
      <p>Brewery: {props.beer[`${index}`].brewery} </p><br />
      <p>Type: {props.beer[`${index}`].type.join(',')}  </p><br />
      <p>Description: {props.beer[`${index}`].description} </p><br />
      <p>some text  </p><br />


      <SingleNav deleteBeer={props.deleteBeer} type={props.type} beer={props.beer} id={props.beer[`${index}`].id} />
    </div>

  );
};

export default BeerDetails;
