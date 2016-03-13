'use strict';

function countDown(secs, elem) {
  var seconds = secs;
  var element = document.getElementById(elem);
  var timer = setTimeout('countDown(' + seconds + ',"' + elem + '")', 1000);

  element.innerHTML = seconds;
  if (seconds < 1) {
    clearTimeout(timer);
    element.innerHTML = '<h2>Countdown Complete!</h2>';
    element.innerHTML += '<a href="#">Click here now</a>';
  }
  seconds--;
}
