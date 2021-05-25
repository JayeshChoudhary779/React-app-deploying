const mongoose = require('mongoose')


const catergoryschema= new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('catergory',catergoryschema);