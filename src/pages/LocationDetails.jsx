import 'font-awesome/css/font-awesome.min.css';
import React, { Component } from 'react';
import SingleNav from './../components/SingleNav';
import './../css/reset.css';
import App from './../App';

import './../css/LocationDetails.css';
import CurrentResults from './../components/currentResults';
// import SearchForm from './searchForm';
import ForecastResults from './../components/forecastResults';
import Header2 from './../components/Header2';

// const LocationDetails = (props) => {
  // console.log({ 'Location details component loaded': { props } });

//   // pulls the index of the location from the hash and stores it as index, if none then set it to 1st index
//   // **Should pass up to class
//   let index = null;
//   if (props.history.location.hash == false) (index = 11374); else (index = props.history.location.hash.substr(1) );
// //props.getWeather('imperial', index);
  // setCurrentLocation(index)

class LocationDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiCurrentWeather: null,
      apiCurrentLoaded: false,
      apiForecastWeather: null,
      apiForecastLoaded: false,
      zip: 11374,
      units: "imperial",
      unitsSymbol: '\xB0F',
      // units: 'imperial',
      // unitsSymbol: this.getUnitsSymbol(this.units),
      calltype: 'weather',
    };
    this.getCurrentWeather=this.getCurrentWeather.bind(this);
    this.getForecastWeather=this.getForecastWeather.bind(this);
    this.getUnitsSymbol=this.getUnitsSymbol.bind(this);

  }

getUnitsSymbol(units){
  console.log({'getUnitsSymbol': units});
switch(units) {

  case "imperial":
  return this.setState({
      untis: "imperial",
      unitsSymbol: "\xB0F" });
      break;

  case "metric":
  return this.setState({
      untis: "metric",
      unitsSymbol: "\xB0C" });
  break;

  default:
  return this.setState({
      untis: null,
      unitsSymbol: "\xB0K" });

  }
}


componentDidMount() {
  console.log('componentDidMount');
  this.getForecastWeather(this.state.units, this.state.zip);
  this.getCurrentWeather(this.state.units, this.state.zip);
  //<WeatherApiCall />

}


getCurrentWeather(units, zip) {
let key='8a6b692ba4ab3f5c8ade46440d2e0a4f';
// let key=process.env.REACT_APP_SECRET;
  console.log(`zip is ${zip}`)
  console.log(`symbol is ${this.state.unitsSymbol}`)
  console.log('run getCurrentWeather')
  fetch(`http://api.openweathermap.org/data/2.5/${this.state.calltype}?zip=${zip}&appid=${key}&units=${units}`)

.then((res) => {
   { /*debugger; */}
  return res.json() })
  // .then(res => res.json())
  .then(res => {
    // console.log(res);
    this.setState({
      apiCurrentWeather: res,
      apiCurrentLoaded: true,
    })
    console.log({'getCurrentWeather': this.state.apiCurrentWeather});
    console.log(this.state.apiForecastWeather.city.name)
  })
  .catch(err => console.log(err))
}

// http://api.openweathermap.org/data/2.5/weather?zip=11374&appid=${WEATHER_API_KEY}&units=imperial

getForecastWeather(units, zip) {
let key='8a6b692ba4ab3f5c8ade46440d2e0a4f';

  console.log('run getForecastResults')
  fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${zip}&appid=${key}&units=${units}`)
  .then(res => res.json())
  .then(res => {
    // console.log(res);
    this.setState({
      apiForecastWeather: res,
      apiForecastLoaded: true,
    })
    console.log({'getForecastWeather': this.state.apiForecastWeather});
  })
    .catch(err => console.log(err))
}



  render() {
    return (
      <div className="App">
      {this.state.apiCurrentWeather ?
        <Header2 weather={this.state.apiCurrentWeather}
        forecast={this.state.apiForecastWeather}  />
        : <p> Loading...</p> }


        <div className="App-intro">

          {/*Search Form
          <SearchForm getCurrentWeather={this.getCurrentWeather} getForecastWeather={this.getForecastWeather} getUnitsSymbol={this.getUnitsSymbol} />
          */}

          {/* displays current weather once it's loaded  */}
          {this.state.apiCurrentWeather ? <CurrentResults weather={this.state.apiCurrentWeather} unitsSymbol={this.state.unitsSymbol} /> : <p> Loading...</p> }


          {/* displays weather forecast once it's loaded  */}
          {this.state.apiForecastWeather ? <ForecastResults forecast={this.state.apiForecastWeather} unitsSymbol={this.state.unitsSymbol} /> : <p> Loading... </p> }
        </div>
      </div>
    );
  }
}



export default LocationDetails;
