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
      type:        props.beer ? props.beer.type : '',
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
    console.log('BeerForm loaded');
    return (

      <div className="beerForm">
        <p>This is the Beerform. It will display the detail information for each beer and allow for add & edit. </p>
        <form onSubmit={this.props.beer}>
          <div className="form-typeFinder">
            <input
              type="text"
              name="Name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
            />

            <input
              type="text"
              name="Type"
              placeholder="Type"
              value={this.state.type}
              onChange={this.handleChange}
            />

            <input
              type="text"
              name="Brewery"
              placeholder="Brewery"
              value={this.state.brewery}
              onChange={this.handleChange}
            />

            <input
              type="text"
              name="Description"
              placeholder="Description"
              value={this.state.description}
              onChange={this.handleChange}
            />

            {/* <input type="text" name="Name" placeHolder=""value={this.state.} /> */}
            <input type="submit" value={this.props.addBeer ? 'AddBeer' : 'UpdateDescription'} />
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
