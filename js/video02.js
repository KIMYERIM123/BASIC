$(function () {
    $('#bgndVideo').YTPlayer({
        videoURL: 'h_oeFL0K4zI',
        containment: '#main_visual',
        autoPlay: true,
        showControls: false,

        playOnlyIfVisible: true,
        // 스크롤 내리면 영상 멈춤
    });




    $('#conVideo').YTPlayer({
        videoURL: 'h_oeFL0K4zI',
        containment: '#bgm1',
        autoPlay: true,
        showControls: false,

        playOnlyIfVisible: true,
        // 스크롤 내리면 영상 멈춤
    });
    $('#conVideo2').YTPlayer({
        videoURL: 'h_oeFL0K4zI',
        containment: '#bgm2',
        autoPlay: true,
        showControls: false,

        playOnlyIfVisible: true,
        // 스크롤 내리면 영상 멈춤
    });
    $('#conVideo3').YTPlayer({
        videoURL: 'h_oeFL0K4zI',
        containment: '#bgm3',
        autoPlay: true,
        showControls: false,

        playOnlyIfVisible: true,
        // 스크롤 내리면 영상 멈춤
    });





    $('#main_visual .pause').on('click', function () {
        $('#bgndVideo').YTPPause();
    })

    $('#main_visual .play').on('click', function () {
        $('#bgndVideo').YTPPlay();
    })


})