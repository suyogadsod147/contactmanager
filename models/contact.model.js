const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref : "User"
    },

    name :{
        type : String,
        required : [true, "please provoid name"],
    },
    phone: {
        type : String,
        required : [true, "please provoid phone number"],
        
    },
    email :{
        type : String,
        required : [true, "please provid email address"],
    }


},{ timestamps: true});

module.exports = mongoose.model("Contact" , contactSchema);