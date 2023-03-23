//The element to remove. array item 4
var removeEl = document.getElementsByTagName('li')[3];

//The node element that contains the array element
var contrainerEl = removeEl.parentNode;

//Remove the array element (child) from the container element(parent). 
contrainerEl.removeChild(removeEl);