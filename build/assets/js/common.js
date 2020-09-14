$(document).ready(function() {

    // Поиск в хедере
    $('.js--header-search-opener').click( function() {
        $(this).closest('.js--header-search-wrapper').toggleClass('active');
    });

    // Меню в хедере
    $('.js--header-menu-opener').click( function() {
        $('.js--header-menu').addClass('active');
    });
    $('.js--header-menu__close').click( function() {
        $('.js--header-menu').removeClass('active');
    });

    // Слайдер на главной
    $('.js--main-slider').slick({
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        dots: false,
        fade: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    });

    // Слайдер партнёров
    $('.js--partner-slider').slick({
        infinite: false,
        slidesToShow: 5,
        arrows: true,
        dots: false,
        slidesToScroll: 1,
    });


});