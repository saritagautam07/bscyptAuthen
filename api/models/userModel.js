'use strict';

var mongoose  = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

//create schema

var UserSchema = new Schema({
    fullName: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: true
    },
    hash_password:{
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});
UserSchema.methods.comparePassword = function(){
    return bcrypt.compareSync(password, this.hash_password);
};

mongoose.model('User', UserSchema);