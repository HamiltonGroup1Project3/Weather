// import model so that it can be accessed by the controller
const Types = require('../models/typesDB');

// wrap all controller middleware in an empty object, then export that object at bottom of the file
const typesController = {};

// find all types
typesController.index = (req, res, next) => {
  Types.findAllTypes()
    .then((types) => {
      res.status(200).json({
        message: 'ok',
        data:    {
          types,
        },
      });
    })
    .catch(next);
};

module.exports = typesController;
