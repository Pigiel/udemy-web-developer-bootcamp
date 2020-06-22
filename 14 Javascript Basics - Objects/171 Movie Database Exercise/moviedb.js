var movies = [
    {title: "In Burges", raiting: 5, hasWatched: true},
    {title: "Frozen", raiting: 4.5, hasWatched: false},
    {title: "Mad Max Fury Road", raiting: 5, hasWatched: true},
    {title: "Les Miserables", raiting: 3.5, hasWatched: false}
]

function buildString(movie) {
    var result = "You have ";

    if (movie["hasWatched"]) {
        result += "watched ";
    } else {
        result += "not seen ";
    }

    result += "\"" + movie["title"] + "\" ";
    result += "- " + movie["raiting"] + " stars";

    return result;
}

movies.forEach(function(movie) {
    console.log(buildString(movie));
});