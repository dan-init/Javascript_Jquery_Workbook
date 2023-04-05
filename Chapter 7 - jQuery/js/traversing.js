$(function(){                                   //Anonymous function
    var $h2 = $('h2');                          //Assigning <h2> query selecter to variable $h2
    $('ul').hide();                             //Hides the <ul> tag on page load
    $h2.append('<a class="show">show</a>');     //Add <a> inside the <h2> tag

    $h2.on('click', function() {                //On click in <h2> tag execute function
        $h2.next()                              //Get the next node after <h2> which is <ul>
        .fadeIn(500)                            //Fade in the <ul> element over 500 milliseconds
        .children('.hot')                       //Get the children of the <ul> which is <li>, but only those with the class of 'hot'
        .addClass('complete');                  //Add a class value of to the existing class of the <li> tag
        $h2.find('a').fadeOut();                //Fade out the <a> element inside of <h2>
    });
});