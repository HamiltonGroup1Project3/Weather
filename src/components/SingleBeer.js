import React from 'react';
import SingleNav from './SingleNav';
import './../css/App.css'


const SingleBeer = (props) => {
  return(
    <div className="singleBeer">
      <h1> Single Beer page</h1>
      {props.name}
      {props.description}
      <SingleNav />
    </div>
  );
};

export default SingleBeer;
