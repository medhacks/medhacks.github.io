let maxLen;
let distances;
let dots;
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

  let dot1Top = $("#dot1")[0].getBoundingClientRect().left;
  let dot2Top = $("#dot2")[0].getBoundingClientRect().left;
  let dot3Top = $("#dot3")[0].getBoundingClientRect().left;
  let dot4Top = $("#dot4")[0].getBoundingClientRect().left;
  let dot5Top = $("#dot5")[0].getBoundingClientRect().left;
  let dot6Top = $("#dot6")[0].getBoundingClientRect().left;
  let dot7Top = $("#dot7")[0].getBoundingClientRect().left;
  let dot8Top = $("#dot8")[0].getBoundingClientRect().left;
  dots = [
    {
      bar: dot1Top - homeTop,
      selector: "#dot1"
    },
    {
      bar: dot2Top - homeTop,
      selector: "#dot2"
    },
    {
      bar: dot3Top - homeTop,
      selector: "#dot3"
    },
    {
      bar: dot4Top - homeTop,
      selector: "#dot4"
    },
    {
      bar: dot5Top - homeTop,
      selector: "#dot5"
    },
    {
      bar: dot6Top - homeTop,
      selector: "#dot6"
    },
    {
      bar: dot7Top - homeTop,
      selector: "#dot7"
    },
    {
      bar: dot8Top - homeTop,
      selector: "#dot8"
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

  dots.forEach(elem => {
    if (curLen >= elem.bar) {
      $(elem.selector).removeClass("invis");
    } else {
      $(elem.selector).addClass("invis");
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
