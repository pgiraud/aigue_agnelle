$('#nav-wrapper').height($("#nav").height());
$('#nav').affix({
    offset: $('#nav').position()
});
$(window).scroll(function(){
    if ($(this).scrollTop() > $('#nav').position().top) {
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
$('#photos_gallery').slides({
    preload: true,
    preloadImage: 'images/loading.gif',
    effect: 'slide, fade',
    crossfade: true,
    slideSpeed: 350,
    fadeSpeed: 500,
    generateNextPrev: true,
    generatePagination: false
});
$('body').scrollspy();
