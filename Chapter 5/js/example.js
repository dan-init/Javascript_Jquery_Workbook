//ADDING ITEMS TO START AND END OF LIST

var list = document.getElementsByTagName('ul')[0];                  //Get the <ul> tag element

//ADD NEW ITEM TO THE END OF LIST
var newItemLast = document.createElement('li');                     //create element
var newTextLast = document.createTextNode('Cream');                 //create text node
newItemLast.appendChild(newTextLast);                               //add text node to element
list.appendChild(newItemLast);                                      //add element to end of the list

//ADD NEW ITEM TO THE END OF LIST
var newItemFirst = document.createElement('li');                    //create element
var newTextFirst = document.createTextNode('kale');                 //create text node
newItemFirst.appendChild(newTextFirst);                                             //add text node to element
list.insertBefore(newItemFirst, list.firstChild);                   //add element to start of the list

var listItems = document.querySelectorAll('li');

//ADD A CLASS OF COOL TO ALL LIST ITEMS
var i;                                                              //Counter variable

for(i=0;i < listItems.length; i++) {                                //Loop through the elements
    listItems[i].className = 'cool';                                //Change class to cool
}

//ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector('h2');                         //h2 element
var headingText = heading.firstChild.nodeValue;                     //h2 text
var totalItems = listItems.length;                                  //No. of <li> elements
var newHeading = headingText + '<span>' + totalItems + '</span>';   //Content
heading.innerHTML = newHeading;                                     //Update h2
