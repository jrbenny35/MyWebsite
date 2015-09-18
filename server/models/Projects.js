/**
 * Created by root on 9/17/15.
 */

var mongoose = require('mongoose');

var projectsScheme = new mongoose.Schema({

    title:{
        type: String,
        require: true
    },

    description:{
        type: String,
        require: true
    },

    updated_On:{
        type: String,
        require: true
    },

    link:{
        type: String,
        require: true
    }
});

module.exports = projectsScheme;