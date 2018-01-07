import React from 'react';
import SingleLocation from './../components/SingleLocation';
import AddLocation from './../components/AddLocation';
// import { Route, Switch, Link } from 'react-router-dom';
// import LocationForm from './LocationForm';
// import  NotFound from  './../components/NotFound';
import './../css/App.css';
import './../css/reset.css';


const LocationsList = (props) => {
  console.log({ 'LocationsList loaded': props });
  return (
    <div className="locationsList">
      {/* This is the main page that renders the list of locations */}
      <div className="container">

        {/* add location links to form */}
        <AddLocation />

        { /* itterates over locations list to display full list of locations */}
        { props.locationsList.map(location => (
          <SingleLocation
            key={location.id}
            name={location.name}
            brewery={location.brewery}
            id={location.id}
          />
          ))}

      </div>
    </div>
  );
};

export default LocationsList;
