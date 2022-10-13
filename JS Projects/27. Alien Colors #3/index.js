
//  Task - 27:

// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.


let alien_colour = "Red"

if (alien_colour == "Red"){
    console.log("Player earned 15 points.")
}
else{
    console.log("This is else block of colour Red")
}


alien_colour = "Green"

if (alien_colour == "Green"){
    console.log("Player earned 5 points.")
}
else{
    console.log("This is else block of colour Green")
}


alien_colour = "Yellow"

if (alien_colour == "Yellow"){
    console.log("Player earned 10 points.")
}
else{
    console.log("This is else block of colour Yellow")
}
