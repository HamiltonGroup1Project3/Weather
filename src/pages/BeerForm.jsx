import 'font-awesome/css/font-awesome.min.css';
import React, { Component } from 'react';
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

  handleChange(change) {
    const name = change.target.name;
    const value = change.target.value;
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
          ? change => this.props.beerSubmit('Put', change, this.state )
          : change => this.props.beerSubmit('Post' , change,
            this.state, this.props.beer.id) }>

          <div className="formEntry">
            <input
              type="text"
              className="formInput"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
            />


            <input
              type="text"
              className="formInput"
              name="brewery"
              placeholder="Brewery"
              value={this.state.brewery}
              onChange={this.handleChange}
            />


            <input
              type="text"
              className="formInput"
              name="description"
              placeholder="Description"
              value={this.state.description}
              onChange={this.handleChange}
            />


            <select
              name="typeID"
              value={this.state.value}
              onChange={this.handleChange}
              className="formInput2"
            >
              <option value="1">Select Type</option>
              {this.props.type.map(type => (
                <option
                  value={type.id}
                  key={type.id}
                > {type.name}
                </option>
              ))}
            </select>

{/*
            <input
              type="text"
              className="formInput"
              name="typeID"
              placeholder="Type"
              value={this.state.type}
              onChange={this.handleChange}
            />
*/}

            <input
              type="submit"
              className="nav"
              value={this.props.addBeer ? 'AddBeer' : 'Submit'}
            />

          </div>
        </form>
      </div>


    );
  }
}

export default BeerForm;
