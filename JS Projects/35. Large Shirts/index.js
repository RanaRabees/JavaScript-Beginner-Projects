
// Task - 35:

// 35. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love JavaScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.



// By default Large T-shirts:
function make_shirt1(size= "large", text = "I love JavaScript") {
    return `The size of your shirt is ${size} and the text written on it is ${text}`;
}
console.log(make_shirt1())


// By default Medium T-shirts:
function make_shirt2(size= "medium", text = "I love JavaScript") {
    return `The size of your shirt is ${size} and the text written on it is ${text}`;
}
console.log(make_shirt2())


// By User's input T-shirts:
function make_shirt3(size, text) {
    return `The size of your shirt is ${size} and the text written on it is ${text}`;
}
console.log(make_shirt3("small", "Rana Reebaal"))



