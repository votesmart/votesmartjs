module.exports = function (base, callback) {

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
      if (key === 'key') req.query.key = root.config.apiKey;
    }

    path = req.params[0];
    query = querystring.stringify(req.query)
    url = root.config.apiBaseUrl + path + '?' + query;

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
  require('../tests/frontend/routes')(server, base);

  var config = path.join(base, 'config.json');

  fs.readFile(config, 'utf8', function (err, text) {
    if (err) throw err;
    root.config = JSON.parse(text);
    server.set('port', root.config.port);
    callback(null, server);
  });

}