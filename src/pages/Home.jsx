import React from 'react';
import './../css/App.css';
import './../css/reset.css';


const Home = () => {
  console.log('Home loaded');
  return (
    <div className="home">

      <h1> <br/></h1>
      <h3> We've all experienced it before - beer-ception; when the beer options in a bar are so esoteric, dizzying and numerous that we descend into a paralyzing inabiity to make a concious decision about what to drink.  With [Top Shelf], the next time you see the onset of these symptoms you'll be prepared.</h3>
      <h3> Our app allows you to search a database of beers to find the one that suits you - without the headache.  Whether it’s a specific type or brewery you are looking for, we made it easy to pick your new best suds.  If it’s love at first sip you can add it to your personalized, editable list and be prepared for the next time when you feel on the precipe of ...beerception.</h3>

    </div>
  );
};

export default Home;
