$(function() {                                          //Anonymous function
    
    var $newItemButton = $('#newItemButton');           //Assign jQuery selecter to a variable
    var $newItemForm = $('#newItemForm');               //Assign jQuery selecter to a variable
    var $textInput = $('input:text');                   //Assign jQuery selecter to a variable

    $newItemButton.show();                              //Show the new item button
    $newItemForm.hide();                                //hide the <form>

    $('#showForm').on('click', function(){              //call .on() method on element with id #showForm, calls function on 'click' event
        $newItemButton.hide();                          //Hide <button>
        $newItemForm.show();                            //Show <form>
    });

    $newItemForm.on('submit', function(e) {             //Call .on() method on new item form, calls function on 'submit' event
        e.stopImmediatePropagation();                   //Book asked to use preventDefault() method, but doesnt work, swapped for stopImmediatePropagation() method
        var newText = $('input:text').val();            //Assign value of the textcontent of the <input> tag to a variable
        $('li:last').after('<li>' + newText +'</li>');  //Adds new <li> element after the last <li> element in the <ul>
        $newItemForm.hide();                            //Hide <form>
        $newItemButton.show();                          //Show <button>
        $textInput.val('');                             //Set input text to empty string
    });
});