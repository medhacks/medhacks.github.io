let topYAbout;
let bottomYAbout;

let topYLogistics;
let bottomYLogistics;

$(document).ready(() => {
  setupRotation();
});

function setupRotation() {
  //set up for about rotational element
  var bounds = $("#rotateAbout")[0].getBoundingClientRect();
  topYAbout = bounds.top + $(window).scrollTop() - 200;
  bottomYAbout = bounds.bottom + $(window).scrollTop();
  rotateAbout();

  bounds = $("#rotateLogistics")[0].getBoundingClientRect();
  topYLogistics = bounds.top + $(window).scrollTop() - 200;
  bottomYLogistics = bounds.bottom + $(window).scrollTop();
  rotateLogistics();
}

function rotateAbout() {
  let rotateAmount;
  var loc = $(window).scrollTop() + $(window).height() / 2;
  if (loc > topYAbout && loc < bottomYAbout) {
    loc -= topYAbout;
    rotateAmount = 150 - (305 * loc) / (bottomYAbout - topYAbout);
  } else {
    rotateAmount = 155;
  }
  $("#rotateAbout").css("transform", "rotate(" + rotateAmount + "deg)");
}

function rotateLogistics() {
  let rotateAmount;
  var loc = $(window).scrollTop() + $(window).height() / 2;
  if (loc > topYLogistics && loc < bottomYLogistics) {
    loc -= topYLogistics;
    rotateAmount = 150 - (305 * loc) / (bottomYLogistics - topYLogistics);
  } else {
    rotateAmount = 155;
  }
  rotateAmount * -1;
  $("#rotateLogistics").css("transform", "rotate(" + rotateAmount + "deg)");
}

$(document).scroll(() => {
  rotateAbout();
  rotateLogistics();
});
