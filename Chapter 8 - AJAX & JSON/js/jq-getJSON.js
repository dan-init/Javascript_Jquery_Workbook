$('#exchangerates').append('<div id="rates"></div><div id="reload"></div>');    

function loadRates() {
    $.getJSON('data/rates.json')
    .done(function(data) {                                                      //Server returns data
        var d = new Date();                                                     //Create date object
        var hrs = d.getHours();                                                 //Get hours
        var mins = d.getMinutes();                                              //Get mins
        var msg = '<h2>Exhange rates</h2>';                                     //Add each rate
        $.each(data, function(key, val) {
            msg += '<div class="' + key + '">' + key + ' : ' + val + '</div>';
        });
        msg += '<br>Last update: ' + hrs + ':' + mins + '<br>';                 //Show update time
        $('#rates').html(msg);                                                  //Add rates to page
    }).fail(function() {                                                        //IF THERE IS ERROR
        $('aside').append('Sorry, we cannot load rates.');                      //Show error messsage
    }).always(function() {                                                      //ALWAYS RUN
        var reload = '<a id="refresh" href="#" >';                              //Add refresh link
        reload += '<img src="img/refresh.png" alt="refresh" /></a>';            
        $('#reload').html(reload);                                              //Add refresh link
        $('#refresh').on('click', function(e) {                                 //Add click handler
            e.preventDefault();                                                 //Stop link
            loadRates();                                                        //Call loadRates()
        });
    });
} 

loadRates();                                                                    //Call loadRates()