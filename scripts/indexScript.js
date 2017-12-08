
  $(document).ready(function () {

  //initial check to make sure jquery loaded
  //alert('jquery loaded');

  /* make card flip on click*/
  $('.flip-container').click(function() {
    $(this).toggleClass('flipped');
  });
});
