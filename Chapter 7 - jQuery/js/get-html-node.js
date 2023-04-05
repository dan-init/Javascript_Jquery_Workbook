var $listItemHTML = $('li').html();                 //Declare variable that assigns html content of the <li> element to listItemHTML
$('li').append('<i>' + $listItemHTML + '</i>');     //Append listItemHTML to <li> element

//The selector returns the four '<li>' elements
//but the .html() method only returns the content
//for the first one.