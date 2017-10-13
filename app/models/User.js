const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const Room = require('./Room');
const bcrypt = require('bcrypt-nodejs');

/* let validEmailChecker = (email) => {
    if (!email) {
        return false;
    } else {
        const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return regExp.test(email);
    }
};

let lengthEmailChecker = (email) => {
    if (!email) {
        return false;
    } else if (email.length < 0 || email.length > 40) {
        return false;
    }
    return true;
};

const emailValidator = [{
    validator: validEmailChecker,
    message: 'Email non valide'
}, {
    validator: lengthEmailChecker,
    message: 'Email doit avoir moins de 40 caractères'
}]; */

const userSchema = new Schema({
    nickname: {
        type: String,
        required: true,
        unique: true
    },
    /* password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: emailValidator
    }, */
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

/* userSchema.pre('save', function (next) {
    if (!this.isModified('password')) {
        return next();
    }

    bcrypt.hash(this.password, null, null, (err, hash) => {
        if (err) return next(err);
        this.password = hash;
        next();
    });
});

userSchema.methods.comparePassword = (password) => {
    return bcrypt.compareSync(password, this.password);
}; */

module.exports = mongoose.model('User', userSchema);