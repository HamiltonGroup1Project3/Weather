import React from 'react';
import './../css/reset.css';
import './../css/App.css';
import Filter from './Filter';
import Nav from './Nav';
import 'font-awesome/css/font-awesome.min.css';


const Header = (props) => {
  console.log('Header component loaded');
  return (
    <div>
    <div className="header">

      <div className="left container">
        <Filter name="Type" />
        <Filter name="Other" />
      </div>
      <div className="center">
        <div>
          <h1 className="App-title"> Top Shelf</h1>
        </div>
        <div className="container">
          <Nav />
        </div>
      </div>
      <div className="right container">
        <div className="login" >
          <button>
          <p><i className="fa fa-sign-in" aria-hidden="true"></i> Login</p>
            </button>
        </div>
        <div className="userName" >
          <button>
          <p> User1 </p>
          </button>
        </div>
      </div>

    </div>

    </div>
  );
};

export default Header;
