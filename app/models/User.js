const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
  nickname: {
    type: String,
    required: true,
  },
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
