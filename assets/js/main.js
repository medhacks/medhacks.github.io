$('#subtitle').hide();
$('#youtuberon').hide();

$('#fakebox').css('top', ($('#sponsorbox').position().top - 100) + 'px');
resizeSchedule();
//closeFAQs();

function resizeSchedule() {
    for (var i = 0; i < 3; i++) {
        var table = $(".day-table").eq(i).children("div").eq(1);
        var length = $(table).children("div").eq(0).children("div").length;
        for (var j = 0; j < length; j++) {
            $(table).children("div").eq(0).children("div").eq(j).css("height", "auto");
            $(table).children("div").eq(1).children("div").eq(j).css("height", "auto");
            var newSize1 = parseInt($(table).children("div").eq(0).children("div").eq(j).css("height"));
            var newSize2 = parseInt($(table).children("div").eq(1).children("div").eq(j).css("height"));
            $(table).children("div").eq(0).children("div").eq(j).css("height", Math.max(newSize1, newSize2) + "px");
            $(table).children("div").eq(1).children("div").eq(j).css("height", Math.max(newSize1, newSize2) + "px");
        }
    }
}

/**function closeFAQs() {
    $(".faq-holder-box").each(function() {
        var height = parseInt($(this).children("h3").outerHeight(true));
        $(this).css("height", height + 30);
    });

    setTimeout(function() {
        $(".sponsor-section").css("opacity", 1);
    }, 500);
}

$(".faq-holder-box").click(function() {
    var height1 = parseInt($(this).children("h3").outerHeight(true));
    var height2 = 0;
    $(this).children("p").each(function() {
        height2 += parseInt($(this).outerHeight(true));
    });
    $(this).css("height", height1 + height2 + 30);
    $(".sponsor-section").css("opacity", 0);
});**/

$(".faq-question").click(function() {
    if ($(this).parent().hasClass('open')) {
        $(this).closest('.faq-holder').find('.faq-answer-container').animate({height: '0'}, 300);
        $(this).closest('.faq-holder').removeClass('open');
        $(this).closest('.faq-holder').animate({height: '7rem'}, 300);
    } else {
        var newHeight = $(this).closest('.faq-holder').find('.answer-box').height() +'px';
        $(this).closest('.faq-holder').find('.faq-answer-container').animate({'height':newHeight},300);
        $(this).closest('.faq-holder').css('height', 'auto');
        $(this).closest('.faq-holder').addClass('open');
    }
});


$(function() {

    var $body = $(document);
    $body.bind('scroll', function() {
        // "Disable" the horizontal scroll.
        if ($body.scrollLeft() !== 0) {
            $body.scrollLeft(0);
        }
    });

});

function goSponsor() {
     setTimeout(function() {
          $('#sponsorbox').animate({boxShadow : "0 0 24px 1px #193d56"}, 1000, function() {
               $('#sponsorbox').animate({boxShadow : "0 0 6px 1px rgba(0, 0, 0, 0.05)"}, 1000);
          });
     }, 500);
}

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

$( window ).resize(function() {
    resizeSchedule();
    if($(window).width() < 1200) {
        $('#sponsor-column').removeClass('column-border-right');
    } else {
        $('#mlh-trust-badge').css("width", "10%");
        $('#sponsor-column').addClass('column-border-right');
    }

    var logoWidth = parseInt($(".header-navbar-logo").css("width"));
    if (isMobile()) {
        $('#mlh-trust-badge').css("width", logoWidth * 0.2);
    } else {
        $('#mlh-trust-badge').css("width", logoWidth * 0.29);
    }
});

$(window).scroll(function() {
    if($(document).scrollTop() < ($(document).height() - $(window).height())/2) {
        $('#title').show();
        $('#location').show();
        $('#location-sub').show();
        $('#sponsors').show();
        $('#subtitle').hide();
        $('#youtuberon').hide();
    } else if ($(document).scrollTop() > ($(document).height() - $(window).height())/2) {
        $('#title').hide();
        $('#location').hide();
        $('#location-sub').hide();
        $('#sponsors').hide();
        $('#subtitle').show();
        $('#youtuberon').show();
    }
});
$(function() {

    function isMobile() {

        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
    // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

    // requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel

    // MIT license

    (function() {
        var lastTime = 0;
        var vendors = ['ms', 'moz', 'webkit', 'o'];
        for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
            window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] ||
              window[vendors[x]+'CancelRequestAnimationFrame'];
        }

        if (!window.requestAnimationFrame)
            window.requestAnimationFrame = function(callback, element) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                  timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };

        if (!window.cancelAnimationFrame)
            window.cancelAnimationFrame = function(id) {
                clearTimeout(id);
            };
    }());

    if(true) {
        (function(window, document, undefined) {

          $(document).ready(function() {

            var running = false,
                $header = $('.header-navbar'),
                $headerlogo = $('.header-navbar-logo');;

            function updateHeaderScroll() {

              if(running) {

                return;
              }

              running = true;

              window.requestAnimationFrame(function() {

                $header.toggleClass('header-navbar-scrolled', $(window).scrollTop() > $(window).height() - 100 && $(window).scrollTop() < $(document).height() - $(window).height());
                $headerlogo.toggleClass('header-navbar-logo-gone', $(window).scrollTop() < $(window).height() - 100);
                running = false;
              });
            }

            updateHeaderScroll();

            $(window).scroll(updateHeaderScroll);

            var logoWidth = parseInt($(".header-navbar-logo").css("width"));
            $('#mlh-trust-badge').css("width", logoWidth * 0.29);


          });

        })(window, window.document);
    }

    $('a[href*=#]:not([href=#])').click(function() {

        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

            if (target.length) {

                $('html,body').animate({

                    scrollTop: target.offset().top - $('.header-navbar').height(),

                }, 500);

                $('html').removeClass('nav-open');

                return false;
            }
        }
    });

    $('.header-navbar-logo').click(function() {
        $('html,body').animate({scrollTop: 0}, 500);
        $('html').removeClass('nav-open');
    });

    $('.header-navbar-hamburger').click(function() {

        $('html').toggleClass('nav-open');
    });

    $('body').click(function(e) {

        if($('html').hasClass('nav-open') && $(e.target).parents('.header-navbar').length === 0) {

            $('html').removeClass('nav-open');
        }
    });

    if(isMobile()) {

        //$('.header-navbar').addClass('header-navbar-scrolled');
        $('.header-navbar-logo').css('margin', 10);
        $('.header-navbar-logo').css('margin-left', 10);
        $('.header-navbar-hamburger').css('margin', 10);
        $('.header-navbar').css('height', 70);
        $('.header-text-byline-caption').css('font-size', 14);
        $('.header-text-byline-caption').css('margin', 5);
        $('.header-text-headline').css('margin-bottom', 0);

        var width = parseInt($(".header-navbar-logo").css("width"));
        $('#mlh-trust-badge').css("width", (width * 0.2) + "px");
        //$('#mlh-trust-badge').css("width", "10px");
        $('#sponsor-column').removeClass('column-border-right');
    }
});
