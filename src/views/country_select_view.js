const PubSub = require('../helpers/pub_sub');
const Country = require('../models/country')

const CountrySelectView = function(element) {
  this.element = element;
};

CountrySelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Country:country-loaded', (event) => {
    const allCountries = event.detail;
    this.populate(allCountries);
  });

  this.element.addEventListener('change', (event) => {
    const selectedName = event.target.value;
    PubSub.publish('SelectView:change', selectedName);
  });
};


CountrySelectView.prototype.populate = function (allCountryData) {
  allCountryData.forEach((country, index) => {
    const option = document.createElement('option');
    option.textContent = country.name;
    option.vaue = index;
    this.element.appendChild(option);
  });

};

module.exports = CountrySelectView;
