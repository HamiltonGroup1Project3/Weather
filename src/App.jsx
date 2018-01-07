/* global fetch:false */
import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import LocationsList from './pages/LocationsList';
import LocationForm from './pages/LocationForm';
import LocationDetails from './pages/LocationDetails';
import NotFound from './pages/NotFound';
import './css/reset.css';
import './css/App.css';


class App extends Component {
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
      locationsLoaded: false,
      locationsData:   {
        id:          null,
        name:        null,
        brewery:     null,
        description: null,
        type:        null,
      },
      typesData:        null,
      typesLoaded:      false,
      singleLocation:       null,
      singleLocationLoaded: false,
    };
    this.getCurrentWeather=this.getCurrentWeather.bind(this);
    this.getForecastWeather=this.getForecastWeather.bind(this);
    this.getUnitsSymbol=this.getUnitsSymbol.bind(this);


    this.getAllLocations = this.getAllLocations.bind(this);
    this.getAllTypes = this.getAllTypes.bind(this);
    this.getSingleLocation = this.getSingleLocation.bind(this);
    this.locationSubmit = this.locationSubmit.bind(this);
    this.deleteLocation = this.deleteLocation.bind(this);
  }


  getUnitsSymbol(units) {
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
  let key='e3cd724c0500567870e3c02db59c2d1c';
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
    })
    .catch(err => console.log(err))
  }

  // http://api.openweathermap.org/data/2.5/weather?zip=11374&appid=${WEATHER_API_KEY}&units=imperial

  getForecastWeather(units, zip) {
  let key='e3cd724c0500567870e3c02db59c2d1c';

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






  // items to load when the main page mounts
  componentDidMount() {
    console.log('component did mount');
    this.getAllLocations();
    this.getAllTypes();
    // this.getSingleLocation(6);
  }

  // api call to our local api to return locationsData
  getAllLocations() {
    console.log('get locations');
    fetch('/api/locations/')
      .then(res => res.json())
      .then((res) => {
        this.setState({
          locationsData:   res.data,
          locationsLoaded: true,
        });
        console.log({ 'Locations Api': res.data});
      })
      .catch(err => console.log(err));
  }

// api call to our local api to return types of locations list
  getAllTypes() {
    console.log('get types');
    fetch('/api/types/')
      .then(res => res.json())
      .then((res) => {
        this.setState({
          typesData:   res.data.types,
          typesLoaded: true,
        });
        console.log({ 'Types Api': res.data.types });
      })
      .catch(err => console.log(err));
  }


  // method of using another api call to get single location
  getSingleLocation(id) {
    console.log('get one location');
    console.log({ 'state before': this.state });
    fetch(`/api/locations/${id}`)
      .then(res => res.json())
      .then((res) => {
        this.setState({
          singleLocation: res.data.location,
          singleLocationLoaded: true,
        })
        console.log({ 'Single ApiResult': res });
        console.log({ 'state after': this.state });
      })
      .catch(err => console.log(err));
  }


  locationSubmit(method, event, data, id) {
    console.log({"locationsubmit": { method, event, data, id }});
    event.preventDefault();
    fetch(`/api/locations/`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => { console.log(res)
        this.getAllLocations();}
      );
  }


  // for deleting a location based by id
  deleteLocation(id) {
    console.log({"locationDelete": id })
    fetch(`/api/locations/${id}`, {
      method: 'delete',
    })
      .then(() => this.getAllLocations()
      );
  }


  // setting State to when we add A location
  AddLocation() {
    this.setState({
      addingLocation: true,

    });
  }



  editForm(id) {
    this.setState({
      editName:    name,
      editBrewery: brewery,
      editType:    type,
      editDesc:    description,
    });
  }


  render() {
    return (
      <div className="App">
        {/* pass in types for filtering on if loaded*/}
        {(this.state.typesLoaded) && (this.state.locationsLoaded)
        ? <Header type={this.state.typesData} brewery={this.state.typesData} />
        : <p> Loading... </p> }


        <Switch>
          <Route path="/" exact component={Home} />


          {/* If api Locations data has returned locationlist component is rendered */}
          {(this.state.typesLoaded) && (this.state.locationsLoaded)
          ? <Route
            path="/LocationsList"
            render={props => (<LocationsList
              {...props}
              locationsList={this.state.locationsData}
            />
            )}
            exact
            locationsList={this.state.locationList}
          />
          : <p> Loading... </p> }


        {/* route for individual location details */}
          {(this.state.typesLoaded) && (this.state.locationsLoaded)
          ? <Route
            path="/LocationsList/LocationDetails"
            render={props => (<LocationDetails
              {...props}
              location={this.state.locationsData}
              type={this.state.typesData}
              deleteLocation={this.deleteLocation}
            />
            )}
          />
          : <p> Loading... </p> }


          {/* route to edit form */}
          {(this.state.typesLoaded) && (this.state.locationsLoaded)
          ? <Route
            path="/LocationsList/LocationEdit"
            render={props => (<LocationForm
              {...props}
              location={this.state.locationsData}
              locationSubmit={this.locationSubmit}
              type={this.state.typesData}

            />
            )}
          />
          : <p> Loading... </p> }


          {/* catch all for bad routes */}
          <Route path="/" component={NotFound} />

        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
