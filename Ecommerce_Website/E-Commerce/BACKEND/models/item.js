const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = new Schema({  
    name : {
        type : String,
        required: true
    },

    catagory : {
        type : String,
        required: true
    },

    image : {
        type: String,
        required: true
    },

    price : {
        type : Number,
        required: true
    },

    image : {
        type: String,
        required: true
    },

    description : {
        type: String,
        required: true
    }
})

const item = mongoose.model("item" , ItemSchema); //table(document) name , created variable name

module.exports = item; //**file name