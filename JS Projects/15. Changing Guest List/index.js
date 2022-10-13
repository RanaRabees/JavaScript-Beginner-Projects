
// Task - 15:

// 15. Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still
// in your list.


let guests = ["GrandMother", "Mother", "Father"];
for(let i = 0; i < guests.length; i++){
    console.log(`Dear ${guests[i]}, I would like to invite you for the dinner tonight kindly spare us some time.`);
}
console.log(`\nOops!!!!!! ${guests[2]}, can't join us for dinner today cause they are busy in meeting tonight.....\n`);
guests[2] = "Sister";
for(let i = 0; i < guests.length; i++){
    console.log(`Dear ${guests[i]}, I would like to invite you for the dinner tonight kindly spare us some time.`);
}