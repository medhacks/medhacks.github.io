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
    $('#speakerButton').on('click', () => {
        $('#speakers').goTo();
    });
    $('#tracksButton').on('click', () => {
        $('#challenges').goTo();
    });
    $('#applyingButton').on('click', () => {
        $('#applyingAnchor').goTo();
    });
    $('#scheduleButton').on('click', () => {
        $('#schedule').goTo();
    });
    $('#sponsorButton').on('click', () => {
        $('#sponsor').goTo();
    });
    $('#faqButton').on('click', () => {
        $('#faqSection').goTo();
    });

    $(".section-container").each(function() {

        // heights.push($(this).position(this).top - heights[0] - 75);
        counter++;
        sections.push($(this));
    });
    heights[3] = heights[3] - 100;

    sections.push($("#speakerBubble"));
    sections.push($("#tracksBubble"));
    sections.push($("#scheduleBubble"));
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

    // console.log($('#sliderContainer').height());

    $(".section-container").each(function() {
        // console.log("NAME " + $(this).text());
        heights.push($(this).position(this).top - heights[0] - 75);
        counter++;
        sections.push($(this));
    });

    // console.log("counter" + counter);

    heights[3] = heights[3] - 100;
    heights[4] = heights[4] -100;
    heights[5] = heights[5] -100;
    heights[6] = heights[6] -100;
    heights[7] = heights[7] -100;
    heights[8] = heights[8] -100;
    heights[9] = heights[9] - 100;

    //console.log(heights);

    let scrollPosition = $(window).scrollTop();
    maxWidth = $("#faqBubble")[0].getBoundingClientRect().right;
    initWidth = $("#homeBubble")[0].getBoundingClientRect().left;
    initTop = $("#homeBubble")[0].getBoundingClientRect().top;
    initBottom = $("#homeBubble")[0].getBoundingClientRect().bottom;
    height = (initTop + initBottom) / 2;
    maxWidth = maxWidth - initWidth - 20;

    let percentage = 0;
    let section = 1;

    // console.log(scrollPosition);

    if (scrollPosition >= heights[8]) {
        percentage = (scrollPosition - heights[8]) / (heights[9] - heights[8]);
        scrollPosition = 0.86 + percentage / (7);
        section = 7;
    } else if (scrollPosition >= heights[7]) {
        percentage = (scrollPosition - heights[7]) / (heights[8] - heights[7]);
        scrollPosition = 0.71 + percentage / (7);
        section = 6;
    }else if (scrollPosition >= heights[6]) {
        percentage = (scrollPosition - heights[6]) / (heights[7] - heights[6]);
        scrollPosition = 0.57 + percentage / (7);
        section = 5;
    } else if (scrollPosition >= heights[5]) {
        percentage = (scrollPosition - heights[5]) / (heights[6] - heights[5]);
        scrollPosition = 0.43 + percentage / (7);
        section = 4
    } else if (scrollPosition >= heights[4]) {
        percentage = (scrollPosition - heights[4]) / (heights[5] - heights[4]);
        scrollPosition = 0.29 + percentage / (7);
        section = 3
    } else if (scrollPosition >= heights[3]) {
        percentage = (scrollPosition - heights[3]) / (heights[4] - heights[3]);
        // percentage = percentage + .5;
        scrollPosition = 0.14 + percentage / (7) ;
        section = 2;
    } else {
        section = 1;
        percentage = scrollPosition / (heights[3]);
        scrollPosition = percentage / 7;
    }
    if (scrollPosition > 1) {
        scrollPosition = 1;
    }
    newWidth = (maxWidth * scrollPosition) - 10;
    var withProp = newWidth.toString() +"px";
    $("#moose-mark").css("left", initWidth + 3);
    $("#moose-mark").css("top", height - 2);
    $("#moose-mark").css('width', withProp);
    $("#aboutBubble").removeClass("filled");
    $("#speakerBubble").removeClass("filled");
    $("#tracksBubble").removeClass("filled");
    $("#scheduleBubble").removeClass("filled");
    $("#applyingBubble").removeClass("filled");
    $("#sponsorBubble").removeClass("filled");
    $("#faqBubble").removeClass("filled");
    if (percentage > .99999) {
        if (section == 1) {
            $("#aboutBubble").addClass("filled");
            $("#speakerBubble").removeClass("filled");
            $("#tracksBubble").removeClass("filled");
            $("#applyingBubble").removeClass("filled");
            $("#scheduleBubble").removeClass("filled");
            $("#sponsorBubble").removeClass("filled");
            $("#faqBubble").removeClass("filled");
        } else if (section == 2) {
            $("#aboutBubble").addClass("filled");
            $("#speakerBubble").addClass("filled");
            $("#tracksBubble").removeClass("filled");
            $("#applyingBubble").removeClass("filled");
            $("#scheduleBubble").removeClass("filled");
            $("#sponsorBubble").removeClass("filled");
            $("#faqBubble").removeClass("filled");
        } else if (section == 3) {
            $("#aboutBubble").addClass("filled");
            $("#speakerBubble").addClass("filled");
            $("#tracksBubble").addClass("filled");
            $("#applyingBubble").removeClass("filled");
            $("#scheduleBubble").removeClass("filled");
            $("#sponsorBubble").removeClass("filled");
            $("#faqBubble").removeClass("filled");
        } else if (section == 4) {
            $("#aboutBubble").addClass("filled");
            $("#speakerBubble").addClass("filled");
            $("#tracksBubble").addClass("filled");
            $("#applyingBubble").addClass("filled");
            $("#scheduleBubble").removeClass("filled")
            $("#sponsorBubble").removeClass("filled");
            $("#faqBubble").removeClass("filled");
        } else if (section == 5) {
            $("#aboutBubble").addClass("filled");
            $("#speakerBubble").addClass("filled");
            $("#tracksBubble").addClass("filled");
            $("#applyingBubble").addClass("filled");
            $("#scheduleBubble").addClass("filled")
            $("#sponsorBubble").removeClass("filled");
            $("#faqBubble").removeClass("filled");
        } else if (section == 6) {
            $("#aboutBubble").addClass("filled");
            $("#speakerBubble").addClass("filled");
            $("#tracksBubble").addClass("filled");
            $("#applyingBubble").addClass("filled");
            $("#scheduleBubble").addClass("filled");
            $("#sponsorBubble").addClass("filled");
            $("#faqBubble").removeClass("filled");
        } else if (section == 7) {
            $("#aboutBubble").addClass("filled");
            $("#speakerBubble").addClass("filled");
            $("#tracksBubble").addClass("filled");
            $("#applyingBubble").addClass("filled");
            $("#scheduleBubble").addClass("filled");
            $("#sponsorBubble").addClass("filled");
            $("#faqBubble").addClass("filled");
        }
    } else {
        if (section == 1) {
            $("#aboutBubble").removeClass("filled");
            $("#speakerBubble").removeClass("filled");
            $("#tracksBubble").removeClass("filled");
            $("#applyingBubble").removeClass("filled");
            $("#scheduleBubble").removeClass("filled");
            $("#sponsorBubble").removeClass("filled");
            $("#faqBubble").removeClass("filled");
        } else if (section == 2) {
            $("#aboutBubble").addClass("filled");
            $("#speakerBubble").removeClass("filled");
            $("#tracksBubble").removeClass("filled");
            $("#applyingBubble").removeClass("filled");
            $("#scheduleBubble").removeClass("filled");
            $("#sponsorBubble").removeClass("filled");
            $("#faqBubble").removeClass("filled");
        } else if (section == 3) {
            $("#aboutBubble").addClass("filled");
            $("#speakerBubble").addClass("filled");
            $("#tracksBubble").removeClass("filled");
            $("#applyingBubble").removeClass("filled");
            $("#scheduleBubble").removeClass("filled");
            $("#sponsorBubble").removeClass("filled");
            $("#faqBubble").removeClass("filled");
        } else if (section == 4) {
            $("#aboutBubble").addClass("filled");
            $("#speakerBubble").addClass("filled");
            $("#tracksBubble").addClass("filled");
            $("#applyingBubble").removeClass("filled");
            $("#scheduleBubble").removeClass("filled");
            $("#sponsorBubble").removeClass("filled");
            $("#faqBubble").removeClass("filled");
        } else if (section == 5) {
            $("#aboutBubble").addClass("filled");
            $("#speakerBubble").addClass("filled");
            $("#tracksBubble").addClass("filled");
            $("#applyingBubble").addClass("filled");
            $("#scheduleBubble").removeClass("filled");
            $("#sponsorBubble").removeClass("filled");
            $("#faqBubble").removeClass("filled");
        } else if (section == 6) {
            $("#aboutBubble").addClass("filled");
            $("#speakerBubble").addClass("filled");
            $("#tracksBubble").addClass("filled");
            $("#applyingBubble").addClass("filled");
            $("#scheduleBubble").addClass("filled");
            $("#sponsorBubble").removeClass("filled");
            $("#faqBubble").removeClass("filled");
        } else if (section == 7) {
            $("#aboutBubble").addClass("filled");
            $("#speakerBubble").addClass("filled");
            $("#tracksBubble").addClass("filled");
            $("#applyingBubble").addClass("filled");
            $("#scheduleBubble").addClass("filled");
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
