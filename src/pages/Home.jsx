import React from 'react';
import './../css/App.css';
import './../css/reset.css';


const Home = () => {
  console.log('Home loaded');
  return (
    <div className="home">
      <h1> <br/></h1>
      <p> Welcome to our app where you can keep track of beers you want to try or have tried and like.</p>
    </div>
  );
};

export default Home;
