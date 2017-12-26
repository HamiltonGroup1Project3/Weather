import React from 'react';
import './../css/reset.css';
import './../css/App.css';
import Filter from './Filter';
import Nav from './Nav';


const Header = (props) => {
  console.log('Header component loaded');
  return (
    <div className="header">

      <div className="left container">
        <Filter name="Type" />
        <Filter name="Other" />
      </div>
      <div className="center container">
        <Nav />
      </div>
      <div className="right container">
      </div>
    </div>
  );
};

export default Header;
