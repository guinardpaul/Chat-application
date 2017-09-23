const express = require('express');
const router = express.Router();
const Chat = require('../models/Chat');

router.get('/chat', (req, res, next) => {
  Chat.find((err, data) => {
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

router.get('/chat/:room', (req, res, next) => {
  if (!req.body.room) {
    res.json({
      success: false,
      message: 'body not provided'
    });
  } else {
    Chat.find({ room: req.body.room }, (err, data) => {
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

router.post('/chat', (req, res, next) => {
  Chat.create(req.body, (err, data) => {
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

module.exports = router;