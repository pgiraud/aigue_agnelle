$('#nav-wrapper').height($("#nav").height());
$('#nav').affix({
    offset: $('#nav').position()
});
$('body').scrollspy();
$(window).scroll(function(){
    if ($(this).scrollTop() > 240) {
        $('.hidden-header').fadeIn();
    } else {
        $('.hidden-header').fadeOut();
    }
});

function scrollToDiv(element,navheight) {
    var offset = element.offset();
    var offsetTop = offset.top;
    var totalScroll = offsetTop-navheight;

    $('body,html').animate({
        scrollTop: totalScroll
    }, 600);
}
$('.nav li a').click(function(){

    var el = $(this).attr('href');
    var elWrapped = $(el);

    scrollToDiv(elWrapped,5);

    return false;
});

