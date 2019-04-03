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

});

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