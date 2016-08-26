(function() {

  'use strict';

  // *** dependencies *** //
  var express = require('express');
  var router = express.Router();

  // const puppyController = require('../controllers/puppies.controllers.oop.js');
  const puppyController = require('../controllers/puppies.controllers.js');

  // *** route handlers *** //
  router.get('/', getAllPuppies);
  router.get('/:id', getSinglePuppy);
  router.post('/', createPuppy);
  router.put('/:id', updatePuppy);
  router.delete('/:id', deletePuppy);

  // *** helper functions *** //

  function getAllPuppies(req, res, next) {
    puppyController.getAllPuppies(function(err, data) {
      if (err) {
        res.status(422).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  }

  function getSinglePuppy(req, res, next) {
    const puppyID = parseInt(req.params.id);
    puppyController.getSinglePuppy(puppyID, function(err, data) {
      if (err) {
        res.status(422).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  }

  function createPuppy(req, res, next) {
    const newPup = req.body;
    puppyController.createPuppy(newPup, function(error, puppy) {
      if (error) {
        res.status(422).send(error);
      } else {
        res.status(200).send(puppy);
      }
    });
  }

  function updatePuppy(req, res, next) {
    const fixedPup = req.body;
    const puppyID = parseInt(req.params.id);
    puppyController.updatePuppy(fixedPup, puppyID, function(error, puppy) {
      if (error) {
        res.status(422).send(error);
      } else {
        res.status(200).send(puppy);
      }
    });
  }

  function deletePuppy(req, res, next) {
    const puppyID = parseInt(req.params.id);
    puppyController.deletePuppy(puppyID, function(error, puppy) {
      if (error) {
        res.status(422).send(error);
      } else {
        res.status(200).send(puppy);
      }
    });
  }

  module.exports = router;

}());
