var xhttp = new XMLHttpRequest(); //Object to communicate with server

//Fires a function every time the request changes state.
xhttp.onreadystatechange = function() 
{
    //Response is ready when this if statement is active.
    //The status is meant for the website to have gone through
    //like the HTML Errors such as the common 404 not found page.
    if (this.readyState == 4 && this.status == 200) 
    {
       // Typical action to be performed when the document is ready:
       document.getElementById("demo").innerHTML = xhttp.responseText;
    }
};
//Preparing the request.
xhttp.open("GET", "filename", true);
//Sends the request to the server.
xhttp.send();

/*
Different states for readyState like the if statement above
being set to 4.
Holds the status of the XMLHttpRequest.
0: request not initialized
1: server connection established
2: request received
3: processing request
4: request finished and response is ready
*/