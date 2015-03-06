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

###### GET campaign()
Grab campaign office(s) and basic candidate information for the specified candidate.

**Input:**
* candidateId
```
var votesmart = new VoteSmart()
var query = {
  "candidateId": "3118"
};

votesmart.Address().campaign(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET campaignWebAddress()
Grab campaign office's web address(es) and basic candidate information for the specified candidate.

**Input:**
* candidateId
```
var votesmart = new VoteSmart()
var query = {
  "candidateId": "3118"
};

votesmart.Address().campaignWebAddress(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET campaignByElection()
Grab campaign office(s) and basic candidate information for the specified election.

**Input:**
* electionId
```
var votesmart = new VoteSmart()
var query = {
  "electionId": "2012"
};

votesmart.Address().campaignByElection(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET office()
Grab office(s) and basic candidate information for the specified candidate.

**Input:**
* candidateId
```
var votesmart = new VoteSmart()
var query = {
  "candidateId": "3118"
};

votesmart.Address().office(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET officeWebAddress()
Grab office's web address(es) and basic candidate information for the specified candidate.

**Input:**
* candidateId
```
var votesmart = new VoteSmart()
var query = {
  "candidateId": "3118"
};

votesmart.Address().officeWebAddress(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET officeByOfficeState()
Grab office address and basic candidate information according to the officeId and state.

**Input:**
* officeId
* stateId `optional`
```
var votesmart = new VoteSmart()
var query = {
  "officeId": "3",
  "stateId": "AZ"
};

votesmart.Address().officeByOfficeState(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
***

##### Ballot Measure Module

###### GET measuresByYearState()
Return a list of state ballot measures in a given year.

**Input:**
* year
* stateId
```
var votesmart = new VoteSmart()
var query = {
  "year": "2012",
  "stateId": "AZ"
};

votesmart.BallotMeasure().measuresByYearState(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET measure()
Return a single ballot measure in detail.

**Input:**
* measureId
```
var votesmart = new VoteSmart()
var query = {
  "measureId": "1"
};

votesmart.BallotMeasure().measure(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
***

##### Candidate Bio Module

###### GET bio()
Grab the main bio for specified candidate.

**Input:**
* candidateId
```
var votesmart = new VoteSmart()
var query = {
  "candidateId": "9490"
};

votesmart.CanidateBio().bio(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET detailedBio()
Expands on GET bio() by adding elements for education, profession, political, orgMembership and congMembership.

**Input:**
* candidateId
```
var votesmart = new VoteSmart()
var query = {
  "candidateId": "9490"
};

votesmart.CanidateBio().detailedBio(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET additionalBio()
Grab extended bio for specified candidate.

**Input:**
* candidateId
```
var votesmart = new VoteSmart()
var query = {
  "candidateId": "9490"
};

votesmart.CanidateBio().additionalBio(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
***

##### Candidates Module

###### GET byOfficeState()
Grab a list of candidates according to office and state representation.

**Input:**
* officeId
* stateId `optional`
* electionYear `optional`
* stageId `optional`
```
var votesmart = new VoteSmart()
var query = {
  "officeId": "5",
  "stateId": "CA",
  "electionYear": "1998"
};

votesmart.Canidates().byOfficeState(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET byOfficeTypeState()
Grab a list of candidates according to office type and state representation.

**Input:**
* officeTypeId
* stateId `optional`
* electionYear `optional`
* stageId `optional`
```
var votesmart = new VoteSmart()
var query = {
  "officeTypeId": "C",
  "stateId": "CA",
  "electionYear": "1998"
};

votesmart.Canidates().byOfficeTypeState(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET byLastName()
Grab a list of candidates according to lastname match.

**Input:**
* lastName
* electionYear `optional`
* stageId `optional`
```
var votesmart = new VoteSmart()
var query = {
  "lastName": "Capps",
  "electionYear": "1998"
};

votesmart.Canidates().byLastName(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET byLevenshtein()
Grad a list of candidates according to a fuzzy lastname math.

**Input:**
* lastName
* electionYear `optional`
* stageId `optional`
```
var votesmart = new VoteSmart()
var query = {
  "lastName": "Capps",
  "electionYear": "1998"
};

votesmart.Canidates().byLevenshtein(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET byElection()
Grab a list of candidates according to the election they are running in.

**Input:**
* electionId
* stageId `optional`
```
var votesmart = new VoteSmart()
var query = {
  "electionId": "1",
  "stateId": "CA"
};

votesmart.Canidates().byElection(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET byDistrict()
Grab a list of candidates according to the district they represent.

**Input:**
* districtId
* electionYear `optional`
* stageId `optional`
```
var votesmart = new VoteSmart()
var query = {
  "districtId": "21200",
  "electionYear": "1998"
};

votesmart.Canidates().byDistrict(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET byZip()
Grab a list of candidates according to the zip code they represent.

**Input:**
* zip5
* electionYear `optional`
* zip4 `optional`
* stageId `optional`
```
var votesmart = new VoteSmart()
var query = {
  "zip5": "85716",
  "electionYear": "1998"
};

votesmart.Canidates().byZip(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
***

##### Committee Module

###### GET types()
Return committee types (house, senate, joint, etc).

**Input:**
* None
```
var votesmart = new VoteSmart()

votesmart.Committee().types(function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET byTypeState()
Return list of committees that fit query criteria.

**Input:**
* typeId `optional`
* stateId `optional`
```
var votesmart = new VoteSmart()
var query = {
  "typeId": "S",
  "stateId": "AZ"
};

votesmart.Committee().byTypeState(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET committee()
Return detailed committee data.

**Input:**
* committeeId
```
var votesmart = new VoteSmart()
var query = {
  "committeeId": "9831"
};

votesmart.Committee().committee(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET committeeMembers()
Return members of the committee.

**Input:**
* committeeId
```
var votesmart = new VoteSmart()
var query = {
  "committeeId": "9831"
};

votesmart.Committee().committeeMembers(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
***

##### District Module

###### GET byOfficeState()
Grab district IDs by officeId and stateId.

**Input:**
* officeId
* stateId
* districtName `optional`
```
var votesmart = new VoteSmart()
var query = {
  "officeId": "5",
  "stateId": "AZ",
  "districtName": "2"
};

votesmart.District().byOfficeState(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET byZip()
Grab district IDs by zip5.

**Input:**
* zip5
* zip4 `optional`
```
var votesmart = new VoteSmart()
var query = {
  "zip5": "85716"
};

votesmart.District().byZip(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
***

##### Election Module

###### GET election()
Grab basic district election data by electionId.

**Input:**
* electionId
```
var votesmart = new VoteSmart()
var query = {
  "electionId": "1"
};

votesmart.Election().election(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET electionByYearState()
Grab basic district election data by year and stateId.

**Input:**
* year
* stateId `optional`
```
var votesmart = new VoteSmart()
var query = {
  "year": "1998",
  "stateId": "CA"
};

votesmart.Election().electionByYearState(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET electionByZip()
Grab basic district election data by zip5.

**Input:**
* zip5
* zip4 `optional`
* year `optional`
```
var votesmart = new VoteSmart()
var query = {
  "zip5": "85716",
  "year": "2012"
};

votesmart.Election().electionByZip(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET stageCandidates()
Grab basic district eleciton data by electionId and stageId.

**Input:**
* electionId
* stageId
* party `optional`
* districtId `optional`
* stateId `optional`
```
var votesmart = new VoteSmart()
var query = {
  "electionId": "1",
  "stageId": "G",
  "stateId": "CA"
};

votesmart.Election().stageCandidates(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
***

##### Leadership Module

###### GET positions()
Grab leadership positions by stateId and officeId

**Input:**
* stateId `optional`
* officeId `optional`
```
var votesmart = new VoteSmart()
var query = {
  "stateId": "AZ"
};

votesmart.Leadership().positions(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET officials()
Grab officials that hold the leadership role in certain states.

**Input:**
* leadershipId
* stateId `optional`
```
var votesmart = new VoteSmart()
var query = {
  "leadershipId": "138",
  "stateId": "AZ"
};

votesmart.Leadership().officials(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
***

##### Local Module

###### GET counties()
Grab counties by stateId.

**Input:**
* stateId
```
var votesmart = new VoteSmart()
var query = {
  "stateId": "AZ"
};

votesmart.Local().counties(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET cities()
Grab cities by stateId.

**Input:**
* stateId
```
var votesmart = new VoteSmart()
var query = {
  "stateId": "AZ"
};

votesmart.Local().cities(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET officials()
Grab official by locality.

**Input:**
* localId
```
var votesmart = new VoteSmart()
var query = {
  "localId": "1419"
};

votesmart.Local().officials(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
***

##### Npat Module

###### GET npat()
Grab a candidate's most recently filled out NPAT/PCT.

**Input:**
* candidateId
```
var votesmart = new VoteSmart()
var query = {
  "candidateId": "1"
};

votesmart.Npat().npat(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
***

##### Office Module

###### GET types()
Grab all office types.

**Input:**
* None
```
var votesmart = new VoteSmart()

votesmart.Office().types(function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET branches()
Grab all of the branches of government and their IDs.

**Input:**
* None
```
var votesmart = new VoteSmart()

votesmart.Office().branches(function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET levels()
Grab all of the levels of government and their IDs.

**Input:**
* None
```
var votesmart = new VoteSmart()

votesmart.Office().levels(function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET officesByType()
Grab offices by officeTypeId.

**Input:**
* officeTypeId
```
var votesmart = new VoteSmart()
var data = {
  "officeTypeId": "P"
};

votesmart.Office().officesByType(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET officesByLevel()
Grab offices by levelId.

**Input:**
* levelId
```
var votesmart = new VoteSmart()
var data = {
  "levelId": "F"
};

votesmart.Office().officesByTypeLevel(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET officesByTypeLevel()
Grab offices by officeTypeId and officeLevelId.

**Input:**
* officeTypeId
* officeLevelId
```
var votesmart = new VoteSmart()
var data = {
  "officeTypeId": "P",
  "officeLevelId": "F"
};

votesmart.Office().officesByTypeLevel(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET officesByBranchLevel()
Grab offices by branchId and levelId.

**Input:**
* officeBranchId
* officeLevelId
```
var votesmart = new VoteSmart()
var data = {
  "officeBranchId": "E",
  "officeLevelId": "F"
};

votesmart.Office().officesByBranchLevel(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
***

##### Officials Module

###### GET statewide()
Grab a list of officials by stateId.

**Input:**
* stateId
```
var votesmart = new VoteSmart()
var data = {
  "stateId": "AZ"
};

votesmart.Officials().statewide(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET byOfficeState()
Grab a list of officials according to officeId and stateId.

**Input:**
* officeId
* stateId `optional`
```
var votesmart = new VoteSmart()
var data = {
  "officeId": "430",
  "stateId": "AZ"
};

votesmart.Officials().byOfficeState(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET byOfficeTypeState()
Grab a list of officials according to officeTypeId and stateId.

**Input:**
* officeTypeId
* stateId `optional`
```
var votesmart = new VoteSmart()
var data = {
  "officeTypeId": "N",
  "stateId": "AZ"
};

votesmart.Officials().byOfficeTypeState(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET byLastName()
Grab a list of officials by lastName.

**Input:**
* lastName
```
var votesmart = new VoteSmart()
var data = {
  "lastName": "Obama"
};

votesmart.Officials().byLastName(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET byLevenshtein()
Grab a list of officials by a fuzzy lastName match.

**Input:**
* lastName
```
var votesmart = new VoteSmart()
var data = {
  "lastName": "Obama"
};

votesmart.Officials().byLevenshtein(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET byDistrict()
Grab a list of officials by the districtId they are running for.

**Input:**
* districtId
```
var votesmart = new VoteSmart()
var data = {
  "districtID": "30903"
};

votesmart.Officials().byDistrict(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET byZip()
Grab a list of officials by the zip5 they represent.

**Input:**
* zip5
* zip4 `optional`
```
var votesmart = new VoteSmart()
var data = {
  "zip5": "85716"
};

votesmart.Officials().byZip(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
***

##### Rating Module

###### GET categories()
Grab categories that contain released ratings by stateId.

**Input:**
* stateId
```
var votesmart = new VoteSmart()
var data = {
  "stateId": "AZ"
};

votesmart.Rating().categories(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET sigList()
Grab special interest groups by categoryId and stateId.

**Input:**
* categoryId
* stateId `optional`
```
var votesmart = new VoteSmart()
var data = {
  "categoryId": "2",
  "stateId": "AZ"
};

votesmart.Rating().sigList(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET sig()
Grab detailed information for a special interest group.

**Input:**
* sigId
```
var votesmart = new VoteSmart()
var data = {
  "sigId": "150"
};

votesmart.Rating().sig(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET sigRatings()
Grab all ratings for a special interest group.

**Input:**
* sigId
```
var votesmart = new VoteSmart()
var data = {
  "sigId": "150"
};

votesmart.Rating().sigRatings(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET candidateRating()
Grab a candidate's rating by a special interest group.

**Input:**
* candidateId
* sigId `optional`
```
var votesmart = new VoteSmart()
var data = {
  "candidateId": "68079",
  "sigId": "150"
};

votesmart.Rating().candidateRating(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET rating()
Grab all candidate ratings from a scorecard by a special interest group.

**Input:**
* ratingId
```
var votesmart = new VoteSmart()
var data = {
  "ratingId": "7516"
};

votesmart.Rating().rating(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
***

##### State Module

###### GET stateIds()
Grab a list of state IDs and names.

**Input:**
* None
```
var votesmart = new VoteSmart()

votesmart.State().stateIds(function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET state()
Grab various data about a state by stateId.

**Input:**
* stateId
```
var votesmart = new VoteSmart()
var data = {
  "stateId": "AZ"
};

votesmart.State().state(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
***

##### Votes Module

###### GET categories()
Grab categories that contain released bills according to year and stateId.

**Input:**
* year
* stateId `optional`
```
var votesmart = new VoteSmart()
var data = {
  "year": "2012",
  "stateId": "AZ"
};

votesmart.Votes().categories(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET bill()
Grab general information about a bill.

**Input:**
* billId
```
var votesmart = new VoteSmart()
var data = {
  "billId": "15049"
};

votesmart.Votes().bill(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET billAction()
Grab detailed action information on a certain stage of a bill.

**Input:**
* actionId
```
var votesmart = new VoteSmart()
var data = {
  "actionId": "39537"
};

votesmart.Votes().billAction(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET billActionVotes()
Grab votes listed by a candidate on a certain bill action.

**Input:**
* actionId
```
var votesmart = new VoteSmart()
var data = {
  "actionId": "39537"
};

votesmart.Votes().billActionVotes(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET billActionVoteByOfficial()
Grab a single vote by actionId and candidateId.

**Input:**
* actionId
* candidateId
```
var votesmart = new VoteSmart()
var data = {
  "actionId": "39537",
  "candidateId": "3118"
};

votesmart.Votes().billActionVoteByOfficial(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET byBillNumber()
Grab a list of bills according to billNumber.

**Input:**
* billNumber
```
var votesmart = new VoteSmart()
var data = {
  "billNumber": "HB 2780"
};

votesmart.Votes().byBillNumber(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET billsByCategoryYearState()
Grab a list of bills by categoryId, year and stateId.

**Input:**
* categoryId
* year
* stateId `optional`
```
var votesmart = new VoteSmart()
var data = {
  "categoryId": "4",
  "stateId": "AZ",
  "year": "2012"
};

votesmart.Votes().billsByCategoryYearState(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET billsByYearState()
Grab a list of bills by year and stateId.

**Input:**
* year
* stateId `optional`
```
var votesmart = new VoteSmart()
var data = {
  "year": "2012",
  "stateId": "AZ"
};

votesmart.Votes().billsByYearState(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET billsByOfficialYearOffice()
Grab a list of bills by candidateId, year and officeId.

**Input:**
* candidateId
* year
* officeId `optional`
```
var votesmart = new VoteSmart()
var data = {
  "candidateId": "3118",
  "year": "2012",
  "officeId": "3"
};

votesmart.Votes().billsByOfficialYearOffice(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET billsByOfficialCategoryOffice()
Grab a list of bills by candidateId, categoryId and officeId.

**Input:**
* candidateId
* categoryId
* officeId `optional`
* year `optional`
```
var votesmart = new VoteSmart()
var data = {
  "candidateId": "3118",
  "categoryId": "5",
  "officeId": "3",
  "year": "2012"
};

votesmart.Votes().billsByOfficialCategoryOffice(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET byOfficial()
Grab all the bills an official has voted on by candidateId, officeId, categoryId and year.

**Input:**
* candidateId
* officeId `optional`
* categoryId `optional`
* year `optional`
```
var votesmart = new VoteSmart()
var data = {
  "candidateId": "3118",
  "year": "2012",
  "officeId": "3",
  "categoryId": "5"
};

votesmart.Votes().byOfficial(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET billsBySponsorYear()
Grab a list of bills that fit a sponsor's candidateId and year.

**Input:**
* candidateId
* year
```
var votesmart = new VoteSmart()
var data = {
  "candidateId": "28241",
  "year": "2012"
};

votesmart.Votes().billsBySponsorYear(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET billsBySponsorCategory()
Grab a list of bills that fit a sponsor's candidateId and category.

**Input:**
* candidateId
* categoryId
```
var votesmart = new VoteSmart()
var data = {
  "candidateId": "28241",
  "categoryId": "5"
};

votesmart.Votes().billsBySponsorCategory(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET billsByStateRecent()
Grab a list of bills by stateId.  Max returned is 100 or however much less you specify.

**Input:**
* amount `optional - default: 100, max: 100`
* stateId `optional - default "NA"`
```
var votesmart = new VoteSmart()
var data = {
  "amount": "50",
  "stateId": "AZ"
};

votesmart.Votes().billsByStateRecent(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```
###### GET vetoes()
Grab a list of vetoes by candidateId.

**Input:**
* candidateId
```
var votesmart = new VoteSmart()
var data = {
  "candidateId": "3118",
};

votesmart.Votes().vetoes(query, function (err, res) {
  if (err) throw err;
  else console.log(res);
});
```