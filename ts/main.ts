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
    /**
     * The category that the joke comes from. This example
     * pulls from the "nerdy" section.
     */
    categories:string[];
}

window.onload = function()
{
    let jokeButton = $("getJoke");
    jokeButton.onclick = main;

    getAllCategories();
}

function main()
{
    let http = new XMLHttpRequest();
    //Prepare the request to the server.
    //GET ask the server for data
    //The url is the website we are requesting data from.
    http.open("GET","http://api.icndb.com/jokes/random")//"http://api.icndb.com/jokes/random?limitTo=[nerdy]")

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
        //Shows off the ENTIRE joke with everything
        console.log(response);
        //Shows the jokes id
        console.log(response.id);
        //Shows the joke itself.
        console.log(response.joke);
        //Shows the category the joke is listed under IE nerdy.
        console.log(response.categories);
        displayJoke(response);
    }
}

function displayJoke(j:SingleJoke)
{
    let displayDiv = $("displayJoke");
    //Displays the jokes id
    let jokeIdSpan = <HTMLElement>displayDiv.querySelector("h2 > span");
    jokeIdSpan.innerText = j.id.toString();

    //Displays the jokes text.
    let jokePara = displayDiv.querySelector("p");
    jokePara.innerHTML = j.joke

    //Displays the category for the joke
    let jokeCatList = displayDiv.querySelector("ul");
    //Erases the list so that it doesnt just show off the same each
    //time.
    jokeCatList.innerHTML = "";
    for(let i = 0; i < j.categories.length; i++)
    {
       let nextCat = document.createElement("li"); //<li></li>
       nextCat.innerText = j.categories[i];//<li> Joke Text Added </li>
       jokeCatList.appendChild(nextCat);//<ul><li> jokeText added </li></ul>
    }
}

function getAllCategories()
{
    let http = new XMLHttpRequest();
    http.open("GET","https://api.icndb.com/categories");
    http.onreadystatechange = displayCategories;
    http.send();
}

function displayCategories()
{
    let http = <XMLHttpRequest>this;

    if(http.readyState == 4 && http.status == 200)
    {
        let categories:string[] = JSON.parse(http.responseText).value;
        console.log(http.responseText);
        console.log(categories);

        let categoryBoxes = "";
        for(let i = 0; i < categories.length; i++)
        {
            let cat = categories[i];
            // categoryBoxes += "<input type='checkbox' value ='" + categories[i] +
            // "'> <label>" + categories[i] + "</label>";
            //Same thing as above just much cleaner looking code.
            categoryBoxes += `<input type="checkbox" value="${cat}" id="${cat}"> <label for="${cat}">${cat}</label>`;
        }
        console.log(categoryBoxes);
        let categoriesDiv = $("excludedCategories")
        categoriesDiv.innerHTML = categoryBoxes;
    }
}

function $(id:string)
{
    return document.getElementById(id);
}