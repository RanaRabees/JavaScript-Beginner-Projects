
// Task - 3:

// 3. Name Cases: Store a person’s name in a variable, 
//    and then print that person’s name in lowercase, uppercase, and titlecase.


const name1 = "REEBAAL";  
console.log(name1.toLowerCase());




const name2 = "reebaal";  
console.log(name2.toUpperCase());


// NOTE:
// You can enter any name without space in variable "name3" to convert it
// into "Title Case".....

const name3 = "rEEbaaL";  
let title = name3.charAt(0).toUpperCase() + name3.slice(1).toLowerCase();
console.log(title);



