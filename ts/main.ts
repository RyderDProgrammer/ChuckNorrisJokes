window.onload = function()
{
    let jokeButton = $("getJoke");
    jokeButton.onclick = getRandomJoke;
}

function getRandomJoke()
{

}


function $(id:string)
{
    return document.getElementById(id);
}