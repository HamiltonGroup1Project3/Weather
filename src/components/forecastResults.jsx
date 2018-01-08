import React from 'react'
import './App.css';

// need to break out each forecast
const ForecastResults = (props) => {
  console.log({'ForecastResults': props.forecast});
  return (
    <div className="forecastResults">

      <h3> Forecast </h3>

      <div className='forecast3H'>
        <p>{props.forecast.list[0].dt_txt} </p>
        <p>Temp: {Math.round(props.forecast.list[0].main.temp*10)/10}{props.unitsSymbol} </p>
        <p>Condition: {props.forecast.list[0].weather[0].main} </p>
      </div>
      <div className='forecast3H'>
        <p>{props.forecast.list[1].dt_txt} </p>
        <p>Temp: {Math.round(props.forecast.list[1].main.temp*10)/10}{props.unitsSymbol} </p>
        <p>Condition: {props.forecast.list[1].weather[0].main} </p>
      </div>
      <div className='forecast3H'>
        <p>{props.forecast.list[2].dt_txt} </p>
        <p>Temp: {Math.round(props.forecast.list[2].main.temp*10)/10}{props.unitsSymbol} </p>
        <p>Condition: {props.forecast.list[2].weather[0].main} </p>
      </div>
      <div className='forecast3H'>
        <p>{props.forecast.list[3].dt_txt} </p>
        <p>Temp: {Math.round(props.forecast.list[3].main.temp*10)/10}{props.unitsSymbol} </p>
        <p>Condition: {props.forecast.list[3].weather[0].main} </p>
      </div>
      <div className='forecast3H'>
        <p>{props.forecast.list[4].dt_txt} </p>
        <p>Temp: {Math.round(props.forecast.list[4].main.temp*10)/10}{props.unitsSymbol} </p>
        <p>Condition: {props.forecast.list[4].weather[0].main} </p>
      </div>
      <div className='forecast3H'>
        <p>{props.forecast.list[5].dt_txt} </p>
        <p>Temp: {Math.round(props.forecast.list[5].main.temp*10)/10}{props.unitsSymbol} </p>
        <p>Condition: {props.forecast.list[5].weather[0].main} </p>
      </div>
      <div className='forecast3H'>
        <p>{props.forecast.list[6].dt_txt} </p>
        <p>Temp: {Math.round(props.forecast.list[6].main.temp*10)/10}{props.unitsSymbol} </p>
        <p>Condition: {props.forecast.list[6].weather[0].main} </p>
      </div>
      <div className='forecast3H'>
        <p>{props.forecast.list[7].dt_txt} </p>
        <p>Temp: {Math.round(props.forecast.list[7].main.temp*10)/10}{props.unitsSymbol} </p>
        <p>Condition: {props.forecast.list[7].weather[0].main} </p>
      </div>

    </div>
    )
}


export default ForecastResults;
