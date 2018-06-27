const CountrySelectView = require('./views/country_select_view');
const Country = require('./models/country');

document.addEventListener('DOMContentLoaded', () => {

  const country = new Country();
  country.getData();

  const selectElement = document.querySelector('select#countries');
  const countryDropdown = new CountrySelectView(selectElement);
  countryDropdown.bindEvents();
});
