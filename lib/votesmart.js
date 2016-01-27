(function () {

  function VoteSmart (apiKey, baseUrl, output) {
    this.apiKey = apiKey ? apiKey : 'API_KEY';

    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
      if (this.apiKey === 'API_KEY') {
        throw new Error('Please provide an apiKey!');
      }
    }
    console.log('baseUrl: ' + baseUrl);
    this.baseUrl = baseUrl ? baseUrl : 'http://localhost:3030/proxy/';
    console.log('output: ' + output);
    this.output = output ? output : 'JSON';
  }

  /* Key Votes */
  VoteSmart.prototype.Bill = function () {
    return {
      bill: function (constructor, callback) {
        constructor.resource = 'bill';
        this._request(constructor, callback);
      }.bind(this),

      stage: function (constructor, callback) {
        constructor.resource = 'bill/stage';
        this._request(constructor, callback);
      }.bind(this),

      stagetype: function (constructor, callback) {
        constructor.resource = 'stagetype';
        this._request(constructor, callback);
      }.bind(this),

      billtype: function (constructor, callback) {
        constructor.resource = 'billtype';
        this._request(constructor, callback);
      }.bind(this),

      billlevel: function (constructor, callback) {
        constructor.resource = 'billlevel';
        this._request(constructor, callback);
      }.bind(this),

      billoutcome: function (constructor, callback) {
        constructor.resource = 'billoutcome';
        this._request(constructor, callback);
      }.bind(this),
    }
  }

  /* Ballot measures */
  VoteSmart.prototype.Measure = function () {
    return {
      measure: function (constructor, callback) {
        constructor.resource = 'measure';
        this._request(constructor, callback);
      }.bind(this),
    }
  }

  /* Public statements */
  VoteSmart.prototype.Statement = function () {
    return {
      statement: function (constructor, callback) {
        // statement_id
        constructor.resource = 'statement';
        this._request(constructor, callback);
      }.bind(this),

      statementtype: function (constructor, callback) {
        constructor.resource = 'statementtype';
        this._request(constructor, callback);
      }.bind(this),
    }
  }

  /* Special interest groups and their ratings and endorsements */
  VoteSmart.prototype.SIG = function () {
    return {
      sig: function (constructor, callback) {
        constructor.resource = 'sig';
        this._request(constructor, callback);
      }.bind(this),

      endorsement: function (constructor, callback) {
        constructor.resource = 'sig/endorsement';
        this._request(constructor, callback);
      }.bind(this),

      rating: function (constructor, callback) {
        constructor.resource = 'rating';
        this._request(constructor, callback);
      }.bind(this),
    }
  }

  /* Featured issues */
  VoteSmart.prototype.Featured = function () {
    return {
      featured: function (constructor, callback) {
        // featured_id at most
        constructor.resource = 'featured';
        this._request(constructor, callback);
      }.bind(this),

      content: function (constructor, callback) {
        // featured_id, content_type
        constructor.resource = 'featured/content';
        this._request(constructor, callback);
      }.bind(this),
    }
  }

  VoteSmart.prototype._request = function (constructor, callback) {
    var url = this._urlConstructor(constructor);

    this._ajaxGet(url, function (err, res) {
      if (err) callback(err);

      var json = JSON.parse(res.responseText);

      if (json.error) callback(json);

      if (this.output === 'JSON') {
        callback(null, json);
      }
      else {
        callback(null, res.responseText);
      }
    }.bind(this));
  }

  VoteSmart.prototype._urlConstructor = function (constructor) {
    var resource = constructor.resource;
    delete constructor.resource;
    return this.baseUrl + resource + this._querystring(constructor);
  }

  VoteSmart.prototype._querystring = function (q) {
    var string, query, k;
    string = [];
    for (k in q) {
      if (q.hasOwnProperty(k)) {
        string.push(encodeURIComponent(k) + '=' + encodeURIComponent(q[k]));
      }
    }
    query = string.join('&')
    return '?o=' + this.output + '&' + query;
  }

  VoteSmart.prototype._setHeaders = function (h, apiKey) {
    var k;
    // Set user defined headers
    for (k in h) {
      if (h.hasOwnProperty(k)) {
        request.setRequestHeader(k, h[k]);
      }
    }
    // Set API key
    request.setRequestHeader('Authorization', apiKey)
  }

  VoteSmart.prototype._ajaxGet = function (url, callback) {
    var request, versions, i;

    if (typeof XMLHttpRequest !== 'undefined') {
      request = new XMLHttpRequest();
    }
    else {
      versions = ['MSXML2.XmlHttp.5.0', 'MSXML2.XmlHttp.4.0',
        'MSXML2.XmlHttp.3.0', 'MSXML2.XmlHttp.2.0', 'Microsoft.XmlHttp'];
      for (i = 0; i < versions.length; i++) {
        request = new ActiveXObject(versions[i]);
        break;
      }
    }

    request.onreadystatechange = function () {
      if (request.readyState < 4) return;
      if (request.status !== 200) return;
      if (request.readyState === 4) callback(null, request);
    }

    request.open('GET', url, true);
    request.send();
  }

  // Node.js
  if (typeof module !== 'undefined' && module.exports) {
    var request = require('request');

    VoteSmart.prototype._urlConstructor = function (constructor) {
      var resource = constructor.resource;
      delete constructor.resource;
      this.baseUrl = 'http://api.votesmart.org/2/';
      this._setHeaders(this.headers, this.apiKey);
      return this.baseUrl + resource +
        this._querystring(constructor);
    }

    VoteSmart.prototype._request = function (constructor, callback) {
      var url = this._urlConstructor(constructor);
      request.get(url, function (err, response, body) {
        if (err) callback(err);
        var response = JSON.parse(body);
        if (response.error) callback(response.error);
        else callback(null, response);
      });
    }
    module.exports = VoteSmart;
  }
  // <script> tag
  else {
    this.VoteSmart = VoteSmart;
  }

})();