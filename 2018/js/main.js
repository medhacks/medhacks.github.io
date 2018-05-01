let heights = [];
let sections = [];
heights.push($('#slider-container').height());
var maxWidth = 35;
maxPos = $("#applyBubble")[0].getBoundingClientRect().right;
initPos = $("#homeBubble")[0].getBoundingClientRect().left;
maxWidth = maxPos - initPos - 20;
var counter = 1;
let hamCount = 0;

$(document).ready(() => {
    let $curwindow;

    $('#homeBubble').on('click', () => {
        $('#header').goTo();
    });
    $('#applyBubble').on('click', () => {
        $('#logistics').goTo();
    });
    $('#tracksBubble').on('click', () => {
        $('#challenges').goTo();
    });
    $('#logisticsBubble').on('click', () => {
        $('#applySection').goTo();
    });
    $('#aboutBubble').on('click', () => {
        $('#aboutSection').goTo();
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

    $('#track1').on('click', () => {
        $('.black-overlay').fadeToggle('fast');
        $('#track1-info').fadeToggle('medium');
        $curwindow = $('#track1-info');
    });

    $('#track2').on('click', () => {
        $('.black-overlay').fadeToggle('fast');
        $('#track2-info').fadeToggle('medium');
        $curwindow = $('#track2-info');
    });

    $('#track3').on('click', () => {
        $('.black-overlay').fadeToggle('fast');
        $('#track3-info').fadeToggle('medium');
        $curwindow = $('#track3-info');
    });

    $('.black-overlay').on('click', () => {
        $('.black-overlay').fadeToggle('fast');
        $curwindow.fadeToggle('fast');
    });

    $('#ham-container').on('click', () => {
        $('#ham-container').toggleClass('change');
        $('#side-info').slideToggle();
    });

    $(".apply-question").click(function() {
        if ($(this).parent().hasClass('open')) {
            $(this).closest('.apply-holder').find('.apply-answer-container').animate({height: '0'}, 300);
            $(this).closest('.apply-holder').removeClass('open');
            $(this).closest('.apply-holder').animate({height: '7rem'}, 300);
        } else {
            var newHeight = $(this).closest('.apply-holder').find('.answer-box').height() +'px';
            $(this).closest('.apply-holder').find('.apply-answer-container').animate({'height':newHeight},300);
            $(this).closest('.apply-holder').css('height', 'auto');
            $(this).closest('.apply-holder').addClass('open');
        }
    });

    //taking care of schedule switchups
    $("#fridayAnc").click(function() {
        $(this).parent().addClass('activeLi');
        $("#saturdayAnc").parent().removeClass('activeLi');
        $("#sundayAnc").parent().removeClass('activeLi');
    });
    $("#saturdayAnc").click(function() {
        $(this).parent().addClass('activeLi');
        $("#fridayAnc").parent().removeClass('activeLi');
        $("#sundayAnc").parent().removeClass('activeLi');
    });
    $("#sundayAnc").click(function() {
        $(this).parent().addClass('activeLi');
        $("#saturdayAnc").parent().removeClass('activeLi');
        $("#fridayAnc").parent().removeClass('activeLi');
    });

    $("#genAnc").click(function() {
        $(this).parent().addClass('activeLi');
        $("#eligAnc").parent().removeClass('activeLi');
        $("#miscAnc").parent().removeClass('activeLi');
    });
    $("#eligAnc").click(function() {
        $(this).parent().addClass('activeLi');
        $("#genAnc").parent().removeClass('activeLi');
        $("#miscAnc").parent().removeClass('activeLi');
    });
    $("#miscAnc").click(function() {
        $(this).parent().addClass('activeLi');
        $("#eligAnc").parent().removeClass('activeLi');
        $("#genAnc").parent().removeClass('activeLi');
    });

    $(".section-container").each(function() {

        heights.push($(this).position(this).top - heights[0] - 75);
        counter++;
        sections.push($(this));
    });
    console.log(heights);
    heights[3] = heights[3] - 100;
    sections.push($("#tracksBubble"));
    sections.push($("#logisticsBubble"));
    sections.push($("#applyBubble"));
});

$('#schedule-select').change(function () {
    if ($(this).val() == "Friday, September 7") {
        $('#friday2').addClass('active');
        $('#saturday2').removeClass('active');
        $('#sunday2').removeClass('active');
    } else if ($(this).val() == ("Saturday, September 8")) {
        $('#friday2').removeClass('active');
        $('#saturday2').addClass('active');
        $('#sunday2').removeClass('active');
    } else {
        $('#friday2').removeClass('active');
        $('#saturday2').removeClass('active');
        $('#sunday2').addClass('active');
    }
});

$('#faq-select').change(function () {
    if ($(this).val() == "General") {
        $('#general-tab2').addClass('active');
        $('#eligibility-tab2').removeClass('active');
        $('#misc-tab2').removeClass('active');
    } else if ($(this).val() == "Eligibility") {
        $('#general-tab2').removeClass('active');
        $('#eligibility-tab2').addClass('active');
        $('#misc-tab2').removeClass('active');
    } else {
        $('#general-tab2').removeClass('active');
        $('#eligibility-tab2').removeClass('active');
        $('#misc-tab2').addClass('active');
    }
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
    console.log(percentage);
    if (scrollPosition > 1) {
        scrollPosition = 1;
    }
    newWidth = (maxWidth * scrollPosition);
    var withProp = newWidth.toString() +"px";
    $("#moose-mark").css("left", initWidth);
    $("#moose-mark").css("top", height - 3);
    $("#moose-mark").css('width', withProp);
    // console.log(scrollPosition);
    $("#aboutBubble").removeClass("filled");
    $("#tracksBubble").removeClass("filled");
    $("#logisticsBubble").removeClass("filled");
    $("#applyBubble").removeClass("filled");
    if (percentage > .95) {
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
