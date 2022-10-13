
// Task - 30:

// 30. Checking Usernames: Do the following to create a program that simulates
//  how websites ensure that everyone has a unique username.

// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users.
//   Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used.
//   If it has, print a message that the person will need to enter anew username. 
//   If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. 
// If 'John' has been used, 'JOHN' should not be accepted.


let current_users = ['Ahmad', 'Rana', 'Muhammad', 'Reebaal', 'HUSSAIN'];
const lower1 = current_users.map(a => {return a.toLowerCase()});
// The function is completely case insensitive,,,
let new_users = ['Imran', 'Arslan', 'Hussain', 'Rabees', 'AHMAD'];
const lower2 = new_users.map(a => {return a.toLowerCase()});
// The function is completely case insensitive,,,
for (let i = 0; i < lower2.length; i++){
   if (lower1.indexOf(lower2[i]) >= 0) {
        console.log(`${lower2[i]} this username is not available, enter a new number`)
   }else{
        console.log(`${lower2[i]} this username is available.`)
   }
};

