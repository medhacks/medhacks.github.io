let maxLen;
let distances;

$(document).ready(() => {
	setUpArrays();
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


// calculates y positions of relevant pieces of site and puts them into arrays for further use
function setUpArrays() {
	let aboutPos = $("#aboutSection")[0].getBoundingClientRect().top;
	let tracksPos = $("#trackSection")[0].getBoundingClientRect().top;
	let logisticsPos = $("#logisticsSection")[0].getBoundingClientRect().top;

	let homeTop = $("#homeButton")[0].getBoundingClientRect().top;
	let aboutTop = $("#aboutButton")[0].getBoundingClientRect().top;
	let trackTop = $("#tracksButton")[0].getBoundingClientRect().top;
	let logisticsTop = $("#logisticsButton")[0].getBoundingClientRect().top;
	maxLen = logisticsTop - homeTop;

	distances = [
		{
			real: aboutPos,
			realDist: aboutPos,
			bar: aboutTop - homeTop,
			distBar: aboutTop - homeTop,
			selector: $("#aboutBubble")
		},
		{
			real: tracksPos - aboutPos,
			realDist: tracksPos,
			bar: trackTop - aboutTop,
			distBar: trackTop - homeTop,
			selector: $("#tracksBubble")
		},
		{
			real: logisticsPos - aboutPos,
			realDist: logisticsPos,
			bar: logisticsTop - trackTop,
			distBar: logisticsTop - homeTop,
			selector: $("#logisticsBubble")
		}
	];

}

//calculates what the current length of the bar should be
function calculateLength(curPos) {
	let curLen;
	distances.forEach(elem => {
		if ((curPos <= elem.realDist) && curPos > (elem.realDist - elem.real)){
			let inside = elem.real - elem.realDist + curPos;
			curLen = (inside * elem.distBar) / elem.real;
			console.log(curLen);
			return;
		}
	});

	return curLen;
}

//determines which bubbles need to be filled
function updateBubbles(curLen) {
	distances.forEach(elem => {
		if (curLen > elem.distBar) {
			elem.selector.addClass("filled");
		} else {
			elem.selector.removeClass("filled");
		}
	});
}


function updateBar() {
	let curPos = $(window).scrollTop();

	curLen = calculateLength(curPos);
	updateBubbles(curLen);

	if (curLen > maxLen) {
		curLen = maxLen;
	}

	$("#bar").css('height', curLen + "px");
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
