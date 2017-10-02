const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const Room = require('./Room');
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
  nickname: {
    type: String,
    required: true,
  },
  room: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room'
  }],
  updated_at: {
    type: Date,
    default: Date.now(),
    required: true
  },
  connected: {
    type: Boolean,
    default: true,
    required: true
  },
});

module.exports = mongoose.model('User', userSchema);
