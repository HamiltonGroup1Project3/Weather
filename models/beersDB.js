// get the db connection
const db = require('./connection');

// export the collection of functions
module.exports = {

// function 'findAllBeers' to find all the beers
  findAllBeers() {
    return db.many(`
 SELECT DISTINCT x_ref_table.beer_id AS id, beer.name, beer.brewery, array_agg(type.name) AS type, beer.description FROM x_ref_table INNER JOIN type ON type.id = x_ref_table.style_type_id INNER JOIN beer on beer.id = x_ref_table.beer_id GROUP BY x_ref_table.beer_id, beer.name, beer.brewery, beer.description ORDER BY x_ref_table.beer_id;
      `);
  },



  // function 'findOneBeer' to find one beer
  findOneBeer(beerID) {
    return db.one(`
      SELECT DISTINCT x_ref_table.beer_id AS id, beer.name, beer.brewery, array_agg(type.name) AS type, beer.description FROM x_ref_table INNER JOIN type ON type.id = x_ref_table.style_type_id INNER JOIN beer on beer.id = x_ref_table.beer_id  where x_ref_table.beer_id = $1 GROUP BY x_ref_table.beer_id, beer.name, beer.brewery, beer.description ORDER BY x_ref_table.beer_id;
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
  // addOneBeer(beer) {
  //   return db.one(`
  //     INSERT INTO beer (name, brewery, description)
  //     VALUES ($/name/, $/brewery/, $/description/)
  //     RETURNING id
  //     `, beer);
  // },

  // function to add a beer to the collection.
  addOneBeer(beer) {
    return db.tx(t => {
      return t.batch([

        /* insert a new entry into beers, grab the beer id */
        t.one(`
            INSERT INTO beers (name, brewery, description)
            VALUES ($/name/, $/brewery/, $description/)
            RETURNING id
          `, beer),
        ])

          /*then insert those two id values into the xref table*/
        .then(([beerID, typeID]) => {
          return db.one(`
            INSERT INTO x_ref_table (beer_id, type_id)
            VALUES ($1, $2)
            RETURNING beer_id
            ` [beerID.id, typeID.style_type_id])
        })
          /*then insert those two id values into their respective tables (beer) and (type) */
        .then(joinBeer => {
          return db.one(`
            SELECT beer.name, beer.brewery, beer.description,
            FROM x_ref_table
            INNER JOIN beers ON beers.id=x_ref_table.beer_id
            INNER JOIN type ON type.id=x_ref_table.style_type_id
            WHERE beers.id=$1
          `, joinBeer.beer_id)
      })
  },

  /* function 'deleteOneBeer' to remove a beer (from both the xref table and the beer table) */
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

