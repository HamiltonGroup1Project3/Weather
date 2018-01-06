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

<<<<<<< HEAD
=======


>>>>>>> 9784c6a139ba5a32c9cef47507e5fe8592a0bff4
};
