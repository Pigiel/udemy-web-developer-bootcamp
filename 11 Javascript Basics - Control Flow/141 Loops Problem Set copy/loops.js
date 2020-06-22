console.log("1. Print all numbers between -10 and 19")

for (var number = -10; number <= 19; number++) {
    console.log(number);
}

console.log("2. Print all even numbers between 10 and 40")

for (var number = 10; number <= 40; number += 2) {
    console.log(number);
}

console.log("3. Print all odd numbers between 300 and 333")

for (var number = 300; number <= 333; number++) {
    if (number % 2 === 1) {
        console.log(number)
    }
}

console.log("4. Print all numbers divisble by 5 AND 3 between 5 and 50")

for (var number = 5; number <= 50; number++) {
    if ((number % 5 === 0) && (number % 3 ===0)) {
        console.log(number)
    }
}