jQuery(document).ready(function($) {
  var position = $('#contact').offset(); // position = { left: 42, top: 567 }
  console.log(position);
  $(window).scroll(function() {
    /*Detect if user is approaching skills section block */
    if ($(this).scrollTop() >= 200){
        //animate about section
        $('.about-left-grid').addClass('animated fadeInUp');
        $('.about-left-grid').css('display','block');
    }

    /*Detect if user is approaching portfolio section block */
    if ($(this).scrollTop() >= 1900){
        //animate Portfolio section
        $('#port > #port-text').css('display', 'block');
        $('#port > #port-text').addClass('animated zoomIn');
    }

    /*Detect if user is approaching portfolio section block */
    if ($(this).scrollTop() >= 2600){
        //animate Contact heading text
        $('#contact-text').css('display', 'inline-block;');
        $('#contact-text').addClass('animated swing');


    }

});
});
