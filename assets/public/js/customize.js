// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {    // If page is scrolled more than 50px
        $('#top').fadeIn("fast");       // Fade in the arrow
    } else {
        $('#top').fadeOut("fast");      // Else fade out the arrow
    }
});
    $('#top').click(function() {            // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                   // Scroll to top of body
        }, 500);
    });




    $(".scroll").click(function() {
        var to = $(this).data('to');
        $('html, body').animate({
            scrollTop: $("#"+to).offset().top
        }, 1000);
    });



    $(document).ready(function(){
  var url = $("#closevideo").attr('src');
  $("#myModal").on('hide.bs.modal', function(){
        $("#closevideo").attr('src', '');
        // alert('quan');
    });
   $("#myModal").on('show.bs.modal', function(){
        $("#closevideo").attr('src', url);
    });
});