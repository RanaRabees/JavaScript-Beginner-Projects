
// Task - 24:

// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
// If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

// --------------------------------------------------------------



// • Tests for equality and inequality with strings
// "FALSE:"
let my_name = "Reebaal";
let behaviour = "He is a good boy";
console.log("Is Reebaal a good boy?")
console.log(my_name == behaviour);
// "TRUE:"
let my_city = "My city is very beautiful...";
let my_country = "My city is very beautiful..."
console.log("Is Pakistan a beautiful country?")
console.log(my_city == my_country);


// • Tests using the lower case function
// "FALSE:"
let name1 = "Reebaal";
let name2 = "rEEbaAL";
console.log("Are both my names?")
console.log(name1.toLowerCase() == name2);
// "TRUE:"
let name3 = "Reebaal";
let name4 = "rEEbaAL";
console.log("Are both my names?")
console.log(name1.toLowerCase() == name2.toLowerCase());


// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// "TRUE:"
let num1 = 12*12
let num2 = 200/2+84-40
console.log("Are both numbers equal?")
console.log(num1==num2)
// "FALSE:"
let num3 = 64
let num4 = 418
console.log("Is num3 greater than num4?")
console.log(num3>=num4) 


// • Tests using "and" and "or" operators
// "FALSE:"
let country1 = "Pakistan";
let country2 = "Turkey";
let country3 = "China";
let country4 = "Korea";
console.log("Do all countries have same culture?")
console.log(country1 && country2 == country3 && country4);
// "True:"
let country5 = "China";
let country6 = "Turkey";
let country7 = "China";
let country8 = "Turkey";
console.log("All the countries are friend?")
console.log((country5 == country7 || country6 == country8));


// • Test whether an item is in a array:
let arr1 = [1,2,3,4,5,6,7,8,9,10]
console.log("Is this item is present in array?")
console.log(arr1[1] in arr1);


// • Test whether an item is not in a array
let arr2 = [1,2,3,4,5,6,7,8,9,10]
console.log("Is this item is present in array?")
console.log(arr1[12] in arr1);











