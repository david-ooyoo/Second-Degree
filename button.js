

var btn = $('.go-top');

$(window).scroll(function()
 {
  if ($(window).scrollTop() > 200) {
    
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
  
});
$(window).scroll(function() {
  if($(this).scrollTop() > 200) {
    $('.go-top').fadeIn(200);
  } else {
    $('.go-top').fadeOut(200);
  }
});


btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '200');
});
