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

$().ready(function() {
    $.each([
        "http://farm9.staticflickr.com/8362/8395048113_d44e1c6e33_d.jpg",
        "http://farm9.staticflickr.com/8093/8395050653_a468e5122d_d.jpg",
        "http://farm9.staticflickr.com/8505/8396131284_c65b3af379_d.jpg",
        "http://farm9.staticflickr.com/8195/8396131286_55453cd0ed_d.jpg",
        "http://farm9.staticflickr.com/8230/8396131210_57ed33582d_d.jpg",
        "http://farm9.staticflickr.com/8371/8396131234_81f3dba1b3_d.jpg",
        "http://farm9.staticflickr.com/8214/8396131322_f5c4bdedd2_d.jpg",
        "http://farm9.staticflickr.com/8089/8395048095_6583049308_d.jpg",
        "http://farm9.staticflickr.com/8052/8395048103_e6dc6c1577_d.jpg"
    ], function(index, url) {
        $('.slides_container').append($('<a />').append($('<img />', {
                src: url,
                width: 450
            }) 
        ));
    });
    $.each([
        "http://farm9.staticflickr.com/8362/8395048113_d44e1c6e33_s_d.jpg",
        "http://farm9.staticflickr.com/8093/8395050653_a468e5122d_s_d.jpg",
        "http://farm9.staticflickr.com/8505/8396131284_c65b3af379_s_d.jpg",
        "http://farm9.staticflickr.com/8195/8396131286_55453cd0ed_s_d.jpg",
        "http://farm9.staticflickr.com/8230/8396131210_57ed33582d_s_d.jpg",
        "http://farm9.staticflickr.com/8371/8396131234_81f3dba1b3_s_d.jpg",
        "http://farm9.staticflickr.com/8214/8396131322_f5c4bdedd2_s_d.jpg",
        "http://farm9.staticflickr.com/8089/8395048095_6583049308_s_d.jpg",
        "http://farm9.staticflickr.com/8052/8395048103_e6dc6c1577_s_d.jpg"
    ], function(index, url) {
        $('.pagination')
            .append(
                $('<li />').append(
                    $('<a />').append($('<img />', {
                        src: url,
                        width: 75 
                    }))
                )
            );
        
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

});
