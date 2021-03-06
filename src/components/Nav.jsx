import React from 'react';
import { NavLink } from 'react-router-dom';
import './../css/App.css';
import './../css/reset.css';


const Nav = () => {
  console.log('Nav component loaded');
  return (
    <div className="container">
      <NavLink to="/" exact className="nav" activeClassName="active">
      Home
      </NavLink>
      <NavLink to="/LocationsList" exact className="nav" activeClassName="active">
      List
      </NavLink>
      <NavLink to="/LocationsList/LocationDetails" className="nav" activeClassName="active">
      Details
      </NavLink>

    </div>
  );
};

export default Nav;
