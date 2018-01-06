// get the db connection
const db = require('./connection');

// export the collection of functions
module.exports = {

// function 'findAllLocations' to find all the locations
  findAllLocations() {
    return db.many(`
 SELECT DISTINCT location.name, location.zip, location.id, type.id FROM location INNER JOIN type ON type.id = location.type_id  ORDER BY location.zip;
      `);
  },



  // function 'findOneLocation' to find one location
  findOneLocation(locationID) {
    return db.one(`
        SELECT DISTINCT location.name, location.zip, location.id, type.id FROM location INNER JOIN type ON type.id = location.type_id where location_id = $1ORDER BY location.zip;
      `, locationID);
  },

  // function 'editOneLocation' to edit one location
  editOneLocation(location) {
    return db.one(`
      UPDATE location
      SET
        name        = $/name/,
        zip         = $/zip/,
        type_id     = $/type_id/,
      WHERE id      = $/id/
      RETURNING *
      `, location);
  },


  // function to add a location to the collection.
  addOneLocation(location) {
    return db.one(`
        INSERT INTO location (zip, type_id, name)
        VALUES ($/zip/, $/type_id/, $/name/)
        RETURNING id
      `, location);
  },


  /* function 'deleteOneLocation' to remove a location (from both the xref table and the location table) */

  deleteOneLocation(id) {
    return db.none(`
        DELETE FROM location
        WHERE id = $1
        `, id);
      },
    }
<<<<<<< HEAD
=======

>>>>>>> 9784c6a139ba5a32c9cef47507e5fe8592a0bff4
