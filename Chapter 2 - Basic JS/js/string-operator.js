var greeting = 'Howdy ';
var name = 'Molly';

var welcomeMessage = greeting + name +  '!'; // Adding strings together (concatanation)

var el = document.getElementById('greeting');
el.textContent =welcomeMessage;