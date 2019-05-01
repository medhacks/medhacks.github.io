let topY;
let bottomY;

$(document).ready(() => {
  setupRotation();
});

function setupRotation() {
  var bounds = $(".rotateIn")[0].getBoundingClientRect();
  topY = bounds.top + $(window).scrollTop();
  bottomY = bounds.bottom + $(window).scrollTop();
  rotate();
}

function rotate() {
  let rotateAmount;
  var loc = $(window).scrollTop() + $(window).height() / 2;
  if (loc > topY && loc < bottomY) {
    loc -= topY;
    rotateAmount = 150 - (305 * loc) / (bottomY - topY);
  } else {
    rotateAmount = 155;
  }
  $(".rotateIn").css("transform", "rotate(" + rotateAmount + "deg)");
}

$(document).scroll(() => {
  rotate();
});
