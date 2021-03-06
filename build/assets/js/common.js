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
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 421,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    });

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


    // табы на странице депутата
    $('.js--deputy-tabs__item').click( function() {
        $('.js--deputy-tabs__item').removeClass('active');
        $(this).addClass('active');

        $('.js--deputy-tabs-content__item').removeClass('active');
        $('.js--deputy-tabs-content__item').eq($(this).index($('.js--deputy-tabs__item'))).addClass('active');
    });

    // Даты
    moment.locale('ru');

    let elementsForTime = document.querySelectorAll('.js--time')
    
    for (let el of elementsForTime) {
        let date = el.innerHTML
        el.innerHTML = moment(date).calendar();
    }

    // Картинки в контенте
    $('.typical-content img').each(function () {
        let img = $(this);
        img.removeAttr("width");
        img.removeAttr("height");
        let alt = img.attr('alt');
        let title = img.attr('title');
        
        img.wrap('<div class="typical-img__wrapper">');
        let wrap = img.parent();
        wrap.append('<span class="typical-img__title">'+alt+'</span>');
        wrap.append("<span class='typical-img__alt'>"+title+"</span>");
    });

    // MMenu
    let $menu = $("#mobile-burger-menu").mmenu({
        "navbars": [
            {
                "position": "top",
                "content": [
                    `<div class="mobile-menu__header">
                        <a class="mobile-menu__header-logo" href="index.html">
                            <img src="assets/img/logo.svg" alt="">
                        </a>
                        <a class="mobile-menu__header-close js--mobile-menu__header-close" href="javascript:;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
                        </a>
                    </div>`
                ]
            }
        ],
        "extensions": [
            "fullscreen",
            "position-front",
            "position-top",
            "border-full"
        ],
        "navbar": {
          title: "Меню"
        }
    });


    let $icon = $(".js--header-mobile-menu-opener");
    let API = $menu.data("mmenu");
    $(document).on('click','.js--mobile-menu__header-close',function(){
        API.close();
    });

    $icon.on("click", function () {
        API.open();
    });


    API.bind("opened", function () {
        setTimeout(function () {
            $icon.addClass("is-active");
        }, 10);
        $icon.on("click", function () {
            API.close();
        });
    });

    API.bind("closed", function () {
        setTimeout(function () {
            $icon.removeClass("is-active");
        }, 10);
        $icon.on("click", function () {
            API.open();
        });
    });

    // Маска для ввода телефона в формах
    function number_format( number, decimals, dec_point, thousands_sep ) {	// Format a number with grouped thousands
        // 
        // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
        // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        // +	 bugfix by: Michael White (http://crestidg.com)
    
        var i, j, kw, kd, km;
    
        // input sanitation & defaults
        if( isNaN(decimals = Math.abs(decimals)) ){
            decimals = 0;
        }
        if( dec_point == undefined ){
            dec_point = ",";
        }
        if( thousands_sep == undefined ){
            thousands_sep = " ";
        }
    
        i = parseInt(number = (+number || 0).toFixed(decimals)) + "";
    
        if( (j = i.length) > 3 ){
            j = j % 3;
        } else{
            j = 0;
        }
    
        km = (j ? i.substr(0, j) + thousands_sep : "");
        kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
        //kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).slice(2) : "");
        kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");
    
    
        return km + kw + kd;
    }
    
        
    [].forEach.call( document.querySelectorAll('input[type="tel"]'), function(input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function(a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function(a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5)  this.value = ""
        }
    
        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)
    });
});