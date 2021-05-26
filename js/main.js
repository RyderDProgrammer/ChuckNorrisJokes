var SingleJoke = (function () {
    function SingleJoke() {
    }
    return SingleJoke;
}());
window.onload = function () {
    var jokeButton = $("getJoke");
    jokeButton.onclick = main;
};
function main() {
    var http = new XMLHttpRequest();
    http.open("GET", "http://api.icndb.com/jokes/random?limitTo=[nerdy]");
    http.onreadystatechange = processRequest;
    http.send();
}
function processRequest() {
    var http = this;
    if (http.readyState == 4 && http.status == 200) {
        var response = JSON.parse(http.responseText).value;
        console.log(response);
        console.log(response.id);
        console.log(response.joke);
        console.log(response.categories);
        displayJoke(response);
    }
}
function displayJoke(j) {
    var displayDiv = $("displayJoke");
    var jokeIdSpan = displayDiv.querySelector("h2 > span");
    jokeIdSpan.innerText = j.id.toString();
    var jokePara = displayDiv.querySelector("p");
    jokePara.innerText = j.joke;
}
function $(id) {
    return document.getElementById(id);
}
