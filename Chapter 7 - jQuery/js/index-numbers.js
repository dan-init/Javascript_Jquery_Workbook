$(function () {                         //Anonymous function call when page is loaded
    $('li:lt(2)').removeClass('hot');   //Remove class value 'hot' from selecter <li> index value less than 2
    $('li').eq(0).addClass('complete'); //Add class value 'complete' to selecter <li> index value == 0
    $('li:gt(2)').addClass('cool');     //Add class value 'cool' to selecter <li> index value greater than 2
});