let topY;
let bottomY;

$(document).ready(() => {
  setupRotation();
});

function setupRotation() {
  var bounds = $(".rotateIn")[0].getBoundingClientRect();
  topY = bounds.top;
  bottomY = bounds.bottom;
  $(".rotateIn").css("transform", "rotate(" + "-155" + "deg)");
}

$(document).scroll(() => {
  let rotateAmount;
  var loc = $(window).scrollTop() + $(window).height() / 2;
  if (loc > topY && loc < bottomY) {
    loc -= topY;
    rotateAmount = 150 - (305 * loc) / (bottomY - topY);
  } else {
    rotateAmount = 155;
  }
  $(".rotateIn").css("transform", "rotate(" + rotateAmount + "deg)");
});
