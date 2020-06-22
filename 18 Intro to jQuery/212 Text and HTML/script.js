// Text - https://api.jquery.com/text/
console.log($("h1").text());
console.log($("ul").text());
console.log($("li").text());
console.log($("h1").text("New Text!!!"));
console.log($("h1").text());
console.log($("li").text("Rusty, Colt's dog, is adorable"));
// HTML - https://api.jquery.com/html/
console.log($("ul").html())
console.log($("ul").html("<li>I hacked your UL!</li><li>Rusty is still adorable!</li>"))
console.log($('li').html("<a href='https://google.com'> CLICK ME TO GO TO GOOGLE</a>"));