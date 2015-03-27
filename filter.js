// Turn raw data fetched from our private API into an array of
// happy URLs. For obvious reasons, `raw.js` is not in this repo.

var _ = require('lodash');
var data = require('./raw.js');

data = _.pluck(data, 'final_production_url');

data = _.filter(data, function(url) {
  if (!url) {
    return false;
  }
  if (url.match(/\-prod/)) {
    return false;
  }
  if (url.match(/darienst/)) {
    return false;
  }
  return true;
});

data = _.map(data, function(url) {
  url = url.trim();
  if (!url.match(/http/)) {
    url = 'http://' + url;
  }
  return url;
});

console.log(data);
