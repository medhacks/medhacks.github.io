let maxLen;
let distances;

$(document).ready(() => {
  setUpArrays();
  $("#aboutButton").on("click", () => {
    $("#aboutSection").goTo();
  });
  $("#tracksButton").on("click", () => {
    $("#trackSection").goTo();
  });
  $("#logisticsButton").on("click", () => {
    $("#logisticsSection").goTo();
  });

  updateBar();
});

$(document).scroll(() => {
  updateBar();
});

// calculates y positions of relevant pieces of site and puts them into arrays for further use
function setUpArrays() {
  let curPos = $(window).scrollTop();
  let aboutPos = $("#aboutSection")[0].getBoundingClientRect().top + curPos;
  let tracksPos = $("#trackSection")[0].getBoundingClientRect().top + curPos;
  let logisticsPos =
    $("#logisticsSection")[0].getBoundingClientRect().top + curPos;

  let homeTop = $("#homeButton")[0].getBoundingClientRect().left;
  let aboutTop = $("#aboutButton")[0].getBoundingClientRect().left;
  let trackTop = $("#tracksButton")[0].getBoundingClientRect().left;
  let logisticsTop = $("#logisticsButton")[0].getBoundingClientRect().left;
  maxLen = logisticsTop - homeTop;

  // array of variables with pertinent info about each location
  distances = [
    {
      //bar between home and about
      real: aboutPos,
      realDist: aboutPos,
      bar: aboutTop - homeTop,
      distBar: aboutTop - homeTop,
      selector: $("#aboutBubble")
    },
    {
      //bar between about and tracks
      real: tracksPos - aboutPos,
      realDist: tracksPos,
      bar: trackTop - aboutTop,
      distBar: trackTop - homeTop,
      selector: $("#tracksBubble")
    },
    {
      //bar between tracks and logistics
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
  if (curPos < 0) {
    curPos = 0;
  }
  let curLen;
  let tooBig = false;

  distances.forEach(elem => {
    if (curPos <= elem.realDist && curPos > elem.realDist - elem.real) {
      let inside = elem.real - elem.realDist + curPos;
      curLen = (inside * elem.distBar) / elem.real;
      tooBig = false;
    }

    if (curPos > elem.realDist) {
      tooBig = true;
    }
  });

  if (tooBig) {
    curLen = maxLen;
  }
  return curLen;
}

//determines which bubbles need to be filled
function updateBubbles(curLen) {
  distances.forEach(elem => {
    if (curLen >= elem.distBar) {
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

  $("#bar").css("width", curLen + "px");
}

(function($) {
  $.fn.goTo = function() {
    var placeToGo;
    placeToGo = $(this).offset().top;
    $("html, body").animate({
      scrollTop: placeToGo + "px"
    });
    return this;
  };
})(jQuery);

$(function() {
  $("#typingText").typed({
    strings: [
      "Cool story bro come to medhacks ",
      "hey bro do things make me happy, like other stuff that makes us haooy",
      "reading a good buck, watching avengers endgame, going to medhacks"
    ],
    typeSpeed: 0
  });
});
