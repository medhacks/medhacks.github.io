const initPos = $("#homeButton")[0].getBoundingClientRect().top;
const maxPos = $("#logisticsButton")[0].getBoundingClientRect().bottom;
const maxLen = maxPos - initPos;

$(document).ready(() => {

	$('#aboutButton').on('click', () => {
		$("#aboutSection").goTo();
	});
	$('#tracksButton').on('click', () => {
		$("#trackSection").goTo();
	});
	$('#logisticsButton').on('click', () => {
		$("#logisticsSection").goTo();
	});

	updateBar();
});

$(document).scroll(() => {
    updateBar();
});


function updateBar() {
	let scrollPosition = $(window).scrollTop();

	if (scrollPosition > maxLen) {
		scrollPosition = maxLen;
	}

	$("#bar").css('height', scrollPosition + "px");
}


(function($) {
    $.fn.goTo = function() {
        var placeToGo;
        placeToGo = $(this).offset().top;
        $('html, body').animate({
            scrollTop: placeToGo + 'px'
        });
        return this;
    }
})(jQuery);