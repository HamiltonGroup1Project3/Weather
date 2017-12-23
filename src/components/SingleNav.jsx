import React from 'react';
import './../css/App.css';
import './../css/reset.css';


const SingleNav = (props) => {
  return(
    <div className="singleNav">
      <p>{props.name}  SingleNav </p>
    </div>
  );
};

export default SingleNav;
