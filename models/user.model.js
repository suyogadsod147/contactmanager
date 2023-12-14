const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username:{
        type: 'string',
        required: [true , "username is required"],
        unique :[true , "already exists"]
    },
    email:{
        type: 'string',
        required : [true , "email is required"],
        unique: [true , "already have account with this email address"]
    },
    password:{
        type: 'string',
        required : [true , "passwords is required"],

    }

}, {timestamps: true});

module.exports = mongoose.model("User", userSchema);