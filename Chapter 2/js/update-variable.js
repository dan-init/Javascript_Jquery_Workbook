var inStock;
var shipping;

inStock = true;
shipping = false;

/* Some other code/processing would go here to change the value of the variables */

inStock = false;
shipping = true;

var elStock = document.getElementById('stock');
elStock.className = inStock;
var elShip = document.getElementById('shipping');
elShip.className = shipping;
