var price = 5;                  /* variable are declare and assigned values on each line */
var quantity = 14;
var total = price * quantity;

var price, quantity, total; // variables declared on the same line 
price = 5;                  // Variables are assigned values
quantity = 14;
total = price * quantity;

var price = 5, quantity = 14; // Two variable are declared and assigned values on the same line
var total = price * quantity;

//variable total is writen into the element with the id of cost
var el = document.getElementById('cost');
el.textContent = '$' + total;
