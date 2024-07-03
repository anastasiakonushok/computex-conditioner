import $ from "jquery";
import Swiper from "swiper/bundle";

$(document).ready(function () {
    // Fancybox initialization
    Fancybox.bind("[data-fancybox]", {});

    ymaps.ready(init);
    function init() {
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [52.432777404785156, 31.00490379333496],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 17,
            controls: ['zoomControl']
        });
        myMap.behaviors.disable('scrollZoom');
        var zoomControl = myMap.controls.get('zoomControl');
        zoomControl.options.set({
            size: 'small' // или 'large' для больших кнопок
        });

        var myPlacemark = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [52.432777404785156, 31.00490379333496]
            }
        },
            {
                // preset: 'twirl#redIcon',
                iconImageSize: [80, 120],
                iconColor: '#f8c957'// Желтый цвет отметки (в формате HEX)
            });
        myMap.geoObjects.add(myPlacemark);
    }


    $('.counter').each(function () {
        var startNumber = 0;
        var $item = $(this);
        var stop;

        function counterUp() {
            var increment = ($item.data('number') > 100) ? 2 : 1; // Увеличиваем на 2, если число больше 100, иначе на 1
            startNumber += increment;
            $item.text(startNumber);

            if (startNumber >= $item.data('number')) { // Изменяем условие завершения на >= для правильной остановки счетчика
                clearInterval(stop);
            }
        }

        var intervalTime = ($item.data('number') > 100) ? 10 : 50; // Выбираем интервал в зависимости от значения числа
        stop = setInterval(function () {
            counterUp();
        }, intervalTime); // Используем переменную intervalTime в качестве интервала
    });



    // Tab navigation
    $('.tab-links a').on('click', function (e) {
        e.preventDefault();

        var currentAttrValue = $(this).attr('href');

        $('.tab' + currentAttrValue).addClass('active').siblings().removeClass('active');

        $(this).parent('li').addClass('active').siblings().removeClass('active');
    });

    // Burger menu
    $(".burger-menu").click(function () {
        $(".burger-menu").toggleClass("burger-menu-active");
        $(".header-main, .header-bottom").toggleClass("show-main show");
        $("body").toggleClass("body-lock");
    });

    // Accordion
    $(".accordion__title").on("click", function (e) {
        e.preventDefault();
        var $this = $(this);

        if (!$this.hasClass("show-accordion")) {
            $(".accordion__body").slideUp(400);
            $(".accordion__title").removeClass("show-accordion");
        }

        $this.toggleClass("show-accordion");
        $this.next().slideToggle();
    });

    // Scroll to top button
    $(".button-up").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 800);
        return false;
    });

    // Header fix on scroll
    var lastScrollTop = 0;
    $(window).scroll(function () {
        var st = $(this).scrollTop();

        if (st > lastScrollTop) {
            $("header").addClass("header_down").removeClass("header_up");
            $(".header-main").removeClass("header");
            $(".button-up").addClass("scroll-top_down").removeClass("scroll-top_up");
        } else {
            $("header").addClass("header_up").removeClass("header_down");
            $(".header-main").addClass("header");
            $(".button-up").addClass("scroll-top_up").removeClass("scroll-top_down");
        }

        if (st < 150) {
            $(".header-main").removeClass("header");
            $("header").removeClass("header_up");
            $(".button-up").removeClass("scroll-top_up");
        } else {
            $(".button-up").addClass("scroll-top_up");
        }

        lastScrollTop = st;
    });


    // Initialize Swipers
    const swiperMain = new Swiper(".swiper-main", {
        loop: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: ".swiper-main__pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-main__next",
            prevEl: ".swiper-main__prev",
        },
    });

    const swiperNews = new Swiper(".swiper-news", {
        spaceBetween: 16,
        navigation: {
            nextEl: ".swiper-news-next",
            prevEl: ".swiper-news-prev",
        },
        pagination: {
            el: ".swiper-news-pagination",
            clickable: true,
        },
        breakpoints: {
            350: {
                slidesPerView: 1,
            },
            650: {
                slidesPerView: 3,
            },
            1170: {
                slidesPerView: 3,
            },
        },
    });

    const swiperAuto = new Swiper(".swiper-auto", {
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-auto-next",
            prevEl: ".swiper-auto-prev",
        },
        breakpoints: {
            350: {
                slidesPerView: 1,
            },
            650: {
                slidesPerView: 3,
            },
            1170: {
                slidesPerView: 3,
            },
        },
    });

    const swiperProduct = new Swiper(".swiper-product", {
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-product-next",
            prevEl: ".swiper-product-prev",
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true,
        },
        breakpoints: {
            350: {
                slidesPerView: 1,
            },
            650: {
                slidesPerView: 2,
            },
            900: {
                slidesPerView: 3,
            },
            1170: {
                slidesPerView: 4,
            },
        },
    });

    const swiperCertificates = new Swiper(".swiper-certificates", {
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-certificates-next",
            prevEl: ".swiper-certificates-prev",
        },
        breakpoints: {
            350: {
                slidesPerView: 1,
            },
            650: {
                slidesPerView: 3,
            },
            1170: {
                slidesPerView: 4,
            },
        },
    });

    const swiperBrandChanel = new Swiper(".swiper-brand-chanel", {
        speed: 2000,
        spaceBetween: 60,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        breakpoints: {
            350: {
                slidesPerView: 3,
            },
            650: {
                slidesPerView: 4,
            },
            1170: {
                slidesPerView: 6,
            },
        },
    });

});



