var img1 = document.getElementsByTagName("img")[0];
var img2 = document.getElementsByTagName("img")[1];

img1.getAttribute("src");
img1.setAttribute("src", "https://images.unsplash.com/photo-1564223288351-a96bea22b5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80");

var a = document.querySelector("a");
a.setAttribute("href", "https://unsplash.com");
a.textContent = "Link to Unsplash";