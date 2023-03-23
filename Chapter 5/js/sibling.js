//Select the starting point and find its siblings

var startItem = document.getElementById('two');
var prevItem = startItem.previousSibling;
var nextItem = startItem.nextSibling;

//Charge the values of the siblings' class attributes
prevItem.className = 'hot';
nextItem.className = 'complete';