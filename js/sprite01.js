$(function () {

    $('.main_ink li').on('mouseenter', function () {
        let idx = $(this).index();
        $('.bh').css({
            backgroundPositionX: 0 + idx * -100
        })
    })

    $('.main_ink li').on('mouseleave', function () {
        $('.bh').css({
            backgroundPositionX: 0
        })
    })
})