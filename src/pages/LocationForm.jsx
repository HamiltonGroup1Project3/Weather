import 'font-awesome/css/font-awesome.min.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SingleNav from './../components/SingleNav';
import Filter from './../components/Filter';
import './../css/App.css';
import './../css/reset.css';

class LocationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:        props.location ? props.location.name : '',
      zip:     props.location ? props.location.zip : '',
      description: props.location ? props.location.description : '',
      typeID: props.location ? props.location.typeID : '',


    };
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  }


  render() {
      console.log(this.props.type);
    console.log({'LocationForm loaded': this.state});

    return (

      <div className="locationForm">
        <p>This is the Locationform. It will display the detail information for each location and allow for add & edit. </p>

      {/* It's its an edit for then update for that id, if its add then just post new state. */}
        <form className={this.props.isadd ? 'addForm' : 'editForm'}
          onSubmit={this.props.isadd
          ? event => this.props.locationSubmit('PUT', event, this.state )
          : event => this.props.locationSubmit('POST', event,
            this.state, this.props.location.id) }>


          <div className="formEntry">

            {/* Input for Location table name */}
            <input
              type="text"
              className="formInput"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
            />


            {/* Input for Location table Zip Code*/}
            <input
              type="text"
              className="formInput"
              name="zip"
              placeholder="Zip Code"
              value={this.state.zip}
              onChange={this.handleChange}
            />


            {/* Input for Location table Zip Code
            <input
              type="text"
              className="formInput"
              name="description"
              placeholder="Description"
              value={this.state.description}
              onChange={this.handleChange}
            />
*/}

            {/* Input for Type table Name using drop down */}
            <select
              name="typeID"
              value={this.state.value}
              onChange={this.handleChange}
              className="formInput2"
            >

              {/* default to 1 for select  */}
              <option value="1">Select Units</option>

            {/* map over types and add to drop down */}
              {this.props.type.map(type => (
                <option
                  value={type.id}
                  key={type.id}
                > {type.name}
                </option>
              ))}
            </select>


<Link to="/LocationsList">
            <input
              type="submit"
              className="nav"
              value={this.props.addLocation ? 'AddLocation' : 'Submit'}
            />

</Link>

          </div>
        </form>
      </div>


    );
  }
}

export default LocationForm;
