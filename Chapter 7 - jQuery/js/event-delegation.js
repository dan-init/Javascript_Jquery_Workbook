$(function() {
    var listItem, itemStatus, eventType;                            //Declare variables

    $('ul').on(                                                     //.on() method used on <ul> selecter
        'click mouseover',                                          //Specify event
        ':not(#four)',                                              //Filtering out the <li> element with the id "four"
        {status : 'important'},                                     //Additional data in object literal
        function(e) {                                               //Event handler function
            listItem = 'Item: ' +e.target.textContent + '<br />';   //Assigning values to variables
            itemStatus = 'Status '+ e.data.status + '<br />';       //
            eventType = 'Event: ' + e.type;                         //
            $('#notes').html(listItem+itemStatus+eventType);        //Setting the html to the element with id of "notes"
        }
    );
});