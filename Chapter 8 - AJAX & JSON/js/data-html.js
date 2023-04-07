var xhr = new XMLHttpRequest();                                             //Create XMLHttpRequest object

xhr.onload = function() {                                                   //On response load call function
    
    //This check will not work locally, only on a server
    if(xhr.status === 200) {                                                //If server response is OK
        document.getElementById('content').innerHTML = xhr.responseText;    //Set inner HTML of element with id 'content' to the respone text
    }
};

xhr.open('GET', 'data/data.html', true);                                    //Prepare the request
xhr.send()                                                                  //Send the request