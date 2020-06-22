var numberOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDispay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons() {
    // Mode buttons event listeners
    for (i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            // Ternary operator which is same as if statement below
            this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
            // if (this.textContent === "Easy") {
            //     numberOfSquares = 3;
            // } else {
            //     numberOfSquares = 6;
            // }
            reset();
        });
    }
}

function setupSquares() {
    for (i = 0; i < squares.length; i++) {
        // Add click listeners to squares
        squares[i].addEventListener("click", function() {
            // Grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            // Compare color to pickedColor
            if (clickedColor === pickedColor) {
                messageDispay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDispay.textContent = "Try Again";
            }
        });
    }
}

function reset() {
    // Generate all new colors
    colors = generateRandomColors(numberOfSquares);
    // Pick a new random color from array
    pickedColor = pickColor();
    // Change color display to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDispay.textContent = "";
    // Change color of squares
    for (i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelBlue";
}

// easyBtn.addEventListener("click", function() {
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     numberOfSquares = 3;
//     colors = generateRandomColors(numberOfSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (i = 0; i < squares.length; i++) {
//         if (colors[i]) {
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// });

// hardBtn.addEventListener("click", function() {
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numberOfSquares = 6;
//     colors = generateRandomColors(numberOfSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (i = 0; i < squares.length; i++) {
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
// });

resetButton.addEventListener("click", function() {
    reset();
});

function changeColors(color) {
    // Loop through all squares
    for (i = 0; i < squares.length; i++) {
        // Change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(number) {
    // Make an array
    var arr = []
    // Repeat number times
    for (i = 0; i < number; i++) {
        // Get random color and push into array
        arr.push(randomColor());
    }
    // Return that array
    return arr;
}

function randomColor() {
    // Pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    // Pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    // Pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
};