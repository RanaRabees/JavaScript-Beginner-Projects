
// Task - 32:

// 32. Pizzas: Think of at least three kinds of your favorite pizza. Store these
// pizza names in a array, and then use a for loop to print the name of each pizza.

// • Modify your for loop to print a sentence using the name of the pizza
// instead of printing just the name of the pizza. For each pizza you should
// have one line of output containing a simple statement like I like pepperoni
// pizza.

// • Add a line at the end of your program, outside the for loop, that states
// how much you like pizza. The output should consist of three or more lines
// about the kinds of pizza you like and then an additional sentence, such as
// I really love pizza!

let fav_pizza = ['Veggie Pizza', 'Pepperoni Pizza', 'Margherita Pizza'];
for (let i = 0; i < fav_pizza.length; i++){
    if (fav_pizza[i] == fav_pizza[0])
    console.log(`${fav_pizza[0]} is the pizza that i like the most`);
    else if (fav_pizza[i] == fav_pizza[1])
    console.log(`${fav_pizza[1]} is different among all of others`);
    else if (fav_pizza[i] == fav_pizza[2])
    console.log(`${fav_pizza[2]} has a unique taste`);
};
console.log 
(
'\nPepperoni Pizza is my favourite pizza.\n',
'I think its taste is unique and best among all of the other pizzas.\n',
'Personally I like cheese topping with black peppers.\n',
'Its a really great combination',
)














