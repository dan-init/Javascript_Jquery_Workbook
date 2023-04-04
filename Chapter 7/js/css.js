$(function() {
    var backgroundColour = $('li').css('background-color');         //Declare variable containing the value of the background colour in the all <li> elements
    $('ul').append('<p>Colour was: ' + backgroundColour + '</p>');  //Append string with variable before the closing </ul>
    $('li').css({                                                   //.css() method allows css values to be set
        'background-color': '#c5a996',                              //Set background colour
        'border':'1px solid #fff',                                  //Set border
        'color':'#000',                                             //Set color
        'font-family':'Georgia',                                    //Set font-family
        'padding-left': '+=75'                                      //Set padding
    });
});