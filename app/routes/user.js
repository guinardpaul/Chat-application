const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/user', (req, res, next) => {
  User.find((err, data) => {
    if (err) {
      res.json({
        success: false,
        message: err
      });
    } else {
      res.json({
        success: true,
        obj: data
      });
    }
  });
});

router.post('/user', (req, res, next) => {
  User.create(req.body, (err, data) => {
    if (err) {
      res.json({
        success: false,
        message: err
      });
    } else {
      res.json(data);
    }
  });
});

router.put('/user/:id', (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
    if (err) {
      res.json({
        success: false,
        message: err
      });
    } else {
      res.json(data);
    }
  });
});

router.delete('/user/:id', (req, res, next) => {
  User.findByIdAndRemove(req.params.id, (err, data) => {
    if (err) {
      res.json({
        success: false,
        message: err
      });
    } else {
      res.json({
        success: true,
        message: 'User supprimé'
      });
    }
  });
});

module.exports = router;