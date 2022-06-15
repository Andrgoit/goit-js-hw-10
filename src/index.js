import './css/styles.css';
const debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 1000;

const refs = {
  input: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('country-info'),
};

refs.input.addEventListener('input', debounce(inputHandler, DEBOUNCE_DELAY));

function inputHandler(e) {
  e.preventDefault();

  const form = e.target.value;
  console.log(form);

  fetchCountries(form).then(countries => {
    // console.log(countries);
    if (countries.length > 10) {
      console.log(
        '1 Too many matches found. Please enter a more specific name.'
      );
      return;
    } else if (countries.length > 1 && countries.length < 10) {
      markupListCountries(countries);
    } else if (countries.length === 1) {
      markupCountry(countries);
    } else {
      console.log('Непонятная длинна массива');
    }
  });
}

function markupCountry(countries) {
  // console.log('countries', countries);
  // const markup = countries.map(counrty => {
  //   return ``;
  // });
}
function markupListCountries(countries) {
  // console.log('countriesList', countries);
  // const markup = countries
  //   .map(country => {
  //     return `<li>
  //   <img class = "flag" src = ${svg} alt ="flag">
  //   <p>${common}</p>
  //   </li>`;
  //   })
  //   .join('');
  // refs.countryList.innerHTML = markup;
}

function fetchCountries(name) {
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
  )
    .then(response => {
      return response.json;
    })
    .catch(error => {
      console.log(error);
    });
}

//   ({ flags: { svg }, name: { official }, capital, languages }) => {
//     console.log();
//   }
