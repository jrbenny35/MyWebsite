/**
 * Created by root on 9/23/15.
 */

var restful = require('node-restful');

module.exports = function(app, route){

    var rest = restful.model(
        'contact',
        app.models.contact
    ).methods(['put', 'post', 'get', 'delete']);

    rest.register(app, route);

    return function(req, res, next){
        next();
    };

};
