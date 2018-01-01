import React from 'react';
import { NavLink } from 'react-router-dom';
import './../css/App.css';
import './../css/reset.css';


const SingleNav = (props) => {
  console.log({ 'SingleNav component loaded': props });
  // need to have currentBeer and place it after hash
  return (
    <div className="container">
      <div className="container">
        <NavLink to="/BeersList/BeerDetails#5" className="singleNav">
          <p>Prev</p>
        </NavLink>
      </div>

      <div className="container">
        <NavLink to="/BeersList/BeerEdit" className="singleNav">
          <p>Edit</p>
        </NavLink>
      </div>

      <div className="container">
        <NavLink to="/BeersList/BeerEdit" className="singleNav">
          <p>Delete</p>
        </NavLink>
      </div>

      <div className="container">
        <NavLink to="/BeersList/BeerDetails" className="singleNav">
          <p>Next</p>
        </NavLink>
      </div>

    </div>
  );
};

export default SingleNav;
