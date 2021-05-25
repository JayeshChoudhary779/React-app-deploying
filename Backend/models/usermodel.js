const mongoose = require('mongoose')


const userschema= new mongoose.Schema({
    
    uname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },
       
    phoneNo: {
            type: Number,
            required: true
    }   
})

module.exports = mongoose.model('users',userschema);