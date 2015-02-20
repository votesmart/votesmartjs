#!/usr/bin/env node

var async = require('async')
  , program = require('commander')
  , VoteSmart = require('./lib/votesmart')
;

function server (base, callback, port, key) {
  require('./lib/server')(base, function (err, server) {
    if (err) callback(err);
    server.listen(server.get('port'), function () {
      var host = this.address().address;
      var port = this.address().port;
      callback(null, 'Listening -- http://' + host + ':' + port);
    })
  }, port, key);
}

program
  .version('0.0.1')
  .command('server')
  .description('Start proxy server')
  .option("-p, --port [value]", "Port to run proxy server on")
  .option("-k, --key [value]", "API key to verify requests")
  .on('--help', function () {
    console.log('  Example:');
    console.log();
    console.log('    Start proxy server:');
    console.log('    $ votesmartjs server -p 3030 -k API_KEY');
    console.log();
  })
  .action(function (options) {
    server(__dirname, function (err, res) {
      if (err) throw err;
      console.log(res);
    }, options.port, options.key);
  })
;

program.on('--help', function () {
  console.log('  Examples:');
  console.log();
  console.log('    Show help/options for commands:');
  console.log('    $ votesmartjs server -h');
  console.log();
});

program.parse(process.argv);