/**
 * Created by Jrbenny35 on 9/15/15.
 */

var mongoose = require('mongoose');


//Create Schema
var contactSchema = new mongoose.Schema({

    name:{
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true
    },

    message: {
        type: String,
        require: true
    }
});

//Export the Schema
module.exports = contactSchema;