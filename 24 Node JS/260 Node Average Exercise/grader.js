function average(scores) {
    var average = 0;

    scores.forEach(function(score) {
        average += score;        
    });

    average /= scores.length;

    return Math.round(average);
}

var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores)); // Should return 94

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2)); // Should return 68