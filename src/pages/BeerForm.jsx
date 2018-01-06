import 'font-awesome/css/font-awesome.min.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SingleNav from './../components/SingleNav';
import Filter from './../components/Filter';
import './../css/App.css';
import './../css/reset.css';

class BeerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:        props.beer ? props.beer.name : '',
      brewery:     props.beer ? props.beer.brewery : '',
      description: props.beer ? props.beer.description : '',
      typeID: props.beer ? props.beer.typeID : '',


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
    console.log({'BeerForm loaded': this.state});

    return (

      <div className="beerForm">
        <p>This is the Beerform. It will display the detail information for each beer and allow for add & edit. </p>

      {/* It's its an edit for then update for that id, if its add then just post new state. */}
        <form className={this.props.isadd ? 'addForm' : 'editForm'}
          onSubmit={this.props.isadd
          ? event => this.props.beerSubmit('PUT', event, this.state )
          : event => this.props.beerSubmit('POST', event,
            this.state, this.props.beer.id) }>


          <div className="formEntry">

            {/* Input for Beer table name */}
            <input
              type="text"
              className="formInput"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
            />


            {/* Input for Beer table Brewery*/}
            <input
              type="text"
              className="formInput"
              name="brewery"
              placeholder="Brewery"
              value={this.state.brewery}
              onChange={this.handleChange}
            />


            {/* Input for Beer table Brewery*/}
            <input
              type="text"
              className="formInput"
              name="description"
              placeholder="Description"
              value={this.state.description}
              onChange={this.handleChange}
            />


            {/* Input for Type table Name using drop down */}
            <select
              name="typeID"
              value={this.state.value}
              onChange={this.handleChange}
              className="formInput2"
            >

              {/* default to 1 for select  */}
              <option value="1">Select Type</option>

            {/* map over types and add to drop down */}
              {this.props.type.map(type => (
                <option
                  value={type.id}
                  key={type.id}
                > {type.name}
                </option>
              ))}
            </select>


<Link to="/BeersList">
            <input
              type="submit"
              className="nav"
              value={this.props.addBeer ? 'AddBeer' : 'Submit'}
            />

</Link>

          </div>
        </form>
      </div>


    );
  }
}

export default BeerForm;
