import 'font-awesome/css/font-awesome.min.css';
import React, { Component } from 'react';
import SingleNav from './../components/SingleNav';
import './../css/App.css';
import './../css/reset.css';

class BeerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:        props.beer ? props.beer.name : '',
      brewery:     props.beer ? props.beer.brewery : '',
      description: props.beer ? props.beer.description : '',

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
    console.log({'BeerForm loaded': this.state});

    return (

      <div className="beerForm">
        <p>This is the Beerform. It will display the detail information for each beer and allow for add & edit. </p>

      {/* It's its an edit for then update for that id, if its add then just post new state. */}
        <form className={this.props.isadd ? 'addForm' : 'editForm'}
        onSubmit={this.props.isadd
          ? change => this.props.beerSubmit('Put', change, this.state )
          : change => this.props.beerSubmit('Post' , change,
            this.state, this.props.beer.id)}>

          <div className="form-typeFinder">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            {/*
            <input
              type="text"
              name="Type"
              placeholder="Type"
              value={this.state.type}
              onChange={this.handleChange}
            />
            */}
            <input
              type="text"
              name="brewery"
              placeholder="Brewery"
              value={this.state.brewery}
              onChange={this.handleChange}
            />

            <input
              type="text"
              name="description"
              placeholder="Description"
              value={this.state.description}
              onChange={this.handleChange}
            />

            {/* <input type="text" name="Name" placeHolder=""value={this.state.} /> */}
            <input type="submit" value={this.props.addBeer ? 'AddBeer' : 'Submit'} />
          </div>
        </form>

        {/*}
        // <div className="container">
        //   <SingleNav name="prev" />
        //   <SingleNav name="edit" />
        //   <SingleNav name="delete" />
        //   <SingleNav name="next" />
        // </div>
        */}
      </div>


    );
  }
}

export default BeerForm;
