// import model so that it can be accessed by the controller
const Beers = require('../models/beersDB');

// wrap all controller middleware in an empty object, then export that object at bottom of the file
const beersController = {};

// find all beers
beersController.index = (req, res, next) => {
  Beers.findAllBeers()
    .then((beers) => {
      res.status(200).json({
        message: 'ok',
        data:    {
          beers,
        },
      });
    })
    .catch(next);
};

// find one beer
beersController.show = (req, res, next) => {
  Beers.findOneBeer(req.params.id)
    .then((beer) => {
      res.status(200).json({
        message: 'ok',
        data:    {
          beer,
        },
      });
    })
    .catch(next);
};


// // add one beer
beersController.create = (req, res, next) => {
    console.log(req.body, 'body');
    Beers.addOneBeer(req.body)
      .then((beer) => {
        res.locals.beer = beer;
        next();
      })
      .catch(err => next(err));
  },


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
      res.status(202).json({
        message: 'Beer successfully updated',
        data:    {
          beer,
        },
      });
    })
    .catch(next);
};

// delete one beer
beersController.delete = (req, res, next) => {
  Beers.deleteOneBeer(req.params.id)
    .then(() => {
      res.status(202).json({
        message: 'Beer deleted',
      });
    })
    .catch(next);
};


module.exports = beersController;

