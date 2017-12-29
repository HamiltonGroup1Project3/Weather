// get the db connection
const db = require('./connection');

// export the collection of functions
module.exports = {

// function 'findAllBeers' to find all the beers
  findAllBeers() {
    return db.many(`
      SELECT *
      FROM beer
      ORDER BY id;
      `);
  },

  // function 'findOneBeer' to find one beer
  findOneBeer(beerID) {
    return db.one(`
      SELECT beer.name, beer.brewery, beer.type_id, beer.description
      FROM beer
      WHERE beer.id = $1
      `, beerID);
  },

  // function 'editOneBeer' to edit one beer
  editOneBeer(beer) {
    return db.one(`
      UPDATE beer
      SET
        name        = $/name/,
        brewery     = $/brewery/,
        type_id     = $/type_id/,
        description = $/description/,
      WHERE id      = $/id/
      RETURNING *
      `, beer);
  },

  // function 'addOneBeer' to add a beer
  addOneBeer(beer) {
    return db.one(`
      INSERT INTO beer (name, brewery, description)
      VALUES ($/name/, $/brewery/, $/description/)
      RETURNING id
      `, beer);
  },

  // function 'deleteOneBeer' to remove a beer
  deleteOneBeer(id) {
    return db.none(`
      DELETE
      FROM x_ref_table
      WHERE beer_id = $1;
      DELETE
      FROM beer
      WHERE id = $1
      `, id);
  }
}

