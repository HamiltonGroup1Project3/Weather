import React from 'react';
import './../css/App.css';
import './../css/reset.css';
import { NavLink } from 'react-router-dom';


const SingleNav = (props) => {
  console.log('SingleNav component loaded');
  return (
    <div className="container">
      <div className="container">
        <NavLink to="/BeersList/BeerEdit" className="singleNav">
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
        <NavLink to="/BeersList/BeerEdit" className="singleNav">
          <p>Next</p>
        </NavLink>
      </div>

    </div>
  );
};

export default SingleNav;
