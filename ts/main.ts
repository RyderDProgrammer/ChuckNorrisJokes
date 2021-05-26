class SingleJoke
{
    /**
     * The ID number that the joke is referenced to.
     */
    id:number;
    /**
     * The joke itself in full form.
     */
    joke:string;
    categories:string[];
}

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
        //alert("Check console for what is sent.");
        let response:SingleJoke = JSON.parse(http.responseText).value;
        console.log(response);
        console.log(response.id);
        console.log(response.joke);
        console.log(response.categories);
        displayJoke(response);
    }
}

function displayJoke(j:SingleJoke)
{
    let displayDiv = $("displayJoke");
    let jokeIdSpan = <HTMLElement>displayDiv.querySelector("h2 > span");
    jokeIdSpan.innerText = j.id.toString();

    let jokePara = displayDiv.querySelector("p");
    jokePara.innerText = j.joke
}

function $(id:string)
{
    return document.getElementById(id);
}