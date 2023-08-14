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