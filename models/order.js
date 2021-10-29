const {Schema, model} = require("mongoose");


const order= new Schema({
    name:{
        type:String,

        unique:false

    },
    surname:{
        type:String,
        unique:false

    },
    address: {
        type:String,
        unique:false

    },
    nummberhouse: {
        type:String,
        required:false,
        unique:false

    },
    city: {
        type:String,
        unique:false

    },
    region: {
        type:String,
        unique:false

    },
    postindex: {
        type:String,
        required:false,

    },
    article: {
        type:String,
        unique:false
    },

})
module.exports = model('Order',order)

