const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  nickname: {
    type: String,
    required: true
  },
  connected: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('User', userSchema);