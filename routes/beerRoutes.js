const express = require('express');

const beersRouter = express.Router();

const beersController = require('./../controllers/beersController');
const viewController = require('./../controllers/viewController');


// routes for beer list
beersRouter.route('/')
  .get(beersController.index, viewController.show)
  .post(beersController.create, viewController.handleCreate, viewController.show400);

// routes for manipulating beers based of id
beersRouter.route('/:id')
  .get(beersController.show, viewController.show)
  .put(beersController.update, viewController.show, viewController.show400)
  .delete(beersController.delete, viewController.handleDelete);

beersRouter.use((err, req, res, next) => {
  res.sendStatus(404);
});

module.exports = beersRouter;
