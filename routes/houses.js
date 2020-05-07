const express = require('express');
const router = express.Router();
const db = require('../db/queries.js');

// GET all houses
router.get('/all', function(req, res, next) {
   db.getAll()
   .then((houses) => {
        res.status(200).json(houses);
   }).catch((error) => {
       next(error);
   })
})

// GET a single house by id
router.get('/:id', (req, res, next) => {
    db.getSingle(req.params.id)
    .then(function(show) {
      res.status(200).json(show);
    })
    .catch(function(error) {
      next(error);
    });
  });

// add house 
router.post('/house', (req, res, next) => {
    db.add(req.body)
    .then(function(houseID) {
      return db.getSingle(houseID);
    })
    .then(function(show) {
      res.json(show);
    })
    .catch(function(error) {
      next(error);
    });
  });
  
//   update house 
  router.put('/:id', (req, res, next) => {
    if(req.body.hasOwnProperty('id')) {
      return res.status(422).json({
        error: 'You cannot update the id field'
      });
    }
    db.update(req.params.id, req.body)
    .then(function() {
      return db.getSingle(req.params.id);
    })
    .then(function(show) {
      res.status(200).json(show);
    })
    .catch(function(error) {
      next(error);
    });
  });
  
// delete house 
  router.delete('/:id', function(req, res, next) {
    db.getSingle(req.params.id)
    .then(function(show) {
      db.deleteItem(req.params.id)
      .then(function() {
        res.status(200).json(show);
      })
      .catch(function(error) {
        next(error);
      });
    }).catch(function(error) {
      next(error);
    });
  });

module.exports = router;