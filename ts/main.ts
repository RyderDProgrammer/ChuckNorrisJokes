window.onload = function()
{
    let jokeButton = $("getJoke");
    jokeButton.onclick = main;
}

function main()
{
    let http = new XMLHttpRequest();
    //Prepare the request to the server.
    //GET ask the server for data
    //The url is the website we are requesting data from.
    http.open("GET","http://api.icndb.com/jokes/random?limitTo=[nerdy]")

    //Function to handle different ready states.
    http.onreadystatechange = processRequest;

    //Sending the request to the server.
    http.send();
}

function processRequest()
{
    let http = <XMLHttpRequest>this;
    if(http.readyState == 4 && http.status == 200)
    {
        alert("Check console for what is sent.");
        console.log(http.responseText);
    }
}


function $(id:string)
{
    return document.getElementById(id);
}