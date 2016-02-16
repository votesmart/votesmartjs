(function () {

  function VoteSmart (apiKey, baseUrl, output) {
    this.apiKey = apiKey ? apiKey : 'API_KEY';

    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
      if (this.apiKey === 'API_KEY') {
        throw new Error('Please provide an apiKey!');
      }
    }
    // If you're using the nodejs proxy, the baseUrl should be something
    // like this: http://localhost:3030/proxy/
    this.baseUrl = baseUrl ? baseUrl : 'http://api.votesmart.org/2/'; 
    console.log(this.baseUrl);
    this.output = output ? output : 'JSON';
  }

  /* Politicians */
  VoteSmart.prototype.Politician = function () {
    return {
      politician: function (constructor, callback) {
        constructor.resource = 'politician';
        this._request(constructor, callback);
      }.bind(this),

      bio: function (constructor, callback) {
        constructor.resource = 'politician/bio';
        this._request(constructor, callback);
      }.bind(this),

      list: function (constructor, callback) {
        constructor.resource = 'politician/list';
        this._request(constructor, callback);
      }.bind(this),

      election: function (constructor, callback) {
        constructor.resource = 'politician/election';
        this._request(constructor, callback);
      }.bind(this),
    }
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

  /* Political Courage Test */
  VoteSmart.prototype.PCT = function () {
    return {
      schema: function (constructor, callback) {
        constructor.resource = 'pct/schema';
        this._request(constructor, callback);
      }.bind(this),

      results: function (constructor, callback) {
        constructor.resource = 'pct/results';
        this._request(constructor, callback);
      }.bind(this),

      politician: function (constructor, callback) {
        constructor.resource = 'pct/politician';
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

  /* Categories */
  VoteSmart.prototype.Category = function () {
    return {
      category: function (constructor, callback) {
        // featured_id at most
        constructor.resource = 'category';
        this._request(constructor, callback);
      }.bind(this),
    }
  }

  /* State */
  VoteSmart.prototype.State = function () {
    return {
      state: function (constructor, callback) {
        constructor.resource = 'state';
        this._request(constructor, callback);
      }.bind(this),
    }
  }

  /* Stat */
  VoteSmart.prototype.Stat = function () {
    return {
      stat: function (constructor, callback) {
        constructor.resource = 'stat';
        this._request(constructor, callback);
      }.bind(this),
    }
  }

  /* Elections */
  VoteSmart.prototype.Election = function () {
    return {
      electionstatus: function (constructor, callback) {
        constructor.resource = 'electionstatus';
        this._request(constructor, callback);
      }.bind(this),
    }
  }

  /* Office */
  VoteSmart.prototype.Office = function () {
    return {
      /* this actually doesn't exist yet
      office: function (constructor, callback) {
        constructor.resource = 'office';
        this._request(constructor, callback);
      }.bind(this),*/

      officestatus: function (constructor, callback) {
        constructor.resource = 'officestatus';
        this._request(constructor, callback);
      }.bind(this),

      officetype: function (constructor, callback) {
        constructor.resource = 'officestatus';
        this._request(constructor, callback);
      }.bind(this),
    }
  }

  /* Campaign Finance Data */
  VoteSmart.prototype.Finance = function () {
    return {
      finance: function (constructor, callback) {
        constructor.resource = 'finance';
        this._request(constructor, callback);
      }.bind(this),

      aggregate: function (constructor, callback) {
        constructor.resource = 'finance/aggregate';
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
    return '?' + query;
  }

  VoteSmart.prototype._setHeaders = function (request, h, apiKey) {
    var headers = this._compileHeaders(h, apiKey);

    for (k in headers) {
      if (headers.hasOwnProperty(k)) {
        request.setRequestHeader(k, headers[k]);
      }
    }

    return request;
  }

  VoteSmart.prototype._compileHeaders = function (h, apiKey) {
    var k;
    var heads = {};
    // Set user defined headers
    for (k in h) {
      if (h.hasOwnProperty(k)) {
        heads[k] = h[k];
      }
    }
    // Set API key
    heads['Authorization'] = apiKey;

    return heads;
  }

  VoteSmart.prototype._ajaxGet = function (url, callback) {
    var self = this, request, versions, i;

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
      if (request.readyState == 1) {
        request = self._setHeaders(request, self.headers, self.apiKey);
        return;
      }
      if ([200, 206].indexOf(request.status) == -1) return;
      if (request.readyState < 4) return;
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
      //this._setHeaders(request, this.headers, this.apiKey);
      return this.baseUrl + resource +
        this._querystring(constructor);
    }

    VoteSmart.prototype._request = function (constructor, callback) {
      var url = this._urlConstructor(constructor);
      console.log('Trying to fetch: ' + url);
      var opts = {
        url: url,
        headers: this._compileHeaders(this.headers, this.apiKey)
      }
      request.get(url, function (err, response, body) {
        console.log(err);
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