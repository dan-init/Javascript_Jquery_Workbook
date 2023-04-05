var inStock;
var shipping;
inStock = true;
shipping = false;

var elStock = document.getElementById('stock');
elStock.className = inStock;

var elShip = document.getElementById('shipping'); //Getting the element named 'shipping'
elShip.className = shipping; /* Assigning he classname of the element 'shipping' to the shipping variable "false" 
                                This alters the CSS */