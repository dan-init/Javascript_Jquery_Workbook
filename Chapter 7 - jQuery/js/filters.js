var $listItems = $('li');                           //Assign <li> selecter to a variable
$listItems.filter('.hot:last').removeClass('hot');  //Filter the <li> tags by class 'hot' and last element, then remove the class hot from that element
$('li:not(.hot)').addClass('cool');                 //:not finds <li> that do not have the class 'hot' and add the class 'cool'
$listItems.has('em').addClass('complete');          //.has() method finds <li> that have <em> element

$listItems.each(function() {                        //.each calls anonymous function on each <li> element
    var $this = $(this);                            //Assing the '$(this)' selecter to variable
    if ($this.is('.hot')) {                         //.is() method looks for <li> with class of 'hot'
        $this.prepend('Priority item: ');           //if <li> has class of 'hot' add 'Priority item' to the start the text
    }
});

$('li:contains("honey")').append(' (local)');       //Select <li> that contain 'honey' and append (local) at the end