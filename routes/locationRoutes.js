const express = require('express');

const locationsRouter = express.Router();

const locationsController = require('./../controllers/locationsController');
const viewController = require('./../controllers/viewController');


// routes for location list
locationsRouter.route('/')
  .get(locationsController.index, viewController.show)
  .post(locationsController.create, viewController.handleCreate, viewController.show400);

// routes for manipulating locations based of id
locationsRouter.route('/:id')
  .get(locationsController.show, viewController.show)
  .put(locationsController.update, viewController.show, viewController.show400)
  .delete(locationsController.delete, viewController.handleDelete);

locationsRouter.use((err, req, res, next) => {
  res.sendStatus(404);
});

module.exports = locationsRouter;
