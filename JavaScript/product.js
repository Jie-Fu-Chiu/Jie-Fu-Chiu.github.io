$(function () {
    $('#theTitle').textillate({
        loop: false,
        in: {
            effect: 'fadeInLeft',
            delayScale: 1.5,
            delay: 400,
            sync: true,
            reverse: false,
            shuffle: false,
            callback: function () {}
        },
    })
})
$(function () {
    $('#theEnTitle').textillate({
        loop: false,
        in: {
            effect: 'fadeInRight',
            delayScale: 1.5,
            delay: 400,
            sync: true,
            reverse: false,
            shuffle: false,
            callback: function () {}
        },
    })
})
$(function () {
    $('.card img').css('opacity', 0.5);
    $('.card img').first().css('opacity', 1);
    $('.card img').mouseover(function(){
        $(this).fadeTo(200, 1);
        $('.card img').not(this).fadeTo(200, 0.5);
    });
});