let heights = [];
let sections = [];
heights.push($('#slider-container').height());
var maxWidth = 35;
maxPos = $("#faqBubble")[0].getBoundingClientRect().right;
initPos = $("#homeBubble")[0].getBoundingClientRect().left;
maxWidth = maxPos - initPos - 20;
var counter = 1;
let hamCount = 0;

$(document).ready(() => {
    let $curwindow;
    console.log("READY");
    $('#homeButton').on('click', () => {
        $('#top-of-page').goTo();
    });
    $('#aboutButton').on('click', () => {
        $('#aboutSection').goTo();
    });
    $('#tracksButton').on('click', () => {
        $('#challenges').goTo();
    });
    $('#applyingButton').on('click', () => {
        $('#applyingAnchor').goTo();
    });
    $('#sponsorButton').on('click', () => {
        $('#sponsor').goTo();
    });
    $('#faqButton').on('click', () => {
        $('#faqSection').goTo();
    });

    // $('#home-small-button').on('click', () => {
    //     $('#header').goTo();
    //     $('#side-info').slideToggle();
    //     $('#ham-container').toggleClass('change');
    // });
    // $('#apply-small-button').on('click', () => {
    //     $('#logistics').goTo();
    //     $('#side-info').slideToggle();
    //     $('#ham-container').toggleClass('change');
    // });
    // $('#tracks-small-button').on('click', () => {
    //     $('#challenges').goTo();
    //     $('#side-info').slideToggle();
    //     $('#ham-container').toggleClass('change');
    // });
    // $('#logistics-small-button').on('click', () => {
    //     $('#applySection').goTo();
    //     $('#ham-container').toggleClass('change');
    //     $('#side-info').slideToggle();
    // });
    // $('#about-small-button').on('click', () => {
    //     $('#aboutSection').goTo();
    //     $('#side-info').slideToggle();
    //     $('#ham-container').toggleClass('change');
    // });

    $(".section-container").each(function() {

        // heights.push($(this).position(this).top - heights[0] - 75);
        counter++;
        sections.push($(this));
    });
    heights[3] = heights[3] - 100;
    sections.push($("#tracksBubble"));
    sections.push($("#logisticsBubble"));
    sections.push($("#faqBubble"));
});


$(document).scroll(() => {
    checkBubbles();
});

$(window).resize(() => {
    checkBubbles();
});

function checkBubbles() {
    $("#moose-mark").css("visibility", "visible");
    heights.length = 0;
    heights.push($('#sliderContainer').height());

    console.log($('#sliderContainer').height());

    $(".section-container").each(function() {
        // console.log("NAME " + $(this).text());
        heights.push($(this).position(this).top - heights[0] - 75);
        counter++;
        sections.push($(this));
    });

    console.log("counter" + counter);

    heights[2] = heights[2] - 100;
    heights[3] = heights[3] -100;
    heights[4] = heights[4] -100;
    heights[5] = heights[5] -100;
    heights[6] = heights[6] -100;

    console.log(heights);

    let scrollPosition = $(window).scrollTop();
    maxWidth = $("#faqBubble")[0].getBoundingClientRect().right;
    initWidth = $("#homeBubble")[0].getBoundingClientRect().left;
    initTop = $("#homeBubble")[0].getBoundingClientRect().top;
    initBottom = $("#homeBubble")[0].getBoundingClientRect().bottom;
    height = (initTop + initBottom) / 2;
    maxWidth = maxWidth - initWidth - 20;

    let percentage = 0;
    let section = 1;

    console.log(scrollPosition);

    if (scrollPosition >= heights[5]) {
        percentage = (scrollPosition - heights[5]) / (heights[6] - heights[5]);
        scrollPosition = 0.8 + percentage / (5);
        section = 5;
    } else if (scrollPosition >= heights[4]) {
        percentage = (scrollPosition - heights[4]) / (heights[5] - heights[4]);
        scrollPosition = 0.6 + percentage / (5);
        section = 4
    } else if (scrollPosition >= heights[3]) {
        percentage = (scrollPosition - heights[3]) / (heights[4] - heights[3]);
        scrollPosition = 0.4 + percentage / (5);
        section = 3
    } else if (scrollPosition >= heights[2]) {
        percentage = (scrollPosition - heights[2]) / (heights[3] - heights[2]);
        // percentage = percentage + .5;
        scrollPosition = 0.2 + percentage / (5) ;
        section = 2;
    } else {
        section = 1;
        percentage = scrollPosition / (heights[2]);
        scrollPosition = percentage / 5;
    }
    if (scrollPosition > 1) {
        scrollPosition = 1;
    }
    newWidth = (maxWidth * scrollPosition) - 5;
    var withProp = newWidth.toString() +"px";
    $("#moose-mark").css("left", initWidth + 3);
    $("#moose-mark").css("top", height - 3);
    $("#moose-mark").css('width', withProp);
    $("#aboutBubble").removeClass("filled");
    $("#tracksBubble").removeClass("filled");
    $("#applyingBubble").removeClass("filled");
    $("#sponsorBubble").removeClass("filled");
    $("#faqBubble").removeClass("filled");
    if (percentage > .99999) {
        if (section == 1) {
            $("#aboutBubble").addClass("filled");
            $("#tracksBubble").removeClass("filled");
            $("#applyingBubble").removeClass("filled");
            $("#sponsorBubble").removeClass("filled");
            $("#faqBubble").removeClass("filled");
        } else if (section == 2) {
            $("#aboutBubble").addClass("filled");
            $("#tracksBubble").addClass("filled");
            $("#applyingBubble").removeClass("filled");
            $("#sponsorBubble").removeClass("filled");
            $("#faqBubble").removeClass("filled");
        } else if (section == 3) {
            $("#aboutBubble").addClass("filled");
            $("#tracksBubble").addClass("filled");
            $("#applyingBubble").addClass("filled");
            $("#sponsorBubble").removeClass("filled");
            $("#faqBubble").removeClass("filled");
        } else if (section == 4) {
            $("#aboutBubble").addClass("filled");
            $("#tracksBubble").addClass("filled");
            $("#applyingBubble").addClass("filled");
            $("#sponsorBubble").addClass("filled");
            $("#faqBubble").removeClass("filled");
        } else if (section == 5) {
            $("#aboutBubble").addClass("filled");
            $("#tracksBubble").addClass("filled");
            $("#applyingBubble").addClass("filled");
            $("#sponsorBubble").addClass("filled");
            $("#faqBubble").addClass("filled");
        }
    } else {
        if (section == 1) {
            $("#aboutBubble").removeClass("filled");
            $("#tracksBubble").removeClass("filled");
            $("#applyingBubble").removeClass("filled");
            $("#sponsorBubble").removeClass("filled");
            $("#faqBubble").removeClass("filled");
        } else if (section == 2) {
            $("#aboutBubble").addClass("filled");
            $("#tracksBubble").removeClass("filled");
            $("#applyingBubble").removeClass("filled");
            $("#sponsorBubble").removeClass("filled");
            $("#faqBubble").removeClass("filled");
        } else if (section == 3) {
            $("#aboutBubble").addClass("filled");
            $("#tracksBubble").addClass("filled");
            $("#applyingBubble").removeClass("filled");
            $("#sponsorBubble").removeClass("filled");
            $("#faqBubble").removeClass("filled");
        } else if (section == 4) {
            $("#aboutBubble").addClass("filled");
            $("#tracksBubble").addClass("filled");
            $("#applyingBubble").addClass("filled");
            $("#sponsorBubble").removeClass("filled");
            $("#faqBubble").removeClass("filled");
        } else if (section == 5) {
            $("#aboutBubble").addClass("filled");
            $("#tracksBubble").addClass("filled");
            $("#applyingBubble").addClass("filled");
            $("#sponsorBubble").addClass("filled");
            $("#faqBubble").removeClass("filled");
        }
    }
}



(function($) {
    $.fn.goTo = function() {
        var placeToGo;
        placeToGo = $(this).offset().top - 150;
        $('html, body').animate({
            scrollTop: placeToGo + 'px'
        });
        return this;
    }
})(jQuery);
