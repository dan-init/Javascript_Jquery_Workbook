var elements = document.getElementsByTagName('li');     //Find <li> elements

if (elements.length > 0) {                              //if 1 or more are found
    var el = elements[0];                               //Select the first one using the array syntax
    el.className = 'cool';                              //Change the value of the class attribute
}