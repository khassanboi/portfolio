$(document).ready(function () {

    //NAV OPENING AND CLOSING
    (function () {
        var nav = $('.nav');
        var header = $('.header');
        var section = $('section');
        var navLine = $('.nav-line');
        $('#nav-btn').bind('click', function () {
            nav.toggleClass('nav-visible')
            header.toggleClass('header-visible')
            section.toggleClass('section-visible')
            navLine.toggleClass('nav-line-visible')
        });
        $('.nav__x').bind('click', function () {
            nav.removeClass('nav-visible')
            header.removeClass('header-visible')
            section.removeClass('section-visible')
            navLine.removeClass('nav-line-visible')
        });
    })();

    //SCROLLING TO THE CHOOSEN SECTION
    $('.js--scroll-to-header').click(function () {
        $('html, body').animate({ scrollTop: $('.container').offset().top}, 1000);
    });

    $('.js--scroll-to-about').click(function () {
        $('html, body').animate({ scrollTop: $('.about').offset().top - 30}, 1000);
    });

    $('.js--scroll-to-skills').click(function () {
        $('html, body').animate({ scrollTop: $('.skills').offset().top - 30}, 1000);
    });

    $('.js--scroll-to-projects').click(function () {
        $('html, body').animate({ scrollTop: $('.projects').offset().top - 30}, 1000);
    });
    
    $('.js--scroll-to-contacts').click(function () {
        $('html, body').animate({ scrollTop: $('.contacts').offset().top - 30}, 1000);
    });
    
});
