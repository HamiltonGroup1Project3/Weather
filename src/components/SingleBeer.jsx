import React from 'react';
import SingleNav from './SingleNav';
import { NavLink } from 'react-router-dom';
import './../css/App.css';
import './../css/reset.css';


const SingleBeer = (props) => {
  console.log('SingleBeer component loaded');
  return (
    <NavLink to="/BeersList/Beer"  activeClassName="active">
    <div className="singleBeer">
      <p>  {props.name} </p>
      <p> {props.brewery} </p>

    </div>
    </NavLink>
  );
};

export default SingleBeer;

