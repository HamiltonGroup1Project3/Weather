# Project3
Project 3 

## Team 

- Mark Albom
- Mohammad Badruzzaman
- Luke McDonald

Description: MVP for this is an app for 

## Wireframes
- [Wireframe-Main](https://git.generalassemb.ly/HamiltonGroup1Project3/Project3/blob/master/Assets/Wireframes/WF-ListView.JPG)
- [Wireframe-SingleView](https://git.generalassemb.ly/HamiltonGroup1Project3/Project3/blob/master/Assets/Wireframes/WF-SingleView.JPG)

## User stories 

Full user stories & task can be found [Here! On the projects tab](https://git.generalassemb.ly/HamiltonGroup1Project3/Project3/projects/1)
Phase1
1. UserStory: As a user I want to see all the beers on the main site.
2. UserStory: As a developer I need to have the frontent connected to the backend
3. UserStory: As a user I would like to add beers to list.
4. UserStory: As a user I would like to display/edit the beer details.
5. UserStory: As a user I would like to display/edit the beer details.
6. UserStory: As a user I would like to delete beers off of the list.
7. UserStory: As a user I would like the site to look visually appealing
8. UserStory: As a product owner I would like my product deployed publicly.
**MVP Met**

Phase2
1. UserStory: As a user I would like to save beers as favorite.
2. UserStory: As a user I would like to filter by my Favorites
3. UserStory: As a user I would like to cycle from one single beer to the next. 
4. UserStory: As a user I would like to filter beers by Type
5. UserStory: As a user I would like to filter by Country
6. UserStory: As a user I would like to filter by Seeting.
7. UserStory: As a product owner I would like my product deployed publicly.
**Done**

## Future 
Phase3
1. UserStory: As a user I would like to Search for beers from a public API.
2. UserStory: As a user I would like to save the public beers as my favorites. 

Phase4
1. UserStory: As a product owner I would like multiple users to be able to use the site.
2. UserStory: As a admin I would like to edit user information.
3. UserStory: As a user I would like to edit my user information.


## References and Resources
- [Heroku docs](https://devcenter.heroku.com/articles/heroku-postgresql)
- [React docs](https://reactjs.org/docs/react-component.html#setstate)
- [React-Router docs](https://reacttraining.com/react-router/)
- [High order functions tutorials- How to use map, filter, reduce](https://code.tutsplus.com/tutorials/how-to-use-map-filter-reduce-in-javascript--cms-26209)
- [Summary Table, Array.agg - PostGres](https://lorenstewart.me/2017/12/03/postgresqls-array_agg-function/)
- [Alias syntax - Postgres](https://www.tutorialspoint.com/postgresql/postgresql_alias_syntax.htm)

## Technologies

- React

- Express

## APIs

- List
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
    - create database called 'top_shelf'
    - run migration file from /Project3/db/migration.sql
    - run seed from file /Project3/db/seed.sql

3. Create .env file
```
  DB_HOST=localhost
  DB_PORT=5432
  DB_NAME=top_shelf
  DB_USER=name
```

4. Setup - Open new terminal window
    - CD into project3
    - npm run dev 

5. Setup - In a second terminal window
    - CD into project3
    - npm run watch

