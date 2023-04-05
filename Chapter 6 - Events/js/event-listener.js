function checkUsername() {                                              //Declare function
    var elMsg = document.getElementById('feedback');                    //Get feedback element
    if(this.value.length < 5) {                                         //If username too short
        elMsg.textContent = 'Username must be 5 characters or more';    //Set msg
    } else {
        elMsg.textContent = '';                                         //Clear msg
    }
}

var elUsername = document.getElementById('username');                   //Get username input

elUsername.addEventListener('blur', checkUsername, false);              //When it loses focus call checkUsername()