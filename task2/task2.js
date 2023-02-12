//OBJEKTY
const countriesPopulation = [
  { country: "China", population: 1439323776 },
  { country: "India", population: 1379302771 },
  { country: "USA", population: 331002651 },
  { country: "Indonesia", population: 269603400 },
  { country: "Pakistan", population: 220892340 },
  { country: "Bangladesh", population: 164970459 },
  { country: "Japan", population: 126451398 },
  { country: "Philippines", population: 109581078 },
  { country: "Vietnam", population: 97338579 },
  { country: "Turkey", population: 84339642 },
];

const populationTotal = 8000000000;

//FUNKCE PRO VÝPOČET PROCENTA

countriesPopulation.forEach(percentageOfPopulation);

function percentageOfPopulation(data) {
  let percentage = ((data.population / populationTotal) * 100).toFixed(2);
  console.log(`${data.country} ${percentage}%`);
}

//VYTVOŘENÍ KOPIE POLE

const copyCountries = countriesPopulation.slice();
console.log(copyCountries);

//SEŘAZENÍ DLE POČTU OBYVATEL

const sortsCountriesPopulation = function (arrayCopyCountries) {
  arrayCopyCountries.sort(function (a, b) {
    if (a.population < b.population) {
      return -1;
    } else if (b.population < a.population) {
      return 1;
    } else {
      return 0;
    }
  });
};

sortsCountriesPopulation(copyCountries);

//NOVÁ VLASTNOST ID

copyCountries.forEach(addId);
function addId(data, index) {
  let letters = data.country.substr(0, 3);
  data.id = letters + index;
}
console.log(copyCountries);

//NOVÁ VLASTNOST PERCENTAGE

copyCountries.forEach(addPercentage);

function addPercentage(data) {
  let percentageValue = ((data.population / populationTotal) * 100).toFixed(2);
  data.percentage = `${percentageValue}`;
}
console.log(copyCountries);

//VYTVOŘENÍ A NAPLNĚNÍ NOVÉHO POLE

const newArray = [];

copyCountries.forEach(fill);
function fill(data) {
  if (
    data.country.length > 4 &&
    data.country.length <= 8 &&
    data.percentage > 1.5 &&
    data.percentage < 10
  ) {
    newArray.push(data);
  }
}
console.log(newArray);
