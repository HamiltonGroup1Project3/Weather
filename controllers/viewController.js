

const viewController = {
  handleCreate(req, res) {
<<<<<<< HEAD
    res.setHeader('Location', `/api/beers/${res.locals.beerID}`);
    res.sendStatus(201);
  },
  handleUpdate(req, res) {
    res.setHeader('Location', `/api/beers/${res.locals.beerID}`);
=======
    res.setHeader('Location', `/api/locations/${res.locals.location}`);
    res.sendStatus(201);
  },
  handleUpdate(req, res) {
    res.setHeader('Location', `/api/locations/${res.locals.location}`);
>>>>>>> 9784c6a139ba5a32c9cef47507e5fe8592a0bff4
    res.sendStatus(202);
  },

  handleDelete(req, res) {
    res.sendStatus(200);
  },

  show(req, res) {
    res.json(res.locals);
  },

  show400(err, req, res, next) {
    res.sendStatus(400);
  },
};

module.exports = viewController;
