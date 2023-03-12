//Create Variable for the welcome message

var greeting = 'Howdy ';
var name = 'Molly ';
var message = '. please check your order';

//Concatenate the three variables above to create the welcome message

var welcome = greeting + name + message;

//Create variables to hold details about the sign
var sign = 'Montague House';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

//Get the element that has the id of 'greeting'
var el = document.getElementById('greeting');
//Replace the content of that element with the personlized welcome message
el.textContent = welcome;

//Get the element that has the id of 'userSign' then update its contents
var elSign = document.getElementById('userSign');
elSign.textContent = sign;

//Get the element that has the id of 'tiles' and update its contents
var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

//Get the element that has the id of 'subTotal' then update its contents
var elSubtotal = document.getElementById('subTotal');
elSubtotal.textContent = '$' + subTotal;

//Get the element that has the id of 'shipping' then update its contents
var elSubtotal = document.getElementById('shipping');
elSubtotal.textContent = '$' + shipping;

//Get the element that has the id of 'grandTotal' then update its contents
var elSubtotal = document.getElementById('grandTotal');
elSubtotal.textContent = '$' + grandTotal;