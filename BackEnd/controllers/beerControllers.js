//import model so that it can be accessed by the controller
const Beers = require('../models/beersDB');

const beerController = {};

//wrap all controller middleware in an export object?


beerController.index = (req, res, next) => {
  Beers.findAllBeers()
  .then(beers => {
    res.status(200).json({
      message: 'ok',
      data: {
        beers,
      },
    });
  })
  .catch(next);
};


beerController.show = (req, res, next) => {
  Beers.findOneBeer(req.params.id)
  .then(beers => {
    res.status(200).json({
      message: 'ok',
      data: {
        beer,
      },
    });
  })
  .catch(next);
};


beerController.create = (req, res, next) => {
  try {
    new Beer({
      id: req.body.name,
      name: req.body.name,
      description: req.body.description,
    })
    .save()
    .then(beer => {
      res.status(201).json({
        message: "Beer successfully created",
        data: {
          beer,
        },
      });
    })
    .catch(next);
  } catch(err) {
    return next(err)
  }
};


beerController.editOneBeer = (req, res, next) => {
  Beers.findOneBeer(req.params.id)
  .then(beer => {
    return beer.editOneBeer({
      id: req.body.id,
      name: req.body.id,
      description: req.body.id,
    })
  })
  .then(task => {
    res.status(202).json({
      message: 'Beer successfully updated',
      data: {
        beer,
      },
    });
  })
  .catch(next)
};


beerController.deleteOneBeer = (req, res, next) => {
  Beers.destroy(req.params.id)
  .then(() => {
    res.status(202).json({
      message: 'Beer deleted',
    });
  })
  .catch(next);
};


module.exports = beerController;






