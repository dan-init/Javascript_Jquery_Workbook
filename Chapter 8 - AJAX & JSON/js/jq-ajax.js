$('nav a').on('click', function(e) {
    e.preventDefault();
    var url = this.href;                                                //URL to load
    var $content = $('#content');                                       //Cache selection

    $('nav a.current').removeClass('current');                          //Update links
    $(this).addClass('current');
    $('#container').remove();                                           //Remove content

    $.ajax({
        type:"GET",                                                     //GET or POST, (was written as POST in the book, but should have been GET)
        url: url,                                                       //path to file
        timeout: 2000,                                                  //Waiting time
        beforeSend: function() {                                        //Before Ajax
            $content.append('<div is="load">Loading</div>');            //Load message
        },
        complete: function() {                                          //Once finished
            $('#loading').remove();                                     //Clear message
        },
        success: function(data) {                                       //Show content
            $content.html( $(data).find('#container')).hide().fadeIn(400);
        },
        fail: function() {                                              //Show error message
            $('#panel').html('<div class="loading">Please try again soon.</div>'); 
        }
    });
});