const PubSub = require('../helpers/pub_sub');
const Country = require('../models/country')

const CountrySelectView = function(element) {
  this.element = element;
  console.log(this.element);
};

CountrySelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Country:country-loaded', (event) => {
    const allCountries = event.detail;
    console.log(allCountries);
    this.populate(allCountries);
  })
}


CountrySelectView.prototype.populate = function (allCountryData) {
  allCountryData.forEach((country, index) => {
    const option = document.createElement('option');
    option.textContent = country.name;
    option.vaue = index;
    this.element.appendChild(option);
  });

};

module.exports = CountrySelectView;
