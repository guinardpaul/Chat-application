const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Test = require('../models/Test');

router.post('/', (req, res, next) => {
  Test.create(req.body, (err, data) => {
    console.log(data);
    res.json(data);
  });
});

module.exports = router;