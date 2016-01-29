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
        }
        else {
          throw err;
        }
      })
    });

    it("GET Politician().bio", function (done) {
      var query = { "politician_id": "9490" };
      votesmart.Politician().bio(query, function (err, res) {
        if (res.results.length >= 1) {
          done();
        }
        else {
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
        }
        else {
          done();
        }
      })
    });

    it("GET Politician().election", function (done) {
      var query = { "politician__politician_id": "9490" };
      votesmart.Politician().election(query, function (err, res) {
        if (err != null) {
          throw err;
        }
        else {
          done();
        }
      })
    });
  });

  describe("Ballot Measure Module Tests", function () {
    it("GET Measure().measure", function (done) {
      var query = { "measure_id": "10" };
      votesmart.Measure().measure(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });
  });

});