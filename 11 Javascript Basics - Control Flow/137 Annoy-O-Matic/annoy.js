
var answer = prompt("Are we there yet?");

// Exercise
// while (answer !== "yes" && answer !== "yeah") {
//     var answer = prompt("Are we there yet?");
// }
// BONUS
while (answer.indexOf("yes") === -1) {
    var answer = prompt("Are we there yet?");
}

alert("Yay, we finally made it!");