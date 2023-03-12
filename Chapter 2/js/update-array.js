//create the array
var colors = [
    'white',
    'black',
    'custom'
];

//update the third tiem in the array

colors[2] = 'beige';

//get the element with an id of colors

var el = document.getElementById('colors');

//replace with third itme from the array

el.textContent = colors[2];