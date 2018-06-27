const PubSub = require('../helpers/pub_sub');
const Request = require('../helpers/request');

const Country = function() {
  this.text = null;
};

Country.prototype.getData = function () {
  const request = new Request('https://restcountries.eu/rest/v2/all');


  request.get((countryData) => {
    PubSub.publish('Country:country-loaded', countryData)
    console.log(countryData);

  });
};


module.exports = Country;
