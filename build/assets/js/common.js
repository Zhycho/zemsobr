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
    $(document).mouseup( function(e) {
		let menu = $(".js--header-menu");
		if (!menu.is(e.target) && menu.has(e.target).length === 0) {
            menu.removeClass('active');
		}
	});

    // Слайдер на главной
    $('.js--main-slider').slick({
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        dots: false,
        speed: 500,
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
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3
                }
            },
        ]
    });

    // Календарь
    let events = [
        {'Date': new Date(2020, 08, 17), 'Title': 'Грандиозная акция на шаблоны'},
        {'Date': new Date(2020, 08, 18), 'Title': 'Раздача промокодов на покупку шаблонов'},
        {'Date': new Date(2020, 08, 19), 'Title': 'День рождение администратора сайта'},
    ];
    let calendar = document.getElementById('calendar');
    caleandar(calendar, events);

    // Слайдер депутатов
    $('#deputies-description .deputies-slider__name').append($('#deputies-slider .deputies-slider__item:first').data('deputname'));
    $('#deputies-description .deputies-slider__region').append($('#deputies-slider .deputies-slider__item:first').data('deputregion'));

    let amountAsideSlides;
    if ($(window).width() > 1050) {
        amountAsideSlides = 2;
    } else {
        amountAsideSlides = 1;
    }

    let depSlider = $("#deputies-slider").waterwheelCarousel({
        flankingItems: amountAsideSlides,
        movingToCenter: function () {
            $('#deputies-description .deputies-slider__name').empty();
            $('#deputies-description .deputies-slider__region').empty();
        },
        movedToCenter: function ($item) {
            var deputname = $item.data('deputname');
            var deputregion = $item.data('deputregion');
            $('#deputies-description .deputies-slider__name').append(deputname);
            $('#deputies-description .deputies-slider__region').append(deputregion);
        }
    });

    $('.js--deputies-slider__prev').click( function() {
        depSlider.prev();
    });
    $('.js--deputies-slider__next').click( function() {
        depSlider.next();
    });

});