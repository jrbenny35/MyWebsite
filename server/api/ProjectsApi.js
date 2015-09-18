/**
 * Created by root on 9/17/15.
 */

var restful = require('node-restful');

module.exports = function(app, route){

    var rest = restful.model(
        'project',
        app.models.projects
    ).methods(['put', 'post', 'get', 'delete']);

    rest.register(app, route);

    return function(req, res, next){
      next();
    };

};