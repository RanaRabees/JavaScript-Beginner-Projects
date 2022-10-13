
// Task - 36:

// 36. Cities: Write a function called describe_city() that accepts the name of
// a city and its country. The function should print a simple sentence, such as
// Karachi is in Pakistan. Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the
// default country.


function describe_city(city, country="Pakistan"){
    return `${city} is a beautiful city of ${country}`
}
console.log(describe_city("Islamabad"));
console.log(describe_city("Karachi"));
// NOTE:
// Shanghai is not in our default country,,,
console.log(describe_city("Shanghai"));






