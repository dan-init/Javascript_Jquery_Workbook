var $listText = $('ul').text();             //Declare variable that assigns the text content of the <ul> to listText
$('ul').append('<p>' + $listText + '</p>'); //Assign the text content of listText to the ul inside a <p> tag