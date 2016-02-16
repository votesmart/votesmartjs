describe("VoteSmartJS API Frontend Tests", function () {
  var votesmart;

  before(function (done) {
    votesmart = new VoteSmart('7be648cb61305100d33a399d89782d6c', 'http://api.votesmart.org/2/');
    done();
  });

  describe("Politician Module Tests", function () {
    it("GET Politician().politician", function (done) {
      var query = { "politician_id": "9490" };
      votesmart.Politician().politician(query, function (err, res) {
        if (res.results.length == 1) {
          done();
        } else {
          throw err;
        }
      })
    });

    it("GET Politician().bio", function (done) {
      var query = { "politician_id": "9490" };
      votesmart.Politician().bio(query, function (err, res) {
        if (res.results.length >= 1) {
          done();
        } else {
          throw err;
        }
      })
    });

    it("GET Politician().list", function (done) {
      var query = { "district__state__state_id": "PA", "district__office__office_id": "6" };
      votesmart.Politician().list(query, function (err, res) {
        console.log('err: ' + err);
        if (err != null) {
          throw err;
        } else {
          done();
        }
      });
    });

    it("GET Politician().election", function (done) {
      var query = { "politician__politician_id": "9490" };
      votesmart.Politician().election(query, function (err, res) {
        if (err != null) {
          throw err;
        } else {
          done();
        }
      });
    });
  });

  describe("Bill Module Tests", function () {
    it("GET Bill().bill", function (done) {
      var query = { billnumber: "HR 123", state__state_id: "NA", yearintroduced: 2015 };
      votesmart.Bill().bill(query, function (err, res) {
        if (err) { throw err; }
        done();
      });
    });
    it("GET Bill().stage", function (done) {
      var query = { stage_id: "15538" };
      votesmart.Bill().stage(query, function (err, res) {
        if (err) { throw err; }
        done();
      })
    });
    it("GET Bill().stagetype", function (done) {
      var query = { };
      votesmart.Bill().stagetype(query, function (err, res) {
        if (err) { throw err; }
        done();
      })
    });
    it("GET Bill().billtype", function (done) {
      var query = { };
      votesmart.Bill().billtype(query, function (err, res) {
        if (err) { throw err; }
        done();
      })
    });
    it("GET Bill().billlevel", function (done) {
      var query = { };
      votesmart.Bill().billlevel(query, function (err, res) {
        if (err) { throw err; }
        done();
      })
    });
    it("GET Bill().billoutcome", function (done) {
      var query = { };
      votesmart.Bill().billoutcome(query, function (err, res) {
        if (err) { throw err; }
        done();
      })
    });
  });

  describe("Ballot Measure Module Tests", function () {
    it("GET Measure().measure", function (done) {
      var query = { "measure_id": "10" };
      votesmart.Measure().measure(query, function (err, res) {
        if (err) { throw err; }
        done();
      })
    });
  });

  describe("Statement Module Tests", function () {
    it("GET Statement().statement", function (done) {
      var query = { "statement_id": "936160" };
      votesmart.Statement().statement(query, function (err, res) {
        if (err) { throw err; }
        done();
      })
    });
    it("GET Statement().statementtype", function (done) {
      var query = { };
      votesmart.Statement().statementtype(query, function (err, res) {
        if (err) { throw err; }
        done();
      })
    });
  });

  describe("PCT Module Tests", function () {
    it("GET PCT().schema", function (done) {
      var query = { elections__officetype__officetype_id: "C", elections__state__state_id: "CA", elections__year: 2014 };
      votesmart.PCT().schema(query, function (err, res) {
        if (err) { throw err; }
        done();
      })
    });
    it("GET PCT().results", function (done) {
      var query = { form_id: 1527, form__section__row__profile: 't' };
      votesmart.PCT().results(query, function (err, res) {
        if (err) { throw err; }
        done();
      })
    });
    it("GET PCT().politician", function (done) {
      var query = { politicians__politician_id: 9490 };
      votesmart.PCT().politician(query, function (err, res) {
        if (err) { throw err; }
        done();
      });
    });
  });

  describe("SIG Module Tests", function () {
    it("GET SIG().sig", function (done) {
      var query = { categories__category_id: 2, state__state_id: "PA" };
      votesmart.SIG().sig(query, function (err, res) {
        if (err) { throw err; }
        done();
      })
    });
    it("GET SIG().endorsement", function (done) {
      var query = { sig__sig_id: 1435 };
      votesmart.SIG().endorsement(query, function (err, res) {
        if (err) { throw err; }
        done();
      })
    });
    it("GET SIG().rating", function (done) {
      var query = { politicians__politician_id: 9490 };
      votesmart.SIG().rating(query, function (err, res) {
        if (err) { throw err; }
        done();
      });
    });
  });

  describe("Featured Module Tests", function () {
    it("GET Featured().featured", function (done) {
      var query = { };
      votesmart.Featured().featured(query, function (err, res) {
        if (err) { throw err; }
        done();
      })
    });
    it("GET Featured().content", function (done) {
      var query = { featured_id: 1 };
      votesmart.Featured().content(query, function (err, res) {
        if (err) { throw err; }
        done();
      })
    });
  });

  describe("State Module Tests", function () {
    it("GET State().state", function (done) {
      var query = { state_id: "PA" };
      votesmart.State().state(query, function (err, res) {
        if (err) { throw err; }
        done();
      })
    });
  });

  describe("Stat Module Tests", function () {
    it("GET Stat().stat", function (done) {
      var query = { };
      votesmart.Stat().stat(query, function (err, res) {
        if (err) { throw err; }
        done();
      })
    });
  });

  describe("Election Module Tests", function () {
    it("GET Election().electionstatus", function (done) {
      var query = { };
      votesmart.Election().electionstatus(query, function (err, res) {
        if (err) { throw err; }
        done();
      })
    });
  });

  describe("Office Module Tests", function () {
    it("GET Office().officestatus", function (done) {
      var query = { };
      votesmart.Office().officestatus(query, function (err, res) {
        if (err) { throw err; }
        done();
      })
    });
    it("GET Office().officetype", function (done) {
      var query = { };
      votesmart.Office().officetype(query, function (err, res) {
        if (err) { throw err; }
        done();
      })
    });
  });

  describe("Finance Module Tests", function () {
    it("GET Finance().finance", function (done) {
      this.timeout(10000);
      var query = { politician__politician_id: 9490 };
      votesmart.Finance().finance(query, function (err, res) {
        if (err) { throw err; }
        done();
      })
    });
    it("GET Finance().aggregate", function (done) {
      this.timeout(10000);
      var query = { politician__politician_id: 9490 };
      votesmart.Finance().aggregate(query, function (err, res) {
        if (err) { throw err; }
        done();
      })
    });
  });

});