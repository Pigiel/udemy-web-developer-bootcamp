$("h1").click(function() {
    alert("h1 clicked!");
});

$("button").click(function() {
    $(this).css("background", "pink");
    var text = $(this).text();
    console.log("You clicked: " + text);
});