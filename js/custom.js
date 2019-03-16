document.addEventListener("DOMContentLoaded", function () {
  const SPAN_OPEN = '<span class="timeUnit">';
  const SPAN_CLOSE = '</span>';

  let currentYear = new Date().getFullYear();
  let targetDate = new Date("May 30, 2020 16:00:00");
  let onStart = () => {
      document.querySelectorAll('.countdown-item').forEach(item => item.classList.add('show'))
  }
  let onTick = ({ days, hours, minutes, seconds }) => {
      document.querySelector('.countdown-item.days').innerHTML = SPAN_OPEN + removeTimeUnit(days) + ' nap' + SPAN_CLOSE;
      document.querySelector('.countdown-item.hours').innerHTML = SPAN_OPEN + removeTimeUnit(hours) + ' óra' + SPAN_CLOSE;
      document.querySelector('.countdown-item.minutes').innerHTML = SPAN_OPEN + removeTimeUnit(minutes) + ' perc' + SPAN_CLOSE;
      document.querySelector('.countdown-item.seconds').innerHTML = SPAN_OPEN + removeTimeUnit(seconds) + ' másodperc' + SPAN_CLOSE;
  };
  let options = new LsCountdownOptions({ targetDate, onStart, onTick });
  let countdown = new LsCountdown(options);

  countdown.start();
  window.mycountdown = countdown;

  function removeTimeUnit(timeUnitString) {
    var onlyDigitTimeUnit = timeUnitString;
    return onlyDigitTimeUnit.replace(/[^0-9]+/g, '');
  }

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

});