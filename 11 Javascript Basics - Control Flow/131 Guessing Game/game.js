// Secret number to guess
var secretNumber = 4;

// Ask user for guess
var guess = Number(prompt("Guess a number"));

// Check if guess is right
if (guess === secretNumber) {
    alert("You guessed it!")
} else if (guess > secretNumber) {
    alert("Too high! Guess again!")
} else {
    alert("Too low! Guess again!")
}