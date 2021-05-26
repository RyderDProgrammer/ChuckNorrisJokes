var xhttp = new XMLHttpRequest(); //Object to communicate with server

//Fires a function every time the request changes state.
xhttp.onreadystatechange = function() 
{
    //Response is ready when this if statement is active.
    if (this.readyState == 4 && this.status == 200) 
    {
       // Typical action to be performed when the document is ready:
       document.getElementById("demo").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "filename", true);
xhttp.send();