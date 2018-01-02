const express = require('express');

const beersRouter = express.Router();

const beersController = require('./../controllers/beersController');


// routes for beer list
beersRouter.route('/')
  .get(beersController.index)
  .post(beersController.create);

// routes for manipulating beers based of id
beersRouter.route('/:id')
  .get(beersController.show)
  .put(beersController.update)
  .delete(beersController.delete);

module.exports = beersRouter;
