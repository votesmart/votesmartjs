describe("VoteSmartJS API Frontend Tests", function () {
  var votesmart;

  before(function (done) {
    VoteSmart = require('../../lib/votesmart');
    votesmart = new VoteSmart('bcfa5d8cf0b12d203e7630fa474ade79');
    done();
  });

  describe("Address Module Tests", function () {
    it("GET Address().campaign", function (done) {
      var query = { "candidateId": "3118" };
      votesmart.Address().campaign(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Address().campaignWebAddress", function (done) {
      var query = { "candidateId": "16886" };
      votesmart.Address().campaignWebAddress(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Address().campaignByElection", function (done) {
      var query = { "electionId": "2012" };
      votesmart.Address().campaignByElection(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Address().office", function (done) {
      var query = { "candidateId": "16886" };
      votesmart.Address().office(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Address().officeWebAddress", function (done) {
      var query = { "candidateId": "16886" };
      votesmart.Address().officeWebAddress(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Address().officeByOfficeState", function (done) {
      var query = { "officeId": "3", "stateId": "AZ" };
      votesmart.Address().officeByOfficeState(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });
  });

  describe("BallotMeasure Module Tests", function () {
    it("GET BallotMeasure().measuresByYearState", function (done) {
      var query = { "year": "2012", "stateId": "AZ" };
      votesmart.BallotMeasure().measuresByYearState(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET BallotMeasure().measure", function (done) {
      var query = { "measureId": "1" };
      votesmart.BallotMeasure().measure(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });
  });

  describe("CandidateBio Module Tests", function () {
    it("GET CandidateBio().bio", function (done) {
      var query = { "candidateId": "9490" };
      votesmart.CandidateBio().bio(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET CandidateBio().detailedBio", function (done) {
      var query = { "candidateId": "9490" };
      votesmart.CandidateBio().detailedBio(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET CandidateBio().additionalBio", function (done) {
      var query = { "candidateId": "9490" };
      votesmart.CandidateBio().additionalBio(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });
  });

  describe("Candidates Module Tests", function () {
    it("GET Candidates().byOfficeState", function (done) {
      var query = { "officeId": "5", "stateId": "CA", "electionYear": "1998" };
      votesmart.Candidates().byOfficeState(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Candidates().byOfficeTypeState", function (done) {
      var query = {
        "officeTypeId": "C",
        "stateId": "CA",
        "electionYear": "1998"
      };
      votesmart.Candidates().byOfficeTypeState(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Candidates().byLastName", function (done) {
      var query = { "lastName": "Capps", "electionYear": "1998" };
      votesmart.Candidates().byLastName(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Candidates().byLevenshtein", function (done) {
      var query = { "lastName": "Capps", "electionYear": "1998" };
      votesmart.Candidates().byLevenshtein(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Candidates().byElection", function (done) {
      var query = { "electionId": "1", "stateId": "CA" };
      votesmart.Candidates().byElection(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Candidates().byDistrict", function (done) {
      var query = {
        "districtId": "21200",
        "electionYear": "1998"
      };
      votesmart.Candidates().byDistrict(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Candidates().byZip", function (done) {
      var query = {
        "zip5": "85716",
        "electionYear": "1998"
      };
      votesmart.Candidates().byZip(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });
  });

  describe("Committee Module Tests", function () {
    it("GET Committee().types", function (done) {
      votesmart.Committee().types(function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Committee().byTypeState", function (done) {
      var query = { "typeId": "S", "stateId": "AZ"};
      votesmart.Committee().byTypeState(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Committee().committee", function (done) {
      var query = { "committeeId": "9831" };
      votesmart.Committee().committee(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Committee().committeeMembers", function (done) {
      var query = { "committeeId": "9831" };
      votesmart.Committee().committeeMembers(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });
  });

  describe("District Module Tests", function () {
    it("GET District().byOfficeState", function (done) {
      var query = { "officeId": "5", "stateId": "AZ", "districtName": "2" };
      votesmart.District().byOfficeState(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET District().byZip", function (done) {
      var query = { "zip5": "85716" };
      votesmart.District().byZip(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });
  });

  describe("Election Module Tests", function () {
    it("GET Election().election", function (done) {
      var query = { "electionId": "1" };
      votesmart.Election().election(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Election().electionByYearState", function (done) {
      var query = { "year": "1998", "stateId": "CA" };
      votesmart.Election().electionByYearState(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Election().electionByZip", function (done) {
      var query = { "zip5": "85716", "year": "2012" };
      votesmart.Election().electionByZip(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Election().stageCandidates", function (done) {
      var query = {
        "electionId": "1",
        "stageId": "G",
        "stateId": "CA"
      };
      votesmart.Election().stageCandidates(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });
  });

  describe("Leadership Module Tests", function () {
    it("GET Leadership().positions", function (done) {
      // Optional query arguments
      var query = { "stateId": "AZ" };
      votesmart.Leadership().positions(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Leadership().officials", function (done) {
      var query = { "leadershipId": "138", "stateId": "AZ" };
      votesmart.Leadership().officials(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });
  });

  describe("Local Module Tests", function () {
    it("GET Local().counties", function (done) {
      var query = { "stateId": "AZ" };
      votesmart.Local().counties(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Local().cities", function (done) {
      var query = { "stateId": "AZ" };
      votesmart.Local().cities(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Local().officials", function (done) {
      var query = { "localId": "1419" };
      votesmart.Local().officials(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });
  });

  describe("Npat Module Tests", function () {
    it("GET Npat().npat", function (done) {
      var query = { "candidateId": "1" };
      votesmart.Npat().npat(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });
  });

  describe("Office Module Tests", function () {
    it("GET Office().types", function (done) {
      votesmart.Office().types(function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Office().branches", function (done) {
      votesmart.Office().branches(function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Office().levels", function (done) {
      votesmart.Office().levels(function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Office().officesByType", function (done) {
      var query = { "officeTypeId": "P" };
      votesmart.Office().officesByType(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Office().officesByLevel", function (done) {
      var query = { "levelId": "F" };
      votesmart.Office().officesByLevel(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Office().officesByTypeLevel", function (done) {
      var query = { "officeTypeId": "P", "officeLevelId": "F" };
      votesmart.Office().officesByTypeLevel(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Office().officesByBranchLevel", function (done) {
      var query = { "officeBranchId": "E", "officeLevelId": "F" };
      votesmart.Office().officesByBranchLevel(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });
  });

  describe("Officials Module Tests", function () {
    it("GET Officials().statewide", function (done) {
      var query = { "stateId": "AZ" };
      votesmart.Officials().statewide(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Officials().byOfficeState", function (done) {
      var query = { "officeId": "430", "stateId": "AZ" };
      votesmart.Officials().byOfficeState(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Officials().byOfficeTypeState", function (done) {
      var query = { "officeTypeId": "N", "stateId": "AZ" };
      votesmart.Officials().byOfficeTypeState(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Officials().byLastName", function (done) {
      var query = { "lastName": "Obama" };
      votesmart.Officials().byLastName(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Officials().byLevenshtein", function (done) {
      var query = { "lastName": "Obama" };
      votesmart.Officials().byLevenshtein(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Officials().byDistrict", function (done) {
      var query = { "districtId": "30903" };
      votesmart.Officials().byDistrict(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Officials().byZip", function (done) {
      var query = { "zip5": "85716" };
      votesmart.Officials().byZip(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });
  });

  describe("Rating Module Tests", function () {
    it("GET Rating().categories", function (done) {
      var query = { "stateId": "AZ" };
      votesmart.Rating().categories(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Rating().sigList", function (done) {
      var query = { "categoryId": "2", "stateId": "AZ" };
      votesmart.Rating().sigList(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Rating().sig", function (done) {
      var query = { "sigId": "150" };
      votesmart.Rating().sig(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Rating().sigRatings", function (done) {
      var query = { "sigId": "150" };
      votesmart.Rating().sigRatings(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Rating().candidateRating", function (done) {
      var query = { "candidateId": "68079", "sigId": "150" };
      votesmart.Rating().candidateRating(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Rating().rating", function (done) {
      var query = { "ratingId": "7516" };
      votesmart.Rating().rating(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });
  });

  describe("State Module Tests", function () {
    it("GET State().stateIds", function (done) {
      votesmart.State().stateIds(function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET State().state", function (done) {
      var query = { "stateId": "AZ" };
      votesmart.State().state(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });
  });

  describe("Votes Module Tests", function () {
    it("GET Votes().categories", function (done) {
      var query = { "year": "2012", "stateId": "AZ" };
      votesmart.Votes().categories(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Votes().bill", function (done) {
      var query = { "billId": "15049" };
      votesmart.Votes().bill(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Votes().billAction", function (done) {
      var query = { "actionId": "39537" };
      votesmart.Votes().billAction(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Votes().billActionVotes", function (done) {
      var query = { "actionId": "39537" };
      votesmart.Votes().billActionVotes(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Votes().billActionVoteByOfficial", function (done) {
      var query = { "actionId": "39537", "candidateId": "3118" };
      votesmart.Votes().billActionVoteByOfficial(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Votes().byBillNumber", function (done) {
      var query = { "billNumber": "HB 2780" };
      votesmart.Votes().byBillNumber(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Votes().billsByCategoryYearState", function (done) {
      var query = { "categoryId": "4", "year": "2012", "stateId": "AZ" };
      votesmart.Votes().billsByCategoryYearState(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Votes().billsByYearState", function (done) {
      var query = { "year": "2012", "stateId": "AZ" };
      votesmart.Votes().billsByYearState(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Votes().billsByOfficialYearOffice", function (done) {
      var query = {
        "candidateId": "3118",
        "year": "2012",
        "officeId": "3",
      };
      votesmart.Votes().billsByOfficialYearOffice(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Votes().billsByOfficialCategoryOffice", function (done) {
      var query = {
        "candidateId": "3118",
        "categoryId": "5",
        "officeId": "3",
        "year": "2012"
      };
      votesmart.Votes().billsByOfficialCategoryOffice(query,
        function (err, res) {
          if (err) throw err;
          done();
        })
    });

    it("GET Votes().byOfficial", function (done) {
      var query = {
        "candidateId": "3118",
        "year": "2012",
        "officeId": "3",
        "categoryId": "5"
      };
      votesmart.Votes().byOfficial(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Votes().billsBySponsorYear", function (done) {
      var query = { "candidateId": "28241", "year": "2012" };
      votesmart.Votes().billsBySponsorYear(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Votes().billsBySponsorCategory", function (done) {
      var query = { "candidateId": "28241", "categoryId": "5" };
      votesmart.Votes().billsBySponsorCategory(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Votes().billsByStateRecent", function (done) {
      var query = { "amount": "50", "stateId": "AZ" };
      votesmart.Votes().billsByStateRecent(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });

    it("GET Votes().vetoes", function (done) {
      var query = { "candidateId": "3118" };
      votesmart.Votes().vetoes(query, function (err, res) {
        if (err) throw err;
        done();
      })
    });
  });

});