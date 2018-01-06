const express = require('express');

const typesRouter = express.Router();
const typesController = require('./../controllers/typesController');

typesRouter.route('/')
  .get(typesController.index);


module.exports = typesRouter;
