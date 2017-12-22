import React, { Component } from 'react';
import './../css/App.css'

class BeerForm extends Component {
  render(){
    return(

      <div className="beerForm"> This is Beerform
      <form onSubmit= {this.props}>

  <input type="submit" value="Submit"/>
  </form>

</div>

      )



    }


}

export default BeerForm;
