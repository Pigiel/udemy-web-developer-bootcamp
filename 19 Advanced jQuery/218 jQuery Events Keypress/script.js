// $("input").keypress(function() {
//     console.log("You pressed a key");
// });

$("input").keypress(function(event) {
    console.log(event);
    if (event.which === 13) {
        alert("You hit Enter");
    }
});