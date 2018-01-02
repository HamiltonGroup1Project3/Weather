import React from 'react';
import { NavLink } from 'react-router-dom';
import './../css/App.css';
import './../css/reset.css';


const AddBeer = (props) => {
  console.log('AddBeer component loaded');
  return (
    <NavLink to="/BeersList/BeerEdit/" isadd={true}>
      <div className="addBeer">
        <h1>  + </h1>
        <p> add Beer </p>

      </div>
    </NavLink>
  );
};

export default AddBeer;
