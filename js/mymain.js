
    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed:1000,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    

    
// Header Changer on Scroll
$(function() {
    //caches a jQuery object containing the header element
    var header = $(".header-home");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            header.removeClass('header-home').addClass("header-default");
        } else {
            header.removeClass("header-default").addClass('header-home');
        }
    });
});  



// Navigation
$('.nav-container').onePageNav({
    scrollSpeed: 600,
    currentClass: 'current',
    changeHash: true,
    filter: ':not(.external)'
  });