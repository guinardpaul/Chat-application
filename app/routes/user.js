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

router.get('/user/:id', (req, res, next) => {
  if (!req.params.id) {
    res.json({
      success: false,
      message: 'id not provided'
    });
  } else {
    User.findById(req.params.id, (err, data) => {
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
  }
});

router.post('/user', (req, res, next) => {
  if (!req.body.nickname) {
    res.json({
      success: false,
      message: 'Nickname not provided'
    });
  } else if (!req.body.updated_at) {
    res.json({
      success: false,
      message: 'updated_at not provided'
    });
  } else if (!req.body.connected) {
    res.json({
      success: false,
      message: 'connected not provided'
    });
  } else {
    User.create(req.body, (err, data) => {
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
  }
});

router.put('/user/:id', (req, res, next) => {
  if (!req.body) {
    res.json({
      success: false,
      message: 'body not provided'
    });
  } else if (!req.params.id) {
    res.json({
      success: false,
      message: 'id not provided'
    });
  } else {
    User.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
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
  }
});

router.delete('/user/:id', (req, res, next) => {
  if (!req.params.id) {
    res.json({
      success: false,
      message: 'id not provided'
    });
  } else {
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
  }
});

module.exports = router;