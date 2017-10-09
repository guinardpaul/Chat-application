const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const schema = mongoose.Schema;
const User = require('./User');

const roomSchema = new schema({
    name: {
        type: String,
        required: true
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }]
});

module.exports = mongoose.model('Room', roomSchema);