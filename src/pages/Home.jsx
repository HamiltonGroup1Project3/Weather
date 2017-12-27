import React from 'react';
import './../css/App.css';
import './../css/reset.css';


const Home = () => {
  console.log('Home loaded');
  return (
    <div className="home">
      <h1> <br /></h1>
      <h3> Welcome to our app where you can keep track of beers you want to try or have tried and like.</h3>
    </div>
  );
};

export default Home;
