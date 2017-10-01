const mongoose = require('mongoose');
const schema = mongoose.Schema;
const Room = require('./Room');

const chatSchema = new schema({
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room',
    required: true
  },
  nickname: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  updated_at: {
    type: Date,
    default: Date.now,
    required: true
  }
});

module.exports = mongoose.model('Chat', chatSchema);