module.exports = function (server, base) {

  server.get('/frontend-test', function (req, res) {
    res.sendFile(base + '/tests/index.html');
  });

  server.get('/mocha.css', function (req, res) {
    res.sendFile(base + '/tests/mocha.css');
  });

  server.get('/mocha.js', function (req, res) {
    res.sendFile(base + '/tests/mocha.js');
  });

  server.get('/tests.js', function (req, res) {
    res.sendFile(base + '/tests/tests.js');
  });

  server.get('/votesmart.js', function (req, res) {
    res.sendFile(base + '/lib/votesmart.js');
  });

}