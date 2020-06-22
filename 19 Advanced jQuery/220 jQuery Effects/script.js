// fadeOut
// $("button").on("click", function() {
//     $("div").fadeOut(1000, function() {
//         console.log("Fade completed");
//         $(this).remove();
//     });
//     console.log("Doing immediately after previous function");
// });
// fadeIn
// $("button").on("click", function() {
//     $("div").fadeIn(1000, function() {
//         console.log("Fade completed");
//     });
//     console.log("Doing immediately after previous function");
// });
// fadeToggle
// $("button").on("click", function() {
//     $("div").fadeToggle(500, function() {
//         console.log("Fade completed");
//     });
//     console.log("Doing immediately after previous function");
// });
// slideDown
// $("button").on("click", function() {
//     $("div").slideDown();
// });
// slideUp
// $("button").on("click", function() {
//     $("div").slideUp();
// });
// slideToggle
$("button").on("click", function() {
    $("div").slideToggle(1000, function() {
        console.log("Slide is done")
    });
});