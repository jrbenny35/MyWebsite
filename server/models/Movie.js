/**
 * Created by Jrbenny35 on 9/15/15.
 */

var mongoose = require('mongoose');


//Create Schema
var movieSchema = new mongoose.Schema({

    title:{
        type: String,
        require: true
    },

    url: {
        type: String,
        require: true
    }
});

//Export the Schema
module.exports = movieSchema;