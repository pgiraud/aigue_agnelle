$('#nav-wrapper').height($("#nav").height());
$('#nav').affix({
    offset: $('#nav').position()
});
$(window).scroll(function(){
    if ($(this).scrollTop() > 240) {
        $('.hidden-header').fadeIn();
    } else {
        $('.hidden-header').fadeOut();
    }
});
