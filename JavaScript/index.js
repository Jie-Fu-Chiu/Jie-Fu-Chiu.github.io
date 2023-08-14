$(function () {
    $('#theText').textillate({
        loop: false,
        in: {
            effect: 'fadeInRight',
            delayScale: 1.5,
            delay: 50,
            sync: true,
            reverse: false,
            shuffle: false,
            callback: function () {}
        },
    })
})