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
});