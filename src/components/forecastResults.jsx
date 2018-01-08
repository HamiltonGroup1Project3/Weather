import React from 'react'
import './../css/App.css';
import './../css/forecastResults.css';

// need to break out each forecast
const ForecastResults = (props) => {
  console.log({'ForecastResults': props.forecast});

let temp0 = props.forecast.list[0].weather[0].main === "Clouds"
let temp1 = props.forecast.list[1].weather[0].main === "Clouds"
let temp2 = props.forecast.list[2].weather[0].main === "Clouds"
let temp3 = props.forecast.list[3].weather[0].main === "Clouds"
let temp4 = props.forecast.list[4].weather[0].main === "Clouds"
let temp5 = props.forecast.list[5].weather[0].main === "Clouds"
let temp6 = props.forecast.list[6].weather[0].main === "Clouds"
let temp7 = props.forecast.list[7].weather[0].main === "Clouds"

  return (
    <div className="main">
      <h3> Next 24 Hours </h3>
      <div className="forecastResults">


        <div className='forecast3H'>
          <p>{props.forecast.list[0].dt_txt.substr(11)} </p>
          <p> {Math.round(props.forecast.list[0].main.temp*10)/10}{props.unitsSymbol} </p>
          <p>{props.forecast.list[0].weather[0].main} </p>
          { (temp0) ? <div className='hourBox-cloud'><p> -</p> </div>
          : <div className='hourBox'><p> -</p> </div>
            }
        </div>
        <div className='forecast3H'>
          <p>{props.forecast.list[1].dt_txt.substr(11)} </p>
          <p> {Math.round(props.forecast.list[1].main.temp*10)/10}{props.unitsSymbol} </p>
          <p>{props.forecast.list[1].weather[0].main} </p>
          { (temp1) ? <div className='hourBox-cloud'><p> -</p> </div>
          : <div className='hourBox'><p> -</p> </div>
            }
        </div>
        <div className='forecast3H'>
          <p>{props.forecast.list[2].dt_txt.substr(11)} </p>
          <p> {Math.round(props.forecast.list[2].main.temp*10)/10}{props.unitsSymbol} </p>
          <p>{props.forecast.list[2].weather[0].main} </p>
          { (temp2) ? <div className='hourBox-cloud'><p> -</p> </div>
          : <div className='hourBox'><p> -</p> </div>
            }
        </div>
        <div className='forecast3H'>
          <p>{props.forecast.list[3].dt_txt.substr(11)} </p>
          <p> {Math.round(props.forecast.list[3].main.temp*10)/10}{props.unitsSymbol} </p>
          <p>{props.forecast.list[3].weather[0].main} </p>
          { (temp3) ? <div className='hourBox-cloud'><p> -</p> </div>
          : <div className='hourBox'><p> -</p> </div>
            }
        </div>
        <div className='forecast3H'>
          <p>{props.forecast.list[4].dt_txt.substr(11)} </p>
          <p> {Math.round(props.forecast.list[4].main.temp*10)/10}{props.unitsSymbol} </p>
          <p>{props.forecast.list[4].weather[0].main} </p>
          { (temp4) ? <div className='hourBox-cloud'><p> -</p> </div>
          : <div className='hourBox'><p> -</p> </div>
            }
        </div>
        <div className='forecast3H'>
          <p>{props.forecast.list[5].dt_txt.substr(11)} </p>
          <p> {Math.round(props.forecast.list[5].main.temp*10)/10}{props.unitsSymbol} </p>
          <p>{props.forecast.list[5].weather[0].main} </p>
          { (temp5) ? <div className='hourBox-cloud'><p> -</p> </div>
          : <div className='hourBox'><p> -</p> </div>
            }
        </div>
        <div className='forecast3H'>
          <p>{props.forecast.list[6].dt_txt.substr(11)} </p>
          <p> {Math.round(props.forecast.list[6].main.temp*10)/10}{props.unitsSymbol} </p>
          <p>{props.forecast.list[6].weather[0].main} </p>
          { (temp6) ? <div className='hourBox-cloud'><p> -</p> </div>
          : <div className='hourBox'><p> -</p> </div>
            }
        </div>
        <div className='forecast3H'>
          <p>{props.forecast.list[7].dt_txt.substr(11)} </p>
          <p> {Math.round(props.forecast.list[7].main.temp*10)/10}{props.unitsSymbol} </p>
          <p>{props.forecast.list[7].weather[0].main} </p>
          { (temp7) ? <div className='hourBox-cloud'><p> -</p> </div>
          : <div className='hourBox'><p> -</p> </div>
            }
        </div>

      </div>
    </div>
    )
}


export default ForecastResults;
