var originalNumber = 10.23456;

var msg = '<h2>original number</h2><p>' = originalNumber + '<p>';               
msg += '<h2>3 decimnal places</h2><p>' + originalNumber.toFixed(3) + '<p>'; //Rounds to a specified decimal places (returns a string)
msg += '<h2>3 digits</h2><p>' + originalNumber.toPrecision(3) + '<p>';      //rouns to a total number of places (returns a string)

var el = document.getElementById('info');
el.innerHTML = msg;

// console.log(originalNumber, typeof(originalNumber));
// console.log(originalNumber.toFixed(3), typeof(originalNumber.toFixed(3)));
// console.log(originalNumber.toPrecision(3), typeof(originalNumber.toPrecision(3)));
