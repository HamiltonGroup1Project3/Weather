import React from 'react';
import { NavLink } from 'react-router-dom';
import './../css/App.css';
import './../css/reset.css';


const SingleLocation = (props) => {
  console.log({ 'SingleLocation component loaded': props });
  return (

    // passed the id to hash... need to make it index
    <NavLink
      to={`/LocationsList/LocationDetails#${props.id}`}
      activeClassName="active"
      key={props.id}

    >

      <div className="singleLocation">
        {props.id}
        {/* <<  to hide later, using for reference  */ }
        <p>  {props.name} </p>
        <br />
        <p> {props.zip} </p>


      </div>
    </NavLink>
  );
};

export default SingleLocation;

