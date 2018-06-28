const PubSub = require('../helpers/pub_sub');
const Request = require('../helpers/request');

const Country = function() {
  this.text = null;
};

Country.prototype.handleSelection = function () {
  PubSub.subscribe('SelectView:change', (event) => {
    const selectedCountry = event.detail;
    PubSub.publish('Country:selected-country-ready', selectedCountry)
  });
};


Country.prototype.getData = function () {
  const request = new Request('https://restcountries.eu/rest/v2/all');

  request.get((countryData) => {
    PubSub.publish('Country:country-loaded', countryData)
  });
};


module.exports = Country;
