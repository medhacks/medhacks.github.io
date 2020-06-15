$(document).ready(function () {

    changeState();
    $(window).resize(function () {
        changeState();
    });

    function changeState() {
        if (document.documentElement.clientWidth < 980) {
            $('.sponsor-blocks').css({
                "height": "120px",
                "width": "100%",
                "flex-wrap": "nowrap",
                "overflow-x": "scroll",
                "overflow-y": "hidden",
                "-webkit-overflow-scrolling": "touch",
                "scroll-snap-type": "x mandatory",
                'justify-content': "flex-start",
                "margin-left": "0",
                "margin-right": "0",
            });
            $('.progress-container').show();
        } else {
            $('.sponsor-blocks').css({
                "overflow": "hidden",
                "height": "auto",
                "width": "auto",
                "margin-left": "4%",
                "margin-right": "4%",
                "flex-wrap": "wrap",
                'justify-content': "center",
                "scroll-snap-type": "none",

            });
            $('.progress-container').hide();
        }


    }

    // set width and step variables and add active class to first slider
    var scroll_progress = 1;
    total_sponsor_number = 18;

    // start slider function
    startSlider();

    function resetInterval() { //add this method which wil reset the timer
        window.clearInterval(looper); //clear current interval
        looper = setInterval(autoSlide, 500); //start auto slide again.
    }

    function autoSlide() { //move this to a function from being anonymous
        var last_sponsor_pos = $('#sponsor' + total_sponsor_number).position().left + $('#sponsor' + total_sponsor_number).width() - 10;
        var sponsor_right = $('.sponsor-blocks').width();
        var horiz_inc = 100;

        if (last_sponsor_pos > sponsor_right) {
            $('.sponsor-blocks').animate({
                scrollLeft: horiz_inc * scroll_progress
            });
            scroll_progress++;
        } else {
            resetInterval;
            $('.sponsor-blocks').animate({
                scrollLeft: $('#sponsor1').position().left
            });
            scroll_progress = 1;
        }
        progressBar();

    }

    function startSlider() {
        looper = setInterval(autoSlide, 500); // interval
    }

    function stopSlider() {
        clearInterval(looper); // interval
    }

    $('.sponsor-blocks').hover(function () {
        stopSlider();
    }, function () {
        startSlider();
    });

    $('.sponsor-blocks').on('touchmove', function () {
        stopSlider();
        console.log("swipeed");
    });

    $('.sponsor-blocks').on('touchend', function () {
        startSlider();
        console.log("scrolling");
    });

    // When the user scrolls the page, execute myFunction
    $('.sponsor-blocks').on('scroll', progressBar);

    function progressBar() {
        var winScroll = $('.sponsor-blocks').scrollLeft();
        var width = $('#sponsor' + total_sponsor_number).position().left - $('#sponsor1').position().left - $('#sponsor1').width();
        var scrolled = (winScroll / width) * 100;
        document.getElementById("myBar1").style.width = 100 - scrolled + "%";
        document.getElementById("myBar2").style.width = scrolled + "%";
    }
});



