
// Task - 41:

// 41. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.


let magician = ['Rana', 'Muhammad', 'Reebaal', 'Hussain'];
let magician_copy = ['Rana', 'Muhammad', 'Reebaal', 'Hussain']

function make_great(){
    for (let i = 0; i < magician_copy.length; i++){
        magician_copy[i] += ' the great'
    }
};
console.log(make_great());
// This is the new array stored in a new variable
let new_array = magician_copy

function show_magicians(name){
    for (let i = 0; i < name.length; i++){
        console.log(name[i])
    }
};
// NOTE:
// This is the original array
console.log(show_magicians(magician));
// NOTE:
// This is the array added with the phrase "the great"
console.log(show_magicians(new_array));



