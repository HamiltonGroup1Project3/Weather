# Jackhammerz Weather App

## Team 
Dev Team
- Luke McDonald
- Mark Albom
- Mohammad Badruzzaman

UX Team 
- McKellen Rattray
- Allie Toussaint
- Abby Fraioli
- Evelyn donnelly

Description: Creating a Weather app for the UX class to see. 

## Wireframes
- Zeplin 

## User stories 

Full user stories & task can be found [
Trello](https://trello.com/b/cWocpnJz/weather-app)



## References and Resources
- Stripped Hamilton group 1's Project3 to framework and started from there.  
- 
- 
- 


## Technologies

- React
- Express

## APIs

- WeatherMap
- Description

## Modules

- React-Router
- React-Dom, 
- React Switch
- React Component


## Featured Code 
- React Router code 
```
<Switch>
  <Route path="/" exact component={Home} />
  {(this.state.beersLoaded) 
    ? <Route path="/BeersList" render={props => 
      (<BeersList {...props} beersList={this.state.beersData} />)} 
      exact beersList={this.state.beerList} />
    : <p> Loading... </p> }

  <Route path="/BeersList/BeerDetails" render={props => (<BeerDetails {...props}
      beer={this.state.beersData} /> )} />

  <Route path="/BeersList/BeerEdit" render={props => (<BeerForm {...props} beer={this.state.beersData} /> )} />

  <Route path="/" component={NotFound} />
</Switch>
```

- Code for making our Summary Table 
```
  findAllBeers() {
    return db.many(`
 SELECT DISTINCT x_ref_table.beer_id AS id, beer.name, beer.brewery, array_agg(type.name) AS type, beer.description FROM x_ref_table INNER JOIN type ON type.id = x_ref_table.style_type_id INNER JOIN beer on beer.id = x_ref_table.beer_id GROUP BY x_ref_table.beer_id, beer.name, beer.brewery, beer.description ORDER BY x_ref_table.beer_id;
      `);
  },
```

Using array_agg(type.name) AS type  merges the duplicate entries and turns them into an array. 

## How to install and get it running on a local host
1. Install files
- Fork
- Clone
- NPM install

2. Create local database
    - create database called 'jackhammerz'
    - run migration file from /Weather/db/migration.sql
    - run seed from file /Weather/db/seed.sql

3. Create .env file
```
  DB_HOST=localhost
  DB_PORT=5432
  DB_NAME=jackhammerz

```

4. Setup - Open new terminal window
    - CD into project3
    - npm run dev 

5. Setup - In a second terminal window
    - CD into project3
    - npm run watch

