import React, { Component } from 'react';


class BeerForm extends Component {
  render(){
    return(

      <div className="BeerForm"> This is a form
      <form onSubmit= {this.props}>

  <input type="submit" value="Submit"/>
  </form>

</div>

      )



    }


}

export default BeerForm;
