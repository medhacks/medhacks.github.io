let maxLen;
let distances;
let bubbleMargin = 150;

$(document).ready(() => {
  setUpArrays();
  updateBar();
  $("#ham-container").on("click", () => {
    $("#ham-container").toggleClass("change");
    $("#side-info").slideToggle();
  });
  $(".side-anchor").on("click", () => {
    $("#ham-container").toggleClass("change");
    $("#side-info").slideToggle();
  });
});

$(document).resize(() => {
  setUpArrays();
  updateBar();
});

$(document).scroll(() => {
  updateBar();

  $(".fadeOut").each(function() {
    let cur = $(this).offset().top - $(window).scrollTop();
    if (cur < $("nav").height()) {
      $(this).fadeOut();
    }
  });
});

// calculates y positions of relevant pieces of site and puts them into arrays for further use
function setUpArrays() {
  let curPos = $(window).scrollTop();
  let aboutPos =
    $("#aboutSection")[0].getBoundingClientRect().top + curPos - bubbleMargin;
  let tracksPos =
    $("#trackSection")[0].getBoundingClientRect().top + curPos - bubbleMargin;
  let logisticsPos =
    $("#logisticsSection")[0].getBoundingClientRect().top +
    curPos -
    bubbleMargin;
  let applyingPos =
    $("#applyingSection")[0].getBoundingClientRect().top +
    curPos -
    bubbleMargin;

  let homeTop = $("#homeBubble")[0].getBoundingClientRect().left;
  let aboutTop = $("#aboutBubble")[0].getBoundingClientRect().left;
  let trackTop = $("#tracksBubble")[0].getBoundingClientRect().left;
  let logisticsTop = $("#logisticsBubble")[0].getBoundingClientRect().left;
  let applyingTop = $("#applyingBubble")[0].getBoundingClientRect().left;
  maxLen = applyingTop - homeTop;

  // array of variables with pertinent info about each location
  distances = [
    {
      //bar between home and about
      real: aboutPos,
      realDist: aboutPos,
      bar: aboutTop - homeTop,
      distBar: aboutTop - homeTop,
      selector: "#aboutBubble"
    },
    {
      //bar between about and tracks
      real: tracksPos - aboutPos,
      realDist: tracksPos,
      bar: trackTop - aboutTop,
      distBar: trackTop - homeTop,
      selector: "#tracksBubble"
    },
    {
      //bar between tracks and logistics
      real: logisticsPos - tracksPos,
      realDist: logisticsPos,
      bar: logisticsTop - trackTop,
      distBar: logisticsTop - homeTop,
      selector: "#logisticsBubble"
    },
    {
      //bar between tracks and logistics
      real: applyingPos - logisticsPos,
      realDist: applyingPos,
      bar: applyingTop - logisticsTop,
      distBar: applyingTop - homeTop,
      selector: "#applyingBubble"
    }
  ];
}

//calculates what the current length of the bar should be
function calculateLength(curPos) {
  if (curPos < 0) {
    curPos = 0;
  }
  let curLen = 0;

  distances.forEach(elem => {
    if (curPos <= elem.realDist && curPos > elem.realDist - elem.real) {
      let inside = curPos - (elem.realDist - elem.real);
      curLen += (inside * elem.bar) / elem.real;
    } else if (curPos >= elem.realDist) {
      curLen += elem.bar;
    }
  });

  if (curPos > distances[distances.length - 1].realDist) {
    curLen = maxLen;
  }
  return curLen;
}

//determines which bubbles need to be filled
function updateBubbles(curLen) {
  distances.forEach(elem => {
    if (curLen >= elem.distBar) {
      $(elem.selector + " img:nth-child(1)").removeClass("active");
      $(elem.selector + " img:nth-child(2)").addClass("active");
    } else {
      $(elem.selector + " img:nth-child(1)").addClass("active");
      $(elem.selector + " img:nth-child(2)").removeClass("active");
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
