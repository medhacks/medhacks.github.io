$(document).ready(function () {
  console.log("Poggers");
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top - 120
      }, 1200, function () {
      });
    }
  });
});


var pics = document.getElementsByClassName("picture");
var i;

$(document).ready(function() {
  if ($(window).width() < 830) {
    for (i = 0; i < pics.length; i++) {
      $(pics[i]).addClass('pictureMobile');
    } 
  } else {
    for (i = 0; i < pics.length; i++) {
      if (checkResolution(pics[i])) {
        $(pics[i]).addClass('pictureTall');
      } else {
        $(pics[i]).addClass('pictureWide');
      }
    }
  }
});


$(window).on('resize', function() {
  for (i = 0; i < pics.length; i++) {
    changeResolution(pics[i]);
  }
})


function changeResolution(n) {
  if ($(window).width() < 813) {
    $(n).removeClass('pictureTall');
    $(n).removeClass('pictureWide');
    $(n).addClass('pictureMobile');
    return;
  } else if (n.naturalHeight > n.naturalWidth) {
    $(n).addClass('pictureTall');
  } else {
    $(n).addClass('pictureWide');
  }
  $(n).removeClass('pictureMobile');
  return
}

var temp;
function checkResolution(n) {
  n.onload = function() {
    if (n.naturalHeight > n.naturalWidth) {
      temp = true;
    } else {
      temp = false;
    } 
  }
  return temp;
} 