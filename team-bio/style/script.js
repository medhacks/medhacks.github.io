$(document).ready(function () {
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

for (i = 0; i < pics.length; i++) {
  console.log(pics[i]);
  let img = pics[i]
  img.addEventListener('load', function() {
    console.log(img);
    img.onload = changeResolution(img);
  });
}


window.onload = function() {
  for (i = 0; i < pics.length; i++) {
    img = pics[i]
    img.onload = changeResolution(img);
  }
} 

function adjustResolution() {
  for (i = 0; i < pics.length; i++) {
    img = pics[i]
    img.onload = changeResolution(img);
  }
}


$(window).on('resize', function() {
  for (i = 0; i < pics.length; i++) {
    img = pics[i]
    img.onload = changeResolution(img);
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
    $(n).removeClass('pictureWide');
  } else {
    $(n).addClass('pictureWide');
    $(n).removeClass('pictureTall');
  }
  $(n).removeClass('pictureMobile');
  return
}