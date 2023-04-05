$(function () {                                                         
    $('li').each(function() {                                       //calling .each() method on all <li> tags, .each() method takes a function as a parameter
        var ids = this.id;                                          //this keyword refers to the cureent element node in the loop
        $(this).append(' <span class="order">' + ids + '</span>');  //$(this) is used to create a Jquery object that contains the current element in the loop
    });
});