import React, { Component } from 'react';
import './../css/App.css';
import './../css/reset.css';
import SingleNav from './../components/SingleNav';

class BeerForm extends Component {
  render(){
    return(

      <div className="beerForm"> This is the Beerform. It will display the detail information for each beer and allow for add & edit.
      <form onSubmit= {this.props.beer}>

  <input type="submit" value="Submit"/>
  </form>


{/* will be replaced with input / display fields */}
  <br />
  <p>Name  </p><br />
  <p>Brewery </p><br />
  <p>Description </p><br />
  <p>some text  </p><br />
  <p>some text  </p><br />

  <div className="container">
    <SingleNav name="prev" />
    <SingleNav name="edit" />
    <SingleNav name="next" />
  </div>
</div>

      )



    }


}

export default BeerForm;
