let firstNames = require("../utilities/utils/index");
let pNames = require("../country/state/city/index");
function getPeopleInCity(pNames) {
  return firstNames(pNames);
}

module.exports = getPeopleInCity;
