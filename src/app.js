const CountrySelectView = require('./views/country_select_view');
const Country = require('./models/country');
const DetailView = require('./views/detail_view');

document.addEventListener('DOMContentLoaded', () => {

  const country = new Country();
  country.getData();

  const selectElement = document.querySelector('select#countries');
  const countryDropdown = new CountrySelectView(selectElement);
  countryDropdown.bindEvents();

  const displayElement = document.querySelector('div#country');
  const detailViewer = new DetailView(displayElement);
  detailViewer.bindEvents();
});
