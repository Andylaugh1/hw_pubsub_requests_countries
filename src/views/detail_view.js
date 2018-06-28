const PubSub = require('../helpers/pub_sub');

const DetailView = function (container) {
  this.container = container;
};

DetailView.prototype.bindEvents = function () {
  PubSub.subscribe('Country:selected-country-ready', (event) => {
    selectedCountry = event.detail;
    console.log(selectedCountry);
    this.render(selectedCountry);
  })
}

DetailView.prototype.render = function (countryData) {
  this.container.innerHTML = '';

  const countryName = this.createElement('h1', country.name);
  this.container.appendChild(countryName);

  const countryRegion = this.createElement('h2', country.region);
  this.container.appendChild(countryRegion);
}

DetailView.prototype.createElement = function (elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
};

module.exports = DetailView;
