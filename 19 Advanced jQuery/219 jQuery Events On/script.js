// $("h1").on("click", function() {
//     $("h1").css("background", "purple");
// });

$("h1").on("click", function() {
    $(this).css("color", "purple");
});

$("input").on("keypress", function() {
    console.log("Keypressed!")
});

$("button").on("mouseenter", function() {
    console.log("Mouse enter!");
    $(this).css("font-weight", "bold");
});

$("button").on("mouseleave", function() {
    console.log("Mouse leave!");
    $(this).css("font-weight", "normal");
});