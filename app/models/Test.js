const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
  titre: String
});

module.exports = mongoose.model('Test', testSchema);