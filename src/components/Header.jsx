import React from 'react';
import './../css/reset.css';
import './../css/App.css';
import Filter from './Filter';
import Nav from './Nav';


const Header = (props) => {
  console.log('Header component loaded');
  return (
    <div className="header">
      <h1> Header </h1>
      <div className="container">
        <Nav />
      </div>
      <div className="container">
        <Filter name="Type" />
        <Filter name="Other" />
      </div>
    </div>
  );
};

export default Header;
