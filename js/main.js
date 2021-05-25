window.onload = function () {
    var jokeButton = $("getJoke");
    jokeButton.onclick = getRandomJoke;
};
function getRandomJoke() {
}
function $(id) {
    return document.getElementById(id);
}
