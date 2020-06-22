// Check of specific todos by clicking
// $("li").click(function() {
$("ul").on("click", "li", function() {
    // // If li is gray
    // if ($(this).css("color") === "rgb(128, 128, 128)") {
    //     // Turn it black
    //     $(this).css({
    //         color: "black",
    //         textDecoration: "none"
    //     });
    // } else {
    //     // Turn it gray
    //     $(this).css({
    //         color: "grey",
    //         textDecoration: "line-through"
    //     });
    // }
    // Do the same as code above
    $(this).toggleClass("completed");
});

// Click on X to delete todo
// $("span").click(function(event) {
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    // jQuery method to stop the event bubbling up
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
    // Check if enter 
    if (event.which === 13) {
        // Grab text from the input
        var todoText = $(this).val();
        $(this).val("");
        // Create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash-alt'></i></span> " + todoText + "</li>");
    }
});

$(".fa-th-list").click(function() {
    $("input[type='text']").fadeToggle();
});