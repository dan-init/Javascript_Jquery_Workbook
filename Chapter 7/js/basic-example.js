$(':header')
.addClass('headline');
$('li:lt(1)')
.hide()
.fadeIn(3000);
$('li:lt(2)')
.hide()
.fadeIn(1500);
$('li')
.on('click', function() {
    $(this).remove();
});