var el;                                                             //Declare variables

function charCount(e) {                                             //Declare function
    var textEntered, CharDisplay, counter, lastKey;                 //Declare variables
    textEntered = document.getElementById('message').value;         //User's text
    CharDisplay = document.getElementById('charactersLeft');        //Counter element
    counter = (180 - (textEntered.length));                         //Num of chars left
    CharDisplay.textContent = counter;                              //Show chars left

    lastKey = document.getElementById('lastKey');                   //Get last key used
    lastKey.textContent = "Last key in ASCII code: " + e.keyCode;   //Create message
}

el = document.getElementById('message');                            //Get message element
el.addEventListener('keypress', charCount, false);                  //Keypress event