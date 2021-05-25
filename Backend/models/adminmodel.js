const mongoose = require('mongoose')


const adminschema= new mongoose.Schema({
 
aname: {
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

module.exports = mongoose.model('admins',adminschema);