

// Task - 28:

// 28. Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
// Imagine you are writing code that will print a greeting to each userafter they 
// log in to a website. Loop through the array, and print a greeting to each user:

// • If the username is 'admin', print a special greeting, such as Hello admin,
//  would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.


let user_names = ['admin', 'Rana', 'Muhammad', 'Reebaal', 'Hussain'];
for (let i = 0; i < user_names.length; i++){
    if (user_names[i] == 'admin'){
        console.log('Welcome Mr admin! you have some important notification wanna check')
    } 
    if (user_names[i] == 'admin'){
        continue;
    } else{
        console.log(`Hello!! ${user_names[i]} Thankyou for logging in to our website... `)   
    }
};