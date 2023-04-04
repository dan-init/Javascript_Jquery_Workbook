$(function() {
    $('ul').before('<p class = "notice">Just updated</p>');             //Get <ul> tag, .before() method places content before this tag
    $('li.hot').prepend('+ ');                                          //Get all <li> tags with class 'hot', .prepend() method adds a '+' before text in the tag
    var $newLitstItem = $('<li><em>gluten-free</em> soy sauce</li>');   //Store new <li> tag in a variable, get last <li> tag, .after() method add the new <li> variable after the last <li> tag. 
    $('li:last').after($newLitstItem);
});