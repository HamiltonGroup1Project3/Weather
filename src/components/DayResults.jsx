import React from 'react'
import './../css/App.css';
import './../css/dayResults.css';

// need to break out each forecast
const DayResults = (props) => {
  console.log({'dayResults': props.forecast});

let temp0 = props.forecast.list[0].weather[0].main === "Clouds"

  return (
    <div className="mainDay">
      <h3> Next 24 Hours </h3>



        <div className='forecast3H'>
          <p>{props.forecast.list[0].dt_txt.substr(11)} </p>
          <p> {Math.round(props.forecast.list[0].main.temp*10)/10}{props.unitsSymbol} </p>
          <p>{props.forecast.list[0].weather[0].main} </p>
          { (temp0) ? <div className='hourBox-cloud'><p> -</p> </div>
          : <div className='hourBox'><p> -</p> </div>
            }
        </div>


    </div>
    )
}


export default DayResults;
