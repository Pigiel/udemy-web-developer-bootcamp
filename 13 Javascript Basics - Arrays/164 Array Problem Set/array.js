console.log("***** printReverse *****");

function printReverse(array) {
    for(i = array.length- 1; i >= 0; i--) {
        console.log(array[i]);
    }
}

console.log("printReverse([1,2,3,4,5])");
printReverse([1,2,3,4,5]);
console.log('printReverse(["a", "b", "c"])');
printReverse(["a", "b", "c"]);

console.log("***** isUniform *****")

function isUniform(array) {
    var first = array[0];
    
    for (i = 1; i < array.length; i++) {
        if (array[i] !== first) return false;
    }
    
    return true;
}

console.log('isUniform([1,1,1,1]) -> true');
console.log(isUniform([1,1,1,1]));
console.log('isUniform([2,1,1,1]) -> false');
console.log(isUniform([2,1,1,1]));
console.log('isUniform(["a", "b", "p"]) -> false');
console.log(isUniform(["a", "b", "p"]));
console.log('isUniform(["b", "b", "b"]) -> false');
console.log(isUniform(["b", "b", "b"]));

console.log("***** sumArray *****");

function sumArray(array) {
    var result = 0;
    
    array.forEach(function(number) {
        result += number;
    });

    return result;
}

console.log("console.log(sumArray([1,2,3]) -> 6");
console.log(sumArray([1,2,3]));
console.log("sumArray([10,3,10,4]) -> 27");
console.log(sumArray([10,3,10,4]));
console.log("sumArray([-5,100]) -> 95");
console.log(sumArray([-5,100]));

console.log("***** max *****");

function max(array) {
    var max = array[0];

    array.forEach(function(number) {
        if (number > max) max = number;
    });

    return max;
}

console.log("max([1,2,3]) -> 3");
console.log(max([1,2,3]));
console.log("max([10,3,10,4]) -> 10");
console.log(max([10,3,10,4]));
console.log("max([-5,100]) -> 100");
console.log(max([-5,100]));