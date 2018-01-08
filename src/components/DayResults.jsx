import React from 'react'
import './../css/App.css';
import './../css/dayResults.css';
import WeatherImageSmall from './../components/WeatherImageSmall';

// need to break out each forecast
const DayResults = (props) => {
  console.log({'dayResults': props.forecast});

let temp0 = props.forecast.list[0].weather[0].main === "Clouds"

  return (
    <div className="mainDay">

        <div className='day'>
          <p>{props.forecast.list[3].dt_txt.substr(0,10)} </p>
          <p>{props.forecast.list[3].weather[0].main} </p>
          <WeatherImageSmall />
          <p> L:{Math.round(props.forecast.list[0].main.temp_min)}{props.unitsSymbol}  H:{Math.round(props.forecast.list[3].main.temp_max)}{props.unitsSymbol} </p>
        </div>



        <div className='day'>
          <p>{props.forecast.list[11].dt_txt.substr(0,10)} </p>
          <p>{props.forecast.list[11].weather[0].main} </p>
          <WeatherImageSmall />
          <p> L:{Math.round(props.forecast.list[7].main.temp_min)}{props.unitsSymbol}  H:{Math.round(props.forecast.list[11].main.temp_max)}{props.unitsSymbol} </p>
        </div>



        <div className='day'>
          <p>{props.forecast.list[19].dt_txt.substr(0,10)} </p>
          <p>{props.forecast.list[19].weather[0].main} </p>
          <WeatherImageSmall />
          <p> L:{Math.round(props.forecast.list[15].main.temp_min)}{props.unitsSymbol}  H:{Math.round(props.forecast.list[19].main.temp_max)}{props.unitsSymbol} </p>
        </div>



        <div className='day'>
          <p>{props.forecast.list[27].dt_txt.substr(0,10)} </p>
          <p>{props.forecast.list[27].weather[0].main} </p>
          <WeatherImageSmall />
          <p> L:{Math.round(props.forecast.list[23].main.temp_min)}{props.unitsSymbol}  H:{Math.round(props.forecast.list[27].main.temp_max)}{props.unitsSymbol} </p>
        </div>


        <div className='day'>
          <p>{props.forecast.list[35].dt_txt.substr(0,10)} </p>
          <p>{props.forecast.list[35].weather[0].main} </p>
          <WeatherImageSmall />
          <p> L:{Math.round(props.forecast.list[31].main.temp_min)}{props.unitsSymbol}  H:{Math.round(props.forecast.list[35].main.temp_max)}{props.unitsSymbol} </p>
        </div>



        <div className='day'>
          <p>{props.forecast.list[0].dt_txt.substr(0,10)} </p>
          <p>{props.forecast.list[0].weather[0].main} </p>
          <WeatherImageSmall />
          <p> L:{Math.round(props.forecast.list[0].main.temp_min)}{props.unitsSymbol}  H:{Math.round(props.forecast.list[6].main.temp_max)}{props.unitsSymbol} </p>
        </div>


    </div>
    )
}


export default DayResults;
