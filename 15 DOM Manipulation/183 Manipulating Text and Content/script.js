var p = document.getElementsByTagName("p")[0];
console.log(p.textContent);

var ul = document.querySelector("ul");
console.log(ul.textContent);

// p.textContent = "Tech girls are super super sexy"

var tag = document.querySelector("p");
console.log(tag.innerHTML);
console.log(ul.innerHTML);

document.querySelector("h1").textContent = "End of this lession!";

tag.textContent = "<h3>Tech girls are <strong>super</strong> sexy</h3>"
ul.innerHTML = "<h3>Tech girls are <strong>super</strong> sexy</h3>"