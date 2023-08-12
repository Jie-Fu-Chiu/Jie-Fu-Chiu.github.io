<script>
$(function () {
    $('#news-headline').textillate({
        loop: true,
        in: {
            effect: 'rollIn',
            delayScale: 1.5,
            delay: 50,
            sync: true,
            reverse: false,
            shuffle: false,
            callback: function () {}
        },
    })
})
</script>