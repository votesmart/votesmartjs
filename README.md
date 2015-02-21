### VoteSmartJS

JavaScript wrapper around [Vote Smart's REST API](http://api.votesmart.org/docs/index.html) with support for Node.js and the browser.

#### Base Requirements
* [Node.js v0.10.33 64-bit](http://nodejs.org/)
* [npmjs v2.1.8](https://www.npmjs.org/)

#### Production Installation
```
$ npm install votesmartjs
```

#### Development Installation
```
# Install VoteSmartJS
$ git clone https://github.com/votesmart/votesmartjs.git
$ cd votesmartjs
$ npm install

# Run Node.js tests with mocha
$ npm install -g mocha
$ npm test

# Run client tests in the browser
$ votesmartjs server -p PORT -k API_KEY
# Navigate to http://localhost:PORT/frontend-test
```

#### Node.js Usage
User must supply a valid API key as the first parameter when making a new instance of the VoteSmart object.
```
var VoteSmart = require('votesmartjs')
  , votesmart = new VoteSmart('API_KEY')
;
```

#### Browser Usage
User must supply a valid API key in the CLI when starting up the proxy server, but does not need to supply an API key when making new instances of the VoteSmart object.

The REST API doesn't currently support CORS, so you'll have to run a small proxy
server in order to make requests from the browser:
```
$ votesmartjs server -p PORT -k API_KEY
```

Copy **lib/votesmart.js** into wherever you're serving static files from and
load **votesmart.js** into your application as a regular JavaScript file:
```
<script src="/static/votesmart.js"></script>
<script>
  var votesmart = new VoteSmart();
</script>
```

#### API Reference
[Vote Smart official REST API documentation](http://api.votesmart.org/docs/index.html)

##### Address Module
