/**
 * Created by root on 9/15/15.
 */

var restful = require('node-restful');

module.exports = function(app, route) {

    //setup controller for REST api
    var rest = restful.model( //assign variable to mongoose model through node-restful
        'movie', //Name we give it
        app.models.movie //Model from main app.models loaded from index.js
    ).methods(['get', 'put', 'post', 'delete']); //CRUD operations


    //Register this endpoint with the application
    rest.register(app, route);

    //Return middleware
    return function(req, res, next){
      next();
    };
};