import React from 'react';
import './../css/reset.css';
import './../css/App.css';
import Filter from './Filter';
import Nav from './Nav';
import 'font-awesome/css/font-awesome.min.css';


const Header = (props) => {
  console.log('Header component loaded');
  return (
    <div className="header">

      <div className="left container">
        <Filter name="Type" />
        <Filter name="Other" />
      </div>
      <div className="center container">
        <Nav />
      </div>
      <div className="right container">
        <div className="Login" >
          <button>
          <p><i class="fa fa-sign-in" aria-hidden="true"></i> Login</p>
            </button>
        </div>
        <div className="UserName" >
          <button>
          <p> User1 </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
