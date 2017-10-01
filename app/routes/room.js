const express = require('express');
const router = express.Router();
const Room = require('../models/Room');

/**
 * get all rooms
 */
router.get('/room', (req, res, next) => {
  Room.find((err, data) => {
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

/**
 * get room by users
 * TODO: A modifier pour trouver room qq soit l'user id
 */
router.get('/room/users/:users', (req, res, next) => {
  if (!req.params.users) {
    res.json({
      success: false,
      message: 'users not provided'
    });
  } else {
    Room.findOne({ users: req.params.users }, (err, data) => {
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

/**
 * get Room by ID
 */
router.get('/room/:id', (req, res, next) => {
  if (!req.params.id) {
    res.json({
      success: false,
      message: 'id not provided'
    });
  } else {
    Room.findById(req.params.id, (err, data) => {
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

/**
 * Save Room
 */
router.post('/room', (req, res, next) => {
  if (!req.body) {
    res.json({
      success: false,
      message: 'body not provided'
    });
  } else {
    Room.create(req.body, (err, data) => {
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

/**
 * Update Room by room ID
 * Used to add User to a room
 */
router.put('/room/:id', (req, res, next) => {
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
    Room.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
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

/**
 * Update Room by room NAME
 * Used to add User to a room
 */
router.put('/room/:name', (req, res, next) => {
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
    Room.findOneAndUpdate({ name: req.params.name }, req.body, (err, data) => {
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

module.exports = router;