var SingleJoke = (function () {
    function SingleJoke() {
    }
    return SingleJoke;
}());
window.onload = function () {
    var jokeButton = $("getJoke");
    jokeButton.onclick = main;
    getAllCategories();
};
function main() {
    var jokeButton = $("getJoke");
    jokeButton.disabled = true;
    jokeButton.innerText = "Retrieving random joke";
    var displayDiv = $("displayJoke");
    displayDiv.setAttribute("hidden", "hidden");
    var http = new XMLHttpRequest();
    http.open("GET", "http://api.icndb.com/jokes/random");
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
    if (http.readyState == 4) {
        var jokeButton = $("getJoke");
        jokeButton.disabled = false;
        jokeButton.innerText = "Get Random Joke";
    }
}
function displayJoke(j) {
    var displayDiv = $("displayJoke");
    displayDiv.removeAttribute("hidden");
    var jokeIdSpan = displayDiv.querySelector("h2 > span");
    jokeIdSpan.innerText = j.id.toString();
    var jokePara = displayDiv.querySelector("p");
    jokePara.innerHTML = j.joke;
    var jokeCatList = displayDiv.querySelector("ul");
    jokeCatList.innerHTML = "";
    for (var i = 0; i < j.categories.length; i++) {
        var nextCat = document.createElement("li");
        nextCat.innerText = j.categories[i];
        jokeCatList.appendChild(nextCat);
    }
}
function getAllCategories() {
    var http = new XMLHttpRequest();
    http.open("GET", "https://api.icndb.com/categories");
    http.onreadystatechange = displayCategories;
    http.send();
}
function displayCategories() {
    var http = this;
    if (http.readyState == 4 && http.status == 200) {
        var categories = JSON.parse(http.responseText).value;
        console.log(http.responseText);
        console.log(categories);
        var categoryBoxes = "";
        for (var i = 0; i < categories.length; i++) {
            var cat = categories[i];
            categoryBoxes += "<input type=\"checkbox\" value=\"" + cat + "\" id=\"" + cat + "\"> <label for=\"" + cat + "\">" + cat + "</label>";
        }
        console.log(categoryBoxes);
        var categoriesDiv = $("excludedCategories");
        categoriesDiv.innerHTML = categoryBoxes;
    }
}
function $(id) {
    return document.getElementById(id);
}
