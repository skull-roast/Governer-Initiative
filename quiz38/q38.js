"use strict";
//Cities: Write a function called describe_city() that accepts the name of a city and its country.
// The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city, country = "Pakistan") {
    return console.log(`${city} is in ${country}`);
}
//describing first city with default country
describe_city("Karachi");
//describing 2nd city with default country
describe_city("Lahore");
//describing 3rd city not in default country
describe_city("Makkah", "Saudi Arabia");
