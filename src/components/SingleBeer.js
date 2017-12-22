import React from 'react';
import SingleNav from './SingleNav';
import './../css/App.css';


const SingleBeer = (props) => {
  return(
    <div className="singleBeer">
      <h1> Single Beer page</h1>
      <p>  {props.name} </p>
      <p> {props.description} </p>
      <p> {props.brewery} </p>
      <SingleNav />
    </div>
  );
};

export default SingleBeer;
