import React, { Component } from 'react';


class WeatherForm extends Component {
  render(){
    return(

      <div className="Beer-form"> This is a form
      <form onSubmit= {this.props}>

  <input type="submit" value="Submit"/>
  </form>

</div>

      )



    }


}

export default BeerForm;
