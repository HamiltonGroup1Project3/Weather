import React from 'react';
import './../css/App.css';
import './../css/reset.css';


const Filter = (props) => {
  console.log('Filter component loaded');
  return (
    <div className="filter">
      <p>Filter {props.name}</p>
    </div>
  );
};

export default Filter;
