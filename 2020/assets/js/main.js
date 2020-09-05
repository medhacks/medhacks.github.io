var FAQs = document.getElementsByClassName("FAQButton");
var i;

for (i = 0; i < FAQs.length; i++) {
  FAQs[i].addEventListener("click", changeVisibility);
}

function changeVisibility() {
  var info = this.nextElementSibling;
  if (info.style.maxHeight) {
    info.style.maxHeight = null;
  } else {
    clearAllHeight();
    info.style.maxHeight = info.scrollHeight + "px";
  }
}

function clearAllHeight() {
  var FAQs = document.getElementsByClassName("FAQButton");
  for (i = 0; i < FAQs.length; i++) {
    console.log(FAQs[i].style.maxHeight);
    FAQs[i].nextElementSibling.style.maxHeight = null;
  }
}

//For About
var slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function currentSlideScroll(n) {
  let slideWidth = $('.slide').width();

  $('.slider').animate({
    scrollLeft: slideWidth * (n-1)
  });
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


/* detect whether website is viewed on mobile or tablet */
var hasTouchScreen = false;
if ("maxTouchPoints" in navigator) {
  hasTouchScreen = navigator.maxTouchPoints > 0;
} else if ("msMaxTouchPoints" in navigator) {
  hasTouchScreen = navigator.msMaxTouchPoints > 0;
} else {
  var mQ = window.matchMedia && matchMedia("(pointer:coarse)");
  if (mQ && mQ.media === "(pointer:coarse)") {
    hasTouchScreen = !!mQ.matches;
  } else if ('orientation' in window) {
    hasTouchScreen = true; // deprecated, but good fallback
  } else {
    // Only as a last resort, fall back to user agent sniffing
    var UA = navigator.userAgent;
    hasTouchScreen = (
      /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
      /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
    );
  }
}

function scrollProgress() {
  var sliderLeftOffset = $('.slider').offset().left;
  $('.dot').css("background-color", "#de495f");
  if ($('#slide-1').offset().left >= sliderLeftOffset) {
    $('#dot-1').css("background-color", "white");
  } else if ($('#slide-2').offset().left >= sliderLeftOffset) {
    $('#dot-2').css("background-color", "white");
  } else {
    $('#dot-3').css("background-color", "white");
  }
}

$('.slider').on('scroll',function() {
  scrollProgress();
});


$(document).ready(() => {

  let $curwindow;

  // $('#track1').on('click', () => {
  //   $('.black-overlay').fadeIn('fast');
  //   $('#track1-info').fadeIn('medium');
  //   $curwindow = $('#track1-info');
  // });

  // $('#track2').on('click', () => {
  //   $('.black-overlay').fadeIn('fast');
  //   $('#track2-info').fadeIn('medium');
  //   $curwindow = $('#track2-info');
  // });

  // $('.close').on('click', () => {
  //   $('.black-overlay').fadeOut('fast');
  //   $curwindow.fadeOut('fast');
  // });

  // $('#track3').on('click', () => {
  //   $('.black-overlay').fadeIn('fast');
  //   $('#track3-info').fadeIn('medium');
  //   $curwindow = $('#track3-info');
  // });

  // $('.black-overlay').on('click', () => {
  //   $('.black-overlay').fadeOut('fast');
  //   $curwindow.fadeOut('fast');
  // });

  /* check which type of slides to display for about section */
  if (hasTouchScreen) {
    $('.mobile').show();
    $('.desktop').hide();
  } else {
    $('.mobile').hide();
    $('.desktop').show();
    showSlides(slideIndex);
  }
});


var links = document.getElementsByName("footerLinks")
$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });
});
