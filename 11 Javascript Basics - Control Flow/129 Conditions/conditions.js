// Get age and convert it to a Number (prompt always returns a String)
var age = Number(prompt("What is your age?"));

if (age < 0) {
    console.log("Negative number error")
} else if (age == 21) {;
    console.log("Happy 21st birthday!!")
} else if (age % 2 == 1) {
    console.log("Your age is odd!");
} else if (age % Math.sqrt(age) === 0) {
    console.log("Perfect square!");
} else {
    console.log("You're " + age + " years old");
}