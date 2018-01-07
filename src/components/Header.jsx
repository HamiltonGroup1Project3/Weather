import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import Filter from './Filter';
import Nav from './Nav';
import './../css/reset.css';
import './../css/App.css';


const Header = (props) => {
  console.log({'Header component loaded': props});
  return (
    <div>
      <div className="header">

        <div className="left container">
{/*
          passes in types for filtering
          <Filter name="Type" typeData={props.type} />

        should pass in brewery's currently passing types
          <Filter name="Zip" typeData={props.type}/>
*/}
        </div>


        <div className="center">
          <div>
            <h1 className="App-title"> Weather App</h1>
          </div>
          <div className="container">
            <Nav />
          </div>
        </div>

        <div className="right container">
{/*
          <div className="login" >
            <button>
              <i className="fa fa-sign-in" aria-hidden="true" /> Login
            </button>
          </div>
          <div className="userName" >
            <button>
               User1
            </button>
          </div>
*/}
        </div>


      </div>

    </div>
  );
};

export default Header;
