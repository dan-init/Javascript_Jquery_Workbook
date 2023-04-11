$('.accordion').on('click', '.accordion-control', function(e){  //When clicked
    e.preventDefault();                                         //Prevent default action of button
    $(this)                                                     //Get the element user clicked on
        .next('.accordion-panel')                               //Select the following panel
        .not(':animated')                                       //If it is not currently animating
        .slideToggle();                                         //Use slide toggle to show or hide it
});