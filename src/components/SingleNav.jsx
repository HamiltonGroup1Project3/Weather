import React from 'react';
import './../css/App.css';
import './../css/reset.css';


const SingleNav = (props) => {
  console.log('SingleNav component loaded');
  return (
    <div className="singleNav">
      <p>{props.name}</p>
    </div>
  );
};

export default SingleNav;
