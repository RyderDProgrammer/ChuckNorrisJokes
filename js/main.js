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
        alert("Check console for what is sent.");
        console.log(http.responseText);
    }
}
function $(id) {
    return document.getElementById(id);
}
