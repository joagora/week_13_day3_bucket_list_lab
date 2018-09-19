const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function(collection) {
  const router = express.Router();

  router.get('/', (req, res) => {
    res.send('fgjsdhjsdfhjksdfkdfgdsf')
  })
  return router;
}

module.exports = createRouter;
