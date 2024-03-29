var elUsername = document.getElementById('username');                                   //Get username input
var elMsg = document.getElementById('feedback');                                        //Get feedback element

function checkUsername(minLength) {                                                     //Declare function
    if (elUsername.value.length < minLength) {                                          //If username too short
        elMsg.textContent = 'Username must be ' + minLength + ' characters or more';    //Set the error message

    } else {
        elMsg.innerHTML = '';                                                           //Clear message
    }
}

elUsername.addEventListener('blur', function() {                                        //When it loses focus
    checkUsername(5);                                                                   //Pass arguments here
}, false);