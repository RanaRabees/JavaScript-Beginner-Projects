
// Task - 16:

// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.

let guests = ["GrandMother", "Mother", "Father"];
for(let i = 0; i < guests.length; i++){
    console.log(`Dear ${guests[i]}, I would like to invite you for the dinner tonight kindly spare us some time.`);
}
console.log(`\nOops!!!!!! ${guests[2]}, can't join us for dinner today cause they are busy in meeting tonight.....\n`);
guests[2] = "Sister";
for(let i = 0; i < guests.length; i++){
    console.log(`Dear ${guests[i]}, I would like to invite you for the dinner tonight kindly spare us some time.`);
}
console.log(`\nWOW!!!!!! ${guests[0]}, ${guests[1]}, ${guests[2]}, gladly we found an amazing dinner table so we could invite more peoples to join the fun...\n`);

guests.splice(0, 0, "Brother");
guests.splice(2, 0, "Uncle");
// NOTE:
// Sometimes you need to append one or more new values at the end of an array.
// In this situation the push() method is what you need. 
// This method accepts an unlimited number of arguments, 
// and you can add as many elements as you want at the end of the array.
// So the "push()" method is used instead of "append()"....
guests.push("Aunty");

for(let i = 0; i < guests.length; i++){
    console.log(`Dear ${guests[i]}, I would like to invite you for the dinner tonight kindly spare us some time.`);
}

