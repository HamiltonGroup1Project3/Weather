import React from 'react';
import { NavLink } from 'react-router-dom';
import './../css/App.css';
import './../css/reset.css';


const AddLocation = (props) => {
  console.log('AddLocation component loaded');
  return (
    <NavLink to="/LocationsList/LocationEdit/" isadd={"true"}>
      <div className="addLocation">
        <h1>  + </h1>
        <p> add Location </p>

      </div>
    </NavLink>
  );
};

export default AddLocation;
