module.exports = function (server, base) {

  server.get('/frontend-test', function (req, res) {
    res.sendFile(base + '/tests/frontend/index.html');
  });

  server.get('/mocha.css', function (req, res) {
    res.sendFile(base + '/tests/frontend/mocha.css');
  });

  server.get('/mocha.js', function (req, res) {
    res.sendFile(base + '/tests/frontend/mocha.js');
  });

  server.get('/tests.js', function (req, res) {
    res.sendFile(base + '/tests/frontend/tests.js');
  });

  server.get('/votesmart.js', function (req, res) {
    res.sendFile(base + '/lib/votesmart.js');
  });

}