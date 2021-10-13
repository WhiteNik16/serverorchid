const {Schema, model} = require("mongoose");


const orchids= new Schema({
    name:{
        type: String,
        required:true
    },
    price:{
        type: String,
        required:true
    },
    article:{
        type: String,
        required: true,
        unique: true,
    }

})
module.exports = model('Orchid',orchids)