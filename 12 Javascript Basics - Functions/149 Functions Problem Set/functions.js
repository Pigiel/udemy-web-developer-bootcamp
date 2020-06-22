function isEven(number) {
    return (number % 2 === 0);
}

function factorial(number) {

    // factorial(4): 4 x 3 x 2 x 1
    if (number === 0) return 1;

    var result = number;
    
    for (i = number-1; i > 0; i--) {
        result *= i;
    }

    return result;

    // factorial(4): 1 x 2 x 3 x 4
    // var result = 1;

    // for (i = 2; i <= number; i++) {
    //     result *= i;
    // }

    // return result;

}

function kebabToSnake(word) {
    return word.replace(/-/g, "_", word);
}