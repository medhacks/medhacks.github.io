let heights = [];
let sections = [];
heights.push($('#slider-container').height());
var maxWidth = 35;
maxPos = $("#faqButton")[0].getBoundingClientRect().right;
initPos = $("#homeButton")[0].getBoundingClientRect().left;
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

    $('#home-small-button').on('click', () => {
        $('#header').goTo();
        $('#side-info').slideToggle();
        $('#ham-container').toggleClass('change');
    });
    $('#apply-small-button').on('click', () => {
        $('#logistics').goTo();
        $('#side-info').slideToggle();
        $('#ham-container').toggleClass('change');
    });
    $('#tracks-small-button').on('click', () => {
        $('#challenges').goTo();
        $('#side-info').slideToggle();
        $('#ham-container').toggleClass('change');
    });
    $('#logistics-small-button').on('click', () => {
        $('#applySection').goTo();
        $('#ham-container').toggleClass('change');
        $('#side-info').slideToggle();
    });
    $('#about-small-button').on('click', () => {
        $('#aboutSection').goTo();
        $('#side-info').slideToggle();
        $('#ham-container').toggleClass('change');
    });

    $(".section-container").each(function() {

        heights.push($(this).position(this).top - heights[0] - 75);
        counter++;
        sections.push($(this));
    });
    heights[3] = heights[3] - 100;
    sections.push($("#tracksBubble"));
    sections.push($("#logisticsBubble"));
    sections.push($("#applyBubble"));
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
    heights.push($('#slider-container').height());
    $(".section-container").each(function() {
        heights.push($(this).position(this).top - heights[0] - 75);
        counter++;
        sections.push($(this));
    });
    heights[2] = heights[2] - 100;
    heights[3] = heights[3] -100;
    heights[4] = heights[4] -100;
    heights[5] = heights[5] -100;

    let scrollPosition = $(window).scrollTop();
    maxWidth = $("#applyBubble")[0].getBoundingClientRect().right;
    initWidth = $("#homeBubble")[0].getBoundingClientRect().left;
    initTop = $("#homeBubble")[0].getBoundingClientRect().top;
    initBottom = $("#homeBubble")[0].getBoundingClientRect().bottom;
    height = (initTop + initBottom) / 2;
    maxWidth = maxWidth - initWidth - 20;

    let percentage = 0;
    let section = 1;
    if (scrollPosition >= heights[4]) {
        percentage = (scrollPosition - heights[4]) / (heights[5] - heights[4]);
        scrollPosition = 0.75 + percentage / (4);
        section = 4;
    } else if (scrollPosition >= heights[3]) {
        percentage = (scrollPosition - heights[3]) / (heights[4] - heights[3]);
        scrollPosition = 0.5 + percentage / (4);
        section = 3
    } else if (scrollPosition >= heights[2]) {
        percentage = (scrollPosition - heights[2]) / (heights[3] - heights[2]);
        // percentage = percentage + .5;
        scrollPosition = 0.25 + percentage / 4 ;
        section = 2;
    } else {
        section = 1;
        percentage = scrollPosition / (heights[2]);
        scrollPosition = percentage / 4;
    }
    if (scrollPosition > 1) {
        scrollPosition = 1;
    }
    newWidth = (maxWidth * scrollPosition);
    var withProp = newWidth.toString() +"px";
    $("#moose-mark").css("left", initWidth);
    $("#moose-mark").css("top", height - 3);
    $("#moose-mark").css('width', withProp);
    $("#aboutBubble").removeClass("filled");
    $("#tracksBubble").removeClass("filled");
    $("#logisticsBubble").removeClass("filled");
    $("#applyBubble").removeClass("filled");
    if (percentage > .99999) {
        if (section == 1) {
            $("#aboutBubble").addClass("filled");
            $("#tracksBubble").removeClass("filled");
            $("#logisticsBubble").removeClass("filled");
            $("#applyBubble").removeClass("filled");
        } else if (section == 2) {
            $("#aboutBubble").addClass("filled");
            $("#tracksBubble").addClass("filled");
            $("#logisticsBubble").removeClass("filled");
            $("#applyBubble").removeClass("filled");
        } else if (section == 3) {
            $("#aboutBubble").addClass("filled");
            $("#tracksBubble").addClass("filled");
            $("#logisticsBubble").addClass("filled");
            $("#applyBubble").removeClass("filled");
        } else if (section == 4) {
            $("#aboutBubble").addClass("filled");
            $("#tracksBubble").addClass("filled");
            $("#logisticsBubble").addClass("filled");
            $("#applyBubble").addClass("filled");
        }
    } else {
        if (section == 1) {
            $("#aboutBubble").removeClass("filled");
            $("#tracksBubble").removeClass("filled");
            $("#logisticsBubble").removeClass("filled");
            $("#applyBubble").removeClass("filled");
        } else if (section == 2) {
            $("#aboutBubble").addClass("filled");
            $("#tracksBubble").removeClass("filled");
            $("#logisticsBubble").removeClass("filled");
            $("#applyBubble").removeClass("filled");
        } else if (section == 3) {
            $("#aboutBubble").addClass("filled");
            $("#tracksBubble").addClass("filled");
            $("#logisticsBubble").removeClass("filled");
            $("#applyBubble").removeClass("filled");
        } else if (section == 4) {
            $("#aboutBubble").addClass("filled");
            $("#tracksBubble").addClass("filled");
            $("#logisticsBubble").addClass("filled");
            $("#applyBubble").removeClass("filled");
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
