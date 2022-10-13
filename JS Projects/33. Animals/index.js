
// Task - 33:

// 33. Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to
// print out the name of each animal.
// • Modify your program to print a statement about each animal, such as
// A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in
// common. You could print a sentence such as Any of these animals would
// make a great pet!


let animals = ['Horse', 'Dog', 'Cat'];

for (let i = 0; i < animals.length; i++){
    if (animals[i] == animals[0])
    console.log(`${animals[0]} is very powerful and intelligent animal.`);
    else if (animals[i] == animals[1])
    console.log(`${animals[1]} is a very loyal animal.`);
    else if (animals[i] == animals[2])
    console.log(`${animals[2]} is very cute and could be a good pet.`);
};
console.log 
(
'\nAll of these animals have many common qualities,\n',
'They all have four legs, and two eyes.\n',
'All of them are human friendly.\n',
)


