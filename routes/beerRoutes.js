const express = require('express');

const beersRouter = express.Router();
const beersController = require('./../controllers/beersController');

beersRouter.route('/')
  .get(beersController.index)
  .post(beersController.create);

beersRouter.route('/beer/:id')
  .get(beersController.show)
  .put(beersController.update)
  .delete(beersController.delete);

module.exports = beersRouter;
