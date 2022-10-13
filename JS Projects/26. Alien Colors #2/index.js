
// Task - 26:


// 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
// write an if-else chain.

// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// • Write one version of this program that runs the if block and another that runs the else block.



let alien_colour = "Blue"

if (alien_colour == 'green'){
    console.log('Player just earned 5 points for shooting the alien.')
}
else{
    console.log('Player just earned 10 points.')
}


if (alien_colour == 'Blue'){
    console.log(" \"IF\" block ran...")
}

alien_colour = "Red"

if (alien_colour == 'Blue'){
    console.log("Alien colour is changed again...")
}

else{
    console.log("\"ELSE\" block ran...")
}