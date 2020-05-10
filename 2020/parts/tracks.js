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