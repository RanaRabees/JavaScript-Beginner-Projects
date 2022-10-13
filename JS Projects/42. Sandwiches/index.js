
// Task - 42:

// 42. Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.


function toppping(...items){
    for(let item of items){ 
      console.log([`${items}!`]);
      break;
    }
}
toppping('cheese',' black-peppers',' munchkins');
toppping('cheese',' black-peppers',' munchkins', ' red-chilli', ' crunches');
toppping('cheese',' black-peppers');



