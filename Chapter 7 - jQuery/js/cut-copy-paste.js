$(function() {                              //Declare anonymous document ready function
    var $p = $('p');                        //Assign selecter $('p') to variable
    var $cloneQuote = $p.clone();           //Clone selecter $('p') and assign to variable
        
    $p.remove();                            //Remove <p> element
    $cloneQuote.insertAfter('h2');          //Insert cloned <p> after <h2>
        
    var $moveItem = $('li#one').detach();    //Copy and remove the first element in the <ul>
    $moveItem.appendTo('ul');               //Append copied <li> to <ul>
});

// $(function() {

//     $('ul').after('<button> Push Me </button>');
    
//     $('button').on('click', function() {
//         var $p = $('p');
//         var $cloneQuote = $p.clone();
    
//         $p.remove();
//         $cloneQuote.insertAfter('h2');
    
//         var $moveItem = $('#one').detatch();
//         $moveItem.appendTo('ul');
//     });
// });