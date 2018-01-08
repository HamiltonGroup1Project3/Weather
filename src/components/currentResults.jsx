import React from 'react'
import './../css/currentResults.css';
<style>
@import url('https://fonts.googleapis.com/css?family=Inconsolata|Open+Sans');
</style>


const CurrentResults = props => {
      console.log({'currentResults': props.weather})
      console.log(props)
  return (
    <div className="currentResults">
      <div className="rectangle-copy-30">
        <p> image</p>
      </div>
      <div className="rectangle-copy-31">
        <span className="today"> Today </span>

        <span className="OO"> {(Math.round(props.weather.main.temp*10)/10)}{props.unitsSymbol} </span>
        <div className="">
          <span className="text-style-1"> L: </span>
          <span className="text-style-2"> {(Math.round(props.weather.main.temp_min*10)/10)}{props.unitsSymbol} </span>

          <span className="text-style-1"> H:  </span>
          <span className="text-style-2">{(Math.round(props.weather.main.temp_max*10)/10)}{props.unitsSymbol}
          </span>
        </div>

        <div className="next-hour-clear-for">
          <span className="text-style-1"> Next Hour </span><br/>
          <span className="text-style-1">{props.weather.weather[0].main} </span>
        </div>
      </div>
    </div>
    )
}


export default CurrentResults;
