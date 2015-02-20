module.exports = function (base, callback, port, apiKey) {

  var express = require('express')
    , fs = require('fs')
    , path = require('path')
    , querystring = require('querystring')
    , request = require('request')
    , root = this
    ;

  function proxify (req, res, next) {
    var path
      , key
      , query
      , url
      ;

    for (key in req.query) {
      if (key === 'key') req.query.key = apiKey;
    }

    path = req.params[0];
    query = querystring.stringify(req.query)
    url = 'http://api.votesmart.org/' + path + '?' + query;

    request.get(url, function (err, response, body) {
      if (err) res.send(err);
      else res.send(body);
    });
  }

  var server = express();

  server.get('/proxy/*',
    function (req, res, next) {
      return next();
    }, proxify)
  ;

  // Frontend tests module routes
  require('../../tests/frontend/routes')(server, base);

  port = port ? port : 3030;

  server.set('port', port);
  callback(null, server);

}