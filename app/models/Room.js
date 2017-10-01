const mongoose = require('mongoose');
const schema = mongoose.Schema;

const roomSchema = new schema({
  name: {
    type: String,
    required: true
  },
  users: [{
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }]
});

module.exports = mongoose.model('Room', roomSchema);