import React from 'react';
import './../css/App.css';
import './../css/reset.css';


const Filter = (props) => {
  console.log({'Filter component loaded': props});
  return (
    <div className="filter">

      <select name="filterSelect" >
        {/* map over selections */}
        <option value="null">Filter By {props.name}</option>
        {props.typeData.map(type => (
        <option value={type.id} key={type.id}>{type.name}</option>
        ))}

      </select>
    </div>
  );
};

export default Filter;
