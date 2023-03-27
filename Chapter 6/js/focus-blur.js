function CheckUsername() {                                          //Declare function 
    var username = el.value;                                        //Store username in variable
    if (username.length < 5) {                                      //If username < 5 characters
        elMsg.className = 'Warning';                                //Change class on message
        elMsg.textContent = 'Not long enough, yet...';              //Update message
    } else {                                                        //Otherwise
        elMsg.textContent = '';                                     //Clear the message
    }
}

function tipUsername() {                                            //Delcare function
    elMsg.className = 'tip';                                        //Change class for message
    elMsg.innerHTML = 'Username must be at least 5 characters';     //Add message
}

var el = document.getElementById('username');                       //User input
var elMsg = document.getElementById('feedback');                    //Element to hold message

//When the username inputs gains / loses focus call functions above
el.addEventListener('focus', tipUsername, false);                   //focus call tipUsername()
el.addEventListener('blur', CheckUsername, false);                  //blur call checkUsername()