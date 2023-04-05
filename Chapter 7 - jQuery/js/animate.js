$(function() {                          //Anonymous function
    $('li').on('click', function() {    //Selecter gets all <li> elements, when clicked the anonymous function runs
        $(this).animate({               //Call animation arguments on current <li> element
            opacity: 0.0,
            paddingLeft: '+=80'
        }, 500, function() {            //Anonymous function inside is called after 500 milliseconds
            $(this).remove();           //Removes the <li> element that was clicked. 
        });
    });
});