
// Task - 29:

// 29. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.


let user_names = ['admin', 'Rana', 'Muhammad', 'Reebaal', 'Hussain'];
if (user_names[0] == undefined){
    console.log("We need to find some users...")
}
for (let i = 0; i < user_names.length; i++){
    if (user_names[i] == 'admin'){
        console.log('Welcome Mr admin! you have some important notification wanna check')
    } 
    if (user_names[i] == 'admin'){
        continue;
    } else{
        console.log(`Hello! ${user_names[i]} Thankyou for logging in to our website... `)   
    }
};



// NOTE:
// You could add some data to array "user_names" in order to run "else" block,
// Checking whether the empty array function is working fine,,,
user_names = []
if (user_names[0] == undefined){
    console.log("We need to find some users...")
}else{
    console.log("someone here");
}
