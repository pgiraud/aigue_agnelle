$('#nav-wrapper').height($("#nav").height());
$('#nav').affix({
    offset: $('#nav').position()
});
$(window).scroll(function(){
    if ($(this).scrollTop() > $('#nav').position().top - 32) {
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

    scrollToDiv(elWrapped,30);

    return false;
});

$().ready(function() {
    $.each([
        "http://farm8.staticflickr.com/7364/9733579880_f1527bdb01_d.jpg",
        "http://farm3.staticflickr.com/2844/9733581164_bfb7e9a16d_d.jpg",
        "http://farm6.staticflickr.com/5350/9733578472_b178b4ae5a_d.jpg",
        "http://farm4.staticflickr.com/3952/15144004574_f1587c82ef_d.jpg",
        "http://farm4.staticflickr.com/3807/9730348381_89ef50c24d_d.jpg",
        "http://farm4.staticflickr.com/3950/15144560253_40805fe38b_d.jpg",
        "http://farm6.staticflickr.com/5542/9730345671_eeb14c8b76_d.jpg",
        "http://farm8.staticflickr.com/7583/15144058174_df6622a66e_d.jpg",
        "http://farm4.staticflickr.com/3946/15144056904_016f8654f8_d.jpg"
    ], function(index, url) {
        $('.slides_container').append($('<a />').append($('<img />', {
                src: url,
                "class": "img-rounded",
                width: 450
            }) 
        ));
    });
    $.each([
        "http://farm8.staticflickr.com/7364/9733579880_f1527bdb01_s_d.jpg",
        "http://farm3.staticflickr.com/2844/9733581164_bfb7e9a16d_s_d.jpg",
        "http://farm6.staticflickr.com/5350/9733578472_b178b4ae5a_s_d.jpg",
        "https://farm4.staticflickr.com/3952/15144004574_f1587c82ef_s_d.jpg",
        "http://farm4.staticflickr.com/3807/9730348381_89ef50c24d_s_d.jpg",
        "https://farm4.staticflickr.com/3950/15144560253_40805fe38b_s_d.jpg",
        "http://farm6.staticflickr.com/5542/9730345671_eeb14c8b76_s_d.jpg",
        "http://farm8.staticflickr.com/7583/15144058174_df6622a66e_s_d.jpg",
        "http://farm4.staticflickr.com/3946/15144056904_016f8654f8_s_d.jpg"
    ], function(index, url) {
        $('.pagination')
            .append(
                $('<li />').append(
                    $('<a />').append($('<img />', {
                        src: url,
                        "class": "img-rounded",
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
        generatePagination: false,
        play: 3000,
        pause: 2500,
        hoverPause: true
    });
    $('body').scrollspy({
        offset: 60
    });
});
