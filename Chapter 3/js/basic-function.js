var msg = 'Sign up to recieve our newsletter for 10% off';

//Function keyword - function name ()
function updateMessage(){
    //Code goes between curly braces
    var el = document.getElementById('message');
    el.textContent = msg;
}

updateMessage()