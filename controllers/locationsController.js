// import model so that it can be accessed by the controller
const Locations = require('../models/locationsDB');

// wrap all controller middleware in an empty object, then export that object at bottom of the file
const locationsController = {};

// find all locations
locationsController.index = (req, res, next) => {
  Locations.findAllLocations()
    .then((locations) => {
      res.locals.data = locations;
      next();
    })
    .catch(next);
};

// find one location
locationsController.show = (req, res, next) => {
  Locations.findOneLocation(req.params.id)
    .then((location) => {
      res.locals.location = location;
      next();
    })
    .catch(next);
};


// // add one location
locationsController.create = (req, res, next) => {
  console.log(req.body, 'body');
  Locations.addOneLocation(req.body)
    .then((locationID) => {
      res.locals.locationID = locationID;
      next();
    })
    .catch(next);
};


// locationsController.create = (req, res, next) => {
//   console.log(req.body, 'body');
//   try {
//     new Locations.addOneLocation({
//       brewery:     req.body.brewery,
//       name:        req.body.name,
//       description: req.body.description,
//     })
//       .save()
//       .then((location) => {
//         res.status(201).json({
//           message: 'Location successfully created',
//           data:    {
//             location,
//           },
//         });
//       })
//       .catch(next);
//   } catch (err) {
//     return next(err);
//   }
// };

// edit one location
locationsController.update = (req, res, next) => {
  Locations.findOneLocation(req.params.id)
    .then(location => location.editOneLocation({
      brewery:     req.body.brewery,
      name:        req.body.name,
      description: req.body.description,
    }))
    .then((location) => {
      res.locals.location = location;
      next();
    })
    .catch(next);
};

// delete one location
locationsController.delete = (req, res, next) => {
  Locations.deleteOneLocation(req.params.id)
    .then(() => next())
    .catch(next);
};


module.exports = locationsController;

