$('nav a').on('click', function(e) {                            //User clicks nav link
    e.preventDefault();                                         //Stop loading new link
    var url = this.href;                                        //Get the value of href

    $('nav a.current').removeClass('current');                  //Clear current indicator
    $(this).addClass('current');                                //new current indicator

    $('#container').remove();                                   //Remove old content
    $('#content').load(url +' #content').hide().fadeIn('slow'); //New content
});