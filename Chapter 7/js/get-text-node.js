var $listItemText = $('li').text();             //Declare variable that assigns the text content of the the <li> elements to listItemText
$('li').append('<i>' + $listItemText + '</i>'); //Append listItemText to each <li> tag

//The selector returns the four <li> elements 
//the .text() method returns the text content from 
//all of them
