import $ from "jquery";
import Swiper from "swiper/bundle";

$(document).ready(function () {
    // Fancybox initialization
    Fancybox.bind("[data-fancybox]", {});

    // Google Maps initialization
    let map;
    async function initMap() {
        const { Map } = await google.maps.importLibrary("maps");

        map = new Map(document.getElementById("map"), {
            center: { lat: 52.432777404785156, lng: 31.00490379333496 },
            zoom: 16,
            styles: [
                // Your map styles
                {
                    "featureType": "all",
                    "elementType": "all",
                    "stylers": [
                        {
                            "saturation": "0"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        },
                        {
                            "color": "#35495F"
                        },
                        {
                            "lightness": "-15"
                        },
                        {
                            "gamma": "1.00"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "saturation": "-100"
                        },
                        {
                            "lightness": "20"
                        },
                        {
                            "visibility": "simplified"
                        },
                        {
                            "gamma": ".5"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "lightness": "60"
                        },
                        {
                            "saturation": "0"
                        },
                        {
                            "color": "#35495F"
                        },
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "landscape.natural",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "landscape.natural",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#a0aebd"
                        },
                        {
                            "saturation": "0"
                        },
                        {
                            "lightness": "12"
                        },
                        {
                            "gamma": "1.00"
                        }
                    ]
                },
                {
                    "featureType": "landscape.natural",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "lightness": "100"
                        }
                    ]
                },
                {
                    "featureType": "landscape.natural",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "landscape.natural.landcover",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "landscape.natural.terrain",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#35495F"
                        },
                        {
                            "saturation": "0"
                        },
                        {
                            "lightness": "-7"
                        },
                        {
                            "gamma": "1.00"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [
                        {
                            "gamma": "6.14"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#35495F"
                        },
                        {
                            "saturation": "0"
                        },
                        {
                            "lightness": "-18"
                        },
                        {
                            "gamma": "1.00"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        },
                        {
                            "saturation": "0"
                        },
                        {
                            "lightness": "100"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        },
                        {
                            "invert_lightness": true
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        },
                        {
                            "hue": "#ffc200"
                        },
                        {
                            "saturation": "100"
                        },
                        {
                            "gamma": "0.85"
                        },
                        {
                            "lightness": "17"
                        },
                        {
                            "weight": "1.00"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "hue": "#ffc200"
                        },
                        {
                            "saturation": "-100"
                        },
                        {
                            "gamma": "0.5"
                        },
                        {
                            "weight": "1.00"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "lightness": "80"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#efc337"
                        },
                        {
                            "saturation": "0"
                        },
                        {
                            "lightness": "35"
                        },
                        {
                            "gamma": "1.00"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                }
            ]
        });

        new google.maps.Marker({
            position: { lat: 52.432777404785156, lng: 31.00490379333496 },
            map: map,
            title: 'My location',
            icon: {
                path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                scale: 10,
                fillColor: '#ffc200',
                fillOpacity: 1,
                strokeWeight: 1,
                strokeColor: '#ffc200'
            }
        });
    }
    initMap();


    //

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



