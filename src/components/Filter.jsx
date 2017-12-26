import React from 'react';
import './../css/App.css';
import './../css/reset.css';


const Filter = (props) => {
  console.log('Filter component loaded');
  return (
    <div className="filter">

      <select name="filterSelect" >
        {/* map over selections */}
        <option value="null">Filter By {props.name}</option>
        <option value="Type1">Type1</option>
        <option value="Type2">Type2</option>
        <option value="Type3">Type3</option>
</select>
    </div>
  );
};

export default Filter;
