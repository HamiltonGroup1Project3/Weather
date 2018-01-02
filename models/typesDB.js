const db = require('./connection');

// export the collection of functions
module.exports = {

// function finds all types of beers from Type table
  findAllTypes() {
    return db.many(`
      SELECT *
      FROM type
      ORDER BY id;
      `);
  },
};
