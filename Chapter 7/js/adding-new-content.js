$(function() {
    $('ul').before('<p class = "notice">Just updated</p>');
    $('li.hot').prepend('+ ');
    var $newLitstItem = $('<li><em>gluten-free</em> soy sauce</li>');
    $('li:last').after($newLitstItem);
});