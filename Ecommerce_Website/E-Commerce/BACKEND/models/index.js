const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CustSchema = new Schema({  
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

const customer = mongoose.model("Customer" , CustSchema); //table(document) name , created variable name

module.exports = customer; //**file name