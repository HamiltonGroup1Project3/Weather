import React from 'react';
import SingleNav from './SingleNav';
import { NavLink } from 'react-router-dom';
import './../css/App.css';
import './../css/reset.css';


const SingleBeer = (props) => {
  console.log({'SingleBeer component loaded': props});
  return (

    <NavLink
    to="/BeersList/BeerDetails"
    activeClassName="active"
    beerid={props.id}
    >

    <div className="singleBeer">
    {props.id}
      <p>  {props.name} </p>
      <p> {props.brewery} </p>


      </div>
    </NavLink>
  );
};

export default SingleBeer;

