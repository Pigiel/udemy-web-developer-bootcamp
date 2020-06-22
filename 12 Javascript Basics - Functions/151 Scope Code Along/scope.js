var x = "hello";
var y = 99;

function doMath() {
    var x = 40; // Only in function scope
    console.log(x);
}

function doMoreMath() {
    y = 100; // Changes parent variable from global scope
    console.log(y);
}