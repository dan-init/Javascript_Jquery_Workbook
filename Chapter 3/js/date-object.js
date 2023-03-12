var today = new Date();         //new date object
var year = today.getFullYear(); //gets the full year from the date object

var el = document.getElementById('footer');
el.innerHTML = '<p>Copyright & copy:' + year + '</p>';
