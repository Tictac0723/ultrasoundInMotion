$(document).ready(function () {
    //SMOOTH SCROLL
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = $(this.hash);

        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 150
            }, 100);
        }
    });

    //PARALLAX
    $('.parallax').parallax();

    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);

    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems);

    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: true,
        centerMode: true,
        slidesToShow: 3,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',

        responsive: [{
                breakpoint: 990,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    })
});