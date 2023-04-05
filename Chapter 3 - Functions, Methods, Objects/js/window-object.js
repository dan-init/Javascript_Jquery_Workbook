var msg = '<h2> browser window</h2><p>width: ' + window.innerWidth + '</p>';
msg += '<p> Height: ' + window.innerHeight +'</p>';
msg += '<h2>History</h2><p>items: ' + window.history.length + '</p>';
msg += '<h2>Screen</h2><p>width: ' + window.screen.width + '</p>';
msg += '<p> Height: ' + window.screen.height +'</p>';

var el = document.getElementById('info');       
el.innerHTML = msg;                             //Sets the inner html as the message variable
alert('Current page: ' + window.location);      //Displays an alert message 
