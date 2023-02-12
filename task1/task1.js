
//Veronika Gabrielová

//***************************************************POLE****************************************************
const countries = [
  "United States",
  "China",
  "India",
  "Indonesia",
  "Brazil",
  "Pakistan",
  "Nigeria",
  "Bangladesh",
  "Russia",
  "Mexico",
  "Japan",
  "Philippines",
  "Vietnam",
  "Ethiopia",
  "Egypt",
  "Iran",
  "Turkey",
  "Democratic Republic of the Congo",
  "Thailand",
  "Myanmar",
];

//*************************************************PRVNÍ ČÁST***********************************************

function checkCountry(country, countries){
    if (typeof country !== "string" || country.length <= 0){
        console.log(`Zadali jste neplatný dotaz ${country}.`)
    } else if (countries.includes(country)){
        let index = countries.indexOf(country)
        console.log(`Zadaná krajina ${country} se nachází na seznamu krajin na indexu ${index}.`)
    }else {console.log(`Zadaná krajina ${country} se nenachází v seznamu krajin.`)}
  
  }
checkCountry("Germany", countries);
checkCountry("United States", countries);
checkCountry(1000, countries);
checkCountry("", countries);


//************************************************DRUHÁ ČÁST************************************************

function addCountry(country, countries) {
  if (typeof country !== "string" || country.length <= 0) {
    console.log(`Zadali jste neplatný dotaz: ${country}`);
  } else if (countries.includes(country)) {
    let index = countries.indexOf(country);
    console.log(
      `Zadaná krajina ${country} se nachází v seznamu krajin na indexu ${index}.`
    );
  } else if (!countries.includes(country)) {
    countries.push(country);
    let index = countries.indexOf(country);
    console.log(
      `Zadaná krajina ${country} byla úspěšně přidána do seznamu krajin na index ${index}.Celkový počet krajin v seznamu je ${countries.length}.`
    );
  }
}

addCountry("Vietnam", countries);
addCountry("Mexico", countries);
addCountry("Poland", countries);
addCountry("", countries);
console.log(countries);

//***********************************************TŘETÍ ČÁST**************************************************

function removeCountry(country, countries){
    if (typeof country !== "string" || country.length <= 0){
        console.log(`Zadali jste neplatný dotaz: ${country}`)
    } else if (countries.includes(country)){
        let index = countries.indexOf(country)
        countries.pop(index)
        console.log(`Zadaná krajina ${country} byla odstraněna se seznamu krajin na indexu ${index}. Aktuální počet krajin v seznamu je ${countries.length}.

        `)
    }else if(!countries.includes(country)){
        console.log(`Zadaná krajina ${country} se v seznamu nenachází.`)
    }
}


removeCountry("", countries);
removeCountry("Vietnam", countries);
removeCountry("Laos", countries);
removeCountry("Thailand", countries);
console.log(countries)

