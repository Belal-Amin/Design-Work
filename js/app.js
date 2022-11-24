$(document).ready(function () {
    // HERO SLIDER
    $('#project-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        smartSpeed: 1000,
        margin: 24,
        navText: ["PREV", "NEXT"],
        responsive: {
            0: {
                items: 1,
                nav: false,
                margin: 0,
            },
            500: {
                items: 1,
            },
            690: {
                items: 2,
                conter: true,
                dots: true,
            },
            768: {
                items: 2,
                conter: true,
                dots: true,
            },
            1140: {
                items: 2,
                conter: true,
                dots: true,
            }
        }
    });
    ///////////
    $('#hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: false,
        smartSpeed: 1000,
        navText: ["PREV", "NEXT"],
        responsive: {
            0: {
            },
            600: {
            },
            1000: {
            }
        }
    })
    //////////
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        items: 1,
        smartSpeed: 900,
    
    })
});





    
