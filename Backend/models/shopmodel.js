const mongoose = require('mongoose')


const shopschema= new mongoose.Schema({
    
    sname: {
        type: String,
        required: true,
        unique :true
    },
    owner: {
        type: String,
        required: true
    },
    location: {
            type: String,
            required: true
    },  
    category: {
        type: String,
        required: true
    },
    products:[{
        type: String,
        require:true
    }],
    offer:{
        type: Number,
        required: true
    }

})

module.exports = mongoose.model('shops',shopschema);