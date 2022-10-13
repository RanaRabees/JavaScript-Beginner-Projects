
// Task - 18:

// 18. Seeing the World: Think of at least five places in the world you’d like to visit.

// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its
// order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.




let places = ['Shanghai', 'London', 'Paris', 'Madagascar', 'Seoul'];  // My array
console.log(places);                              // Original array
console.log([...places].sort()); //alphabetical order without changing original array
console.log(places);                              // Original array still same
console.log([...places].sort().reverse());// Reverse alphabetical order, 
console.log(places);                      // without changing original array... 
places.reverse();                   // reversing the order of original array  
console.log(places);                          // Original array changed
places.reverse();         //Again reversing the order of original array to become in  
console.log(places);                   //previous position.
let alpha_ord = places.sort();   // Original array changed in alphabetical order
console.log(alpha_ord);
console.log(places);
let rev_alpha_ord = places.sort().reverse(); // Original array changed in,
console.log(rev_alpha_ord);                  // reverse  alphabetical order...
console.log(places);


