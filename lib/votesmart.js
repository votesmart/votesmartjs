(function () {

  function VoteSmart () {
    this.init(arguments[0]);
  }

  VoteSmart.prototype.init = function (baseUrl, output) {
    this.baseUrl = baseUrl ? baseUrl : 'http://localhost:3030/proxy/';
    this.output = output ? output : 'JSON';
  }

  VoteSmart.prototype.Address = function () {
    return {
      campaign: function (constructor, callback) {
        // candidateId
        constructor.resource = 'Address.getCampaign';
        this._request(constructor, callback);
      }.bind(this),

      campaignWebAddress: function (constructor, callback) {
        // candidateId
        constructor.resource = 'Address.getCampaignWebAddress';
        this._request(constructor, callback);
      }.bind(this),

      campaignByElection: function (constructor, callback) {
        // electionId
        constructor.resource = 'Address.getCampaignByElection';
        this._request(constructor, callback);
      }.bind(this),

      office: function (constructor, callback) {
        // candidateId
        constructor.resource = 'Address.getOffice';
        this._request(constructor, callback);
      }.bind(this),

      officeWebAddress: function (constructor, callback) {
        // candidateId
        constructor.resource = 'Address.getOfficeWebAddress';
        this._request(constructor, callback);
      }.bind(this),

      officeByOfficeState: function (constructor, callback) {
        // officeId, stateId
        constructor.resource = 'Address.getOfficeByOfficeState';
        this._request(constructor, callback);
      }.bind(this)
    }
  }

  VoteSmart.prototype.BallotMeasure = function () {
    return {
      measuresByYearState: function (constructor, callback) {
        // year, stateId
        constructor.resource = 'Measure.getMeasuresByYearState';
        this._request(constructor, callback);
      }.bind(this),

      measure: function (constructor, callback) {
        // measureId
        constructor.resource = 'Measure.getMeasure';
        this._request(constructor, callback);
      }.bind(this)
    }
  }

  VoteSmart.prototype.CandidateBio = function () {
    return {

      bio: function (constructor, callback) {
        // candidateId
        constructor.resource = 'CandidateBio.getBio';
        this._request(constructor, callback);
      }.bind(this),

      detailedBio: function (constructor, callback) {
        // candidateId
        constructor.resource = 'CandidateBio.getDetailedBio';
        this._request(constructor, callback);
      }.bind(this),

      additionalBio: function (constructor, callback) {
        // candidateId
        constructor.resource = 'CandidateBio.getAddlBio';
        this._request(constructor, callback);
      }.bind(this)
    }
  }

  VoteSmart.prototype.Candidates = function () {
    return {
      byOfficeState: function (constructor, callback) {
        // officeId, stateId, electionYear, stageId
        constructor.resource = 'Candidates.getByOfficeState';
        this._request(constructor, callback);
      }.bind(this),

      byOfficeTypeState: function (constructor, callback) {
        // officeId, stateId, electionYear, stageId
        constructor.resource = 'Candidates.getByOfficeTypeState';
        this._request(constructor, callback);
      }.bind(this),

      byLastName: function (constructor, callback) {
        // lastName, electionYear, stageId
        constructor.resource = 'Candidates.getByLastName';
        this._request(constructor, callback);
      }.bind(this),

      byLevenshtein: function (constructor, callback) {
        // officeId, electionYear, stageId
        constructor.resource = 'Candidates.getByLevenshtein';
        this._request(constructor, callback);
      }.bind(this),

      byElection: function (constructor, callback) {
        // electionId, stageId
        constructor.resource = 'Candidates.getByElection';
        this._request(constructor, callback);
      }.bind(this),

      byDistrict: function (constructor, callback) {
        // districtId, electionYear, stageId
        constructor.resource = 'Candidates.getByDistrict';
        this._request(constructor, callback);
      }.bind(this),

      byZip: function (constructor, callback) {
        // zip5, electionYear, zip4, stageId
        constructor.resource = 'Candidates.getByZip';
        this._request(constructor, callback);
      }.bind(this)
    }
  }

  VoteSmart.prototype.Committee = function () {
    return {
      types: function (callback) {
        // None
        var constructor = { resource: 'Committee.getTypes' };
        this._request(constructor, callback);
      }.bind(this),

      byTypeState: function (constructor, callback) {
        // typeId, stateId
        constructor.resource = 'Committee.getCommitteesByTypeState';
        this._request(constructor, callback);
      }.bind(this),

      committee: function (constructor, callback) {
        // committeeId
        constructor.resource = 'Committee.getCommittee';
        this._request(constructor, callback);
      }.bind(this),

      committeeMembers: function (constructor, callback) {
        // committeeId
        constructor.resource = 'Committee.getCommitteeMembers';
        this._request(constructor, callback);
      }.bind(this)
    }
  }

  VoteSmart.prototype.District = function () {
    return {
      byOfficeState: function (constructor, callback) {
        // officeId, stateId, districtName
        constructor.resource = 'District.getByOfficeState';
        this._request(constructor, callback);
      }.bind(this),

      byZip: function (constructor, callback) {
        // zip5, zip4
        constructor.resource = 'District.getByZip';
        this._request(constructor, callback);
      }.bind(this)
    }
  }

  VoteSmart.prototype.Election = function () {
    return {
      election: function (constructor, callback) {
        // electionId
        constructor.resource = 'Election.getElection';
        this._request(constructor, callback);
      }.bind(this),

      electionByYearState: function (constructor, callback) {
        // year, stateId
        constructor.resource = 'Election.getElectionByYearState';
        this._request(constructor, callback);
      }.bind(this),

      electionByZip: function (constructor, callback) {
        // zip5, zip4, year
        constructor.resource = 'Election.getElectionByZip';
        this._request(constructor, callback);
      }.bind(this),

      stageCandidates: function (constructor, callback) {
        // electionId, stageId, party, districtId, stateId
        constructor.resource = 'Election.getStageCandidates';
        this._request(constructor, callback);
      }.bind(this)
    }
  }

  VoteSmart.prototype.Leadership = function () {
    return {
      positions: function (constructor, callback) {
        // stateId, officeId
        // Handle optional parameters --
        if (typeof(arguments[0]) !== 'object') {
          var callback = constructor;
          var constructor = {};
        };
        constructor.resource = 'Leadership.getPositions';
        this._request(constructor, callback);
      }.bind(this),

      officials: function (constructor, callback) {
        // leadershipId, stateId
        constructor.resource = 'Leadership.getOfficials';
        this._request(constructor, callback);
      }.bind(this),
    }
  }

  VoteSmart.prototype.Local = function () {
    return {
      counties: function (constructor, callback) {
        // stateId
        constructor.resource = 'Local.getCounties';
        this._request(constructor, callback);
      }.bind(this),

      cities: function (constructor, callback) {
        // stateId
        constructor.resource = 'Local.getCities';
        this._request(constructor, callback);
      }.bind(this),

      officials: function (constructor, callback) {
        // localId
        constructor.resource = 'Local.getOfficials';
        this._request(constructor, callback);
      }.bind(this)
    }
  }

  VoteSmart.prototype.Npat = function () {
    return {
      npat: function (constructor, callback) {
        // candidateId
        constructor.resource = 'Npat.getNpat';
        this._request(constructor, callback);
      }.bind(this)
    }
  }

  VoteSmart.prototype.Office = function () {
    return {
      types: function (callback) {
        // None
        var constructor = { resource: 'Office.getTypes' };
        this._request(constructor, callback);
      }.bind(this),

      branches: function (callback) {
        // None
        var constructor = { resource: 'Office.getBranches' };
        this._request(constructor, callback);
      }.bind(this),

      levels: function (callback) {
        // None
        var constructor = { resource: 'Office.getLevels' };
        this._request(constructor, callback);
      }.bind(this),

      officesByType: function (constructor, callback) {
        // officeTypeId
        constructor.resource = 'Office.getOfficesByType';
        this._request(constructor, callback);
      }.bind(this),

      officesByLevel: function (constructor, callback) {
        // levelId
        constructor.resource = 'Office.getOfficesByLevel';
        this._request(constructor, callback);
      }.bind(this),

      officesByTypeLevel: function (constructor, callback) {
        // officeTypeId, officeLevelId
        constructor.resource = 'Office.getOfficesByTypeLevel';
        this._request(constructor, callback);
      }.bind(this),

      officesByBranchLevel: function (constructor, callback) {
        // branchId, levelId
        constructor.resource = 'Office.getOfficeByBranchLevel';
        this._request(constructor, callback);
      }.bind(this)
    }
  }

  VoteSmart.prototype.Officials = function () {
    return {
      statewide: function (constructor, callback) {
        // stateId
        constructor.resource = 'Officials.getStatewide';
        this._request(constructor, callback);
      }.bind(this),

      byOfficeState: function (constructor, callback) {
        // officeId, stateId
        constructor.resource = 'Officials.getByOfficeState';
        this._request(constructor, callback);
      }.bind(this),

      byOfficeTypeState: function (constructor, callback) {
        // officeTypeId, stateId
        constructor.resource = 'Officials.getByOfficeTypeState';
        this._request(constructor, callback);
      }.bind(this),

      byLastName: function (constructor, callback) {
        // lastName
        constructor.resource = 'Officials.getByLastname';
        this._request(constructor, callback);
      }.bind(this),

      byLevenshtein: function (constructor, callback) {
        // lastname
        constructor.resource = 'Officials.getByLevenshtein';
        this._request(constructor, callback);
      }.bind(this),

      byDistrict: function (constructor, callback) {
        // districtId
        constructor.resource = 'Officials.getByDistrict';
        this._request(constructor, callback);
      }.bind(this),

      byZip: function (constructor, callback) {
        // zip5, zip4
        constructor.resource = 'Officials.getByZip';
        this._request(constructor, callback);
      }.bind(this)
    }
  }

  VoteSmart.prototype.Rating = function () {
    return {
      categories: function (constructor, callback) {
        // stateId
        constructor.resource = 'Rating.getCategories';
        this._request(constructor, callback);
      }.bind(this),

      sigList: function (constructor, callback) {
        // categoryId, stateId
        constructor.resource = 'Rating.getSigList';
        this._request(constructor, callback);
      }.bind(this),

      sig: function (constructor, callback) {
        // sigId
        constructor.resource = 'Rating.getSig';
        this._request(constructor, callback);
      }.bind(this),

      sigRatings: function (constructor, callback) {
        // sigId
        constructor.resource = 'Rating.getSigRatings';
        this._request(constructor, callback);
      }.bind(this),

      candidateRating: function (constructor, callback) {
        // candidateId, sigId
        constructor.resource = 'Rating.getCandidateRating';
        this._request(constructor, callback);
      }.bind(this),

      rating: function (constructor, callback) {
        // ratingId
        constructor.resource = 'Rating.getRating';
        this._request(constructor, callback);
      }.bind(this)
    }
  }

  VoteSmart.prototype.State = function () {
    return {
      stateIds: function (callback) {
        // None
        var constructor = { resource: 'State.getStateIDs' };
        this._request(constructor, callback);
      }.bind(this),

      state: function (constructor, callback) {
        // stateId
        constructor.resource = 'State.getState';
        this._request(constructor, callback);
      }.bind(this)
    }
  }

  VoteSmart.prototype.Votes = function () {
    return {
      categories: function (constructor, callback) {
        // year, stateId
        constructor.resource = 'Votes.getCategories';
        this._request(constructor, callback);
      }.bind(this),

      bill: function (constructor, callback) {
        // billId
        constructor.resource = 'Votes.getBill';
        this._request(constructor, callback);
      }.bind(this),

      billAction: function (constructor, callback) {
        // actionId
        constructor.resource = 'Votes.getBillAction';
        this._request(constructor, callback);
      }.bind(this),

      billActionVotes: function (constructor, callback) {
        // actionId
        constructor.resource = 'Votes.getBillActionVotes';
        this._request(constructor, callback);
      }.bind(this),

      billActionVoteByOfficial: function (constructor, callback) {
        // actionId, candidateId
        constructor.resource = 'Votes.getBillActionVoteByOfficial';
        this._request(constructor, callback);
      }.bind(this),

      byBillNumber: function (constructor, callback) {
        // billNumber
        constructor.resource = 'Votes.getByBillNumber';
        this._request(constructor, callback);
      }.bind(this),

      billsByCategoryYearState: function (constructor, callback) {
        // catgoryId, year, stateId
        constructor.resource = 'Votes.getBillsByCategoryYearState';
        this._request(constructor, callback);
      }.bind(this),

      billsByYearState: function (constructor, callback) {
        // year, stateId
        constructor.resource = 'Votes.getBillsByYearState';
        this._request(constructor, callback);
      }.bind(this),

      billsByOfficialYearOffice: function (constructor, callback) {
        // candidateId, year, officeId
        constructor.resource = 'Votes.getBillsByOfficialYearOffice';
        this._request(constructor, callback);
      }.bind(this),

      billsByOfficialCategoryOffice: function (constructor, callback) {
        // candidateId, categoryId, officeId, year
        constructor.resource = 'Votes.getBillsByOfficialYearOffice';
        this._request(constructor, callback);
      }.bind(this),

      byOfficial: function (constructor, callback) {
        // candidateId, officeId, categoryId, year
        constructor.resource = 'Votes.getByOfficial';
        this._request(constructor, callback);
      }.bind(this),

      billsBySponsorYear: function (constructor, callback) {
        // candidateId, year
        constructor.resource = 'Votes.getBillsBySponsorYear';
        this._request(constructor, callback);
      }.bind(this),

      billsBySponsorCategory: function (constructor, callback) {
        // candidateId, categoryId
        constructor.resource = 'Votes.getBillsBySponsorCategory';
        this._request(constructor, callback);
      }.bind(this),

      billsByStateRecent: function (constructor, callback) {
        // amount (max: 100), stateId
        constructor.resource = 'Votes.getBillsByStateRecent';
        this._request(constructor, callback);
      }.bind(this),

      vetoes: function (constructor, callback) {
        // candidateId
        constructor.resource = 'Votes.getVetoes';
        this._request(constructor, callback);
      }.bind(this)
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
    return '?key=API_KEY&o=' + this.output + '&' + query;
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
    module.exports = VoteSmart;
  }
  // <script> tag
  else {
    this.VoteSmart = VoteSmart;
  }

})();