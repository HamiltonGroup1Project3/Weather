import React from 'react'
import './../css/Header2.css';


const Header2 = props => {
      console.log({'Header': props.weather})
      console.log(props)
  return (

    <div className="App-header">
      <p> {props.weather.name} * State * {props.weather.sys.country} </p>
    </div>
    )
}


export default Header2;
