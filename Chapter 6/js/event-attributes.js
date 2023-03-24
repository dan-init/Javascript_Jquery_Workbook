//NOTE: HTML EVENT HANDLERS ARE CONSIDERED BAD PRACTICE AS IT IS BETTER TO SEPERATE
//JS FROM HTML. THIS IS JUST AN EXAMPLE FOR AWARENESS. 

function checkUsername () {                                             //Declare function
    var elMsg = document.getElementById('feedback');                    //Get feedback element
    var elUsername = document.getElementById('username');               //Get username input
    if (elUsername.value.length < 5) {                                  //If username too short

        elMsg.textContent = 'Username must be 5 characters or more';    //Set msg
    } else {                            
        elMsg.textContent = '';                                         //Clear message
    }
}