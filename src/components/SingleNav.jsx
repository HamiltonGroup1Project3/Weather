import React from 'react';
import { NavLink } from 'react-router-dom';
import './../css/App.css';
import './../css/reset.css';


const SingleNav = (props) => {
  console.log({ 'SingleNav component loaded': props });
  // need to have currentLocation and place it after hash


  return (
    <div className="container">
      <div className="container">
        <NavLink to="/LocationsList/LocationDetails" className="singleNav">
          <p>Prev</p>
        </NavLink>
      </div>

      <div className="container">
        <NavLink to="/LocationsList/LocationEdit" className="singleNav" isadd={"false"}>

          <p>Edit</p>
        </NavLink>
      </div>

      <div className="container">
        <NavLink to="/LocationsList/" className="singleNav" type={props.type} onClick={()=> props.deleteLocation(props.id)} >
          <p>Delete</p>
        </NavLink>
      </div>

      <div className="container">
        <NavLink to="/LocationsList/LocationDetails#9" className="singleNav">
          <p>Next</p>
        </NavLink>
      </div>

    </div>
  );
};

export default SingleNav;
