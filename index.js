require('./lib/server')(__dirname, function (err, server) {
  server.listen(server.get('port'), function () {
    var host = this.address().address;
    var port = this.address().port;
    console.log('Listening -- http://%s:%s', host, port);
  })
});