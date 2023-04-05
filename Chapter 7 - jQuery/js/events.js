$(function() {
    var ids = '';
    var $listItems = $('li');                                           //Selecter finds all <li> tags in the document

    $listItems.on('mouseover click', function () {                      //The .on() creates and event listener which waits for a mousemove over an li or clicks on it
        ids = this.id;
        $listItems.children('span').remove();                           //Removes the current <span> element of the <li>
        $(this).append('<span class="priority"> ' + ids + ' </span>')   //Appends a new <span> element to the <li>
    });

    $listItems.on('mouseout', function() {                              //When the mouse moves away from the <li> the newly appended <span> element is removed. 
        $(this).children('span').remove();
    });
});