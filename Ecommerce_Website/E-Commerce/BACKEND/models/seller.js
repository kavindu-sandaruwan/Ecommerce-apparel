const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SellerSchema = new Schema({  
    name : {
        type : String,
        required: true
    },

    email : {
        type : String,
        required: true
    },

    password : {
        type: String,
        required: true
    }
})

const seller = mongoose.model("Seller" , SellerSchema); //table(document) name , created variable name

module.exports = seller; //**file name