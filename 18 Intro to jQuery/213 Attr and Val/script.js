// Attr - https://api.jquery.com/attr/
console.log($("img").css("width"));
console.log($("img").css("width", "200px"));
console.log($("img").attr("src"));
console.log($("img").attr("src", "https://images.unsplash.com/photo-1504730030853-eff311f57d3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"));
console.log($("input").attr("type"));
console.log($("input").attr("type", "color"));
console.log($("input").attr("type", "checkbox"));
console.log($("input").attr("type", "text"));
console.log($("img:first-of-type").attr("src", "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"));
console.log($("img").last().attr("src", "https://images.unsplash.com/photo-1504276048855-f3d60e69632f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"));
// Val - https://api.jquery.com/val/
console.log($("input").val("Girls"));
console.log($("input").val(""));
console.log($("select"));
console.log($("select").val());