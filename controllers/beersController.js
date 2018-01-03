// import model so that it can be accessed by the controller
const Beers = require('../models/beersDB');

// wrap all controller middleware in an empty object, then export that object at bottom of the file
const beersController = {};

// find all beers
beersController.index = (req, res, next) => {
  Beers.findAllBeers()
    .then((beers) => {
      res.locals.data = beers;
      next();
    })
    .catch(next);
};

// find one beer
beersController.show = (req, res, next) => {
  Beers.findOneBeer(req.params.id)
    .then((beer) => {
      res.locals.beer = beer;
      next();
    })
    .catch(next);
};


// // add one beer
beersController.create = (req, res, next) => {
  console.log(req.body, 'body');
  Beers.addOneBeer(req.body)
    .then((beerID) => {
      res.locals.beerID = beerID;
      next();
    })
    .catch(next);
};


// beersController.create = (req, res, next) => {
//   console.log(req.body, 'body');
//   try {
//     new Beers.addOneBeer({
//       brewery:     req.body.brewery,
//       name:        req.body.name,
//       description: req.body.description,
//     })
//       .save()
//       .then((beer) => {
//         res.status(201).json({
//           message: 'Beer successfully created',
//           data:    {
//             beer,
//           },
//         });
//       })
//       .catch(next);
//   } catch (err) {
//     return next(err);
//   }
// };

// edit one beer
beersController.update = (req, res, next) => {
  Beers.findOneBeer(req.params.id)
    .then(beer => beer.editOneBeer({
      brewery:     req.body.brewery,
      name:        req.body.name,
      description: req.body.description,
    }))
    .then((beer) => {
      res.locals.beer = beer;
      next();
    })
    .catch(next);
};

// delete one beer
beersController.delete = (req, res, next) => {
  Beers.deleteOneBeer(req.params.id)
    .then(() => next())
    .catch(next);
};


module.exports = beersController;

