
// Task - 17:

// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.

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
console.log(`Alas!!!!!! ${guests[0]}, ${guests[1]}, ${guests[2]}, ${guests[3]}, ${guests[4]}, and ${guests[5]} I am very sorry to say that there's a problem with the table space so all of you can't be managed...\n`);
console.log(guests)
for(let i = 0; i < 4; i++){
    console.log(`${guests.splice(0, 1)} I am very sorry about this next time maybe...`)
}
console.log(`Dear ${guests[0]}, somehow I managed to create space you are still invited Please join us...`);
console.log(`Dear ${guests[1]}, somehow I managed to create space you are still invited Please join us...`);
guests.pop();
guests.pop();
console.log(guests)
console.log("that was crazy!!!! no one is invited to dinner Now😂🤣😂")