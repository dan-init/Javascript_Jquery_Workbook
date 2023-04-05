$(function() {
    $('li').on('click', function(e) {
        $('li span').remove();
        var date = new Date();
        date.getTime(e.timeStamp);                                                  //Type error on page 329, example calls setTime method, not getTime
        var clicked =date.toDateString();
        $(this).append('<span class="date">' + clicked + ' ' + e.type + '</span>');
    });
});

