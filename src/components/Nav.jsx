import React from 'react';
import './../css/App.css';
import './../css/reset.css';


const Nav = (props) => {
  return(
    <div className="nav">
      <p>{props.name} Nav</p>
    </div>
  );
};

export default Nav;
