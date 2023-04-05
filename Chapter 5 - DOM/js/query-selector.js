//querySelector() only returns the first match
var element = document.querySelector('li.hot');
element.className = 'cool';

//querySelectorAll returns a Nodelist
var elements = document.querySelectorAll('li.hot');
elements[1].className = 'cool'; //Set the class name of the second element to 'cool'