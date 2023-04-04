$(function() {
    $('li#three').removeClass('hot');   //Get the <li> tag with id of three, removeClass() method removes 'hot' class from tag
    $('li.hot').addClass('favorite');   //Get all <li> tags with class hot, addClass() method adds new value to exsisting class 'hot'
    $('ul').attr('id', 'group');        //Get <ul> tag and add an id attribute with the value of group
})