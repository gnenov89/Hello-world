(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    var list = $('h1, h3, h5, h6, p, img.about').fadeIn(4000);
    $('.carousel').carousel();
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    


  }); // end of document ready
})(jQuery); // end of jQuery name space