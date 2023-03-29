$(function() {                                      //Delcare function
    $('li:contains("pine")').text('almonds');       //Find li element that contains the word 'pine' and set text to almonds
    $('li.hot').html(function() {                   //Select the li elements with class containing 'hot' using the .html() method to call a function
        return '<em>' + $(this).text() + '</em>';   //Set the exsisting text inside a <em> tag
    });
    $('li#one').remove();                           //remove the <li> element with the id of 'one'
});