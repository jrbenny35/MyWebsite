/**
 * Created by jrbenny35 on 9/12/15.
 */

//Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverrride = require('method-override');
var _ = require('lodash');

//create express application
var app = express();

//Add middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverrride('X-Http-Method-Override'));

//Add CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-type');
    next();
});

//Connect to MongoDB
mongoose.connect('mongodb://localhost/MyMeanWebsite');
mongoose.connection.once('open', function(){

    //Load models
    app.models = require('./models/index');

    //Load routes
    var routes = require('./routes');
    _.each(routes, function(api, route){ //Iterates over each route in routes file. Assign path to first var, name to second var.
        app.use(route, api(app, route))//At each route, calls module.exports function setting up API and returning middleware.
    });

    console.log('Listening on port 3000...');
    app.listen(3000);

});