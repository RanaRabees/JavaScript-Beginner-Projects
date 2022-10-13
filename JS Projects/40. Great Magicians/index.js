
// Task - 40:

// 40. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.

let magician = ['Rana', 'Muhammad', 'Reebaal', 'Hussain'];

function make_great(){
    for (let i = 0; i < magician.length; i++){
        magician[i] += ' the great'
    }
};
console.log(make_great());

function show_magicians(name){
    for (let i = 0; i < name.length; i++){
        console.log(name[i])
    }
};
console.log(show_magicians(magician));


