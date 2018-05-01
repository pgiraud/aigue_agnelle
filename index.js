$(function() {
    $('.carousel').each(function(){
        var items = $(this).find('.carousel-item>div');
        var width = $(this).outerWidth();
        console.log (width);
        items.css('height', width * 9 / 16);
    });
    $('.carousel').carousel();
});
