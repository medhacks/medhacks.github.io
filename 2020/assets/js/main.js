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
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//for tracks
$(document).ready(() => {
    let $curwindow;
  
    $('#track1').on('click', () => {
        $('.black-overlay').fadeIn('fast');
        $('#track1-info').fadeIn('medium');
        $curwindow = $('#track1-info');
    });
  
    $('#track2').on('click', () => {
        $('.black-overlay').fadeIn('fast');
        $('#track2-info').fadeIn('medium');
        $curwindow = $('#track2-info');
    });
  
    $('.close').on('click', () => {
        $('.black-overlay').fadeOut('fast');
        $curwindow.fadeOut('fast');
    });
  
    $('#track3').on('click', () => {
        $('.black-overlay').fadeIn('fast');
        $('#track3-info').fadeIn('medium');
        $curwindow = $('#track3-info');
    });
  
    $('.black-overlay').on('click', () => {
        $('.black-overlay').fadeOut('fast');
        $curwindow.fadeOut('fast');
    });
  });