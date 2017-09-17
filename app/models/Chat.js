const mongoose = require('mongoose');
const schema = mongoose.Schema;

const chatSchema = new schema({
  room: {
    type: String
  },
  nickname: {
    type: String,
    required: true
  },
  message: {
    type: String
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Chat', chatSchema);