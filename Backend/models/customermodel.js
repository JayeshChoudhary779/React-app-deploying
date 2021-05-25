const mongoose = require('mongoose')


const customerschema= new mongoose.Schema({
 
cname: {
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

module.exports = mongoose.model('customers',customerschema);