var button = document.querySelector("button");

// Method 1 using if else statement
// var isWhite = true;

// button.addEventListener("click", function() {
//     if (isWhite) {
//         document.body.style.background = "red";
//     } else {
//         document.body.style.background = "white";
//     }
//     isWhite = !isWhite;
// });

// Method 2 using toggle classList
button.addEventListener("click", function() {
    document.body.classList.toggle("background");
});