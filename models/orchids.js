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
    },
    description:{
      type:String
    },
    quantityFlo:{
        type: String
    },
    image:{
        type: String
    }

})
module.exports = model('Orchid',orchids)

