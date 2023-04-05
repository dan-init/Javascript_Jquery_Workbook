$(function() {                                  //Declare Query function
    $('h2').hide().slideDown();                 //Selecter finds <h2> tag, hides its on page load, then transistions to a slide down effect
    var $li = $('li');                          //Assigning <li> selecter to variable
    $li.hide().each(function(index) {           //Setting all <li> elements to hide, .each() method cycles through each one
        $(this).delay(700 * index).fadeIn(700); //Slowly fades in the <li> elements
    });
    $li.on('click', function() {                //Selecter finds all <li> elements. 
        $(this).fadeout(700);                   //Fades <li> element out
    });
});