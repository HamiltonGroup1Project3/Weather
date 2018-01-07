import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import SingleNav from './../components/SingleNav';
import './../css/reset.css';
import './../css/App.css';

import App from './../App';

const LocationDetails = (props) => {
  console.log({ 'Location details component loaded': { props } });

  // pulls the index of the location from the hash and stores it as index, if none then set it to 1st index
  // **Should pass up to class
  let index = null;
  if (props.history.location.hash == false) (index = 11374); else (index = props.history.location.hash.substr(1) );
  props.setCurrentLocation(index);

console.log({ 'index': index})

  // return the information of the individual location
  return (
    <div className="locationForm">
      <br />
{/*      <p>Name: {props.location[`${index}`].name}  </p><br />
      <p>Zip Code: {props.location[`${index}`].zip} </p><br />
     {/* <p>Type: {props.location[`${index}`].type.join(',')}  </p><br />
      <p>Description: {props.location[`${index}`].description} </p><br />


    <SingleNav deleteLocation={props.deleteLocation} type={props.type} location={props.location} id={props.location[`${index}`].id} />
*/}
    </div>

  );
};

export default LocationDetails;
