import React from 'react';
import SingleNav from './SingleNav';
import './../css/App.css';
import './../css/reset.css';


const SingleBeer = (props) => {
  console.log('SingleBeer component loaded');
  return (
    <div className="singleBeer">



      <p>  {props.name} </p>
      <p> {props.brewery} </p>





      <SingleNav />

    </div>
  );
};

export default SingleBeer;
